import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { SocketManager } from '../../services/socket-service/socket-service.ts'
import { v4 as uuidv4 } from 'uuid'
import { ChatApi } from '../../services/api-services/api-invokes'

export type MessageStatus = 'sending' | 'sent' | 'delivered' | 'failed'

export interface Message {
    messageId: string
    chatId: string
    senderId: string
    senderUsername: string
    content: string
    createdAt: string
    readBy: Array<{ userId: string; username: string }>
    deliveredTo: Array<{ userId: string; username: string }>
    messageType?: 'text' | 'image' | 'file'
  }

interface ChatMessages {
  messages: Message[]
  hasMore: boolean
  nextCursor: string | null
  loading: boolean
  totalCount: number
  loadingMore: boolean
}

interface MessageState {
  messagesByChatId: Record<string, ChatMessages>
  messageStatus: Record<
    string,
    {
      status: MessageStatus
      deliveredTo?: string[]
      readBy?: string[]
    }
  >
  draftMessages: Record<string, string>
}

const initialState: MessageState = {
  messagesByChatId: {},
  messageStatus: {},
  draftMessages: {},
}

export const loadMessages = createAsyncThunk(
  'messages/loadMessages',
  async (
    {
      chatId,
      limit = 50,
      cursor,
    }: {
      chatId: string
      limit?: number
      cursor?: string
    },
    { rejectWithValue },
  ) => {
    try {
      const queryPayload = { chatId, limit, cursor }
      const response = await ChatApi.getMessagesForChat(queryPayload)
      return { chatId, ...response.data }
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to load messages')
    }
  },
)

// export const loadMoreMessages = createAsyncThunk(
//   'messages/loadMoreMessages',
//   async ({ chatId, cursor }: {
//     chatId: string
//     cursor: string
//   }, { rejectWithValue }) => {
//     try {
//       const response = await MessageApi.getMessages(chatId, 50, cursor)
//       return { chatId, ...response.data }
//     } catch (error: any) {
//       return rejectWithValue(error.response?.data?.message || 'Failed to load more messages')
//     }
//   }
// )

export const sendMessage = createAsyncThunk(
  'messages/sendMessage',
  async (
    {
      chatId,
      content,
      userId,
      username,
    }: {
      chatId: string
      content: string
      userId: string
      username: string
    },
    { dispatch, rejectWithValue },
  ) => {
    try {
      const messageId = uuidv4()
      const tempMessage: Message = {
        messageId,
        chatId,
        content,
        senderId: userId,
        senderUsername: username,
        createdAt: new Date().toISOString(),
        readBy: [{ userId, username }],
        deliveredTo: [{ userId, username }],
        messageType: 'text',
      }

      dispatch(
        messageActions.addMessage({
          chatId,
          message: tempMessage,
        }),
      )

      const socketManager = SocketManager.getInstance()
      return new Promise<Message>((resolve, reject) => {
        socketManager.sendMessage(tempMessage, (response) => {
          if (response?.success) {
            resolve(tempMessage)
          } else {
            reject(new Error('Message send failed'))
          }
        })
      })
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to send message')
    }
  },
)

const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (
      state,
      action: PayloadAction<{
        chatId: string
        message: Message
      }>,
    ) => {
      const { chatId, message } = action.payload

      if (!state.messagesByChatId[chatId]) {
        state.messagesByChatId[chatId] = {
          messages: [],
          hasMore: true,
          nextCursor: null,
          loading: false,
          totalCount: 0,
          loadingMore: false,
        }
      }

      // Check if message already exists to prevent duplicates
      const existingMessageIndex = state.messagesByChatId[chatId].messages.findIndex((m) => m.messageId === message.messageId)

      if (existingMessageIndex === -1) {
        state.messagesByChatId[chatId].messages.push(message)
        state.messagesByChatId[chatId].totalCount += 1
      }
    },

    updateMessageStatus: (
      state,
      action: PayloadAction<{
        messageId: string
        status?: MessageStatus
        deliveredTo?: string[]
        readBy?: string[]
      }>,
    ) => {
      const { messageId, status, deliveredTo, readBy } = action.payload

      if (!state.messageStatus[messageId]) {
        state.messageStatus[messageId] = { status: 'sending' }
      }

      if (status) {
        state.messageStatus[messageId].status = status
      }
      if (deliveredTo) {
        state.messageStatus[messageId].deliveredTo = deliveredTo
      }
      if (readBy) {
        state.messageStatus[messageId].readBy = readBy
      }
    },

    setDraftMessage: (
      state,
      action: PayloadAction<{
        chatId: string
        draft: string
      }>,
    ) => {
      const { chatId, draft } = action.payload
      if (draft.trim()) {
        state.draftMessages[chatId] = draft
      } else {
        delete state.draftMessages[chatId]
      }
    },

    clearDraftMessage: (state, action: PayloadAction<string>) => {
      const chatId = action.payload
      delete state.draftMessages[chatId]
    },

    cleanupOldMessages: (
      state,
      action: PayloadAction<{
        chatId: string
        keepLastN: number
      }>,
    ) => {
      const { chatId, keepLastN } = action.payload
      const chatMessages = state.messagesByChatId[chatId]

      if (chatMessages && chatMessages.messages.length > keepLastN) {
        chatMessages.messages = chatMessages.messages.slice(-keepLastN)
      }
    },

    markMessagesAsRead: (
      state,
      action: PayloadAction<{
        chatId: string
        userId: string
      }>,
    ) => {
      const { chatId, userId } = action.payload
      const chatMessages = state.messagesByChatId[chatId]

      if (chatMessages) {
        chatMessages.messages.forEach((message) => {
          if (message.senderId !== userId) {
            const hasRead = message.readBy.some((r) => r.userId === userId)
            if (!hasRead) {
              message.readBy.push({ userId, username: '' }) // Username will be updated by backend
            }
          }
        })
      }
    },

    resetMessages: (state) => {
      return initialState
    },
  },
  extraReducers: (builder) => {
    builder
      // Load messages
      .addCase(loadMessages.pending, (state, action) => {
        const chatId = action.meta.arg.chatId
        if (!state.messagesByChatId[chatId]) {
          state.messagesByChatId[chatId] = {
            messages: [],
            hasMore: true,
            nextCursor: null,
            loading: false,
            totalCount: 0,
            loadingMore: false,
          }
        }
        state.messagesByChatId[chatId].loading = true
      })
      .addCase(loadMessages.fulfilled, (state, action) => {
        const { chatId, messages, hasMore, nextCursor } = action.payload
        state.messagesByChatId[chatId] = {
          messages: messages.reverse(), // API returns newest first, we want oldest first
          hasMore,
          nextCursor,
          loading: false,
          totalCount: messages.length,
          loadingMore: false,
        }
      })
      .addCase(loadMessages.rejected, (state, action) => {
        const chatId = action.meta.arg.chatId
        if (state.messagesByChatId[chatId]) {
          state.messagesByChatId[chatId].loading = false
        }
      })

      // Load more messages
      //   .addCase(loadMoreMessages.pending, (state, action) => {
      //     const chatId = action.meta.arg.chatId
      //     if (state.messagesByChatId[chatId]) {
      //       state.messagesByChatId[chatId].loadingMore = true
      //     }
      //   })
      //   .addCase(loadMoreMessages.fulfilled, (state, action) => {
      //     const { chatId, messages, hasMore, nextCursor } = action.payload
      //     const chatMessages = state.messagesByChatId[chatId]
      //     if (chatMessages) {
      //       // Prepend older messages (API returns newest first, so reverse them)
      //       chatMessages.messages = [...messages.reverse(), ...chatMessages.messages]
      //       chatMessages.hasMore = hasMore
      //       chatMessages.nextCursor = nextCursor
      //       chatMessages.loadingMore = false
      //     }
      //   })
      //   .addCase(loadMoreMessages.rejected, (state, action) => {
      //     const chatId = action.meta.arg.chatId
      //     if (state.messagesByChatId[chatId]) {
      //       state.messagesByChatId[chatId].loadingMore = false
      //     }
      //   })

      // Send message
      .addCase(sendMessage.pending, (state, action) => {
        // Optimistic update already handled in reducer
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        // Message status will be updated via socket events
      })
      .addCase(sendMessage.rejected, (state, action) => {
        // Find the failed message and mark it as failed
        const { chatId } = action.meta.arg
        const chatMessages = state.messagesByChatId[chatId]
        if (chatMessages) {
          // Mark the last message (which should be the failed one) as failed
          const lastMessage = chatMessages.messages[chatMessages.messages.length - 1]
          if (lastMessage && lastMessage.senderId === action.meta.arg.userId) {
            state.messageStatus[lastMessage.messageId] = { status: 'failed' }
          }
        }
      })
  },
})

export const messageActions = messageSlice.actions
export default messageSlice.reducer

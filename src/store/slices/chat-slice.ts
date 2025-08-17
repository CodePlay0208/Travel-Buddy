import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { ChatApi } from '../../services/api-services/api-invokes'

export const loadChats = createAsyncThunk('chats/loadChats', async (_, { rejectWithValue }) => {
  try {
    const response = await ChatApi.getChatRooms()
    return response.data
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || 'Failed to load chats')
  }
})

export const createGroupChat = createAsyncThunk('chats/createGroupChat', async (data: any, { rejectWithValue }) => {
  try {
    const response = await ChatApi.createGroupChatRoom(data)
    return response.data
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || 'Failed to create chat')
  }
})

export const fetchOrCreateDirectChat = createAsyncThunk('chats/fetchOrCreateDirectChat', async (data: any, { rejectWithValue }) => {
  try {
    console.log('fetchOrCreateDirectChat')
    const response = await ChatApi.fetchOrCreateDirectChatRoom(data)
    return response.data
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || 'Failed to create chat')
  }
})

export const addMemberToChat = createAsyncThunk('chats/addMember', async (data: any, { rejectWithValue }) => {
  try {
    const response = await ChatApi.addMemberToChat(data)
    return response.data
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || 'Failed to add member')
  }
})

// export const removeMemberFromChat = createAsyncThunk('chats/removeMember', async (data: RemoveMemberRequest, { rejectWithValue }) => {
//   try {
//     const response = await ChatApi.removeMemberFromChat(data)
//     return response.data
//   } catch (error: any) {
//     return rejectWithValue(error.response?.data?.message || 'Failed to remove member')
//   }
// })

// export const leaveChat = createAsyncThunk('chats/leaveChat', async (data: LeaveChatRequest, { rejectWithValue }) => {
//   try {
//     const response = await ChatApi.leaveChat(data)
//     return response.data
//   } catch (error: any) {
//     return rejectWithValue(error.response?.data?.message || 'Failed to leave chat')
//   }
// })

export interface Chat {
  chatId: string
  users: Array<{ userId: string; username: string }>
  latestMessage: string
  isGroupChat: boolean
  tripId?: string
  admins: string[]
  title?: string
  createdAt: string
  updatedAt: string
}

interface ChatState {
  chatList: Chat[]
  activeChatId: string | null
  loading: boolean
  error: string | null
  createLoading: boolean
  memberActionLoading: boolean
}

const initialState: ChatState = {
  chatList: [],
  activeChatId: null,
  loading: false,
  error: null,
  createLoading: false,
  memberActionLoading: false
}

const chatSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    setActiveChat: (state, action: PayloadAction<string | null>) => {
      state.activeChatId = action.payload
    },

    updateLatestMessage: (
      state,
      action: PayloadAction<{
        chatId: string
        message: {
          content: string
          createdAt: string
          senderId: string
        }
      }>
    ) => {
      const { chatId, message } = action.payload
      const chat = state.chatList.find((c) => c.chatId === chatId)
      if (chat) {
        chat.latestMessage = message.content
        chat.updatedAt = message.createdAt

        // Move chat to top of list
        const chatIndex = state.chatList.findIndex((c) => c.chatId === chatId)
        if (chatIndex > 0) {
          const [movedChat] = state.chatList.splice(chatIndex, 1)
          state.chatList.unshift(movedChat)
        }
      }
    },

    addUserToChat: (
      state,
      action: PayloadAction<{
        chatId: string
        user: { userId: string; username: string }
      }>
    ) => {
      const { chatId, user } = action.payload
      const chat = state.chatList.find((c) => c.chatId === chatId)
      if (chat && !chat.users.some((u) => u.userId === user.userId)) {
        chat.users.push(user)
      }
    },

    removeUserFromChat: (
      state,
      action: PayloadAction<{
        chatId: string
        userId: string
      }>
    ) => {
      const { chatId, userId } = action.payload
      const chat = state.chatList.find((c) => c.chatId === chatId)
      if (chat) {
        chat.users = chat.users.filter((u) => u.userId !== userId)
      }
    },

    clearError: (state) => {
      state.error = null
    },

    resetChats: (state) => {
      return initialState
    }
  },
  extraReducers: (builder) => {
    builder
      // Load chats
      .addCase(loadChats.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loadChats.fulfilled, (state, action) => {
        state.loading = false
        state.chatList = action.payload
      })
      .addCase(loadChats.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })

      // Create chat
      .addCase(createGroupChat.pending, (state) => {
        state.createLoading = true
        state.error = null
      })
      .addCase(createGroupChat.fulfilled, (state, action) => {
        state.createLoading = false
        state.chatList.unshift(action.payload)
      })
      .addCase(createGroupChat.rejected, (state, action) => {
        state.createLoading = false
        state.error = action.payload as string
      })

      // Create chat
      .addCase(fetchOrCreateDirectChat.pending, (state) => {
        state.createLoading = true
        state.error = null
      })
      .addCase(fetchOrCreateDirectChat.fulfilled, (state, action) => {
        state.createLoading = false
        state.chatList.unshift(action.payload)
      })
      .addCase(fetchOrCreateDirectChat.rejected, (state, action) => {
        state.createLoading = false
        state.error = action.payload as string
      })

      // Add member
      .addCase(addMemberToChat.pending, (state) => {
        state.memberActionLoading = true
        state.error = null
      })
      .addCase(addMemberToChat.fulfilled, (state, action) => {
        state.memberActionLoading = false
        const chatIndex = state.chatList.findIndex((c) => c.chatId === action.payload.chatId)
        if (chatIndex !== -1) {
          state.chatList[chatIndex] = action.payload
        }
      })
      .addCase(addMemberToChat.rejected, (state, action) => {
        state.memberActionLoading = false
        state.error = action.payload as string
      })

    // Remove member
    // .addCase(removeMemberFromChat.pending, (state) => {
    //   state.memberActionLoading = true
    //   state.error = null
    // })
    // .addCase(removeMemberFromChat.fulfilled, (state, action) => {
    //   state.memberActionLoading = false
    //   const chatIndex = state.chatList.findIndex((c) => c.chatId === action.payload.chatId)
    //   if (chatIndex !== -1) {
    //     state.chatList[chatIndex] = action.payload
    //   }
    // })
    // .addCase(removeMemberFromChat.rejected, (state, action) => {
    //   state.memberActionLoading = false
    //   state.error = action.payload as string
    // })

    // // Leave chat
    // .addCase(leaveChat.pending, (state) => {
    //   state.memberActionLoading = true
    //   state.error = null
    // })
    // .addCase(leaveChat.fulfilled, (state, action) => {
    //   state.memberActionLoading = false
    //   // Remove chat from list since user left
    //   state.chatList = state.chatList.filter((c) => c.chatId !== action.payload.chatId)

    //   // Clear active chat if it was the one we left
    //   if (state.activeChatId === action.payload.chatId) {
    //     state.activeChatId = null
    //   }
    // })
    // .addCase(leaveChat.rejected, (state, action) => {
    //   state.memberActionLoading = false
    //   state.error = action.payload as string
    // })
  }
})

export const chatActions = chatSlice.actions
export default chatSlice.reducer

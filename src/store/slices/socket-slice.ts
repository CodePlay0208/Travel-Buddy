import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ChatApi } from '../../services/api-services/api-invokes'

export type ConnectionStatus = 'connecting' | 'connected' | 'disconnected' | 'error'

interface SocketState {
  isConnected: boolean
  connectionStatus: ConnectionStatus
  typingUsers: Record<string, string[]>
  onlineUsers: Record<string, string[]>
  reconnectAttempts: number
}

const initialState: SocketState = {
  isConnected: false,
  connectionStatus: 'disconnected',
  typingUsers: {},
  onlineUsers: {},
  reconnectAttempts: 0,
}

export const fetchUserPresence = createAsyncThunk(
  'chats/fetchUserPresence',
  async (data: { userId: string; chatId: string }, { rejectWithValue }) => {
    try {
      const { userId, chatId } = data
      const response = await ChatApi.getUserPresence(userId)
      return { ...response.data, chatId }
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to get user presence')
    }
  }
)

const socketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    setConnectionStatus: (state, action: PayloadAction<ConnectionStatus>) => {
      state.connectionStatus = action.payload
      state.isConnected = action.payload === 'connected'

      if (action.payload === 'connected') {
        state.reconnectAttempts = 0
      }
    },

    setUserTyping: (
      state,
      action: PayloadAction<{
        chatId: string
        userId: string
        isTyping: boolean
      }>,
    ) => {
      const { chatId, userId, isTyping } = action.payload
      if (!state.typingUsers[chatId]) {
        state.typingUsers[chatId] = []
      }

      if (isTyping && !state.typingUsers[chatId].includes(userId)) {
        state.typingUsers[chatId].push(userId)
      } else if (!isTyping) {
        state.typingUsers[chatId] = state.typingUsers[chatId].filter((id) => id !== userId)
      }
    },

    setUserOnline: (
      state,
      action: PayloadAction<{
        chatId: string
        userId: string
        isOnline: boolean
      }>,
    ) => {
      const { chatId, userId, isOnline } = action.payload

      if (!state.onlineUsers[chatId]) {
        state.onlineUsers[chatId] = []
      }

      if (isOnline && !state.onlineUsers[chatId].includes(userId)) {
        state.onlineUsers[chatId].push(userId)
      } else if (!isOnline) {
        state.onlineUsers[chatId] = state.onlineUsers[chatId].filter((id) => id !== userId)
      }
    },

    incrementReconnectAttempts: (state) => {
      state.reconnectAttempts += 1
    },

    resetSocket: (state) => {
      return initialState
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserPresence.fulfilled, (state, action) => {
      const { chatId, userId, status } = action.payload
      if (!state.onlineUsers[chatId]) {
        state.onlineUsers[chatId] = []
      }

      if (status === 'online' && !state.onlineUsers[chatId].includes(userId)) {
        state.onlineUsers[chatId].push(userId)
      } else if (status === 'offline') {
        state.onlineUsers[chatId] = state.onlineUsers[chatId].filter((id) => id !== userId)
      }
    })
  }
})

export const socketActions = socketSlice.actions
export default socketSlice.reducer

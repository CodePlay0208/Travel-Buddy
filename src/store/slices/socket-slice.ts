import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
      console.log('0')
      const { chatId, userId, isTyping } = action.payload
      console.log('REUCER', chatId, userId, isTyping)

      if (!state.typingUsers[chatId]) {
        console.log('1')
        state.typingUsers[chatId] = []
      }

      if (isTyping && !state.typingUsers[chatId].includes(userId)) {
        console.log('2')
        state.typingUsers[chatId].push(userId)
      } else if (!isTyping) {
        console.log('3')
        state.typingUsers[chatId] = state.typingUsers[chatId].filter((id) => id !== userId)
      }
      console.log('state.typingUsers', state.typingUsers)
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
})

export const socketActions = socketSlice.actions
export default socketSlice.reducer

import { io, Socket } from 'socket.io-client'
import { socketActions } from '../../store/slices/socket-slice.ts'
import { messageActions } from '../../store/slices/message-slice.ts'
import { chatActions } from '../../store/slices/chat-slice.ts'
import { env } from '../api-services/config/env'

export interface SocketEvents {
  connect: () => void
  disconnect: () => void
  newMessage: (message: any) => void
  messageDelivered: (data: { messageId: string; deliveredTo: string[] }) => void
  messageRead: (data: { messageId: string; userId: string }) => void
  typing: (data: { userId: string; chatId: string }) => void
  stoppedTyping: (data: { userId: string; chatId: string }) => void
  userOnline: (data: { userId: string }) => void
  userOffline: (data: { userId: string }) => void
}

class SocketManager {
  private static instance: SocketManager
  private socket: Socket | null = null
  private dispatch: any= null
  private isConnected = false
  private reconnectAttempts = 0
  private maxReconnectAttempts = 5
  private reconnectDelay = 1000
  private typingTimers = new Map<string, NodeJS.Timeout>()
  private activeChats = new Set<string>()

  private constructor() {}

  static getInstance(): SocketManager {
    if (!SocketManager.instance) {
      SocketManager.instance = new SocketManager()
    }
    return SocketManager.instance
  }

  initialize(dispatch: any) {
    this.dispatch = dispatch
  }

  async connect(token?: string): Promise<void> {
    if (this.socket?.connected) return

    try {
      const authToken = token || (localStorage.token)
      if (!authToken) {
        console.warn('No auth token available for socket connection')
        return
      }

      const baseURL = process.env.EXPO_PUBLIC_API_BASE_URL || 'http://localhost:3000'

      this.socket = io(env.CHAT_CONNECTOR_URL, {
        transports: ['websocket'],
        timeout: 20000,
        forceNew: true,
        auth: {
          token: authToken,
        },
      })

      this.setupEventListeners()
    } catch (error) {
      console.error('Socket connection error:', error)
      this.handleReconnection()
    }
  }

  private setupEventListeners() {
    if (!this.socket || !this.dispatch) return

    this.socket.on('connect', () => {
      console.log('Socket connected:', this.socket?.id)
      this.isConnected = true
      this.reconnectAttempts = 0
      this.dispatch!(socketActions.setConnectionStatus('connected'))
      this.rejoinActiveChats()
    })

    this.socket.on('disconnect', (reason) => {
      console.log('Socket disconnected:', reason)
      this.isConnected = false
      this.dispatch!(socketActions.setConnectionStatus('disconnected'))

      if (reason === 'io server disconnect') {
        this.handleReconnection()
      }
    })

    this.socket.on('connect_error', (error) => {
      console.error('Socket connection error:', error)
      this.dispatch!(socketActions.setConnectionStatus('error'))
      this.handleReconnection()
    })

    this.socket.on('newMessage', (message: any) => {
      console.log('New message received:', message.messageId)

      this.dispatch!(
        messageActions.addMessage({
          chatId: message.chatId,
          message,
        }),
      )

      this.dispatch!(
        chatActions.updateLatestMessage({
          chatId: message.chatId,
          message: {
            content: message.content,
            createdAt: message.createdAt,
            senderId: message.senderId,
          },
        }),
      )
    })

    this.socket.on('messageDelivered', ({ messageId, deliveredTo }) => {
      this.dispatch!(
        messageActions.updateMessageStatus({
          messageId,
          status: 'delivered',
          deliveredTo,
        }),
      )
    })

    this.socket.on('messageRead', ({ messageId, userId }) => {
      this.dispatch!(
        messageActions.updateMessageStatus({
          messageId,
          readBy: [userId],
        }),
      )
    })

    this.socket.on('typing', ({ userId, chatId }) => {
      console.log('ON TYPING', userId, chatId)
      this.dispatch!(
        socketActions.setUserTyping({
          chatId,
          userId,
          isTyping: true,
        }),
      )
    })

    this.socket.on('stoppedTyping', ({ userId, chatId }) => {
      this.dispatch!(
        socketActions.setUserTyping({
          chatId,
          userId,
          isTyping: false,
        }),
      )
    })

    this.socket.on('userOnline', ({ userId }) => {
      console.log('EVENT --> userOnline')
      this.updateUserOnlineStatus(userId, true)
    })

    this.socket.on('userOffline', ({ userId }) => {
      console.log('EVENT --> userOffline')
      this.updateUserOnlineStatus(userId, false)
    })
  }

  private updateUserOnlineStatus(userId: string, isOnline: boolean) {
    this.activeChats.forEach((chatId) => {
      this.dispatch!(
        socketActions.setUserOnline({
          chatId,
          userId,
          isOnline,
        }),
      )
    })
  }

  private rejoinActiveChats() {
    if (!this.socket || !this.isConnected) return

    this.activeChats.forEach((chatId) => {
      this.socket!.emit('joinChat', { chatId })
    })
  }

  private handleReconnection() {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      console.error('Max reconnection attempts reached')
      this.dispatch!(socketActions.setConnectionStatus('error'))
      return
    }

    this.reconnectAttempts++
    this.dispatch!(socketActions.setConnectionStatus('connecting'))

    setTimeout(() => {
      console.log(`Reconnection attempt ${this.reconnectAttempts}`)
      this.connect()
    }, this.reconnectDelay * this.reconnectAttempts)
  }

  joinChat(chatId: string, userId: string) {
    if (!this.socket || !this.isConnected) return

    this.socket.emit('joinChat', { chatId, userId })
    this.activeChats.add(chatId)
    console.log(`Joined chat: ${chatId}`)
  }

  leaveChat(chatId: string) {
    if (!this.socket || !this.isConnected) return

    // Note: Your backend doesn't have leaveChat event, but we track it locally
    this.activeChats.delete(chatId)
    console.log(`Left chat: ${chatId}`)
  }

  sendMessage(message: any, callback?: (response: any) => void) {
    if (!this.socket || !this.isConnected) {
      console.warn('Socket not connected, cannot send message')
      this.dispatch!(
        messageActions.updateMessageStatus({
          messageId: message.messageId,
          status: 'failed',
        }),
      )
      return
    }

    this.dispatch!(
      messageActions.updateMessageStatus({
        messageId: message.messageId,
        status: 'sending',
      }),
    )

    this.socket.emit('newMessage', message, (response: any) => {
      console.log('emit newMessage', message, response)
      if (response?.success) {
        this.dispatch!(
          messageActions.updateMessageStatus({
            messageId: message.messageId,
            status: 'sent',
            deliveredTo: response.deliveredTo,
          }),
        )
      } else {
        this.dispatch!(
          messageActions.updateMessageStatus({
            messageId: message.messageId,
            status: 'failed',
          }),
        )
      }
      callback?.(response)
    })
  }

  sendTyping(chatId: string, userId: string) {
    if (!this.socket || !this.isConnected) return

    if (this.typingTimers.has(chatId)) {
      clearTimeout(this.typingTimers.get(chatId)!)
    }

    this.socket.emit('typing', { chatId, userId })
    console.log('emit TYPING', userId)

    const timer = setTimeout(() => {
      this.socket?.emit('stoppedTyping', { chatId, userId })
      this.typingTimers.delete(chatId)
    }, 3000)

    this.typingTimers.set(chatId, timer)
  }

  markMessageRead(messageId: string, chatId: string, userId: string) {
    if (!this.socket || !this.isConnected) return

    this.socket.emit('messageRead', { messageId, chatId, userId })
  }

  disconnect() {
    if (this.socket) {
      this.activeChats.clear()
      this.typingTimers.forEach((timer) => clearTimeout(timer))
      this.typingTimers.clear()
      this.socket.disconnect()
      this.socket = null
      this.isConnected = false
    }
  }

  getConnectionStatus(): boolean {
    return this.isConnected
  }
}

export { SocketManager }

import { SocketManager } from '../socket-service/socket-service.ts'
// import { MessageApi } from './api-services/MessageApi'
// import { ChatApi } from '../api-services/api-invokes'
import { messageActions, loadMessages, sendMessage } from '../../store/slices/message-slice.ts'
import { chatActions, loadChats } from '../../store/slices/chat-slice.ts'

export class ChatService {
  private static instance: ChatService
  private dispatch: any = null
  private socketManager: SocketManager
  private messageCache = new Map<string, any>()
  private loadingStates = new Map<string, Promise<any>>()

  private constructor() {
    this.socketManager = SocketManager.getInstance()
  }

  static getInstance(): ChatService {
    if (!ChatService.instance) {
      ChatService.instance = new ChatService()
    }
    return ChatService.instance
  }

  initialize(dispatch: any) {
    this.dispatch = dispatch
    this.socketManager.initialize(dispatch)
  }

  async initializeUserChats(userId: string) {
    if (!this.dispatch) return

    try {
      await this.dispatch(loadChats()).unwrap()

      if (!this.socketManager.getConnectionStatus()) {
        await this.socketManager.connect()
        this.socketManager.userConnects()
      }
    } catch (error) {
      console.error('Failed to initialize user chats:', error)
    }
  }

  async joinChat(chatId: string, userId: string) {
    try {
      this.socketManager.joinChat(chatId, userId)

      if (!this.messageCache.has(chatId) && this.dispatch) {
        const result = await this.dispatch(loadMessages({ chatId })).unwrap()
        this.messageCache.set(chatId, result)
      }

      if (this.dispatch) {
        this.dispatch(chatActions.setActiveChat(chatId))
      }
    } catch (error) {
      console.error('Failed to join chat:', error)
    }
  }

  async leaveChat(chatId: string) {
    this.socketManager.leaveChat(chatId)
    this.messageCache.delete(chatId)

    if (this.dispatch) {
      this.dispatch(chatActions.setActiveChat(null))
    }
  }

  async sendMessage(chatId: string, content: string, userId: string, username: string) {
    if (!this.dispatch) {
      throw new Error('ChatService not initialized')
    }

    try {
      await this.dispatch(
        sendMessage({
          chatId,
          content,
          userId,
          username,
        }),
      ).unwrap()

      this.dispatch(messageActions.clearDraftMessage(chatId))
    } catch (error) {
      console.error('Failed to send message:', error)
      throw error
    }
  }

  async loadMoreMessages(chatId: string, cursor: string) {
    if (!this.dispatch) return

    try {
      // const result = await this.dispatch(
      //   messageActions.loadMoreMessages({
      //     chatId,
      //     cursor
      //   })
      // ).unwrap()
      // return result
    } catch (error) {
      console.error('Failed to load more messages:', error)
      throw error
    }
  }

  sendTypingIndicator(chatId: string, userId: string) {
    this.socketManager.sendTyping(chatId, userId)
  }

  markMessageAsRead(messageId: string, chatId: string, userId: string) {
    this.socketManager.markMessageRead(messageId, chatId, userId)

    if (this.dispatch) {
      this.dispatch(messageActions.markMessagesAsRead({ chatId, userId }))
    }
  }

  saveDraftMessage(chatId: string, content: string) {
    if (this.dispatch) {
      this.dispatch(messageActions.setDraftMessage({ chatId, draft: content }))
    }
  }

  getDraftMessage(chatId: string, state: any): string {
    return state.messages.draftMessages[chatId] || ''
  }

  clearCache() {
    this.messageCache.clear()
    this.loadingStates.clear()
  }

  disconnect() {
    this.socketManager.disconnect()
    this.clearCache()
  }
}

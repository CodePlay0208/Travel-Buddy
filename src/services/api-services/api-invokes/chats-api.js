import { ApiService } from '../api-services'
import { API_PATH } from '../config/api-constants'
import { env } from '../config/env'
import { getQueryString } from '../utils/api-utils'

export const ChatApi = {
  getChatRooms: async () => {
    try {
      const result = await ApiService.post(`${API_PATH.GROUP_GET_CHATS_API}`, {},  {
        baseURL: env.BASE_API_CHAT_URL
      })
      return { status: result.status, data: result.data }
    } catch (e) {
      console.error('ChatApi - getChatRooms', e)
      throw e
    }
  },

  createGroupChatRoom: async (payload) => {
    try {
      const result = await ApiService.post(`${API_PATH.GROUP_CREATE_CHAT}`, payload, {
        baseURL: env.BASE_API_CHAT_URL
      })
      return { status: result.status, data: result.data }
    } catch (e) {
      console.error('ChatApi - createGroupChatRoom', e)
      throw e
    }
  },

  getUserPresence: async (userId) => {
    try {
      const result = await ApiService.get(`${API_PATH.USER_PRESENCE}/${userId}`, {
        baseURL: env.BASE_API_CHAT_URL
      })
      return { status: result.status, data: result.data }
    } catch (e) {
      throw e
    }
  },

  fetchOrCreateDirectChatRoom: async (payload) => {
    try {
      const result = await ApiService.post(`${API_PATH.DM_CREATE_CHAT}`, payload, {
        baseURL: env.BASE_API_CHAT_URL
      })
      return { status: result.status, data: result.data }
    } catch (e) {
      console.error('ChatApi - fetchOrCreateDirectChatRoom', e)
      throw e
    }
  },

  addMemberToChat: async (payload) => {
    try {
      const result = await ApiService.post(`${API_PATH.GROUP_ADD_MEMBERS_TO_CHAT}`, payload, {
        baseURL: env.BASE_API_CHAT_URL
      })
      return { status: result.status, data: result.data }
    } catch (e) {
      console.error('ChatApi - addMemberToChat', e)
      throw e
    }
  },

  getMessagesForChat: async (payload) => {
    try {
      const queryString = getQueryString(payload)
      const result = await ApiService.get(`${API_PATH.GET_ALL_MESSAGES}?${queryString}`, {
        baseURL: env.BASE_API_CHAT_URL
      })
      return { status: result.status, data: result.data }
    } catch (e) {
      console.error('ChatApi - getMessagesForChat', e)
      throw e
    }
  },

  getMessageCountForChat: async (payload) => {
    try {
      const queryString = getQueryString(payload)
      const result = await ApiService.get(`${API_PATH.GET_MESSAGE_COUNT}?${queryString}`, {
        baseURL: env.BASE_API_CHAT_URL
      })
      return { status: result.status, data: result.data }
    } catch (e) {
      console.error('ChatApi - getMessageCountForChat', e)
      throw e
    }
  },
}

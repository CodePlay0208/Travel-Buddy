import { ApiService } from '../api-services'
import { API_PATH } from '../config/api-constants'
import { env } from '../config/env'
import { getQueryString } from '../utils/api-utils'

export const ChatsApi = {
  getChats: async () => {
    try {
      const result = await ApiService.get(`${API_PATH.CHAT_BASE}${API_PATH.GET_CHATS_API}`, {
        baseURL: env.BASE_API_URL,
      })
      console.log('getChats SUCCESS: ', result)

      return { status: result.status, data: result.data }
    } catch (e) {
      console.log('getChats ERROR: ', e)
      throw e
    }
  },

  getMessagesForSingleChat: async (payload) => {
    try {
      const queryString = getQueryString(payload)
      const result = await ApiService.get(`${API_PATH.MESSAGE_BASE}${API_PATH.GET_ALL_MESSAGES_API}?${queryString}`, {
        baseURL: env.BASE_API_URL,
      })
      console.log('getMessagesForSingleChat SUCCESS: ', result)

      return { status: result.status, data: result.data }
    } catch (e) {
      console.log('getMessagesForSingleChat ERROR: ', e)
      throw e
    }
  },

  postNewMessage: async (payload) => {
    try {
      const result = await ApiService.post(`${API_PATH.MESSAGE_BASE}${API_PATH.CREATE_NEW_MESSAGE}`, payload, {
        baseURL: env.BASE_API_URL,
        headers: {
          withCredentials: true,
          contentType: 'application/json'
        },
      })
      console.log('postNewMessage SUCCESS: ', result)

      return { status: result.status, data: result.data }
    } catch (e) {
      console.log('postNewMessage ERROR: ', e)
      throw e
    }
  },

  getOrCreateNewChat: async (payload) => {
    try {
      const result = await ApiService.post(`${API_PATH.CHAT_BASE}${API_PATH.CREATE_CHAT_API}`, payload, {
        baseURL: env.BASE_API_URL
      })
      console.log('getOrCreateNewChat SUCCESS: ', result)

      return { status: result.status, data: result.data }
    } catch (e) {
      console.log('getOrCreateNewChat ERROR: ', e)
      throw e
    }
  } 
}

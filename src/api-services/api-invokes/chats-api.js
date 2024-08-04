import { ApiService } from '../api-services'
import { API_PATH } from '../config/api-constants'
import { env } from '../config/env'

export const ChatsApi = {
  getSingleChat: async (payload) => {
    try {
      const result = await ApiService.get(`${API_PATH.CHATS_API}/${payload}`, {
        baseURL: env.BASE_API_URL,
      })
      console.log('getSingleChat SUCCESS: ', result)
      return result
    } catch (e) {
      console.log('getSingleChat ERROR: ', e)
    }
  },
}

import { ApiService } from '../api-services'
import { API_PATH } from '../config/api-constants'
import { env } from '../config/env'

export const ProfileApi = {
  getUserProfile: async () => {
    try {
      const result = await ApiService.get(API_PATH.USER_PROFILE_API, {
        baseURL: env.BASE_API_URL,
      })
      console.log('getUserProfile SUCCESS: ', result)
      return result
    } catch (e) {
      console.log('getUserProfile ERROR: ', e)
    }
  },

  editUserProfile: async (payload) => {
    try {
      const result = await ApiService.put(API_PATH.EDIT_PROFILE_API, payload, {
        baseURL: env.BASE_API_URL,
      })
      console.log('editUserProfile SUCCESS: ', result)
      return result
    } catch (e) {
      console.log('editUserProfile ERROR: ', e)
    }
  },
  deleteUserProfile: async () => {
    try {
      const result = await ApiService.delete(API_PATH.DELETE_PROFILE_API, {
        baseURL: env.BASE_API_URL,
      })
      console.log('deleteUserProfile SUCCESS: ', result)
      return result
    } catch (e) {
      console.log('deleteUserProfile ERROR: ', e)
    }
  },
}

import { ApiService } from '../api-services'
import { API_CONFIG, API_CONFIG_IMG, API_PATH } from '../config/api-constants'
import { env } from '../config/env'

export const ProfileApi = {
  getUserProfile: async () => {
    try {
      const result = await ApiService.get(API_PATH.USER_PROFILE_API, {
        baseURL: env.BASE_API_URL,
        headers: {
          withCredentials: true,
        },
      })
      //console.log('getUserProfile SUCCESS: ', result)

      return { status: result.status, data: result.data }
    } catch (e) {
      //console.log('getUserProfile ERROR: ', e)
      throw e
    }
  },
  getOtherUserProfile: async (userId) => {
    try {
      const result = await ApiService.post(
        API_PATH.GET_OTHER_USER_PROFILE,
        { userId: userId },
        {
          baseURL: env.BASE_API_URL,
          headers: {
            withCredentials: true,
          },
        },
      )
      //console.log('getOtherUserProfile SUCCESS: ', result)

      return { status: result.status, data: result.data }
    } catch (e) {
      //console.log('getOtherUserProfile ERROR: ', e)
      throw e
    }
  },
  editUserProfile: async (payload, isMultiMedia) => {
    //console.log(payload)
    try {
      const config = {
        baseURL: env.BASE_API_URL,
        headers: isMultiMedia ? API_CONFIG_IMG.headers : API_CONFIG.headers,
      }
      const result = await ApiService.put(API_PATH.EDIT_PROFILE_API, payload, config, isMultiMedia)
      //console.log('editUserProfile SUCCESS: ', result)

      return { status: result.status, data: result.data }
    } catch (e) {
      //console.log('editUserProfile ERROR: ', e)
      throw e
    }
  },
  deleteUserProfile: async () => {
    try {
      const result = await ApiService.delete(API_PATH.DELETE_PROFILE_API, {
        baseURL: env.BASE_API_URL,
      })
      //console.log('deleteUserProfile SUCCESS: ', result)

      return { status: result.status, data: result.data }
    } catch (e) {
      //console.log('deleteUserProfile ERROR: ', e)
      throw e
    }
  },
  generatePreSignedUrlForProfilePic: async (payload) => {
      try {
        const result = await ApiService.post(API_PATH.GENERATE_PRESIGNED_URL_FOR_PROFILE_IMAGES, payload, { baseURL: env.BASE_API_URL }, false)
        return { status: result.status, data: result.data }
      } catch (e) {
        throw e
      }
    },
}

import { ApiService } from '../api-services'
import { API_PATH } from '../config/api-constants'
import { env } from '../config/env'

export const AuthApi = {
  authAndLoadUser: async () => {
    try {
      const result = await ApiService.get(API_PATH.AUTH_USER_LOAD_API, {
        baseURL: env.BASE_API_URL,
      })
      console.log('authAndLoadUser SUCCESS: ', result)

      return result
    } catch (e) {
      console.log('authAndLoadUser ERROR: ', e)
    }
  },

  loginUser: async (payload) => {
    try {
      const result = await ApiService.post(API_PATH.AUTH_LOGIN_API, payload, {
        baseURL: env.BASE_API_URL,
      })
      console.log('loginUser SUCCESS: ', result)

      return result
    } catch (e) {
      console.log('loginUser ERROR: ', e)
    }
  },

  loginUserWithGoogle: async () => {
    try {
      const result = await ApiService.get(API_PATH.AUTH_GOOGLE_LOGIN_API, {
        baseURL: env.BASE_API_URL,
      })
      console.log('loginUserWithGoogle SUCCESS: ', result)

      return result
    } catch (e) {
      console.log('loginUserWithGoogle ERROR: ', e)
    }
  },

  registerUser: async (payload) => {
    try {
      const result = await ApiService.post(API_PATH.AUTH_SIGNUP_API, payload, {
        baseURL: env.BASE_API_URL,
      })
      console.log('registerUser SUCCESS: ', result)

      return result
    } catch (e) {
      console.log('registerUser ERROR: ', e)
    }
  },

  forgetPassword: async (payload) => {
    try {
      const result = await ApiService.post(API_PATH.AUTH_FORGET_PASS, payload, {
        baseURL: env.BASE_API_URL,
      })
      console.log('forgetPassword SUCCESS: ', result)

      return result
    } catch (e) {
      console.log('forgetPassword ERROR: ', e)
    }
  },

  verifyResetPassword: async (payload) => {
    try {
      const result = await ApiService.post(API_PATH.AUTH_RESET_PASS, payload, {
        baseURL: env.BASE_API_URL,
      })
      console.log('verifyResetPassword SUCCESS: ', result)

      return result
    } catch (e) {
      console.log('verifyResetPassword ERROR: ', e)
    }
  },
}

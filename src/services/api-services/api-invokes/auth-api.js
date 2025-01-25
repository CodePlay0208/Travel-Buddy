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

      return { status: result.status, data: result.data }
    } catch (e) {
      console.log('authAndLoadUser ERROR: ', e)
      throw e
    }
  },

  loginUser: async (payload) => {
    try {
      const result = await ApiService.post(API_PATH.AUTH_LOGIN_API, payload, {
        baseURL: env.BASE_API_URL,
        headers: {
          withCredentials: true,
        },
      })
      console.log('loginUser SUCCESS: ', result)

      return { status: result.status, data: result.data }
    } catch (e) {
      console.log('loginUser ERROR: ', e)
      throw e
    }
  },

  loginUserWithGoogle: async () => {
    try {
      const result = await ApiService.get(API_PATH.AUTH_GOOGLE_LOGIN_API, {
        baseURL: env.BASE_API_URL,
      })
      console.log('loginUserWithGoogle SUCCESS: ', result)

      return { status: result.status, data: result.data }
    } catch (e) {
      console.log('loginUserWithGoogle ERROR: ', e)
      throw e
    }
  },

  registerUser: async (payload) => {
    try {
      const result = await ApiService.post(API_PATH.AUTH_SIGNUP_API, payload, {
        baseURL: env.BASE_API_URL,
        headers: {
          withCredentials: true,
        },
      })
      console.log('registerUser SUCCESS: ', result)

      return { status: result.status, data: result.data }
    } catch (e) {
      console.log('registerUser ERROR: ', e)
      throw e
    }
  },

  verifyOTP: async (payload) => {
    try {
      const result = await ApiService.post(API_PATH.AUTH_VERIFY_OTP, payload, {
        baseURL: env.BASE_API_URL,
      })
      console.log('verifyOTP SUCCESS: ', result)

      return { status: result.status, data: result.data }
    } catch (e) {
      console.log('verifyOTP ERROR: ', e)
      throw e
    }
  },

  resendOtp: async (payload) => {
    try {
      const result = await ApiService.post(API_PATH.AUTH_RESEND_OTP, payload, {
        baseURL: env.BASE_API_URL,
      })
      console.log('resendOtp SUCCESS: ', result)

      return { status: result.status, data: result.data }
    } catch (e) {
      console.log('resendOtp ERROR: ', e)
      throw e
    }
  },
}

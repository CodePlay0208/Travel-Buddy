import axios from 'axios'
import { API_CONFIG, API_CONFIG_IMG } from './config/api-constants'
import { env } from './config/env'

const setAuthToken = (token) => {
  if (token) {
    API_CONFIG.headers.Authorization = `Bearer ${token}`
  }
}

const setAuthTokenImg = (token) => {
  if (token) {
    API_CONFIG_IMG.headers.Authorization = `Bearer ${token}`
  }
}

const getAuthToken = () => {
  return API_CONFIG.headers.Authorization
}
const getAuthTokenImg = () => {
  return API_CONFIG_IMG.headers.Authorization
}
const setGoogleToken = (googleToken) => {
  if (googleToken) {
    API_CONFIG.headers.GoogleAuthorization = `Bearer ${googleToken}`
    console.log('API_CONFIG', API_CONFIG)
  }
}

const getGoogleToken = () => {
  return API_CONFIG.headers['Google-Authorization']
}

const ApiService = {
  get: async (apiPath, options) => {
    try {
      const res = await axios.get(apiPath, {
        baseURL: options.baseURL || env.BASE_API_URL,
        headers: { ...API_CONFIG.headers, ...options.headers },
      })
      console.log('GET RES: ', res)
      return res
    } catch (e) {
      console.log('GET Error: ', e)
      throw e
    }
  },

  post: async (apiPath, payload, options) => {
    try {
      const res = await axios.post(apiPath, payload, {
        baseURL: options.baseURL || env.BASE_API_URL,
        headers: { ...API_CONFIG.headers, ...options.headers },
      })
      console.log('POST RES: ', res)
      return res
    } catch (e) {
      console.log('POST Error: ', e)
      throw e
    }
  },

  delete: async (apiPath, options) => {
    try {
      const res = await axios.delete(apiPath, {
        baseURL: options.baseURL || env.BASE_API_URL,
        headers: { ...API_CONFIG.headers, ...options.headers },
      })
      console.log('DELETE RES: ', res)
      return res
    } catch (e) {
      console.log('DELETE Error: ', e)
      throw e
    }
  },

  put: async (apiPath, payload, options, isMultiMedia) => {
    try {
      const res = await axios.put(apiPath, payload, {
        baseURL: options.baseURL || env.BASE_API_URL,
        headers: { ...(isMultiMedia ? API_CONFIG_IMG.headers : API_CONFIG.headers), ...options.headers },
      })
      console.log('PUT RES: ', res)
      return res
    } catch (e) {
      console.log('PUT Error: ', e)
      throw e
    }
  },
}

export { setAuthToken, setAuthTokenImg, getAuthToken, getAuthTokenImg, setGoogleToken, getGoogleToken, ApiService }

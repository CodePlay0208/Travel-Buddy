import axios from 'axios'
import { API_CONFIG, API_PATH } from '../config/api-constants'
import { env } from '../config/env'

export class LoginUser {
  async invoke(payload: any, options?: any): Promise<any> {
    // API_CONFIG.headers.Authorization = 
    const res = await axios.post(API_PATH.LOGIN_API, JSON.stringify({ ...payload}), {
        baseURL: options?.baseURL || env.BASE_API_URL,
        headers: API_CONFIG.headers
    }
    )
    return res
  }
}

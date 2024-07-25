import axios from 'axios'
import { API_CONFIG, API_PATH } from '../config/api-constants'
import { env } from '../config/env'

export class ResetPassword {
  async invoke(payload: any, options?: any): Promise<any> {
    const res = await axios.post(`${API_PATH.RESET_PASS}`, {
      baseURL: options?.baseURL || env.BASE_API_URL,
      body: JSON.stringify({
        otp: payload.otp,
        newPassword: payload.newPassword,
        userEmail: payload.userEmail
      }),
      header: API_CONFIG.headers

    })
    return res
  }
}

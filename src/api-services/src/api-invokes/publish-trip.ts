import axios from 'axios'
import { API_CONFIG, API_PATH } from '../config/api-constants'
import { env } from '../config/env'

export class PublishTr {
  async invoke(payload: any, options?: any): Promise<any> {
    const res = await axios.post(API_PATH.TRIPS_API, JSON.stringify({ ...payload }), {
      baseURL: options?.baseURL || env.BASE_API_URL,
      headers: API_CONFIG.headers,
    })
    return res
  }
}

import axios from 'axios'
import { API_CONFIG, API_PATH } from '../config/api-constants'
import { env } from '../config/env'
import { getQueryString } from '../../utils/api-utils'

export class DeleteTrips {
  async invoke(payload: any, options?: any): Promise<any> {
    const res = await axios.delete(`${API_PATH.DELETE_TRIP_API}?${payload}`, {
      baseURL: options?.baseURL || env.BASE_API_URL,
      headers: API_CONFIG.headers
    })
    return res
  }
}

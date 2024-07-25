import axios from 'axios'
import { API_PATH } from '../config/api-constants'
import { env } from '../config/env'
import { getQueryString } from '../../utils/api-utils'

export class GetSearchedTrips {
  async invoke(payload: any, options?: any): Promise<any> {
    const params = getQueryString(payload)
    const res = await axios.get(`${API_PATH.TRIPS_API}?${params}`, {
      baseURL: options?.baseURL || env.BASE_API_URL,
    })
    return res
  }
}

import axios from 'axios'
import { API_PATH } from '../config/api-constants'
import { env } from '../config/env'

export class GetTrips {
  async invoke(payload): Promise<any> {
    const res = await axios.get(env.BASE_API_URL + API_PATH.TRIPS_API, { ...payload })
    return res
  }
}

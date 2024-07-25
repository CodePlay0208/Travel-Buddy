import axios from 'axios'
import { API_PATH } from '../config/api-constants'
import { env } from '../config/env'

export class GetUserTrips {
  async invoke(): Promise<any> {
    const res = await axios.get(env.BASE_API_URL + API_PATH.ALL_CHAT_API)
    return res
  }
}

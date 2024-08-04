import { ApiService } from '../api-services'
import { API_PATH } from '../config/api-constants'
import { env } from '../config/env'

export const LocationApi = {
  getLocationByName: async (payload) => {
    try {
      const result = await ApiService.get(`${API_PATH.LOCATION_API}/${payload}`, {
        baseURL: env.BASE_API_URL,
      })
      console.log('getLocationByName SUCCESS: ', result)

      return { status: result.status, data: result.data }
    } catch (e) {
      console.log('getLocationByName ERROR: ', e)
      throw e
    }
  },
}

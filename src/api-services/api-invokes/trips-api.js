import { ApiService } from '../api-services'
import { API_PATH } from '../config/api-constants'
import { env } from '../config/env'
import { getQueryString } from '../utils/api-utils'

export const TripsApi = {
  getTrips: async (payload) => {
    try {
      const queryString = getQueryString(payload)
      const result = await ApiService.get(`${API_PATH.TRIPS_API}?${queryString}`, {
        baseURL: env.BASE_API_URL,
      })
      console.log('getTrips SUCCESS', result)
      return result
    } catch (e) {
      console.log('getTrips ERROR', e)
    }
  },
  getUserTrips: async () => {
    try {
      const result = await ApiService.get(API_PATH.USER_TRIPS_API, {
        baseURL: env.BASE_API_URL,
      })
      console.log('getUserTrips SUCCESS', result)
      return result
    } catch (e) {
      console.log('getUserTrips ERROR', e)
    }
  },
  deleteUserTrip: async (payload) => {
    try {
      const result = await ApiService.delete(`${API_PATH.DELETE_TRIP_API}/${payload}`, {
        baseURL: env.BASE_API_URL,
      })
      console.log('deleteUserTrip SUCCESS: ', result)
      return result
    } catch (e) {
      console.log('deleteUserTrip ERROR: ', e)
    }
  },
}

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

      return { status: result.status, data: result.data }
    } catch (e) {
      console.log('getTrips ERROR', e)
      throw e
    }
  },
  getUserTrips: async () => {
    try {
      const result = await ApiService.get(API_PATH.USER_TRIPS_API, {
        baseURL: env.BASE_API_URL,
        headers: {
          withCredentials: true,
        },
      })
      console.log('getUserTrips SUCCESS', result)

      return { status: result.status, data: result.data }
    } catch (e) {
      console.log('getUserTrips ERROR', e)
      throw e
    }
  },
  editTrip: async (payload, tripId) => {
    try {
      const result = await ApiService.put(`${API_PATH.EDIT_TRIPS_API}/:${tripId}`, payload, {
        baseURL: env.BASE_API_URL,
      })
      console.log('editTrip SUCCESS: ', result)

      return { status: result.status, data: result.data }
    } catch (e) {
      console.log('editTrip ERROR', e)
      throw e
    }
  },
  deleteUserTrip: async (tripId) => {
    try {
      const result = await ApiService.delete(`${API_PATH.DELETE_TRIP_API}/${tripId}`, {
        baseURL: env.BASE_API_URL,
      })
      console.log('deleteUserTrip SUCCESS: ', result)

      return { status: result.status, data: result.data }
    } catch (e) {
      console.log('deleteUserTrip ERROR: ', e)
      throw e
    }
  },
  createTrip: async (payload) => {
    try {
      const result = await ApiService.post(API_PATH.CREATE_TRIPS_API, payload, {
        baseURL: env.BASE_API_URL,
      })
      console.log('createTrip SUCCESS: ', result)

      return { status: result.status, data: result.data }
    } catch (e) {
      console.log('createTrip ERROR: ', e)
      throw e
    }
  },
  getTripById: async (tripId) => {
    try {
      const result = await ApiService.get(`${API_PATH.TRIP_BY_ID_API}/:${tripId}`, {
        baseURL: env.BASE_API_URL,
      })
      console.log('getTripById SUCCESS', result)

      return { status: result.status, data: result.data }
    } catch (e) {
      console.log('getTripById ERROR: ', e)
      throw e
    }
  },
}

import { ApiService, setAuthTokenImg } from '../api-services'
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
  getTripById: async (tripId) => {
    try {
      const result = await ApiService.get(`${API_PATH.TRIP_BY_ID_API}/${tripId}`, {
        baseURL: env.BASE_API_URL,
        headers: {
          withCredentials: true,
        },
      })
      console.log('getTripById SUCCESS', result)

      return { status: result.status, data: result.data }
    } catch (e) {
      console.log('getTripById ERROR', e)
      throw e
    }
  },
  getUserPastTrips: async () => {
    try {
      const result = await ApiService.get(API_PATH.USER_PAST_TRIPS_API, {
        baseURL: env.BASE_API_URL,
        headers: {
          withCredentials: true,
        },
      })
      console.log('getUserPastTrips SUCCESS', result)

      return { status: result.status, data: result.data }
    } catch (e) {
      console.log('getUserPastTrips ERROR', e)
      throw e
    }
  },
  getUserWishlistTrips: async () => {
    try {
      const result = await ApiService.get(API_PATH.USER_WISHLIST_TRIPS_API, {
        baseURL: env.BASE_API_URL,
        headers: {
          withCredentials: true,
        },
      })
      console.log('getUserWishlistTrips SUCCESS', result)

      return { status: result.status, data: result.data }
    } catch (e) {
      console.log('getUserWishlistTrips ERROR', e)
      throw e
    }
  },
  getUserRequestedTrips: async () => {
    try {
      const result = await ApiService.get(API_PATH.USER_REQUESTED_TRIPS_API, {
        baseURL: env.BASE_API_URL,
        headers: {
          withCredentials: true,
        },
      })
      console.log('getUserRequestedTrips SUCCESS', result)

      return { status: result.status, data: result.data }
    } catch (e) {
      console.log('getUserRequestedTrips ERROR', e)
      throw e
    }
  },
  editTrip: async (payload, tripId, isMultiMedia = false) => {
    if (localStorage.token) {
      setAuthTokenImg(localStorage.token)
    }
    try {
      const result = await ApiService.put(
        `${API_PATH.EDIT_TRIPS_API}/${tripId}`,
        payload,
        {
          baseURL: env.BASE_API_URL,
        },
        isMultiMedia,
      )
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
  createTrip: async (payload, isMultiMedia) => {
    try {
      const result = await ApiService.post(
        API_PATH.CREATE_TRIPS_API,
        payload,
        {
          baseURL: env.BASE_API_URL,
        },
        isMultiMedia,
      )
      console.log('createTrip SUCCESS: ', result)

      return { status: result.status, data: result.data }
    } catch (e) {
      console.log('createTrip ERROR: ', e)
      throw e
    }
  },
  addWishlistTrip: async (tripId) => {
    try {
      const result = await ApiService.post(
        `${API_PATH.ADD_WISHLIST_TRIP}/${tripId}`,
        {},
        {
          baseURL: env.BASE_API_URL,
        },
      )
      console.log('addWishlistTrip SUCCESS', result)
      return { status: result.status, data: result.data }
    } catch (e) {
      console.log('addWishlistTrip ERROR: ', e)
      throw e
    }
  },
  removeWishlistTrip: async (tripId) => {
    try {
      const result = await ApiService.post(
        `${API_PATH.REMOVE_WISHLIST_TRIP}/${tripId}`,
        {},
        {
          baseURL: env.BASE_API_URL,
        },
      )
      console.log('removeWishlistTrip SUCCESS', result)
      return { status: result.status, data: result.data }
    } catch (e) {
      console.log('removeWishlistTrip ERROR: ', e)
      throw e
    }
  },
  requestJoinTrip: async (tripId) => {
    try {
      const result = await ApiService.post(`${API_PATH.REQUEST_JOIN_TRIP}`, { tripId }, { baseURL: env.BASE_API_URL })
      console.log('requestJoinTrip SUCCESS', result)
      return { status: result.status, data: result.data }
    } catch (e) {
      console.log('requestJoinTrip ERROR: ', e)
      throw e
    }
  },

  leaveTrip: async (tripId) => {
    try {
      const result = await ApiService.post(`${API_PATH.LEAVE_TRIP}`, { tripId }, { baseURL: env.BASE_API_URL })
      console.log('leaveTrip SUCCESS', result)
      return { status: result.status, data: result.data }
    } catch (e) {
      console.log('leaveTrip ERROR: ', e)
      throw e
    }
  },
  getRequestedMembers: async (tripId) => {
    try {
      const result = await ApiService.post(`${API_PATH.GET_REQUESTED_MEMBERS}`, { tripId }, { baseURL: env.BASE_API_URL })
      console.log('getRequestedMembers SUCCESS', result)
      return { status: result.status, data: result.data }
    } catch (e) {
      console.log('getRequestedMembers ERROR: ', e)
      throw e
    }
  },

  addMemberTrip: async ({ tripId, memberId }) => {
    try {
      const result = await ApiService.post(`${API_PATH.ADD_MEMBER_TRIP}`, { tripId, memberId }, { baseURL: env.BASE_API_URL })
      console.log('addMemberTrip SUCCESS', result)
      return { status: result.status, data: result.data }
    } catch (e) {
      console.log('addMemberTrip ERROR: ', e)
      throw e
    }
  },

  removeMemberAsHost: async ({ tripId, memberId }) => {
    try {
      const result = await ApiService.post(`${API_PATH.REMOVE_MEMBER_AS_HOST}`, { tripId, memberId }, { baseURL: env.BASE_API_URL })
      console.log('removeMemberAsHost SUCCESS', result)
      return { status: result.status, data: result.data }
    } catch (e) {
      console.log('removeMemberAsHost ERROR: ', e)
      throw e
    }
  },declineRequest: async ({ tripId, memberId }) => {
    try {
      const result = await ApiService.post(`${API_PATH.DECLINE_REQUEST_AS_HOST}`, { tripId, memberId }, { baseURL: env.BASE_API_URL })
      console.log('removeMemberAsHost SUCCESS', result)
      return { status: result.status, data: result.data }
    } catch (e) {
      console.log('removeMemberAsHost ERROR: ', e)
      throw e
    }
  },
}

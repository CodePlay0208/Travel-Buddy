import {
  GET_TRIP,
  GET_TRIPS,
  GET_USER_TRIPS,
  TRIPS_ERROR,
  UPDATE_USER_TRIP,
  SET_SEARCH_FORM_SUCCESS,
  DEFAULT_STATE,
  GET_USER_PAST_TRIPS,
  GET_USER_WISHLIST,
  ADD_WISHLIST_TRIP,
  REMOVE_WISHLIST_TRIP,
  REQUEST_JOIN_TRIP,
  LEAVE_TRIP,
  GET_REQUESTED_MEMBERS,
  ADD_MEMBER_TRIP,
  REMOVE_MEMBER_AS_HOST,
} from '../constants/action-types/trips.constants'
import { TripsApi } from '../services/api-services/api-invokes'
import { toast } from 'react-toastify'
import { setAuthTokenImg } from '../services/api-services/api-services'

export const getTrips = (searchForm) => async (dispatch) => {
  const { destination, startDate } = searchForm
  const params = [
    {
      key: 'destination',
      value: destination,
    },
    {
      key: 'date',
      value: startDate,
    },
    {
      key: 'offset',
      value: 0,
    },
    {
      key: 'limit',
      value: 50,
    },
  ]

  try {
    const res = await TripsApi.getTrips(params)
    dispatch({
      type: GET_TRIPS,
      payload: res.data.trips,
    })

    return true
  } catch (e) {
    if (e.response && e.response.status === 401) {
      toast.error('Invalid User!', { autoClose: 1500 })
    } else if (e.response && e.response.status === 404) {
      return true
    }
    dispatch({
      type: TRIPS_ERROR,
      payload: e,
    })

    return false
  }
}

export const getTripById = (tripId) => async (dispatch) => {
  try {
    const res = await TripsApi.getTripById(tripId)
    dispatch({
      type: GET_TRIP,
      payload: res.data,
    })

    return true
  } catch (e) {
    dispatch({
      type: TRIPS_ERROR,
      payload: e,
    })
    return false
  }
}

export const getUserTrips = () => async (dispatch) => {
  try {
    const res = await TripsApi.getUserTrips()
    
    dispatch({
      type: GET_USER_TRIPS,
      payload: res.data,
    })

    return true
  } catch (e) {
    if (e.response && e.response.status === 401) {
      toast.error('Invalid User!', { autoClose: 1500 })
    } else if (e.response && e.response.status === 404) {
    }
    dispatch({
      type: TRIPS_ERROR,
      payload: e,
    })
    return false
  }
}
export const getUserWishlist = () => async (dispatch) => {
  try {
    const res = await TripsApi.getUserWishlistTrips()
    dispatch({
      type: GET_USER_WISHLIST,
      payload: res.data,
    })

    return true
  } catch (e) {
    if (e.response && e.response.status === 401) {
      toast.error('Invalid User!', { autoClose: 1500 })
    } else if (e.response && e.response.status === 404) {
    }
    dispatch({
      type: TRIPS_ERROR,
      payload: e,
    })
    return false
  }
}
export const getUserRequested = () => async (dispatch) => {
  try {
    const res = await TripsApi.getUserRequestedTrips()
    dispatch({
      type: GET_USER_WISHLIST,
      payload: res.data,
    })

    return true
  } catch (e) {
    if (e.response && e.response.status === 401) {
      toast.error('Invalid User!', { autoClose: 1500 })
    } else if (e.response && e.response.status === 404) {
    }
    dispatch({
      type: TRIPS_ERROR,
      payload: e,
    })
    return false
  }
}
export const getUserPastTrips = () => async (dispatch) => {
  try {
    const res = await TripsApi.getUserPastTrips()
    dispatch({
      type: GET_USER_PAST_TRIPS,
      payload: res.data,
    })

    return true
  } catch (e) {
    if (e.response && e.response.status === 401) {
      toast.error('Invalid User!', { autoClose: 1500 })
    } else if (e.response && e.response.status === 404) {
    }
    dispatch({
      type: TRIPS_ERROR,
      payload: e,
    })
    return false
  }
}

export const addWishlistTrip = (tripId) => async (dispatch) => {
  try {
    const res = await TripsApi.addWishlistTrip(tripId)
    dispatch({
      type: ADD_WISHLIST_TRIP,
      payload: res.data,
    })
    toast.success('Trip added to wishlist!')

    return true
  } catch (e) {
    if (e.response && e.response.status === 401) {
      toast.error('Invalid User!', { autoClose: 1500 })
    } else if (e.response && e.response.status === 404) {
      toast.error('Trip not found!', { autoClose: 1500 })
    }
    dispatch({
      type: TRIPS_ERROR,
      payload: e,
    })
    return false
  }
}

export const removeWishlistTrip = (tripId) => async (dispatch) => {
  try {
    const res = await TripsApi.removeWishlistTrip(tripId)
    dispatch({
      type: REMOVE_WISHLIST_TRIP,
      payload: tripId,
    })
    toast.success('Trip removed from wishlist!')

    return true
  } catch (e) {
    toast.error('Failed to remove trip from wishlist. Please try again.')
    dispatch({
      type: TRIPS_ERROR,
      payload: e,
    })
    return false
  }
}

export const requestJoinTrip = (tripId) => async (dispatch) => {
  try {
    const res = await TripsApi.requestJoinTrip(tripId)
    dispatch({
      type: REQUEST_JOIN_TRIP,
      payload: res.data,
    })
    toast.success('Join request sent!')

    return true
  } catch (e) {
    if (e.response && e.response.status === 401) {
      toast.error('Invalid User!', { autoClose: 1500 })
    } else if (e.response && e.response.status === 404) {
      toast.error('Trip not found!', { autoClose: 1500 })
    } else {
      toast.error('Failed to request join trip.')
    }
    dispatch({
      type: TRIPS_ERROR,
      payload: e,
    })
    return false
  }
}

export const leaveTrip = (tripId) => async (dispatch) => {
  try {
    const res = await TripsApi.leaveTrip(tripId)
    dispatch({
      type: LEAVE_TRIP,
      payload: tripId,
    })
    toast.success('Left trip successfully!')
    return true
  } catch (e) {
    if (e.response && e.response.status === 401) {
      toast.error('Invalid User!', { autoClose: 1500 })
    } else if (e.response && e.response.status === 404) {
      toast.error('Trip not found!', { autoClose: 1500 })
    } else {
      toast.error('Failed to request leav trip.')
    }
    dispatch({
      type: TRIPS_ERROR,
      payload: e,
    })
    return false
  }
}

export const createTrip =
  (tripData, isMultiMedia = false) =>
  async (dispatch) => {
    try {
      // if (isMultiMedia&&localStorage.token) {
      //   setAuthTokenImg(localStorage.token)
      // }
      const res = await TripsApi.createTrip(tripData, isMultiMedia)
      // if (res.status === 201) {
      //   toast.success('Your Trip has been successfully published!', { autoClose: 1500 })
      // }
      // if (!res.data.allFilesUploaded) {
      //   toast.error('Error in uploading images. Please edit the trip and re-upload the images!', { autoClose: 1500 })
      // }
      return true
    } catch (e) {
      if (e.response && e.response.status === 401) {
        toast.error('Invalid User!', { autoClose: 1500 })
      }
      dispatch({
        type: TRIPS_ERROR,
        payload: e,
      })
      return false
    }
  }

export const editTrip =
  (trip_id, tripData, isMultiMedia = false) =>
  async (dispatch) => {
    try {
      const res = await TripsApi.editTrip(tripData, trip_id, isMultiMedia)
      dispatch({
        type: UPDATE_USER_TRIP,
        payload: res.data,
      })
      if (res.status === 200) {
        toast.success('Your changes are saved!', { autoClose: 1500 })
      }
      //TODO: there should be a button that redirect to edit page.
      else if (res.data && !res.data.allFilesUploaded) {
        toast.error('Error in uploading images. Please edit the trip and re-upload the images!', { autoClose: 1500 })
      }

      return true
    } catch (e) {
      if (e.response && e.response.status === 401) {
        toast.error('Invalid User!', { autoClose: 1500 })
      } else if (e.response && e.response.status === 403) {
        toast.error("You don't have access to edit this trip!", { autoClose: 1500 })
      } else if (e.response && e.response.status === 404) {
        toast.error("The Trip doesn't exists!", { autoClose: 1500 })
      }
      dispatch({
        type: TRIPS_ERROR,
        payload: e,
      })
      return false
    }
  }

export const deleteUserTrip = (trip_id) => async (dispatch) => {
  try {
    await TripsApi.deleteUserTrip(trip_id)
    dispatch({
      type: 'DELETE_USER_TRIP',
      payload: trip_id,
    })
    toast.success('Trip Successfully deleted!', { autoClose: 1500 })

    return true
  } catch (e) {
    if (e.response && e.response.status === 401) {
      toast.error('Invalid User!', { autoClose: 1500 })
    }
    dispatch({
      type: TRIPS_ERROR,
      payload: e,
    })
    return false
  }
}

export const setSearchForm = (newSearchForm) => async (dispatch) => {
  try {
    dispatch({
      type: SET_SEARCH_FORM_SUCCESS,
      payload: newSearchForm,
    })

    return true
  } catch (e) {
    dispatch({
      type: DEFAULT_STATE,
    })
    return false
  }
}
export const getRequestedMembers = (tripId) => async (dispatch) => {
  try {
    const res = await TripsApi.getRequestedMembers(tripId)
    dispatch({
      type: GET_REQUESTED_MEMBERS,
      payload: res.data,
    })
    toast.success('Fetched requested members successfully!')
    return true
  } catch (e) {
    toast.error('Failed to fetch requested members.')
    dispatch({
      type: TRIPS_ERROR,
      payload: e,
    })
    return false
  }
}

export const addMemberTrip = (tripId, memberId) => async (dispatch) => {
  try {
    const res = await TripsApi.addMemberTrip({ tripId, memberId })
    dispatch({
      type: ADD_MEMBER_TRIP,
      payload: res.data,
    })
    toast.success('Member added to trip successfully!')
    return true
  } catch (e) {
    toast.error('Failed to add member to trip.')
    dispatch({
      type: TRIPS_ERROR,
      payload: e,
    })
    return false
  }
}

export const removeMemberAsHost = (tripId, memberId) => async (dispatch) => {
  try {
    const res = await TripsApi.removeMemberAsHost({ tripId, memberId })
    dispatch({
      type: REMOVE_MEMBER_AS_HOST,
      payload: { tripId, memberId },
    })
    toast.success('Member removed from trip successfully!')
    return true
  } catch (e) {
    toast.error('Failed to remove member from trip.')
    dispatch({
      type: TRIPS_ERROR,
      payload: e,
    })
    return false
  }
}

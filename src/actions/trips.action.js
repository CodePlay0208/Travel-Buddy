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

export const getTrip = (tripId) => async (dispatch) => {
  try {
    const res = await TripsApi.getTripById(tripId)
    dispatch({
      type: GET_TRIP,
      payload: res.data,
    })
  } catch (e) {
    dispatch({
      type: TRIPS_ERROR,
      payload: e,
    })
  }
}

export const getUserTrips = () => async (dispatch) => {
  try {
    const res = await TripsApi.getUserTrips()
    dispatch({
      type: GET_USER_TRIPS,
      payload: res.data,
    })
  } catch (e) {
    if (e.response && e.response.status === 401) {
      toast.error('Invalid User!', { autoClose: 1500 })
    } else if (e.response && e.response.status === 404) {
    }
    dispatch({
      type: TRIPS_ERROR,
      payload: e,
    })
  }
}
export const getUserWishlist = () => async (dispatch) => {
  try {
    const res = await TripsApi.getUserWishlistTrips()
    dispatch({
      type: GET_USER_WISHLIST,
      payload: res.data,
    })
  } catch (e) {
    if (e.response && e.response.status === 401) {
      toast.error('Invalid User!', { autoClose: 1500 })
    } else if (e.response && e.response.status === 404) {
    }
    dispatch({
      type: TRIPS_ERROR,
      payload: e,
    })
  }
}
export const getUserPastTrips = () => async (dispatch) => {
  try {
    const res = await TripsApi.getUserPastTrips()
    dispatch({
      type: GET_USER_PAST_TRIPS,
      payload: res.data,
    })
  } catch (e) {
    if (e.response && e.response.status === 401) {
      toast.error('Invalid User!', { autoClose: 1500 })
    } else if (e.response && e.response.status === 404) {
    }
    dispatch({
      type: TRIPS_ERROR,
      payload: e,
    })
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
      if (res.status === 201) {
        toast.success('Your Trip has been successfully published!', { autoClose: 1500 })
      }
      if (!res.data.allFilesUploaded) {
        toast.error('Error in uploading images. Please edit the trip and re-upload the images!', { autoClose: 1500 })
      }
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
      if (res.data && !res.data.allFilesUploaded) {
        toast.error('Error in uploading images. Please edit the trip and re-upload the images!', { autoClose: 1500 })
      }
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
  } catch (e) {
    if (e.response && e.response.status === 401) {
      toast.error('Invalid User!', { autoClose: 1500 })
    }
    dispatch({
      type: TRIPS_ERROR,
      payload: e,
    })
  }
}

export const setSearchForm = (newSearchForm) => async (dispatch) => {
  try {
    dispatch({
      type: SET_SEARCH_FORM_SUCCESS,
      payload: newSearchForm,
    })
  } catch (e) {
    dispatch({
      type: DEFAULT_STATE,
    })
  }
}

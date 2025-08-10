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
  GET_USER_REQUESTED,
  DECLINE_REQUEST_AS_HOST,
  GET_RANDOM_TRIPS,
  GET_TRIPS_BY_START_LOCATION,
} from '../constants/action-types/trips.constants'
import { TripsApi } from '../services/api-services/api-invokes'
import { toast } from 'react-toastify'
// setAuthTokenImg was removed as it was commented out

// Utility: Map frontend searchForm/filter state to backend param array
function buildTripSearchParams(searchForm, offset = 0, limit = 50, startLocation = '') {
  // Map categories to preferences, flatten participants/budget/duration
  const {
    destination,
    startDate,
    persona,
    participants,
    duration,
    budget,
    categories,
    sortBy,
    ...rest
  } = searchForm || {};

  // Duration mapping for UI values
  const DURATION_MAP = {
    'weekend': { min: 2, max: 3 },
    'week': { min: 4, max: 7 },
    'extended': { min: 8, max: 99 }, // 99 as practical upper bound
    'flexible dates': { min: 1, max: 99 },
  };

  let minDuration, maxDuration;
  if (typeof duration === 'string') {
    const dKey = duration.trim().toLowerCase();
    if (DURATION_MAP[dKey]) {
      minDuration = Number(DURATION_MAP[dKey].min);
      maxDuration = Number(DURATION_MAP[dKey].max);
    }
  } else if (typeof duration === 'object' && duration !== null) {
    minDuration = Number(duration.min);
    maxDuration = Number(duration.max);
  } else if (duration) {
    minDuration = maxDuration = Number(duration);
  }

  // Map frontend sortBy to backend sortBy
  const SORT_BY_MAP = {
    'budget-low': 'budgetLowToHigh',
    'budget-high': 'budgetHighToLow',
    'duration-short': 'durationShortest',
    'duration-long': 'durationLongest',
    'group-small': 'groupSizeSmallest',
    'group-large': 'groupSizeLargest',
    'dates-soon': 'datesSoonest',
    'recommended': 'recommended',
  };

  const mappedSortBy = sortBy && SORT_BY_MAP[sortBy] ? SORT_BY_MAP[sortBy] : sortBy;

  const params = [
    { key: 'destination', value: destination },
    { key: 'date', value: startDate },
    { key: 'persona', value: persona && typeof persona === 'object' && persona.id ? persona.id : persona },
    { key: 'minTotalMember', value: participants?.min },
    { key: 'maxTotalMember', value: participants?.max },
    // Only include minDuration/maxDuration if they are valid numbers
    ...(Number.isFinite(minDuration) ? [{ key: 'minDuration', value: minDuration }] : []),
    ...(Number.isFinite(maxDuration) ? [{ key: 'maxDuration', value: maxDuration }] : []),
    { key: 'minBudget', value: budget?.min },
    { key: 'maxBudget', value: budget?.max },
    { key: 'preferences', value: categories && categories.length ? JSON.stringify(categories) : undefined },
    { key: 'sortBy', value: mappedSortBy },
    { key: 'offset', value: offset },
    { key: 'limit', value: limit },
    { key: 'startLocation', value: startLocation || '' },
  ].filter(item => item.value !== undefined && item.value !== null && item.value !== '');

  return params;
}

export const getTrips =
  (searchForm, offset = 0, limit = 50, append = false, isShowMore = false, startLocation) =>
  async (dispatch) => {
    const params = buildTripSearchParams(searchForm, offset, limit, startLocation);
    try {
      let res = await TripsApi.getTrips(params)
      if (!isShowMore&&!res.data?.trips?.length) {
        res = await TripsApi.getTrips([
          { key: 'destination', value: '' },
          { key: 'date', value: '' },
          { key: 'offset', value: 0 },
          { key: 'limit', value: 50 },
        ])
      }
      dispatch({ type: GET_TRIPS, payload: res.data.trips, append })
      return true
    } catch (e) {
      if (e.response) {
        if (e.response.status === 401) {
          toast.error('Invalid User!', { autoClose: 1500 })
        } else if (e.response.status === 404) {
          // 404 could mean "no trips found"; returning true to signal an empty result
          return true
        }
      }
      dispatch({ type: TRIPS_ERROR, payload: e })
      return false
    }
  }

export const getTripsByStartLocation =
  (searchForm, offset = 0, limit = 50, append = false,isShowMore=false,startLocation) =>
  async (dispatch) => {
    const { destination, startDate } = searchForm
    const params = [
      { key: 'destination', value: destination },
      { key: 'date', value: startDate },
      { key: 'offset', value: offset },
      { key: 'limit', value: limit },
      { key: 'startLocation', value: startLocation || '' },
    ]

    try {
      let res = await TripsApi.getTrips(params)
      if (!isShowMore&&!res.data?.trips?.length) {
        res = await TripsApi.getTrips([
          { key: 'destination', value: '' },
          { key: 'date', value: '' },
          { key: 'offset', value: 0 },
          { key: 'limit', value: 50 },
        ])
      }
      dispatch({ type: GET_TRIPS_BY_START_LOCATION, payload: res.data.trips, append })
      return true
    } catch (e) {
      if (e.response) {
        if (e.response.status === 401) {
          toast.error('Invalid User!', { autoClose: 1500 })
        } else if (e.response.status === 404) {
          // 404 could mean "no trips found"; returning true to signal an empty result
          return true
        }
      }
      dispatch({ type: TRIPS_ERROR, payload: e })
      return false
    }
  }

export const getRandomTrips =
  (searchForm, offset = 0, limit = 50, append = false) =>
  async (dispatch) => {
    const { destination, startDate } = searchForm
    const params = [
      { key: 'destination', value: destination },
      { key: 'date', value: startDate },
      { key: 'offset', value: offset },
      { key: 'limit', value: limit },
    ]

    try {
      let res = await TripsApi.getRandomTrips(params)

      dispatch({ type: GET_RANDOM_TRIPS, payload: res.data.trips, append })
      return true
    } catch (e) {
      if (e.response) {
        if (e.response.status === 401) {
          toast.error('Invalid User!', { autoClose: 1500 })
        } else if (e.response.status === 404) {
          // 404 could mean "no trips found"; returning true to signal an empty result
          return true
        }
      }
      dispatch({ type: TRIPS_ERROR, payload: e })
      return false
    }
  }

export const getTripById = (tripId) => async (dispatch) => {
  try {
    const res = await TripsApi.getTripById(tripId)
    dispatch({ type: GET_TRIP, payload: res.data?.[0] })
    return true
  } catch (e) {
    dispatch({ type: TRIPS_ERROR, payload: e })
    return false
  }
}

export const getUserTrips = () => async (dispatch) => {
  try {
    const res = await TripsApi.getUserTrips()
    dispatch({ type: GET_USER_TRIPS, payload: res.data })
    return true
  } catch (e) {
    if (e.response && e.response.status === 401) {
      toast.error('Invalid User!', { autoClose: 1500 })
    }
    dispatch({ type: TRIPS_ERROR, payload: e })
    return false
  }
}

export const getUserWishlist = () => async (dispatch) => {
  try {
    const res = await TripsApi.getUserWishlistTrips()
    dispatch({ type: GET_USER_WISHLIST, payload: res.data })
    return true
  } catch (e) {
    if (e.response && e.response.status === 401) {
      toast.error('Invalid User!', { autoClose: 1500 })
    }
    dispatch({ type: TRIPS_ERROR, payload: e })
    return false
  }
}

export const getUserRequested = () => async (dispatch) => {
  try {
    const res = await TripsApi.getUserRequestedTrips()
    dispatch({ type: GET_USER_REQUESTED, payload: res.data })
    return true
  } catch (e) {
    if (e.response && e.response.status === 401) {
      toast.error('Invalid User!', { autoClose: 1500 })
    }
    dispatch({ type: TRIPS_ERROR, payload: e })
    return false
  }
}

export const getUserPastTrips = () => async (dispatch) => {
  try {
    const res = await TripsApi.getUserPastTrips()
    dispatch({ type: GET_USER_PAST_TRIPS, payload: res.data })
    return true
  } catch (e) {
    if (e.response && e.response.status === 401) {
      toast.error('Invalid User!', { autoClose: 1500 })
    }
    dispatch({ type: TRIPS_ERROR, payload: e })
    return false
  }
}

export const addWishlistTrip = (tripId) => async (dispatch) => {
  try {
    const res = await TripsApi.addWishlistTrip(tripId)
    dispatch({ type: ADD_WISHLIST_TRIP, payload: res.data })
    toast.success('Trip added to wishlist!')
    return true
  } catch (e) {
    if (e.response) {
      if (e.response.status === 401) {
        toast.error('Invalid User!', { autoClose: 1500 })
      } else if (e.response.status === 404) {
        toast.error('Trip not found!', { autoClose: 1500 })
      }
    }
    dispatch({ type: TRIPS_ERROR, payload: e })
    return false
  }
}

export const removeWishlistTrip = (tripId) => async (dispatch) => {
  try {
    await TripsApi.removeWishlistTrip(tripId)
    dispatch({ type: REMOVE_WISHLIST_TRIP, payload: tripId })
    toast.success('Trip removed from wishlist!')
    return true
  } catch (e) {
    toast.error('Failed to remove trip from wishlist. Please try again.')
    dispatch({ type: TRIPS_ERROR, payload: e })
    return false
  }
}

export const requestJoinTrip = (tripId, hostId) => async (dispatch) => {
  try {
    const res = await TripsApi.requestJoinTrip(tripId, hostId)
    dispatch({ type: REQUEST_JOIN_TRIP, payload: res.data })
    toast.success('Join request sent!')
    return true
  } catch (e) {
    if (e.response) {
      if (e.response.status === 401) {
        toast.error('Invalid User!', { autoClose: 1500 })
      } else if (e.response.status === 404) {
        toast.error('Trip not found!', { autoClose: 1500 })
      } else {
        toast.error('Failed to request join trip.')
      }
    }
    dispatch({ type: TRIPS_ERROR, payload: e })
    return false
  }
}

export const leaveTrip = (tripId, hostId) => async (dispatch) => {
  try {
    await TripsApi.leaveTrip(tripId, hostId)
    dispatch({ type: LEAVE_TRIP, payload: tripId })
    toast.success('Left trip successfully!')
    return true
  } catch (e) {
    if (e.response) {
      if (e.response.status === 401) {
        toast.error('Invalid User!', { autoClose: 1500 })
      } else if (e.response.status === 404) {
        toast.error('Trip not found!', { autoClose: 1500 })
      } else {
        toast.error('Failed to leave trip.')
      }
    }
    dispatch({ type: TRIPS_ERROR, payload: e })
    return false
  }
}

export const createTrip =
  (tripData, isMultiMedia = false) =>
  async (dispatch) => {
    try {
      const res = await TripsApi.createTrip(tripData, isMultiMedia)
      return res
    } catch (e) {
      if (e.response && e.response.status === 401) {
        toast.error('Invalid User!', { autoClose: 1500 })
      }
      dispatch({ type: TRIPS_ERROR, payload: e })
      return false
    }
  }

export const createTripsImages =
  (tripData, isMultiMedia = true) =>
  async (dispatch) => {
    try {
      await TripsApi.createTripsImages(tripData, isMultiMedia)
      return true
    } catch (e) {
      if (e.response && e.response.status === 401) {
        toast.error('Invalid User!', { autoClose: 1500 })
      }
      dispatch({ type: TRIPS_ERROR, payload: e })
      return false
    }
  }

export const editTripImages = (tripData, payload, isMultiMedia) => async (dispatch) => {
  try {
    await TripsApi.editTripImages(tripData, payload, isMultiMedia)
    return true
  } catch (e) {
    if (e.response && e.response.status === 401) {
      toast.error('Invalid User!', { autoClose: 1500 })
    }
    dispatch({ type: TRIPS_ERROR, payload: e })
    return false
  }
}

export const editTrip =
  (trip_id, tripData, isMultiMedia = false) =>
  async (dispatch) => {
    try {
      const res = await TripsApi.editTrip(tripData, trip_id, isMultiMedia)
      dispatch({ type: UPDATE_USER_TRIP, payload: res.data })

      return true
    } catch (e) {
      if (e.response) {
        if (e.response.status === 401) {
          toast.error('Invalid User!', { autoClose: 1500 })
        } else if (e.response.status === 403) {
          toast.error("You don't have access to edit this trip!", { autoClose: 1500 })
        } else if (e.response.status === 404) {
          toast.error("The trip doesn't exist!", { autoClose: 1500 })
        }
      }
      dispatch({ type: TRIPS_ERROR, payload: e })
      return false
    }
  }

export const deleteUserTrip = (trip_id) => async (dispatch) => {
  try {
    await TripsApi.deleteUserTrip(trip_id)
    dispatch({ type: 'DELETE_USER_TRIP', payload: trip_id })
    toast.success('Trip successfully deleted!', { autoClose: 1500 })
    return true
  } catch (e) {
    if (e.response && e.response.status === 401) {
      toast.error('Invalid User!', { autoClose: 1500 })
    }
    dispatch({ type: TRIPS_ERROR, payload: e })
    return false
  }
}

export const deleteBaseTrip = (trip_id) => async (dispatch) => {
  try {
    await TripsApi.deleteBaseTrip(trip_id)
    dispatch({ type: 'DELETE_BASE_TRIP', payload: trip_id })
    toast.success('Trip successfully deleted!', { autoClose: 1500 })
    return true
  } catch (e) {
    if (e.response && e.response.status === 401) {
      toast.error('Invalid User!', { autoClose: 1500 })
    }
    dispatch({ type: TRIPS_ERROR, payload: e })
    return false
  }
}

export const setSearchForm = (newSearchForm) => async (dispatch) => {
  try {
    dispatch({ type: SET_SEARCH_FORM_SUCCESS, payload: newSearchForm })
    return true
  } catch (e) {
    dispatch({ type: DEFAULT_STATE })
    return false
  }
}

export const getRequestedMembers = (tripId) => async (dispatch) => {
  try {
    const res = await TripsApi.getRequestedMembers(tripId)
    dispatch({ type: GET_REQUESTED_MEMBERS, payload: res.data })
    return true
  } catch (e) {
    toast.error('Failed to fetch requested members.')
    dispatch({ type: TRIPS_ERROR, payload: e })
    return false
  }
}

export const addMemberTrip = (tripInstanceId, memberId) => async (dispatch) => {
  try {
    await TripsApi.addMemberTrip({ tripInstanceId, memberId })
    dispatch({ type: ADD_MEMBER_TRIP, payload: { tripInstanceId: tripInstanceId, memberId: memberId } })
    toast.success('Member added to trip successfully!')
    return true
  } catch (e) {
    toast.error('Failed to add member to trip.')
    dispatch({ type: TRIPS_ERROR, payload: e })
    return false
  }
}

export const removeMemberAsHost = (tripInstanceId, memberId) => async (dispatch) => {
  try {
    await TripsApi.removeMemberAsHost({ tripInstanceId, memberId })
    dispatch({ type: REMOVE_MEMBER_AS_HOST, payload: { tripInstanceId: tripInstanceId, memberId: memberId } })
    toast.success('Member removed from trip successfully!')
    return true
  } catch (e) {
    toast.error('Failed to remove member from trip.')
    dispatch({ type: TRIPS_ERROR, payload: e })
    return false
  }
}

export const declineRequest = (tripInstanceId, memberId) => async (dispatch) => {
  try {
    await TripsApi.declineRequest({ tripInstanceId, memberId })
    dispatch({ type: DECLINE_REQUEST_AS_HOST, payload: { tripInstanceId: tripInstanceId, memberId: memberId } })
    toast.success('Request declined successfully!')
    return true
  } catch (e) {
    toast.error('Failed to decline request from trip.')
    dispatch({ type: TRIPS_ERROR, payload: e })
    return false
  }
}

export const generatePreSignedUrlForDestinationImages = (payload) => async (dispatch) => {
  try {
    const res = await TripsApi.generatePreSignedUrlForDestinationImages(payload)
    return res.data
  } catch (e) {
    return false
  }
}

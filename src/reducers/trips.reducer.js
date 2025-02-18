import {
  GET_TRIPS,
  GET_TRIP,
  GET_USER_TRIPS,
  TRIPS_ERROR,
  SET_SEARCH_FORM_SUCCESS,
  DELETE_USER_TRIP,
  DEFAULT_STATE,
  GET_USER_PAST_TRIPS,
  GET_USER_WISHLIST,
  GET_USER_REQUESTED,
} from '../constants/action-types/trips.constants'

const initialState = {
  trips: [],
  trip: null,
  loading: true,
  user: {
    trips: [],
  },
  userTrip: {
    trips: [],
  },
  error: {},
  searchForm: {
    destination: '',
    startDate: '',
  },
}

const tripReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_TRIPS:
      return {
        ...state,
        trips: payload,
        loading: false,
      }
    case GET_TRIP:
      return {
        ...state,
        trip: payload,
        loading: false,
      }
    case GET_USER_TRIPS:
      return {
        ...state,
        user: { ...state.user, trips: payload },
        userTrip: payload,
        loading: false,
      }
    case GET_USER_PAST_TRIPS:
      return {
        ...state,
        user: { ...state.user, trips: payload },
        pastTrips: payload,
        loading: false,
      }
    case GET_USER_WISHLIST:
      return {
        ...state,
        user: { ...state.user, trips: payload },
        wishlistTrips: payload,
        loading: false,
      }
      case GET_USER_REQUESTED:
      return {
        ...state,
        user: { ...state.user, trips: payload },
        requestedTrips: payload,
        loading: false,
      }
    case SET_SEARCH_FORM_SUCCESS:
      return {
        ...state,
        searchForm: {
          ...state.searchForm,
          ...payload,
        },
      }
    case DELETE_USER_TRIP:
      return {
        ...state,
        userTrip: {
          ...state.userTrip,
          trips: state.userTrip.trips.filter((trip) => trip.tripId !== action.payload),
        },
      }
    case TRIPS_ERROR:
      return {
        ...state,
        userTrip: [],
        loading: false,
        error: payload,
      }
    case DEFAULT_STATE:
    default:
      return state
  }
}

export default tripReducer

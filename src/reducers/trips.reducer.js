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
  ADD_WISHLIST_TRIP,
  REMOVE_WISHLIST_TRIP,
  REQUEST_JOIN_TRIP,
  LEAVE_TRIP,
  GET_REQUESTED_MEMBERS,
  GET_NOTIFICATIONS,
  ADD_MEMBER_TRIP,
  REMOVE_MEMBER_AS_HOST,
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
  wishlistTrips: {
    trips: [],
  },
  pastTrips: {
    trips: [],
  },
  requestedTrips: {
    trips: [],
  },
  requestedMembers: [],
  notifications: [],
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
        userTrip: { trips: payload.trips },
        loading: false,
      }
    case GET_USER_PAST_TRIPS:
      return {
        ...state,
        pastTrips: { trips: payload.trips },
        loading: false,
      }
    case GET_USER_WISHLIST:
      return {
        ...state,
        wishlistTrips: { trips: payload.trips },
        loading: false,
      }
    case GET_USER_REQUESTED:
      return {
        ...state,
        requestedTrips: { trips: payload.trips },
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
          trips: state.userTrip.trips.filter((trip) => trip.tripId !== payload),
        },
      }
    case ADD_WISHLIST_TRIP:
      return {
        ...state,
        wishlistTrips: {
          trips: [...state.wishlistTrips.trips, payload],
        },
        loading: false,
      }
    case REMOVE_WISHLIST_TRIP:
      return {
        ...state,
        wishlistTrips: {
          trips: state.wishlistTrips.trips.filter((trip) => trip.tripId !== payload),
        },
        loading: false,
      }
    case GET_REQUESTED_MEMBERS:
      return {
        ...state,
        requestedMembers: payload.requestingMembers,
        loading: false,
      }

    case ADD_MEMBER_TRIP:
      return {
        ...state,
        trip: {
          ...state.trip,
          joinedMembers: state.trip.joinedMembers ? [...state.trip.joinedMembers, payload] : [payload],
          requestingMembers: state.trip.requestingMembers
            ? state.trip.requestingMembers.filter((member) => member.userId !== payload.userId)
            : [],
        },
        loading: false,
      }
    case REMOVE_MEMBER_AS_HOST:
      return {
        ...state,
        trip: {
          ...state.trip,
          members: state.trip && state.trip.members
            ? state.trip.members.filter((member) => member.id !== payload.memberId)
            : [],
        },
        loading: false,
      }
    case TRIPS_ERROR:
      return {
        ...state,
        userTrip: { trips: [] },
        loading: false,
        error: payload,
      }
    case DEFAULT_STATE:
    default:
      return state
  }
}

export default tripReducer

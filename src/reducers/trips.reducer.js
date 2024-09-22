import {
  GET_TRIPS,
  GET_TRIP,
  GET_USER_TRIPS,
  TRIPS_ERROR,
} from '../constants'

const initialState = {
  trips: [],
  trip: null,
  loading: true,
  user: {
    trips: []
  },
  error: {},
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
        loading: false,
      }
    case TRIPS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      }
    default:
      return state
  }
}

export default tripReducer

import { GET_TRIPS, GET_USER_TRIPS, UPDATE_USER_TRIP, TRIPS_ERROR } from '../constants'

const initialState = {
  trips: [],
  loading: true,
  user: null,
  error: {},
}

export default tripReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_TRIPS:
      return {
        ...state,
        trips: payload,
        loading: false,
      }
    case GET_USER_TRIPS:
      return {
        ...state,
        user: { ...state.user, trips: payload },
        loading: false,
      }
    case DELETE_USER_TRIPS:
      return {
        ...state,
        user: {
          ...state.user,
          trips: state.user.trips.filter((trip) => trip.id !== payload),
        },
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

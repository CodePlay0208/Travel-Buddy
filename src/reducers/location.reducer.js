import { GET_LOCATION_SUCCESS, GET_LOCATION_FAIL } from '../constants/action-types/location.constants'

const initialState = {
  suggestions: [],
  loading: true,
}

const locationReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_LOCATION_SUCCESS:
      return {
        ...state,
        suggestions: payload,
        loading: false,
      }
    case GET_LOCATION_FAIL:
      return {
        ...state,
        loading: false,
      }
    default:
      return state

  }
}

export default locationReducer
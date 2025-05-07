import { GET_PROFILE, UPDATE_PROFILE, DELETE_PROFILE, PROFILE_ERROR, PROFILE_LOGOUT } from '../constants/action-types/profile.constants'

const initialState = {
  profile: null,
  loading: true,
  error: {},
}

const profileReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      }
    case DELETE_PROFILE:
      return {
        ...state,
        profile: null,
        loading: false,
      }
    case PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      }
    case PROFILE_LOGOUT:
      return {
        ...state,
        profile: null,
        loading: false,
      }
    default:
      return state
  }
}

export default profileReducer

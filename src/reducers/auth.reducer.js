import {
  USER_LOADED,
  USER_LOAD_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  FORGET_PASS_SUCCESS,
  FORGET_PASS_FAIL,
  RESET_PASS_SUCCESS,
  RESET_PASS_FAIL,
} from '../constants/actionTypes.constants'

const initialState = {
  token: localStorage.getItem('token'),
  isLoading: true,
  user: null,
}

const authReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isLoading: false,
        user: payload,
      }
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
    case FORGET_PASS_SUCCESS:
      localStorage.setItem('token', payload.token)
      return {
        ...state,
        token: payload.token,
        isLoading: false,
      }
    case LOGIN_FAIL:
    case USER_LOAD_ERROR:
    case REGISTER_FAIL:
    case LOGOUT:
    case FORGET_PASS_FAIL:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isLoading: false,
      }
    default:
      return state
  }
}

export default authReducer

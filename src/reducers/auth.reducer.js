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
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAIL,
  RESEND_OTP_SUCCESS,
  RESEND_OTP_FAIL,
} from '../constants'

const initialState = {
  token: localStorage.getItem('token'),
  isLoading: true,
  user: null,
  isAuthenticated: null,
  otpVerified: false,
}

const authReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isLoading: false,
        user: payload,
        isAuthenticated: true,
      }
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', payload.token)
      return {
        ...state,
        token: payload.token,
        isLoading: false,
        isAuthenticated: true,
      }
    case FORGET_PASS_SUCCESS:
      localStorage.setItem('token', payload.token)
      return {
        ...state,
        token: payload.token,
        isLoading: false,
      }
    case VERIFY_OTP_SUCCESS:
      localStorage.setItem("token", payload.token)
      return {
        ...state,
        otpVerified: true,
      }
    case RESET_PASS_SUCCESS:
    case RESEND_OTP_SUCCESS:
    case RESEND_OTP_FAIL:
    case VERIFY_OTP_FAIL:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
      }
    case LOGIN_FAIL:
    case USER_LOAD_ERROR:
    case REGISTER_FAIL:
    case LOGOUT:
    case RESET_PASS_FAIL:
    case FORGET_PASS_FAIL:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isLoading: false,
        isAuthenticated: false,
      }
    default:
      return state
  }
}

export default authReducer

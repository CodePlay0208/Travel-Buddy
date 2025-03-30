import {
  USER_LOADED,
  USER_LOAD_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAIL,
  RESEND_OTP_SUCCESS,
  RESEND_OTP_FAIL,
  EDIT_SECONDARY_KEY,
} from '../constants/action-types/auth.constants'
import { AuthApi, ProfileApi } from '../services/api-services/api-invokes'
import { setAuthToken } from '../services/api-services/api-services'
import { toast } from 'react-toastify'
import { jwtDecode } from 'jwt-decode'

export const isTokenValid = () => async (dispatch) => {
  try {
    const decoded = jwtDecode(localStorage.token)
    const valid = decoded.exp * 1000 > Date.now()
    return valid
  } catch (error) {
    logout()
    dispatch({
      type: USER_LOAD_ERROR,
    })
    return false
  }
}

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }
  try {
    const res = await ProfileApi.getUserProfile()
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    })
  } catch (e) {
    logout()
    dispatch({
      type: USER_LOAD_ERROR,
    })
  }
}

export const register = (formData) => async (dispatch) => {
  const { username, userKey } = formData
  const body = JSON.stringify({ username: username, userKey: userKey })
  try {
    const res = await AuthApi.registerUser(body)
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    })
    toast.success('Registration Successful! OTP sent to your email.', { autoClose: 1500 })
    return true
  } catch (e) {
    if (e.response && e.response.status === 400) {
      toast.error('User Already Exists!', { autoClose: 1500 })
    } else {
      toast.error('Sign-up Failed!', { autoClose: 1500 })
    }
    dispatch({
      type: REGISTER_FAIL,
    })
    return false
  }
}

export const login = (useremail) => async (dispatch) => {
  const body = JSON.stringify({ userKey: useremail })
  try {
    const res = await AuthApi.loginUser(body)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    })
    toast.success('Registration Successful! OTP sent to your email.', { autoClose: 1500 })
    return true
  } catch (e) {
    dispatch({
      type: LOGIN_FAIL,
    })
    return false
  }
}

export const loginWithGoogle = () => async (dispatch) => {
  try {
    const res = await AuthApi.loginUserWithGoogle()
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    })
    dispatch(loadUser())
  } catch (e) {
    dispatch({
      type: LOGIN_FAIL,
    })
  }
}

export const verifyOTP =
  (userOtp, isSignUpRequest = false) =>
  async (dispatch) => {
    const userKey = localStorage.getItem('userKey')
    const body = JSON.stringify({ userKey: userKey, userOtp: userOtp, isSignUpRequest: isSignUpRequest })
    if (localStorage.token) {
      setAuthToken(localStorage.token)
    }
    try {
      const res = await AuthApi.verifyOTP(body)
      dispatch({
        type: VERIFY_OTP_SUCCESS,
        payload: res.data,
      })
      console.log(res)

      console.log(res.data.token)
      localStorage.setItem('token', res.data.token)
      toast.success('OTP Verified!', { autoClose: 1500 })

      dispatch(loadUser())
    } catch (e) {
      if (e.response && e.response.status === 400) {
        toast.error('Invalid User!', { autoClose: 1500 })
      }
      dispatch({
        type: VERIFY_OTP_FAIL,
      })
    }
  }
export const editSecondaryKey = (payload) => async (dispatch) => {
  try {
    const res = await AuthApi.editSecondaryKey(payload)

    return true
  } catch (e) {
    if (e.response && e.response.status === 400) {
      toast.error('Invalid User!', { autoClose: 1500 })
    }
    return false
  }
}

export const resendOTP = () => async (dispatch) => {
  const userKey = localStorage.getItem('userKey')
  const body = JSON.stringify({ userKey: userKey })
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }
  try {
    await AuthApi.resendOtp(body)
    dispatch({
      type: RESEND_OTP_SUCCESS,
    })
    toast.success('OTP Resend!', { autoClose: 1500 })
  } catch (e) {
    if (e.response && e.response.status === 401) {
      toast.error('Invalid User!', { autoClose: 1500 })
    }
    dispatch({
      type: RESEND_OTP_FAIL,
    })
  }
}

export const logout = () => (dispatch) => {
  if (localStorage.token) {
    setAuthToken('')
  }
  if (localStorage.persist) {
    setAuthToken('')
  }

  dispatch({ type: LOGOUT })
}

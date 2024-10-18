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
import { AuthApi, ProfileApi } from '../services/api-services/api-invokes'
import { setAuthToken } from '../services/api-services/api-services'
import { toast } from 'react-toastify'

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
    if (e.response && e.response.status === 401) {
      toast.error('Invalid User!', { autoClose: 1500 })
    } else {
      toast.error('Please Try Again!', { autoClose: 1500 })
    }
    dispatch({
      type: USER_LOAD_ERROR,
    })
  }
}

export const register = (formData) => async (dispatch) => {
  const { firstName, lastName, email, password, phoneNumber } = formData
  const body = JSON.stringify({ username: `${firstName}_${lastName}`, useremail: email, password, phoneNumber })
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

export const login = (useremail, password, rememberMe) => async (dispatch) => {
  const body = JSON.stringify({ useremail, password, rememberMe })
  try {
    const res = await AuthApi.loginUser(body)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    })
    dispatch(loadUser())
    return true
  } catch (e) {
    if (e.response && e.response.status === 400) {
      toast.error('Invalid Email or Password!', { autoClose: 1500 })
    } else {
      toast.error('Please Try Again!', { autoClose: 1500 })
    }
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

export const verifyOTP = (userOtp, isSignUpRequest) => async (dispatch) => {
  const body = JSON.stringify({ userOtp, isSignUpRequest })
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }
  try {
    const res = await AuthApi.verifyOTP(body)
    dispatch({
      type: VERIFY_OTP_SUCCESS,
      payload: res.data
    })
    console.log(res);

    console.log(res.data.token);
    localStorage.setItem("token",res.data.token)
    toast.success('OTP Verified!', { autoClose: 1500 })

    dispatch(loadUser())
  } catch (e) {
    if (e.response && e.response.status === 400) {
      toast.error('Invalid User!', { autoClose: 1500 })
    } else {
      toast.error('Please Try Again!', { autoClose: 1500 })
    }
    dispatch({
      type: VERIFY_OTP_FAIL,
    })
  }
}

export const resendOTP = () => async (dispatch) => {
  const body = JSON.stringify({ isSignUpRequest: true })
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
    else {
      toast.error('Please Try Again!', { autoClose: 1500 })
    }
    dispatch({
      type: RESEND_OTP_FAIL,
    })
  }
}

export const forgetPassword = (useremail) => async (dispatch) => {
  const body = JSON.stringify({ useremail })
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }
  try {
    const res = await AuthApi.forgetPassword(body)
    dispatch({
      type: FORGET_PASS_SUCCESS,
      payload: res.data,
    })
    return true
  } catch (e) {
    if (e.response && e.response.status === 400) {
      toast.error('Invalid Email!', { autoClose: 1500 })
    } else {
      toast.error('Please Try Again!', { autoClose: 1500 })
    }
    dispatch({
      type: FORGET_PASS_FAIL,
    })
    return false
  }
}

export const resetPassword = (newPassword) => async (dispatch) => {
  const body = JSON.stringify({ newPassword })
  try {
    await AuthApi.verifyResetPassword(body)
    dispatch({
      type: RESET_PASS_SUCCESS,
    })
    toast.success('Password Changed Successfully!', { autoClose: 1500 })
    dispatch(loadUser())
    return true
  } catch (e) {
    toast.error('Please Try Again!', { autoClose: 1500 })
    dispatch({
      type: RESET_PASS_FAIL,
    })
    return false
  }
}

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT })
}

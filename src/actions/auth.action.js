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
} from '../constants'
import { AuthApi } from '../api-services/api-invokes'
import { setAuthToken } from '../api-services/api-services'

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }
  try {
    const res = await AuthApi.authAndLoadUser()
    dispatch({
      type: USER_LOADED,
      payload: res.userDetails,
    })
  } catch (e) {
    dispatch({
      type: USER_LOAD_ERROR,
    })
  }
}

export const register =
  ({ firstName, lastName, email, password, phoneNumber }) =>
  async (dispatch) => {
    const body = JSON.stringify({ firstName, lastName, email, password, phoneNumber })
    try {
      const res = await AuthApi.registerUser(body)
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res,
      })
    } catch (e) {
      dispatch({
        type: REGISTER_FAIL,
      })
    }
  }

export const login = (email, password, rememberMe) => async (dispatch) => {
  const body = JSON.stringify({ email, password, rememberMe })
  try {
    const res = await AuthApi.loginUser(body)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res,
    })
    dispatch(loadUser())
  } catch (e) {
    dispatch({
      type: LOGIN_FAIL,
    })
  }
}

export const loginWithGoogle = () => async (dispatch) => {
  try {
    const res = await AuthApi.loginUserWithGoogle()
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res,
    })
    dispatch(loadUser())
  } catch (e) {
    dispatch({
      type: LOGIN_FAIL,
    })
  }
}

export const forgetPass = (email) => async (dispatch) => {
  const body = JSON.stringify({ email })
  try {
    const res = await AuthApi.forgetPassword(body)
    dispatch({
      type: FORGET_PASS_SUCCESS,
      payload: res,
    })
  } catch (e) {
    dispatch({
      type: FORGET_PASS_FAIL,
    })
  }
}

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT })
}

import { GET_PROFILE, UPDATE_PROFILE, DELETE_PROFILE, PROFILE_ERROR, GET_OTHER_USER_PROFILE } from '../constants/action-types/profile.constants'
import { ProfileApi, TripsApi } from '../services/api-services/api-invokes'
import { setAuthToken, setAuthTokenImg } from '../services/api-services/api-services'
import { toast } from 'react-toastify'

export const getProfile = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }
  try {
    const res = await ProfileApi.getUserProfile()
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    })
    return true
  } catch (e) {
    dispatch({
      type: PROFILE_ERROR,
      payload: e,
    })
    return false
  }
}
export const getOtherUserProfile = (userId) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }
  try {
    const res = await ProfileApi.getOtherUserProfile(userId)
    dispatch({
      type: GET_OTHER_USER_PROFILE,
      payload: res.data,
    })
    return res
  } catch (e) {
    dispatch({
      type: PROFILE_ERROR,
      payload: e,
    })
    return false
  }
}

export const updateProfile =
  (profileData, isMultiMedia = false) =>
  async (dispatch) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token)
      if (isMultiMedia) {
        setAuthTokenImg(localStorage.token)
      }
    }

    try {
      const res = await ProfileApi.editUserProfile(profileData, isMultiMedia)
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data,
      })
      return true
    } catch (e) {
      dispatch({
        type: PROFILE_ERROR,
        payload: e,
      })
      return false
    }
  }

export const deleteProfile = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }
  try {
    const res = await ProfileApi.deleteUserProfile()
    dispatch({
      type: DELETE_PROFILE,
      payload: res.data,
    })
    return true
  } catch (e) {
    dispatch({
      type: PROFILE_ERROR,
      payload: e,
    })
    return false
  }
}
export const generatePreSignedUrlForProfilePic = (payload) => async (dispatch) => {
  try {
    const res = await ProfileApi.generatePreSignedUrlForProfilePic(payload)
    return res.data
  } catch (e) {
    return false
  }
}


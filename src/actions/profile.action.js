import { GET_PROFILE, UPDATE_PROFILE, DELETE_PROFILE, PROFILE_ERROR } from '../constants/action-types/profile.constants'
import { ProfileApi } from '../services/api-services/api-invokes'
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
  } catch (e) {
    dispatch({
      type: PROFILE_ERROR,
      payload: e,
    })
    throw e
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
    } catch (e) {
      dispatch({
        type: PROFILE_ERROR,
        payload: e,
      })
      throw e
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
  } catch (e) {
    dispatch({
      type: PROFILE_ERROR,
      payload: e,
    })
    throw e
  }
}

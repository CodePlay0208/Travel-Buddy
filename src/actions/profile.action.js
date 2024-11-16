import { GET_PROFILE, UPDATE_PROFILE, DELETE_PROFILE, PROFILE_ERROR } from '../constants/action-types/profile.constants'
import { ProfileApi } from '../services/api-services/api-invokes'
import { setAuthToken } from '../services/api-services/api-services'
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
    if (e.response && e.response.status === 401) {
      toast.error('Invalid User!', { autoClose: 1500 })
    } else {
      toast.error('Please Try Again!', { autoClose: 1500 })
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: e,
    })
  }
}

export const updateProfile =
  (profileData, isFormData = false) =>
  async (dispatch) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token)
    }
    try {
      const res = await ProfileApi.editUserProfile(profileData, isFormData)
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data,
      })
    } catch (e) {
      if (e.response && e.response.status === 401) {
        toast.error('Invalid User!', { autoClose: 1500 })
      } else {
        toast.error('Please Try Again!', { autoClose: 1500 })
      }
      dispatch({
        type: PROFILE_ERROR,
        payload: e,
      })
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
    if (e.response && e.response.status === 401) {
      toast.error('Invalid User!', { autoClose: 1500 })
    } else {
      toast.error('Please Try Again!', { autoClose: 1500 })
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: e,
    })
  }
}

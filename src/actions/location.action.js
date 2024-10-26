import { GET_LOCATION_SUCCESS, GET_LOCATION_FAIL } from '../constants/action-types/location.constants'
import { LocationApi } from '../services/api-services/api-invokes'

export const getLocationSuggestions = (inputLocation) => async (dispatch) => {
  try {
    const res = await LocationApi.getLocationByName(inputLocation)
    dispatch({
      type: GET_LOCATION_SUCCESS,
      payload: res.data
    })
    return true
  } catch (e) {
    dispatch({
      type: GET_LOCATION_FAIL,
    })
    return false
  }
}
import { GET_TRIPS, GET_USER_TRIPS, DELETE_USER_TRIPS, TRIPS_ERROR } from '../constants'
import { TripsApi } from '../api-services/api-invokes'

export const getTrips =
  ({ destination, date }) =>
  async (dispatch) => {
    const params = [
      {
        key: 'destination',
        value: destination,
      },
      {
        key: 'date',
        value: date,
      },
    ]

    try {
      const res = await TripsApi.getTrips(params)
      dispatch({
        type: GET_TRIPS,
        payload: res,
      })
    } catch (e) {
      dispatch({
        type: TRIPS_ERROR,
        payload: e,
      })
    }
  }

export const getUserTrips = () => async (dispatch) => {
  try {
    const res = await TripsApi.getUserTrips()
    dispatch({
      type: GET_USER_TRIPS,
      payload: res,
    })
  } catch (e) {
    dispatch({
      type: TRIPS_ERROR,
      payload: e,
    })
  }
}

export const deleteUserTrips = (trip_id) => async (dispatch) => {}

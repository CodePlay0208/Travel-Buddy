import { toast } from 'react-toastify'
import { GET_NOTIFICATIONS, TRIPS_ERROR } from '../constants/action-types/trips.constants'
import NotificationApi from '../services/api-services/api-invokes/notification-api'

export const getNotifications = (notificationId) => async (dispatch) => {
  try {
    const res = await NotificationApi.getNotifications(notificationId)
    dispatch({
      type: GET_NOTIFICATIONS,
      payload: res.data,
    })
    toast.success('Fetched notifications successfully!')
    return true
  } catch (e) {
    toast.error('Failed to fetch notifications.')
    dispatch({
      type: TRIPS_ERROR,
      payload: e,
    })
    return false
  }
}

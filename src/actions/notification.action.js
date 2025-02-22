import { toast } from 'react-toastify'
import { DELETE_NOTIFICATION, GET_NOTIFICATIONS, TRIPS_ERROR } from '../constants/action-types/trips.constants'
import NotificationApi from '../services/api-services/api-invokes/notification-api'

export const getNotifications = () => async (dispatch) => {
  try {
    const res = await NotificationApi.getNotifications()
    dispatch({
      type: GET_NOTIFICATIONS,
      payload: res.data,
    })
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

export const deleteNotification = (notificationId) => async (dispatch) => {
  try {
    const res = await NotificationApi.deleteNotifications(notificationId)
    dispatch({
      type: DELETE_NOTIFICATION,
      payload: notificationId,
    })
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

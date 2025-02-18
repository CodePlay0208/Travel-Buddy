import ApiService from './api.service'
import env from '../env'
import API_PATH from './apiPaths'

const NotificationApi = {
  getNotifications: async (notificationId) => {
    try {
      const result = await ApiService.post(`${API_PATH.GET_NOTIFICATIONS}`, { notificationId }, { baseURL: env.BASE_API_URL })
      console.log('getNotifications SUCCESS', result)
      return { status: result.status, data: result.data }
    } catch (e) {
      console.log('getNotifications ERROR: ', e)
      throw e
    }
  },
}

export default NotificationApi

import { ApiService } from "../api-services"
import { API_PATH } from "../config/api-constants"
import { env } from "../config/env"

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

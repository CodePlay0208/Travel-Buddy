import { ApiService } from '../api-services'
import { API_PATH } from '../config/api-constants'
import { env } from '../config/env'

export const NewsletterApi = {
  newsLetterSubscribe: async (payload) => {
    try {
      const result = await ApiService.post(API_PATH.NEWSLETTER_API, payload, {
        baseURL: env.BASE_API_URL,
      })
      //console.log('newsLetterSubscribe SUCCESS: ', result)

      return { status: result.status, data: result.data }
    } catch (e) {
      //console.log('newsLetterSubscribe ERROR: ', e)
      throw e
    }
  },
}

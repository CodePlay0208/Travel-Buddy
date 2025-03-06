import { NEWSLETTER_SUBSCRIBE_SUCCESS, NEWSLETTER_SUBSCRIBE_FAIL } from '../constants/action-types/newsletter.constants'
import { NewsletterApi } from '../services/api-services/api-invokes'

export const subscribeNewsletter = (payload) => async(dispatch) => {
  try {
    const res = await NewsletterApi.newsLetterSubscribe(payload)
    dispatch({
      type: NEWSLETTER_SUBSCRIBE_SUCCESS,
      payload: res
    })
    return true;
  } catch (e) {
    dispatch({
      type: NEWSLETTER_SUBSCRIBE_FAIL,
      payload: e
    })
    return false;
  }
}
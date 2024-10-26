import { NEWSLETTER_SUBSCRIBE_SUCCESS, NEWSLETTER_SUBSCRIBE_FAIL} from '../constants/action-types/newsletter.constants'

const initialState = {
  isSubscribed: false,
  loading: true,
  error: {}
}

const newsletterReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case NEWSLETTER_SUBSCRIBE_SUCCESS:
      return {
        ...state,
        isSubscribed: true,
        loading: false,
      }
    case NEWSLETTER_SUBSCRIBE_FAIL:
      return {
        ...state,
        isSubscribed: false,
        loading: false,
        error: payload
      }
    default:
      return state
  }
}

export default newsletterReducer
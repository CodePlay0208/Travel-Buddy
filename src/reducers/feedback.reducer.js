import { postFeedback } from '../actions/feedback.action'

const initialState = {
  loading: false,
  error: null,
  success: false,
}

export default function feedbackReducer(state = initialState, action) {
  switch (action.type) {
    case 'FEEDBACK_REQUEST':
      return { ...state, loading: true, error: null, success: false }
    case 'FEEDBACK_SUCCESS':
      return { ...state, loading: false, error: null, success: true }
    case 'FEEDBACK_FAILURE':
      return { ...state, loading: false, error: action.error, success: false }
    default:
      return state
  }
}

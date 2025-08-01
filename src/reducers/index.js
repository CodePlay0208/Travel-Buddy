import { combineReducers } from 'redux'
import authReducer from './auth.reducer'
import profileReducer from './profile.reducer'
import tripReducer from './trips.reducer'
import locationReducer from './location.reducer'
import chatsReducer from './chats.reducer'
import newsletterReducer from './newsletter.reducer'
import notificationReducer from './notification.reducer'
import feedbackReducer from './feedback.reducer'
import filtersReducer from './filters.reducer'

export default combineReducers({
  authReducer,
  profileReducer,
  tripReducer,
  locationReducer,
  chatsReducer,
  notificationReducer,
  feedbackReducer,
  filtersReducer,
})

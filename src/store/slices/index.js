import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './auth-slice'
import tripReducer from './trips-slice'
import profileReducer from './profile-slice'
import notificationReducer from './notification-slice'
import newsletterReducer from './newsletter-slice'
import locationReducer from './location-slice'
import filtersReducer from './filters-slice'
import feedbackReducer from './feedback-slice'
import chatReducer from './chat-slice.ts'
import messageReducer from './message-slice.ts'
import socketReducer from './socket-slice.ts'

const rootReducer = combineReducers({
  authReducer,
  tripReducer,
  profileReducer,
  notificationReducer,
  newsletterReducer,
  locationReducer,
  filtersReducer,
  feedbackReducer,
  chatReducer,
  messageReducer,
  socketReducer
})

export default rootReducer

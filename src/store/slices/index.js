import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './auth-slice'
import tripReducer from './trips-slice'
import profileReducer from './profile-slice'
import notificationReducer from './notification-slice'
import newsletterReducer from './newsletter-slice'
import locationReducer from './location-slice'
import filtersReducer from './filters-slice'
import feedbackReducer from './feedback-slice'

const rootReducer = combineReducers({
  authReducer,
  tripReducer,
  profileReducer,
  notificationReducer,
  newsletterReducer,
  locationReducer,
  filtersReducer,
  feedbackReducer
})

export default rootReducer

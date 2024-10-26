import { combineReducers } from 'redux'
import auth from './auth.reducer'
import profile from './profile.reducer'
import trip from './trips.reducer'
import location from './location.reducer'
import newsletterReducer from './newsletter.reducer'

export default combineReducers({
  auth,
  profile,
  trip,
  location,
  // newsletterReducer,
})

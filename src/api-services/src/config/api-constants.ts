export const API_PATH = {
  TRIPS_API: '/api/trips',
  USER_TRIPS_API: '/api/tripsByUser',
  ALL_CHAT_API: '/chat/getChats',
  LOGIN_CHECK_SESSION_API: '/login/checkSession',
  USER_PROFILE_API: '/user/getUserProfile',
  DELETE_PROFILE_API: '/delete/deleteUser',
  DELETE_TRIP_API: '/tripDelete/deleteTrip',
  SIGNUP_API: '/login/signUp',
  LOGOUT_API: '/login/logout',
  RESET_PASS: '/login/verify-reset-password',
  LOGIN_API: '/login'

}

export const MAX_TIMEOUT = 100000
export const API_CONFIG = {
  timeout: MAX_TIMEOUT,
  headers: {
    Authorization: '',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: {}
}
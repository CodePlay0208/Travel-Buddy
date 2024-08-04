export const API_PATH = {
  AUTH_SIGNUP_API: '/login/signUp',
  AUTH_LOGOUT_API: '/login/logout',
  AUTH_RESET_PASS: '/login/verifyResetPassword',
  AUTH_LOGIN_API: '/login',
  AUTH_GOOGLE_LOGIN_API: '/login/googleLogin',
  AUTH_USER_LOAD_API: '/login/isUserLoggedIn',
  AUTH_FORGET_PASS: '/login/forgotPassword',

  TRIPS_API: '/api/trips',
  USER_TRIPS_API: '/api/tripsByUser',
  LOGIN_CHECK_SESSION_API: '/login/checkSession',
  USER_PROFILE_API: '/user/getUserProfile',
  DELETE_PROFILE_API: '/delete/deleteUser',
  DELETE_TRIP_API: '/tripDelete/deleteTrip',
  EDIT_PROFILE_API: '/edit_user',
  CHATS_API: '/message/getAllMessages',
}

export const API_CONFIG = {
  headers: {
    'Authorization': '',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Google-Authorization': ''
  },
}

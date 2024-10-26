export const API_PATH = {
  AUTH_SIGNUP_API: '/login/signUp',
  AUTH_LOGOUT_API: '/login/logout',
  AUTH_VERIFY_RESET_PASS: '/login/resetPassword',
  AUTH_LOGIN_API: '/login/login',
  AUTH_GOOGLE_LOGIN_API: '/login/googleLogin',
  AUTH_USER_LOAD_API: '/login/isUserLoggedIn',
  AUTH_FORGET_PASS: '/login/forgotPassword',
  AUTH_RESEND_OTP: '/login/resendOtp',
  AUTH_VERIFY_OTP: '/login/verifyOtp',

  TRIPS_API: '/trips/getTrips',
  USER_TRIPS_API: '/trips/getTripsByUser',
  CREATE_TRIPS_API: '/trips/createTrip',
  TRIP_BY_ID_API: 'trips/getTripById',
  EDIT_TRIPS_API: '/trips/editTrip',

  USER_PROFILE_API: '/user/getUserProfile',
  DELETE_PROFILE_API: '/delete/deleteUser',
  DELETE_TRIP_API: '/tripDelete/deleteTrip',
  EDIT_PROFILE_API: '/edit_user',
  CHATS_API: '/message/getAllMessages',

  NEWSLETTER_API: '/misc/subscribeToNewsletter',

  LOCATION_API: '/location/getLocationByName',
}

export const API_CONFIG = {
  headers: {
    'Authorization': '',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'GoogleAuthorization': '',
  },
}

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
  USER_WISHLIST_TRIPS_API:'trips/getWishlistedTrips',
  USER_PAST_TRIPS_API:'/trips/getJoinedTrips',
  USER_REQUESTED_TRIPS_API:'/trips/getRequestedTrips',
  CREATE_TRIPS_API: '/trips/createTrip',
  TRIP_BY_ID_API: '/trips/getTripById',
  REQUEST_JOIN_TRIP:'/trips/requestJoinTrip',
  LEAVE_TRIP:'/trips/leaveTrip',
  EDIT_TRIPS_API: '/trips/editTrip',
  ADD_WISHLIST_TRIP: '/trips/addWishlistTrip',
  REMOVE_WISHLIST_TRIP: 'trips/removeWishlistedTrip',

  USER_PROFILE_API: '/user/getUserProfile',
  DELETE_PROFILE_API: 'user/deleteUserProfile',
  DELETE_TRIP_API: '/trips/deleteTrip',
  EDIT_PROFILE_API: '/user/editUserProfile',
  CHATS_API: '/message/getAllMessages',

  MESSAGE_BASE: '/message',
  GET_ALL_MESSAGES_API: '/getAllMessages',
  CREATE_NEW_MESSAGE: '/createNewMessage',

  CHAT_BASE: '/chat',
  CREATE_CHAT_API: '/fetchOrCreateChats',
  GET_CHATS_API: '/getChats',

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
export const API_CONFIG_IMG = {
  headers: {
    Authorization: '',
    GoogleAuthorization: '',
  },
}

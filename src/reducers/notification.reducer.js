import { DELETE_NOTIFICATION, GET_NOTIFICATIONS, NOTIFICATION_ERROR } from "../constants/action-types/trips.constants";

  
  const initialState = {
    notifications: [],
    error: null,
  };
  
  const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_NOTIFICATIONS:
        return {
          ...state,
          notifications: action.payload,
          error: null,
        };
      case DELETE_NOTIFICATION:
        return {
          ...state,
          notifications: state.notifications.filter(
            (notif) => notif.notificationId !== action.payload
          ),
          error: null,
        };
      case NOTIFICATION_ERROR:
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default notificationReducer;
  
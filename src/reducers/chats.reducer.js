import {
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAIL,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAIL,
  USER_TYPING,
  USER_NOT_TYPING,
  UPDATE_SELECTED_CHAT,
  GET_ALL_CHATS_SUCCESS,
  GET_ALL_CHATS_FAIL,
  EMIT_TYPING,
  EMIT_STOP_TYPING,
  DEFAULT_STATE,
  SOCKET_DISCONNECTED,
  SOCKET_CONNECTED,
  UPDATE_MESSAGES,
  UPDATE_NOTIFICATIONS,
  GET_CREATE_CHAT_SUCCESS,
  GET_CREATE_CHAT_FAIL,
  CLEAR_CHATS,
  CLEAR_MESSAGES,
  SET_FETCH_AGAIN,
  ON_TYPING_EVENT,
  DISCONNECT_SOCKET
} from '../constants/action-types/chats.constants'

const initialState = {
  isLoading: true,
  socketConnected: false,
  chats: [],
  messages: [],
  selectedChat: null,
  isOtherTyping: false,
  notifications: [],
  fetchAgain: false,
}

const chatsReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SOCKET_CONNECTED:
      return {
        ...state,
        socketConnected: payload,
      }
    case SOCKET_DISCONNECTED:
      return {
        ...state,
        socketConnected: payload,
      }
    case GET_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: payload.messageData.messages.reverse(),
        isLoading: false,
      }
    case SEND_MESSAGE_SUCCESS:
    case UPDATE_MESSAGES:
      return {
        ...state,
        messages: [...state.messages, payload],
        isLoading: false,
      }
    case UPDATE_NOTIFICATIONS:
      return {
        ...state,
        notifications: [...state.notifications, payload],
        isLoading: false,
      }
    case USER_TYPING:
      return {
        ...state,
        isOtherTyping: payload,
        isLoading: false,
      }
    case USER_NOT_TYPING:
      return {
        ...state,
        isOtherTyping: payload,
      }
    case UPDATE_SELECTED_CHAT:
      return {
        ...state,
        selectedChat: payload,
        isLoading: false,
      }
    case SET_FETCH_AGAIN:
      return {
        ...state,
        fetchAgain: payload,
      }
    case GET_ALL_CHATS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        chats: payload,
        selectedChat: state.chats && state.chats.length ? state.chats[0] : null,
      }
    case GET_ALL_CHATS_FAIL:
      return {
        ...state,
        isLoading: true,
      }
    case CLEAR_CHATS:
      return {
        ...state,
        chats: [],
      }
    case CLEAR_MESSAGES:
      return {
        ...state,
        messages: [],
      }
    case GET_CREATE_CHAT_SUCCESS:
      return {
        ...state,
        chats: [...state.chats, payload],
        isLoading: false,
      }
    case GET_CREATE_CHAT_FAIL:
      return {
        ...state,
        isLoading: true,
      }
    case GET_MESSAGES_FAIL:
    case SEND_MESSAGE_FAIL:
    case EMIT_TYPING:
    case EMIT_STOP_TYPING:
    case ON_TYPING_EVENT:
    case DISCONNECT_SOCKET:
    case DEFAULT_STATE:
    // case SEND_MESSAGE_SUCCESS:
    default:
      return state
  }
}

export default chatsReducer

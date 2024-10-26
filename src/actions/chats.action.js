import { ChatsApi } from '../services/api-services/api-invokes'
import {
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAIL,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAIL,
  SOCKET_CONNECTED,
  SOCKET_DISCONNECTED,
  USER_TYPING,
  USER_NOT_TYPING,
  UPDATE_SELECTED_CHAT,
  GET_ALL_CHATS_SUCCESS,
  GET_ALL_CHATS_FAIL,
  EMIT_STOP_TYPING,
  DEFAULT_STATE,
  ON_MESSAGE_RECEIVED,
  EMIT_TYPING,
  UPDATE_MESSAGES,
  UPDATE_NOTIFICATIONS,
  ON_TYPING_EVENT,
  ON_STOP_TYPING_EVENT,
  OFF_TYPING_EVENT,
  OFF_STOP_TYPING_EVENT,
  OFF_MESSAGE_RECEIVED,
  GET_CREATE_CHAT_SUCCESS,
  GET_CREATE_CHAT_FAIL,
  CLEAR_CHATS,
  CLEAR_MESSAGES,
  SET_FETCH_AGAIN,
  DISCONNECT_SOCKET
} from '../constants/action-types/chats.constants'
import { toast } from 'react-toastify'
import { setAuthToken } from '../services/api-services/api-services'

export const getAllChats = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }
  try {
    const res = await ChatsApi.getChats()
    dispatch({
      type: GET_ALL_CHATS_SUCCESS,
      payload: res.data,
    })
    return true
  } catch (e) {
    toast.error('Error! Failed to load chats', { autoClose: 1500 })
    dispatch({
      type: GET_ALL_CHATS_FAIL,
    })
  }
}

export const getMessagesForChat = (chatId, user) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }
  const query = { chatId: chatId }
  try {
    const res = await ChatsApi.getMessagesForSingleChat(query)
    console.log('---------------getMessagesForChat CALLED-------------------')
    dispatch({
      type: GET_MESSAGES_SUCCESS,
      payload: { messageData: res.data, selectedChatId: chatId, user: user },
    })
    return true
  } catch (e) {
    dispatch({
      type: GET_MESSAGES_FAIL,
    })
  }
}

export const sendMessage = (selectedChatId, messageData) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }
  const body = JSON.stringify({ chatId: selectedChatId, content: messageData })
  try {
    const res = await ChatsApi.postNewMessage(body)
    dispatch({
      type: SEND_MESSAGE_SUCCESS,
      payload: res.data,
    })
    return false
  } catch (e) {
    dispatch({
      type: SEND_MESSAGE_FAIL,
    })
  }
}

export const getOrCreateChat = (recepientId) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }
  const body = { receiverUserId: recepientId }
  try {
    const res = await ChatsApi.getOrCreateNewChat(body)
    dispatch({
      type: GET_CREATE_CHAT_SUCCESS,
      payload: res.data,
    })
    return true
  } catch (e) {
    if (e.response && e.response.status === 400) {
      toast.error('Please try again!', { autoClose: 1500 })
    }
    dispatch({
      type: GET_CREATE_CHAT_FAIL,
    })
  }
}

export const clearChats = () => async (dispatch) => {
  try {
    dispatch({
      type: CLEAR_CHATS,
    })
  } catch (e) {
    dispatch({
      type: DEFAULT_STATE,
    })
  }
}

export const clearMessages = () => async (dispatch) => {
  try {
    dispatch({
      type: CLEAR_MESSAGES,
    })
  } catch (e) {
    dispatch({
      type: DEFAULT_STATE,
    })
  }
}

export const setSocketState = (isSocketConnected) => async (dispatch) => {
  try {
    if (!isSocketConnected) {
      dispatch({
        type: SOCKET_DISCONNECTED,
        payload: false,
      })
    } else {
      dispatch({
        type: SOCKET_CONNECTED,
        payload: true,
      })
    }
  } catch (e) {
    dispatch({
      type: SOCKET_DISCONNECTED,
      payload: false,
    })
  }
}

export const setTypingState = (isOtherTyping) => async (dispatch) => {
  try {
    if (!isOtherTyping) {
      // console.log('------------setTypingState---------------')
      dispatch({
        type: USER_NOT_TYPING,
        payload: false,
      })
    } else {
      dispatch({
        type: USER_TYPING,
        payload: true,
      })
    }
  } catch (e) {
    dispatch({
      type: USER_NOT_TYPING,
      payload: false,
    })
  }
}

export const setSelectedChat = (chat) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_SELECTED_CHAT,
      payload: chat,
    })
  } catch (e) {
    dispatch({
      type: DEFAULT_STATE,
    })
  }
}

export const setFetchAgain = (fetchAgainValue) => async (dispatch) => {
  try {
    dispatch({
      type: SET_FETCH_AGAIN,
      payload: fetchAgainValue,
    })
  } catch (e) {
    dispatch({
      type: DEFAULT_STATE,
    })
  }
}

export const updateMessages = (message) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_MESSAGES,
      payload: message,
    })
  } catch (e) {
    dispatch({
      type: DEFAULT_STATE,
    })
  }
}

export const updateNotifications = (notifications) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_NOTIFICATIONS,
      payload: notifications,
    })
  } catch (e) {
    dispatch({
      type: DEFAULT_STATE,
    })
  }
}

export const emitStopTyping = (selectedChatId, userId) => async (dispatch) => {
  try {
    dispatch({
      type: EMIT_STOP_TYPING,
      payload: { chatId: selectedChatId, userId },
    })
  } catch (e) {
    dispatch({
      type: DEFAULT_STATE,
    })
  }
}

export const emitTyping = (selectedChatId, userId) => async (dispatch) => {
  try {
    dispatch({
      type: EMIT_TYPING,
      payload: { chatId: selectedChatId, userId },
    })
  } catch (e) {
    dispatch({
      type: DEFAULT_STATE,
    })
  }
}

export const onMessageReceivedEvent = (selectedChatCompare, notification, fetchAgain) => async (dispatch) => {
  try {
    dispatch({
      type: ON_MESSAGE_RECEIVED,
      // payload: { selectedChatCompare: selectedChatCompare, notification: notification, fetchAgain: fetchAgain },
    })
  } catch (e) {
    dispatch({
      type: DEFAULT_STATE,
    })
  }
}

export const offMessageReceivedEvent = () => async (dispatch) => {
  try {
    dispatch({
      type: OFF_MESSAGE_RECEIVED,
    })
  } catch (e) {
    dispatch({
      type: DEFAULT_STATE,
    })
  }
}

export const onTypingEvent = () => async (dispatch) => {
  try {
    dispatch({
      type: ON_TYPING_EVENT,
    })
  } catch (e) {
    dispatch({
      type: DEFAULT_STATE,
    })
  }
}

export const offTypingEvent = () => async (dispatch) => {
  try {
    dispatch({
      type: OFF_TYPING_EVENT,
    })
  } catch (e) {
    dispatch({
      type: DEFAULT_STATE,
    })
  }
}

export const onStopTypingEvent = () => async (dispatch) => {
  try {
    dispatch({
      type: ON_STOP_TYPING_EVENT,
    })
  } catch (e) {
    dispatch({
      type: DEFAULT_STATE,
    })
  }
}

export const offStopTypingEvent = () => async (dispatch) => {
  try {
    dispatch({
      type: OFF_STOP_TYPING_EVENT,
    })
  } catch (e) {
    dispatch({
      type: DEFAULT_STATE,
    })
  }
}

export const disconnectSocket = () => async (dispatch) => {
  try {
    dispatch({
      type: DISCONNECT_SOCKET,
    })
  } catch (e) {
    dispatch({
      type: DEFAULT_STATE,
    })
  }
}


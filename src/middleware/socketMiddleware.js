import { LOGOUT, USER_LOADED } from '../constants/action-types/auth.constants'
import { setFetchAgain, setSocketState, setTypingState, updateMessages, updateNotifications } from '../actions/chats.action'
import { DISCONNECT_SOCKET, EMIT_STOP_TYPING, EMIT_TYPING, GET_MESSAGES_SUCCESS, OFF_MESSAGE_RECEIVED, ON_MESSAGE_RECEIVED, SEND_MESSAGE_SUCCESS } from '../constants/action-types/chats.constants'

const socketMiddleware = (socket) => {
  return (store) => (next) => (action) => {
    const { dispatch } = store
    const { type, payload } = action

    switch (type) {
      // case LOGIN_SUCCESS: {
      //   socket.connect()
      //   console.log('Socket-connect: LOGIN_SUCCESS')
      //   break
      // }
      case USER_LOADED: {
        if (!socket?.socket) {
          console.log('socket', socket?.socket)
          socket.connect()
        }
        console.log('socket---new', socket?.socket)
        console.log('Socket-connect: USER_LOADED')
        socket.emit('setup', payload)
        console.log('Socket-EMIT-setup: USER_LOADED', payload)
        // socket.off('connected')
        console.log('Socket-ON-connected: USER_LOADED')
        break
      }
      case GET_MESSAGES_SUCCESS: {
        // socket.connect()
        // console.log('Socket-connect: GET_MESSAGES_SUCCESS')
        // socket.emit('setup', payload.user)
        // console.log('Socket-EMIT-setup: GET_MESSAGES_SUCCESS', payload.user)
        // socket.on('connected', () => {
        //   dispatch(setSocketState(true))
        // })
        console.log('--------payload.selectedChatId----------', payload.selectedChatId)
        socket.emit('join chat', { chatId: payload.selectedChatId, userId: payload.user.userId })
        console.log('Socket-EMIT-join chat: GET_MESSAGES_SUCCESS', payload.selectedChatId)
        break
      }
      case SEND_MESSAGE_SUCCESS: {
        socket.emit('send message', payload)
        console.log('Socket-EMIT-new message: SEND_MESSAGE_SUCCESS', payload)
        break
      }
      case EMIT_TYPING: {
        socket.emit('typing', payload)
        console.log('Socket-EMIT-typing: EMIT_TYPING', payload)
        break
      }
      case EMIT_STOP_TYPING: {
        socket.emit('stop typing', payload)
        console.log('Socket-EMIT-stop typing: EMIT_STOP_TYPING', payload)
        break
      }
      case ON_MESSAGE_RECEIVED: {
        // const { selectedChatCompare, notification, fetchAgain } = payload
        socket.off('message to received')
        socket.on('message to received', (newMessageReceived) => {
          console.log('--------message receinved event---------', newMessageReceived);
          // if (!selectedChatCompare || (selectedChatCompare.chatId !== newMessageReceived.chatId)) {
          //   if (!notification.includes(newMessageReceived)) {
          //     dispatch(updateNotifications(newMessageReceived))
          //     dispatch(setFetchAgain(!fetchAgain))
          //   }
          // } else {
          //   console.log('------newMessage--------', newMessageReceived)
          // }
          // dispatch(updateMessages(newMessageReceived))
        })
        console.log('Socket-ON-message received: ON_MESSAGE_RECEIVED', payload)
        break
      }
      case OFF_MESSAGE_RECEIVED: {
        // socket.off('message to received')
        console.log('Socket-OFF-message received: OFF_MESSAGE_RECEIVED')
        break
      }
      // case ON_TYPING_EVENT: {
      //   socket.on('typing', () => {
      //     // console.log('------------ON_TYPING_EVENT---------------')
      //     dispatch(setTypingState(true))
      //   })
      //   console.log('Socket-ON-typing: ON_TYPING_EVENT')
      //   break
      // }
      // case OFF_TYPING_EVENT: {
      //   socket.off('typing')
      //   console.log('Socket-OFF-typing: OFF_TYPING_EVENT')
      //   break
      // }
      // case ON_STOP_TYPING_EVENT: {
      //   socket.on('stop typing', () => {
      //     // console.log('-------------stop typing-----------')
      //     dispatch(setTypingState(false))
      //   })
      //   console.log('Socket-ON-stop typing: ON_STOP_TYPING_EVENT')
      //   break
      // }
      // case OFF_STOP_TYPING_EVENT: {
      //   socket.off('stop typing')
      //   console.log('Socket-OFF-stop typing: OFF_STOP_TYPING_EVENT')
      //   break
      // }
      // case OFF_MESSAGE_RECEIVED: {
      //   socket.off('message received')
      //   console.log('Socket-OFF-message received: OFF_MESSAGE_RECEIVED')
      //   break
      // }
      case DISCONNECT_SOCKET: {
        console.log('Socket-OFF-connected: DISCONNECT_SOCKET')
        // socket.disconnect()
        break
      }
      case LOGOUT: {
        // socket.off('connected')
        console.log('Socket-OFF-connected: LOGOUT')
        // socket.disconnect()
        break
      }
    }

    return next(action)
  }
}

export default socketMiddleware

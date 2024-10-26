import io from 'socket.io-client'
import { WEB_SOCKET_HOST } from './config/env'

export default class Socket {
  socket = null

  connect() {
    this.socket = io(WEB_SOCKET_HOST)
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect()
      this.socket = null
    }
  }

  emit(eventName, data) {
    if (this.socket) {
      this.socket.emit(eventName, data)
    }
  }

  on(eventName, func) {
    if (this.socket) {
      this.socket.on(eventName, func)
    }
  }
}

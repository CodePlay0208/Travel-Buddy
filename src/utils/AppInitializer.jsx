import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SocketManager } from '../services/socket-service/socket-service.ts'
import { ChatService } from '../services/chat-service/chat-service.ts'

const AppInitializer = ({ children }) => {
  const [isReady, setIsReady] = useState(false)
  const dispatch = useDispatch()
  const { isAuthenticated, user } = useSelector((state) => state.authReducer)

  useEffect(() => {
    const init = async () => {
      try {
        const socketManager = SocketManager.getInstance()
        const chatService = ChatService.getInstance()

        socketManager.initialize(dispatch)
        chatService.initialize(dispatch)
      } catch (err) {
        console.error('Error initializing app:', err)
      } finally {
        setIsReady(true)
      }
    }
    init()
  }, [dispatch])

  useEffect(() => {
    if (isAuthenticated && user) {
      const chatService = ChatService.getInstance()
      chatService.initializeUserChats(user.userId)
    }
  }, [isAuthenticated, user])

  if (!isReady) return <div>Loading...</div>

  return <>{children}</>
}

export default AppInitializer
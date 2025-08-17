import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ChatList from './components/ChatList/ChatList'
import ChatBox from './components/ChatBox/ChatBox'
import { useSelector, useDispatch } from 'react-redux'
import { ChatService } from '../../services/chat-service/chat-service.ts'

const ChatContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f9f9f9;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ChatPage = () => {
  const [selectedChat, setSelectedChat] = useState(null)
  const dispatch = useDispatch()
  const chatService = ChatService.getInstance()

  const { activeChatId } = useSelector((state) => state.chatReducer)
  const { user } = useSelector((state) => state.authReducer)

  // useEffect(() => {
  //   if (dispatch && user?.userId) {
  //     chatService.initialize(dispatch)
  //     chatService.initializeUserChats(user.userId)
  //   }

  //   return () => {
  //     if (selectedChat) {
  //       chatService.leaveChat(selectedChat.chatId)
  //     }
  //   }
  // }, [dispatch, user?.userId])

  const handleChatSelect = async (chat) => {
    try {
      if (selectedChat) {
        await chatService.leaveChat(selectedChat.chatId)
      }

      if (chat && user?.userId) {
        await chatService.joinChat(chat.chatId, user.userId)
        setSelectedChat(chat)
      }
    } catch (error) {
      console.error('Failed to switch chats:', error)
    }
  }

  return (
    <ChatContainer>
      <ChatList onSelectChat={handleChatSelect} selectedChat={selectedChat} />
      <ChatBox selectedChat={selectedChat} />
    </ChatContainer>
  )
}

export default ChatPage
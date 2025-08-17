import React, { useState, useRef, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { ChatService } from '../../../../services/chat-service/chat-service.ts'

const BoxContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: white;

  @media (max-width: 768px) {
    height: ${(props) => (props.selectedChat ? '100%' : '0')};
    overflow: hidden;
    transition: height 0.3s ease;
  }
`

const Header = styled.div`
  padding: 15px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
`

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  margin-right: 10px;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

const ChatName = styled.h3`
  margin: 0;
  font-size: 18px;
`

const OnlineStatus = styled.span`
  font-size: 12px;
  color: ${(props) => (props.online ? '#4CAF50' : '#999')};
  margin-left: 8px;
`

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
`

const MessageGroup = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  flex-direction: ${(props) => (props.isUser ? 'row-reverse' : 'row')};
`

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
  color: white;
  margin: ${(props) => (props.isUser ? '0 0 0 8px' : '0 8px 0 0')};
`

// const Avatar = styled.img`
//   width: 32px;
//   height: 32px;
//   border-radius: 50%;
//   margin: ${(props) => (props.isUser ? '0 0 0 8px' : '0 8px 0 0')};
// `

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70%;
`

const SenderName = styled.span`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 3px;
  color: #444;
`

const Bubble = styled.div`
  background-color: ${(props) => (props.isUser ? '#8DD3BB' : '#e0e0e0')};
  color: ${(props) => (props.isUser ? 'white' : 'black')};
  padding: 10px 15px;
  border-radius: 18px;
  margin-bottom: 3px;
  align-self: ${(props) => (props.isUser ? 'flex-end' : 'flex-start')};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  word-wrap: break-word;
`

const MessageTime = styled.div`
  font-size: 10px;
  color: #666;
  margin-top: 2px;
  align-self: ${(props) => (props.isUser ? 'flex-end' : 'flex-start')};
`

const TypingIndicator = styled.div`
  padding: 10px 15px;
  font-style: italic;
  color: #666;
  font-size: 14px;
`

const InputContainer = styled.div`
  display: flex;
  padding: 15px;
  border-top: 1px solid #e0e0e0;
`

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  margin-right: 10px;
  outline: none;

  &:focus {
    border-color: #8dd3bb;
  }
`

const SendButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.disabled ? '#ccc' : '#8dd3bb')};
  color: white;
  border: none;
  border-radius: 20px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(props) => (props.disabled ? '#ccc' : '#7bc2aa')};
  }
`

const LoadMoreButton = styled.button`
  align-self: center;
  padding: 8px 16px;
  margin-bottom: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 15px;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background-color: #e0e0e0;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`


const ChatBox = ({ selectedChat }) => {
  const [inputText, setInputText] = useState('')
  const messagesEndRef = useRef(null)
  const chatService = ChatService.getInstance()

  const { user } = useSelector((state) => state.authReducer)
  const chatMessages = useSelector((state) => (selectedChat ? state.messageReducer.messagesByChatId[selectedChat.chatId] : null)) || {
    messages: [],
    hasMore: false,
    nextCursor: null,
    loading: false,
    loadingMore: false,
  }

  const typingUsers = useSelector((state) => (selectedChat ? state.socketReducer.typingUsers[selectedChat.chatId] : [])) || []
  const onlineUsers = useSelector((state) => (selectedChat ? state.socketReducer.onlineUsers[selectedChat.chatId] : [])) || []
  const draftMessage = useSelector((state) => (selectedChat ? state.messageReducer.draftMessages[selectedChat.chatId] : '')) || ''

  const chatTitle = selectedChat?.isGroupChat
    ? selectedChat?.title
    : selectedChat?.users.find((chatMember) => chatMember?.userId !== user?.userId)?.username

  const isUserOnline = onlineUsers.some((onlineUserId) => onlineUserId !== user?.userId)

  useEffect(() => {
    setInputText(draftMessage)
  }, [draftMessage, selectedChat])

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [chatMessages.messages])

  const handleSendMessage = useCallback(async () => {
    if (!inputText.trim() || !selectedChat || !user) return
    const content = inputText.trim()
    setInputText('')
    try {
      await chatService.sendMessage(selectedChat.chatId, content, user.userId, user.username)
    } catch (error) {
      console.error('Failed to send message:', error)
      setInputText(content)
    }
  }, [inputText, selectedChat, user, chatService])

  const handleTextChange = useCallback(
    (e) => {
      const text = e.target.value
      setInputText(text)
      if (selectedChat && user) {
        chatService.saveDraftMessage(selectedChat.chatId, text)
        if (text.length > 0) {
          chatService.sendTypingIndicator(selectedChat.chatId, user.userId)
        }
      }
    },
    [selectedChat, user, chatService],
  )

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleLoadMore = useCallback(() => {
    if (chatMessages.hasMore && !chatMessages.loadingMore && chatMessages.nextCursor && selectedChat) {
      chatService.loadMoreMessages(selectedChat.chatId, chatMessages.nextCursor)
    }
  }, [selectedChat, chatMessages.hasMore, chatMessages.loadingMore, chatMessages.nextCursor, chatService])

  const renderMessages = () => {
    const messages = chatMessages.messages
    const groups = []
    let currentGroup = null

    messages.forEach((msg, idx) => {
      const prevMsg = messages[idx - 1]
      const isSameSender = prevMsg && prevMsg.senderId === msg.senderId
      const isCloseInTime = prevMsg && Math.abs(new Date(msg.createdAt) - new Date(prevMsg.createdAt)) < 2 * 60 * 1000

      if (!isSameSender || !isCloseInTime) {
        if (currentGroup) groups.push(currentGroup)
        currentGroup = { senderId: msg.senderId, messages: [msg] }
      } else {
        currentGroup.messages.push(msg)
      }
    })
    if (currentGroup) groups.push(currentGroup)

    return groups.map((group, i) => {
      const isUser = group.senderId === user?.userId
      const sender = selectedChat?.users.find((u) => u.userId === group.senderId)
      return (
        <MessageGroup key={i} isUser={isUser}>
          {(!isUser) && <Avatar alt={sender?.username}>{sender?.username?.charAt(0).toUpperCase()}</Avatar>}
          <MessageContent>
            {!isUser && selectedChat?.isGroupChat && <SenderName>{sender?.username}</SenderName>}
            {group.messages.map((m) => (
              <Bubble key={m.messageId} isUser={isUser}>
                {m.content}
              </Bubble>
            ))}
            <MessageTime isUser={isUser}>{new Date(group.messages[group.messages.length - 1].createdAt).toLocaleTimeString()}</MessageTime>
          </MessageContent>
        </MessageGroup>
      )
    })
  }

  const renderTypingIndicator = () => {
    const otherTypingUsers = typingUsers.filter((id) => id !== user?.userId)
    if (otherTypingUsers.length === 0) return null
    const typingUser = selectedChat?.users.find((u) => u.userId === otherTypingUsers[0])
    return (
      <TypingIndicator>
        {otherTypingUsers.length === 1 ? `${typingUser?.username} is typing...` : `${typingUser?.username} and others are typing...`}
      </TypingIndicator>
    )
  }

  if (!selectedChat) {
    return (
      <BoxContainer>
        <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>Select a chat to start messaging</div>
      </BoxContainer>
    )
  }

  return (
    <BoxContainer selectedChat={selectedChat}>
      <Header>
        <BackButton onClick={() => window.history.back()}>&lt;</BackButton>
        <div>
          <ChatName>{chatTitle}</ChatName>
          <OnlineStatus online={isUserOnline}>{isUserOnline ? 'Online' : 'Offline'}</OnlineStatus>
        </div>
      </Header>

      <MessagesContainer>
        {chatMessages.hasMore && (
          <LoadMoreButton onClick={handleLoadMore} disabled={chatMessages.loadingMore}>
            {chatMessages.loadingMore ? 'Loading...' : 'Load More Messages'}
          </LoadMoreButton>
        )}
        {renderMessages()}
        {renderTypingIndicator()}
        <div ref={messagesEndRef} />
      </MessagesContainer>

      <InputContainer>
        <Input value={inputText} onChange={handleTextChange} onKeyDown={handleKeyDown} placeholder="Type a message..." maxLength={1000} />
        <SendButton onClick={handleSendMessage} disabled={!inputText.trim()}>
          Send
        </SendButton>
      </InputContainer>
    </BoxContainer>
  )
}

export default ChatBox

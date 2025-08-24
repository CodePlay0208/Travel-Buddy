import React, { useState, useRef, useEffect, useCallback, useMemo, memo } from 'react'
import styled, { keyframes } from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { ChatService } from '../../../../services/chat-service/chat-service.ts'

const BoxContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: white;
  position: relative;

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
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  margin-right: 10px;
  display: none;
  padding: 5px;
  border-radius: 50%;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    display: block;
  }
`

const HeaderInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const ChatName = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #333;
`

const PresenceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2px;
`

const OnlineDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => (props.online ? '#4CAF50' : '#999')};
  margin-right: 6px;
`

const OnlineStatus = styled.span`
  font-size: 12px;
  color: #666;
`

const GroupMemberCount = styled.span`
  font-size: 12px;
  color: #666;
  margin-top: 2px;
`

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);
`

const MessageGroup = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  flex-direction: ${(props) => (props.isUser ? 'row-reverse' : 'row')};
  animation: fadeIn 0.3s ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  margin: ${(props) => (props.isUser ? '0 0 0 8px' : '0 8px 0 0')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70%;
  min-width: 100px;
`

const SenderName = styled.span`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #666;
  margin-left: ${(props) => (props.isUser ? '0' : '8px')};
`

const Bubble = styled.div`
  background: ${(props) => (props.isUser ? 'linear-gradient(135deg, #8DD3BB 0%, #7bc2aa 100%)' : '#f1f3f4')};
  color: ${(props) => (props.isUser ? 'white' : '#333')};
  padding: 12px 16px;
  border-radius: 18px;
  border-top-left-radius: ${(props) => (props.isUser ? '18px' : '6px')};
  border-top-right-radius: ${(props) => (props.isUser ? '6px' : '18px')};
  margin-bottom: 4px;
  align-self: ${(props) => (props.isUser ? 'flex-end' : 'flex-start')};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  word-wrap: break-word;
  position: relative;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  }
`

const MessageFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isUser ? 'flex-end' : 'flex-start')};
  margin-top: 2px;
  gap: 6px;
`

const MessageTime = styled.div`
  font-size: 10px;
  color: #666;
`

const MessageStatusContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`

const StatusIcon = styled.div`
  font-size: 14px;
  color: ${(props) => props.color || '#666'};
  display: flex;
  align-items: center;
`

const ReadCount = styled.span`
  font-size: 9px;
  color: #666;
  min-width: 12px;
  text-align: center;
`

const LoadingSpinner = styled.div`
  width: 12px;
  height: 12px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #8dd3bb;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const bounce = keyframes`
  0%, 60%, 100% { transform: translateY(0); }
  30% { transform: translateY(-10px); }
`

const TypingIndicator = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  margin-bottom: 10px;
`

const TypingDots = styled.div`
  display: flex;
  gap: 4px;
  margin-right: 8px;
`

const TypingDot = styled.div`
  width: 6px;
  height: 6px;
  background-color: #8dd3bb;
  border-radius: 50%;
  animation: ${bounce} 1.4s ease-in-out infinite;
  animation-delay: ${(props) => props.delay || '0s'};
`

const TypingText = styled.span`
  font-style: italic;
  color: #666;
  font-size: 13px;
`

const InputContainer = styled.div`
  display: flex;
  padding: 15px;
  border-top: 1px solid #e0e0e0;
  background-color: #fff;
  align-items: flex-end;
  gap: 10px;
`

const InputWrapper = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: flex-end;
  background: #f8f9fa;
  border-radius: 25px;
  padding: 8px 16px;
  border: 2px solid transparent;
  transition: all 0.2s ease;

  &:focus-within {
    border-color: #8dd3bb;
    background: #fff;
    box-shadow: 0 0 0 3px rgba(141, 211, 187, 0.1);
  }
`

const Input = styled.textarea`
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  resize: none;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.4;
  min-height: 20px;
  max-height: 120px;
  padding: 0;

  &::placeholder {
    color: #999;
  }
`

const SendButton = styled.button`
  width: 44px;
  height: 44px;
  background: ${(props) => (props.disabled ? '#ccc' : 'linear-gradient(135deg, #8dd3bb 0%, #7bc2aa 100%)')};
  color: white;
  border: none;
  border-radius: 50%;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`

const LoadMoreButton = styled.button`
  align-self: center;
  padding: 10px 20px;
  margin-bottom: 15px;
  background: #fff;
  border: 2px solid #8dd3bb;
  border-radius: 20px;
  cursor: pointer;
  font-size: 13px;
  color: #8dd3bb;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: #8dd3bb;
    color: white;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(141, 211, 187, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #666;
  text-align: center;
  padding: 40px 20px;

  svg {
    width: 64px;
    height: 64px;
    margin-bottom: 16px;
    opacity: 0.5;
  }

  h3 {
    margin: 0 0 8px 0;
    font-size: 18px;
    color: #444;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: #666;
  }
`

// Message Status Component
const MessageStatusIndicator = memo(({ message, userId, isGroupChat }) => {
  if (message.senderId !== userId) return null

  const getMessageStatus = () => {
    if (message.readBy && message.readBy.length > 1) {
      return 'read'
    }
    if (message.deliveredTo && message.deliveredTo.length > 1) {
      return 'delivered'
    }
    if (message.status === 'sending') {
      return 'sending'
    }
    if (message.status === 'failed') {
      return 'failed'
    }
    return 'sent'
  }

  const status = getMessageStatus()

  const renderStatusIcon = () => {
    switch (status) {
      case 'sending':
        return <LoadingSpinner />
      case 'sent':
        return <StatusIcon color="#afafaa">✓</StatusIcon>
      case 'delivered':
        return <StatusIcon color="#afafaa">✓✓</StatusIcon>
      case 'read':
        return <StatusIcon color="#4fc3f7">✓✓</StatusIcon>
      case 'failed':
        return <StatusIcon color="#f44336">⚠</StatusIcon>
      default:
        return null
    }
  }

  return <MessageStatusContainer>{renderStatusIcon()}</MessageStatusContainer>
})

const ChatBox = ({ selectedChat }) => {
  const [inputText, setInputText] = useState('')
  const [isLoadingPresence, setIsLoadingPresence] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)
  const chatService = ChatService.getInstance()
  const dispatch = useDispatch()

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

  const chatTitle = useMemo(() => {
    return selectedChat?.isGroupChat
      ? selectedChat?.title
      : selectedChat?.users.find((chatMember) => chatMember?.userId !== user?.userId)?.username
  }, [selectedChat, user])

  const isUserOnline = useMemo(() => {
    return onlineUsers.some((onlineUserId) => onlineUserId !== user?.userId)
  }, [onlineUsers, user])

  const fetchPresence = useCallback(async () => {
    if (!selectedChat?.isGroupChat && !isLoadingPresence && selectedChat) {
      const receiverUser = selectedChat.users.find((chatMember) => chatMember?.userId !== user?.userId)

      if (receiverUser?.userId) {
        setIsLoadingPresence(true)
        try {
          // Dispatch your fetchUserPresence action here
          // await dispatch(fetchUserPresence({
          //   userId: receiverUser.userId,
          //   chatId: selectedChat.chatId
          // }))
        } catch (error) {
          console.error('Failed to fetch user presence:', error)
        } finally {
          setIsLoadingPresence(false)
        }
      }
    }
  }, [selectedChat, user, dispatch, isLoadingPresence])

  useEffect(() => {
    if (selectedChat) {
      chatService.joinChat(selectedChat.chatId, user?.userId)
      fetchPresence()

      return () => {
        chatService.leaveChat(selectedChat.chatId)
      }
    }
  }, [selectedChat, user, fetchPresence])

  useEffect(() => {
    setInputText(draftMessage)
  }, [draftMessage, selectedChat])

  useEffect(() => {
    if (messagesEndRef.current && chatMessages.messages.length > 0) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [chatMessages.messages])

  const handleSendMessage = useCallback(async () => {
    if (!inputText.trim() || !selectedChat || !user) return
    const content = inputText.trim()
    setInputText('')

    // Clear draft message
    chatService.saveDraftMessage(selectedChat.chatId, '')

    try {
      await chatService.sendMessage(selectedChat.chatId, content, user.userId, user.username)
    } catch (error) {
      console.error('Failed to send message:', error)
      setInputText(content)
      chatService.saveDraftMessage(selectedChat.chatId, content)
    }
  }, [inputText, selectedChat, user, chatService])

  const handleTextChange = useCallback(
    (e) => {
      const text = e.target.value
      setInputText(text)

      if (selectedChat && user) {
        chatService.saveDraftMessage(selectedChat.chatId, text)
        if (text.trim().length > 0) {
          chatService.sendTypingIndicator(selectedChat.chatId, user.userId)
        }
      }
    },
    [selectedChat, user, chatService],
  )

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        handleSendMessage()
      }
    },
    [handleSendMessage],
  )

  const handleLoadMore = useCallback(() => {
    if (chatMessages.hasMore && !chatMessages.loadingMore && chatMessages.nextCursor && selectedChat) {
      chatService.loadMoreMessages(selectedChat.chatId, chatMessages.nextCursor)
    }
  }, [selectedChat, chatMessages.hasMore, chatMessages.loadingMore, chatMessages.nextCursor, chatService])

  const adjustTextareaHeight = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto'
      inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, 120)}px`
    }
  }, [])

  useEffect(() => {
    adjustTextareaHeight()
  }, [inputText, adjustTextareaHeight])

  const renderMessages = useCallback(() => {
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
        <MessageGroup key={`group-${i}`} isUser={isUser}>
          {!isUser && <Avatar>{sender?.username?.charAt(0).toUpperCase() || '?'}</Avatar>}
          <MessageContent>
            {!isUser && selectedChat?.isGroupChat && <SenderName isUser={isUser}>{sender?.username || 'Unknown'}</SenderName>}
            {group.messages.map((m) => (
              <Bubble key={m.messageId} isUser={isUser}>
                {m.content}
              </Bubble>
            ))}
            <MessageFooter isUser={isUser}>
              <MessageTime>
                {new Date(group.messages[group.messages.length - 1].createdAt).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </MessageTime>
              <MessageStatusIndicator
                message={group.messages[group.messages.length - 1]}
                userId={user?.userId}
                isGroupChat={selectedChat?.isGroupChat}
              />
            </MessageFooter>
          </MessageContent>
        </MessageGroup>
      )
    })
  }, [chatMessages.messages, user, selectedChat])

  const renderTypingIndicator = useCallback(() => {
    const otherTypingUsers = typingUsers.filter((id) => id !== user?.userId)
    if (otherTypingUsers.length === 0) return null

    const typingUser = selectedChat?.users.find((u) => u.userId === otherTypingUsers[0])

    return (
      <TypingIndicator>
        <TypingDots>
          <TypingDot delay="0s" />
          <TypingDot delay="0.2s" />
          <TypingDot delay="0.4s" />
        </TypingDots>
        <TypingText>
          {otherTypingUsers.length === 1
            ? `${typingUser?.username || 'Someone'} is typing...`
            : `${typingUser?.username || 'Someone'} and ${otherTypingUsers.length - 1} others are typing...`}
        </TypingText>
      </TypingIndicator>
    )
  }, [typingUsers, user, selectedChat])

  if (!selectedChat) {
    return (
      <BoxContainer>
        <EmptyState>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
          <h3>Welcome to Chat</h3>
          <p>Select a conversation to start messaging</p>
        </EmptyState>
      </BoxContainer>
    )
  }

  return (
    <BoxContainer selectedChat={selectedChat}>
      <Header>
        <BackButton onClick={() => window.history.back()}>←</BackButton>
        <HeaderInfo>
          <ChatName>{chatTitle}</ChatName>
          {!selectedChat?.isGroupChat ? (
            <PresenceContainer>
              {isLoadingPresence ? (
                <LoadingSpinner />
              ) : (
                <>
                  <OnlineDot online={isUserOnline} />
                  <OnlineStatus>{isUserOnline ? 'Online' : 'Last seen recently'}</OnlineStatus>
                </>
              )}
            </PresenceContainer>
          ) : (
            <GroupMemberCount>{selectedChat.users.length} participants</GroupMemberCount>
          )}
        </HeaderInfo>
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
        <InputWrapper>
          <Input
            ref={inputRef}
            value={inputText}
            onChange={handleTextChange}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            maxLength={1000}
            rows={1}
          />
        </InputWrapper>
        <SendButton onClick={handleSendMessage} disabled={!inputText.trim()}>
          ➤
        </SendButton>
      </InputContainer>
    </BoxContainer>
  )
}

export default ChatBox

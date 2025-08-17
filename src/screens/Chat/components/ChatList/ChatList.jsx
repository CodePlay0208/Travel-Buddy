import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const ListContainer = styled.div`
  width: 300px;
  border-right: 1px solid #e0e0e0;
  overflow-y: auto;
  background-color: white;

  @media (max-width: 768px) {
    width: 100%;
    height: ${(props) => (props.selectedChat ? '0' : '100%')};
    overflow: hidden;
    transition: height 0.3s ease;
  }
`

const ChatItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? '#8DD3BB' : 'transparent')};
  color: ${(props) => (props.selected ? 'white' : 'black')};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => (props.selected ? '#8DD3BB' : '#f0f0f0')};
  }
`

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
  color: white;
`

const ChatInfo = styled.div`
  flex: 1;
  min-width: 0; /* Allows text-overflow to work */
`

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`

const ChatName = styled.h4`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const ChatTime = styled.span`
  font-size: 12px;
  color: ${(props) => (props.selected ? 'rgba(255,255,255,0.8)' : '#666')};
  margin-left: 8px;
  flex-shrink: 0;
`

const LastMessage = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${(props) => (props.selected ? 'rgba(255,255,255,0.9)' : '#666')};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const UnreadBadge = styled.div`
  background-color: #8DD3BB;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  margin-left: 8px;
  flex-shrink: 0;
`

const OnlineIndicator = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #4CAF50;
  position: absolute;
  bottom: 2px;
  right: 2px;
  border: 2px solid white;
`

const AvatarContainer = styled.div`
  position: relative;
  margin-right: 10px;
`

const EmptyState = styled.div`
  padding: 20px;
  text-align: center;
  color: #666;
  font-style: italic;
`

const LoadingState = styled.div`
  padding: 20px;
  text-align: center;
  color: #666;
`

const ChatList = ({ onSelectChat, selectedChat }) => {
  const { chatList, loading } = useSelector((state) => state.chatReducer)
  const { user } = useSelector((state) => state.authReducer)
  const onlineUsers = useSelector((state) => state.socketReducer.onlineUsers)

  const getChatTitle = (chat) => {
    if (chat?.isGroupChat) {
      return chat?.title
    }
    const otherUser = chat?.users.find((chatMember) => chatMember?.userId !== user?.userId)
    return otherUser?.username || 'Unknown User'
  }

  const getAvatarInitials = (chat) => {
    const title = getChatTitle(chat)
    return title.charAt(0).toUpperCase()
  }

  const isUserOnline = (chat) => {
    if (chat?.isGroupChat) return false
    
    const otherUser = chat?.users.find((chatMember) => chatMember?.userId !== user?.userId)
    if (!otherUser) return false
    
    const chatOnlineUsers = onlineUsers[chat.chatId] || []
    return chatOnlineUsers.includes(otherUser.userId)
  }

  const formatTime = (timestamp) => {
    if (!timestamp) return ''
    
    const date = new Date(timestamp)
    const now = new Date()
    const diffInHours = (now - date) / (1000 * 60 * 60)
    
    if (diffInHours < 24) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    } else if (diffInHours < 7 * 24) {
      return date.toLocaleDateString([], { weekday: 'short' })
    } else {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' })
    }
  }

  // const getUnreadCount = (chat) => {}

  if (loading) {
    return (
      <ListContainer selectedChat={selectedChat}>
        <LoadingState>Loading chats...</LoadingState>
      </ListContainer>
    )
  }

  if (!chatList || chatList.length === 0) {
    return (
      <ListContainer selectedChat={selectedChat}>
        <EmptyState>No chats available</EmptyState>
      </ListContainer>
    )
  }

  return (
    <ListContainer selectedChat={selectedChat}>
      {chatList.map((chat) => {
        const chatTitle = getChatTitle(chat)
        const isSelected = selectedChat?.chatId === chat.chatId
        // const unreadCount = getUnreadCount(chat)
        const online = isUserOnline(chat)

        return (
          <ChatItem
            key={chat.chatId}
            selected={isSelected}
            onClick={() => onSelectChat(chat)}
          >
            <AvatarContainer>
              <Avatar>
                {getAvatarInitials(chat)}
              </Avatar>
              {online && <OnlineIndicator />}
            </AvatarContainer>

            <ChatInfo>
              <ChatHeader>
                <ChatName selected={isSelected}>{chatTitle}</ChatName>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <ChatTime selected={isSelected}>
                    {formatTime(chat.updatedAt)}
                  </ChatTime>
                  {/* {unreadCount > 0 && !isSelected && (
                    <UnreadBadge>{unreadCount}</UnreadBadge>
                  )} */}
                </div>
              </ChatHeader>
              <LastMessage selected={isSelected}>
                {chat.lastMessage || 'No messages yet'}
              </LastMessage>
            </ChatInfo>
          </ChatItem>
        )
      })}
    </ListContainer>
  )
}

export default ChatList
import React from 'react'
import './ChatItem.css'

const ChatItem = (props) => {
  const { active, name, latestMessage, newMessages = 1 } = props
  return (
    <div className={`chat-item ${active ? 'active' : ''}`}>
      <div className="avatar"></div>
      <div className="chat-texts">
        <div className="chat-name">
          <span>{name}</span>
          {newMessages && <span className="new-message-badge">{newMessages}</span>}
        </div>
        {latestMessage && (
          <div className="chat-message">
            {latestMessage.content.length > 50 ? latestMessage.content.substring(0, 51) + '...' : latestMessage.content}
          </div>
        )}
      </div>
    </div>
  )
}

export default ChatItem

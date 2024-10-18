import { memo } from 'react'
import './ChatItem.css'

const ChatItem = (props) => {
  const { active, name, latestMessage, onClick, newMessages = 1 } = props

  return (
    <div className={`chat-item ${active ? 'active' : ''}`} onClick={onClick}>
      <div className="chat-item-sub-container">
        <div className="avatar"></div>
        <div className="chat-item-name-and-text">
          <div className="chat-name">
            <span>
              <p className="chat-item-name-text">{name}</p>
            </span>
          </div>
          {latestMessage && (
            <div className="chat-message">
              {latestMessage.content.length > 50 ? latestMessage.content.substring(0, 51) + '...' : latestMessage.content}
            </div>
          )}
        </div>
        {newMessages && (
          <div className="new-message-badge-container">
            <span className="new-message-badge">
              <p className="new-message-badge-text">{newMessages}</p>
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default memo(ChatItem)

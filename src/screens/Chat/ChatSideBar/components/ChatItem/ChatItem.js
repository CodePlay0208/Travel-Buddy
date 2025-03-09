import { memo } from 'react'
import './ChatItem.css'
import { images } from '../../../../../assets/images'

const ChatItem = (props) => {
  const { active, user, latestMessage, onClick, newMessages } = props

  const userProfileImg = user?.profilePic?.[0]?.preSignedUrl || images.defaultProfileImg
  return (
    <div className={`chat-item ${active ? 'active' : ''}`} onClick={onClick}>
      <div className="chat-item-sub-container">
        <div className="chat-item-name-and-text">
          <img src={userProfileImg} className="avatar" />
          <div className="chat-name">
            <span>
              <p className="chat-item-name-text">{user?.username}</p>
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

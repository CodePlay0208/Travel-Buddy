import { memo, useCallback } from 'react'
import './ChatBoxHeader.css'
import { connect } from 'react-redux'
import { getSenderName } from '../../../utils/chat-utils'
import { images } from '../../../../../assets/images'

const mapStateToProps = (state) => ({
  selectedChat: state.chatsReducer.selectedChat,
  user: state.authReducer.user,
  chats: state.chatsReducer.chats
})

const ChatBoxHeader = (props) => {
  const { selectedChat, user, chats, chatUser } = props
  const userProfileImg = chatUser?.profilePic?.[0] || images.defaultProfileImg

  const getChatUserName = useCallback(() => {
    if (selectedChat) {
      return getSenderName(user, selectedChat.users)
    } else if (chats && chats.length > 0) {
      return getSenderName(user, chats[0].users)
    }
    //TODO: handle when no chat
    return null
  }, [selectedChat])

  return (
    <div className="chatbox-header-top-bar">
      <div className="chatbox-header-user-info">
        <img src={userProfileImg} className="avatar" />
        <div className="chatbox-header-user-name">{getChatUserName()}</div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, null)(memo(ChatBoxHeader))
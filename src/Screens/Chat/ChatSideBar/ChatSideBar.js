import { memo, useEffect } from 'react'
import './ChatSideBar.css'
import { connect } from 'react-redux'
import { getAllChats, setSelectedChat } from '../../../actions/chats.action'
import { getSenderName } from '../utils/chat-utils'
import ChatItem from './components/ChatItem/ChatItem'

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  chats: state.chatsReducer.chats,
  selectedChat: state.chatsReducer.selectedChat,
})

const ChatSideBar = (props) => {
  const { user, selectedChat, setSelectedChat, chats } = props

  useEffect(() => {
    props.getAllChats()
  }, [props.getAllChats])

  return (
    <div className="chat-sidebar-container">
      {chats && Array.isArray(chats) ? (
        <div className="chat-items-container">
          {chats.map((chat) => {
            const isChatUserCorrect = chat.users.length > 1
            if (isChatUserCorrect) {
              return (
                <ChatItem
                  key={chat.chatId}
                  active={selectedChat?.chatId === chat.chatId}
                  name={getSenderName(user, chat.users)}
                  latestMessage={chat.latestMessage}
                  onClick={() => setSelectedChat(chat)}
                />
              )
            }
            return null
          })}
        </div>
      ) : (
        <div>No Chats Currently</div>
      )}
    </div>
  )
}

export default connect(mapStateToProps, { setSelectedChat, getAllChats })(memo(ChatSideBar))

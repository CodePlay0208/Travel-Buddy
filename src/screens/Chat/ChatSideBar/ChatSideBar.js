import { memo, useEffect } from 'react'
import './ChatSideBar.css'
import { connect } from 'react-redux'
import { getAllChats, setSelectedChat } from '../../../actions/chats.action'
import { getSenderFull } from '../utils/chat-utils'
import ChatItem from './components/ChatItem/ChatItem'

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  chats: state.chatsReducer.chats,
  selectedChat: state.chatsReducer.selectedChat,
  fetchAgain: state.chatsReducer.fetchAgain,
})

const ChatSideBar = (props) => {
  const { user, selectedChat, setSelectedChat, chats, fetchAgain, className, toggleSidebar } = props

  useEffect(() => {
    props.getAllChats()
  }, [fetchAgain, props.getAllChats])

  return (
    <div className={`chat-sidebar-container ${className}`}>
      {chats && Array.isArray(chats) ? (
        <div className="chat-items-container">
          {chats.map((chat) => {
            const isChatUserCorrect = chat.users.length > 1
            if (isChatUserCorrect) {
              return (
                <ChatItem
                  key={chat.chatId}
                  active={selectedChat?.chatId === chat.chatId}
                  user={getSenderFull(user, chat.users)}
                  latestMessage={chat.latestMessage}
                  onClick={() => {
                    toggleSidebar()
                    setSelectedChat(chat)
                  }}
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

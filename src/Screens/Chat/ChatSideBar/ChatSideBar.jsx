import { memo } from 'react'
import './ChatSideBar.css'
import { connect } from 'react-redux'
import { setSelectedChat } from '../../../actions/chats.action'
import { getSenderName } from '../utils/chat-utils'
import ChatItem from './components/ChatItem/ChatItem'

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  chats: state.chatsReducer.chats,
  selectedChat: state.chatsReducer.selectedChat,
})

const ChatSidebar = (props) => {
  const { user, selectedChat, setSelectedChat, chats } = props
  return (
    <div className="chat-sidebar-container">
      {chats ? (
        <div className="chat-items-container">
          {chats.map((chat) => {
            const isChatUserCorrect = chat.users.length > 1
            if (isChatUserCorrect) {
              return (
                <ChatItem
                  key={chat?.chatId}
                  active={selectedChat?.chatId === chat?.chatId}
                  name={getSenderName(user, chat.users)}
                  latestMessage={chat?.latestMessage}
                  onClick={() => setSelectedChat(chat)}
                />
              )
            }
          })}
        </div>
      ) : (
        <>No Chats Currently</>
      )}
    </div>
  )
}

export default connect(mapStateToProps, { setSelectedChat })(memo(ChatSidebar))
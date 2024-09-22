import { useEffect, memo } from 'react'
import './ChatSideBar.css'
import ChatItem from './ChatItem'
import { connect } from 'react-redux'
import { getAllChats } from '../../../actions/chats.action'
import { toast } from 'react-toastify'
import { getSender } from '../utils/chat-utils'

const mapStateToProps = (state) => ({
  user: state.profileReducer.profile,
  chats: state.chatsReducer.chats,
  selectedChat: state.chatsReducer.selectedChat
})

const Sidebar = (props) => {
  const { user, chats, selectedChat } = props

  useEffect(() => {
    getAllChats()
  }, [])

  return (
    <div className="chat-sidebar-container">
      {
        chats ? (
          <div className='chat-items-container'>
            {
              chats.map((chat) => (
                <ChatItem
                  key={chat._id}
                  active={selectedChat === chat}
                  name={getSender(user, chat.users)}
                  latestMessage={chat.latestMessage}
                />
              ))
            }
          </div>
        ) : (<>
        </>)
      }
    </div>
  )
}

export default connect(mapStateToProps, { getAllChats })(memo(Sidebar))

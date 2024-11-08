import { memo, useEffect, useRef } from 'react'
import './ChatBox.css'
import { connect } from 'react-redux'
import { ChatBoxHeader } from './components/ChatBoxHeader'
import ScrollableChat from './components/ScrollableChat/ScrollableChat'
import {
  getMessagesForChat,
  onMessageReceivedEvent,
  onStopTypingEvent,
  onTypingEvent,
  offTypingEvent,
  offStopTypingEvent,
  offMessageReceivedEvent,
  clearMessages,
} from '../../../actions/chats.action'
import ChatInput from './components/ChatInput/ChatInput'

const mapStateToProps = (state) => ({
  selectedChat: state.chatsReducer.selectedChat,
  user: state.authReducer.user,
  chats: state.chatsReducer.chats,
  isLoading: state.chatsReducer.isLoading,
  notifications: state.chatsReducer.notifications,
  messages: state.chatsReducer.messages,
  isOtherTyping: state.chatsReducer.isOtherTyping,
  fetchAgain: state.chatsReducer.fetchAgain,
})

let selectedChatCompare

const ChatBox = (props) => {
  const { selectedChat, notifications, user, messages, chats, fetchAgain, isOtherTyping } = props
  const { getMessagesForChat, onStopTypingEvent, onTypingEvent, onMessageReceivedEvent, clearMessages, offMessageReceivedEvent } = props

  const onMessageReceivedEventFunction = useRef(() => {
    onMessageReceivedEvent()
  }).current

  // useEffect(() => {
  //   onTypingEvent()
  //   onStopTypingEvent()

  //   // return () => {
  //   //   offTypingEvent()
  //   //   offStopTypingEvent()
  //   // }
  //   // }, [onTypingEvent, onTypingEvent])
  // }, [])

  useEffect(() => {
    if (!selectedChat) return
    // const recepientId = selectedChat?.users[0].userId === user.userId ? selectedChat?.users[1].userId : selectedChat?.users[0].userId
    getMessagesForChat(selectedChat?.chatId, user)
    // selectedChatCompare = selectedChat
  }, [selectedChat])

  useEffect(() => {
    console.log('-------useEFFECT---------------')
    onMessageReceivedEvent()

    return () => {
      clearMessages()
      offMessageReceivedEvent()
    }
    // }, [selectedChatCompare, notifications, fetchAgain])
  }, [])

  return (
    <>
      {true ? (
        <>
          <div className="chatbox">
            <ChatBoxHeader />
            <div className="chatbox-messages">{false ? <div>Loading</div> : <ScrollableChat isOtherTyping={isOtherTyping} />}</div>
            <ChatInput selectedChat={selectedChat} />
          </div>
        </>
      ) : null}
    </>
  )
}

export default connect(mapStateToProps, { getMessagesForChat, onStopTypingEvent, onTypingEvent, onMessageReceivedEvent, clearMessages, offMessageReceivedEvent })(
  memo(ChatBox),
)
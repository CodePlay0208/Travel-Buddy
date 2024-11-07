import { memo, useEffect, useState, useRef, useCallback } from 'react'
import './ChatBox.css'
import { connect } from 'react-redux'
import { ChatBoxHeader } from './components/ChatBoxHeader'
import Socket from '../../../services/socket/socket'
import Picker from 'emoji-picker-react'
import { SVG } from '../../../assets'
import { setAuthToken } from '../../../services/api-services/api-services'
import { ChatsApi } from '../../../services/api-services/api-invokes'
import { updateNotifications, setFetchAgain } from '../../../actions/chats.action'

const mapStateToProps = (state) => ({
  selectedChat: state.chatsReducer.selectedChat,
  user: state.authReducer.user,
  // notifications: state.chatsReducer.notifications,
  fetchAgain: state.chatsReducer.fetchAgain
})

const socket = new Socket()
let selectedChatCompare

const ChatBox = (props) => {
  const [messageText, setMessageText] = useState('')
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [isSelfTyping, setIsSelfTyping] = useState(false)
  const { selectedChat, user, setFetchAgain, fetchAgain } = props
  const [isOtherTyping, setIsOtherTyping] = useState(false)
  const [messages, setMessages] = useState([])
  const [socketConnected, setSocketConnected] = useState(false)
  const [notifications, setNotifications] = useState([])

  const onEmojiClick = useRef((event, emojiObject) => {
    setMessageText((prevState) => prevState + emojiObject.emoji)
    setShowEmojiPicker(false)
  }).current

  const fetchMessagesForChat = async () => {
    if (!selectedChat) return
    if (localStorage.token) {
      setAuthToken(localStorage.token)
    }
    const query = { chatId: selectedChat?.chatId }
    try {
      const res = await ChatsApi.getMessagesForSingleChat(query)
      setMessages(res.data.messages.reverse())
      socket.emit('join chat', { roomId: selectedChat.chatId, userId: user.userId })
    } catch (e) {
      console.log('Error: fetchMessagesForChat-', e)
    }
  }

  const getMessageSender = useCallback((senderId) => {
    if (!senderId) return null
    return selectedChat?.users[0]?.userId === senderId ? selectedChat?.users[0] : selectedChat?.users[1]
  }, [selectedChat])

  const onSendMessage = async (e) => {
    e.preventDefault()
    if (messageText) {
      console.log('onSendMessage called')
      socket.emit('stop typing', selectedChat.chatId)
      if (localStorage.token) {
        setAuthToken(localStorage.token)
      }
      const body = JSON.stringify({ chatId: selectedChat?.chatId, content: messageText })
      try {
        const res = await ChatsApi.postNewMessage(body)
        socket.emit('new message', res.data)
        setMessages([...messages, res.data])
        setMessageText('')
      } catch (e) {
        console.log('Error: onSendMessage-', e)
      }
    }
  }

  useEffect(() => {
    socket.connect()
    socket.emit('setup', user)
    socket.on('connected', () => setSocketConnected(true))
    socket.on('typing', () => setIsOtherTyping(true))
    socket.on('stop typing', () => setIsOtherTyping(false))
  }, [])

  useEffect(() => {
    fetchMessagesForChat()
    selectedChatCompare = selectedChat
  }, [selectedChat])

  useEffect(() => {
    socket.on('message received', (newMessageRecieved) => {
      if (
        !selectedChatCompare || // if chat is not selected or doesn't match current chat
        selectedChatCompare.chatId !== newMessageRecieved.chatId
      ) {
        if (!notifications.includes(newMessageRecieved)) {
          setNotifications([...notifications, newMessageRecieved])
          setFetchAgain(!fetchAgain)
        }
      } else {
        setMessages([...messages, newMessageRecieved])
      }
    })
  })

  const typingHandler = (e) => {
    setMessageText(e.target.value)

    if (!socketConnected) return

    if (!isSelfTyping) {
      setIsSelfTyping(true)
      socket.emit('typing', selectedChat.chatId)
    }
    let lastTypingTime = new Date().getTime()
    var timerLength = 3000
    setTimeout(() => {
      var timeNow = new Date().getTime()
      var timeDiff = timeNow - lastTypingTime
      if (timeDiff >= timerLength && isSelfTyping) {
        socket.emit('stop typing', selectedChat.chatId)
        setIsSelfTyping(false)
      }
    }, timerLength)
  }

  const toggleEmojiPicker = useCallback(() => setShowEmojiPicker((prevState) => !prevState), [])

  return (
    <>
      {true ? (
        <>
          <div className="chatbox">
            <ChatBoxHeader />
            <div className="chatbox-messages">
              {false ? (
                <div>Loading</div>
              ) : (
                <div className="scrollable-chat-container">
                  {messages &&
                    messages.length &&
                    messages.map((m, i) => {
                      const sender = getMessageSender(m?.senderId)
                      console.log('sender', sender)
                      console.log('selectedChat', selectedChat)
                      return (
                        <div key={i} className={`message-container ${sender?.userId === user?.userId ? 'user' : 'sender'}`}>
                          <div className={`message-content ${sender?.userId === user.userId ? 'user' : 'sender'}`}>
                            <span className={`message-content-text ${sender?.userId === user.userId ? 'user' : 'sender'}`}>
                              {m.content}
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  {isOtherTyping && (
                    <div className="message-typing">
                      <span className="message-typing-text">Typing...</span>
                    </div>
                  )}
                </div>
              )}
            </div>
            {showEmojiPicker && <Picker className="emoji-picker" pickerStyle={{ width: '100%' }} onEmojiClick={onEmojiClick} />}
            <div className="chatinput-bar">
              <form className="chatinput-form" onSubmit={onSendMessage}>
                <img className="chat-input-emoji-picker" src={SVG.AddEmojiIcon} onClick={toggleEmojiPicker} />
                <input type="text" placeholder="Enter your message..." className="chatinput" value={messageText} onChange={typingHandler} />
                <button type="submit" className="chatinput-actions">
                  <img className="chatinput-submit-button" src={SVG.ChatInputIcon} />
                </button>
              </form>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default connect(mapStateToProps, { setFetchAgain })(memo(ChatBox))

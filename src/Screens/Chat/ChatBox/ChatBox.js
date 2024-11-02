import { memo, useEffect, useState, useRef, useCallback } from 'react'
import './ChatBox.css'
import { connect } from 'react-redux'
import { ChatBoxHeader } from './components/ChatBoxHeader'
import ScrollableChat from './components/ScrollableChat/ScrollableChat'
import {
  getMessagesForChat,
  setSocketState,
  setTypingState,
  updateNotifications,
  setFetchAgain,
  updateMessages,
} from '../../../actions/chats.action'
// import ChatInput from './components/ChatInput/ChatInput'
import Socket from '../../../services/socket/socket'
import { sendMessage } from '../../../actions/chats.action'
import Picker from 'emoji-picker-react'
import { SVG } from '../../../assets'
import { setAuthToken } from '../../../services/api-services/api-services'
import { ChatsApi } from '../../../services/api-services/api-invokes'
import { debounce } from 'lodash'

const mapStateToProps = (state) => ({
  selectedChat: state.chatsReducer.selectedChat,
  user: state.authReducer.user,
  // isLoading: state.chatsReducer.isLoading,
  // notifications: state.chatsReducer.notifications,
  messages: state.chatsReducer.messages,
  // isOtherTyping: state.chatsReducer.isOtherTyping,
  // fetchAgain: state.chatsReducer.fetchAgain,
  // socketConnected: state.chatsReducer.socketConnected,
})

const socket = new Socket()
let selectedChatCompare

const ChatBox = (props) => {
  const [messageText, setMessageText] = useState('')
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [isSelfTyping, setIsSelfTyping] = useState(false)
  const { selectedChat, user, messages } = props
  const { getMessagesForChat, updateMessages} = props
  const [isOtherTyping, setIsOtherTyping] = useState(false);
  // const [messages, setMessages] = useState([]);
  const [socketConnected, setSocketConnected] = useState(false);
  // const onMessageReceivedEventFunction = useRef(() => {
  //   onMessageReceivedEvent()
  // }).current

  // useEffect(() => {
  //   onTypingEvent()
  //   onStopTypingEvent()

  //   // return () => {
  //   //   offTypingEvent()
  //   //   offStopTypingEvent()
  //   // }
  //   // }, [onTypingEvent, onTypingEvent])
  // }, [])

  // useEffect(() => {
  //   if (!selectedChat) return
  //   // const recepientId = selectedChat?.users[0].userId === user.userId ? selectedChat?.users[1].userId : selectedChat?.users[0].userId
  //   getMessagesForChat(selectedChat?.chatId, user)
  //   // selectedChatCompare = selectedChat
  // }, [selectedChat])

  // useEffect(() => {
  //   console.log('-------useEFFECT---------------')
  //   onMessageReceivedEvent()

  //   return () => {
  //     clearMessages()
  //     offMessageReceivedEvent()
  //   }
  //   // }, [selectedChatCompare, notifications, fetchAgain])
  // }, [])

  const onEmojiClick = useRef((event, emojiObject) => {
    setMessageText((prevState) => prevState + emojiObject.emoji)
    setShowEmojiPicker(false)
  }).current

  const fetchMessagesForChat = () => {
    if (!selectedChat) return
    getMessagesForChat(selectedChat?.chatId, user)
    socket.emit('join chat', { roomId: selectedChat.chatId, userId: user.userId})
  }

  const getMessageSender = (senderId) => {
    if (!senderId) return null
    return selectedChat?.users[0]?.userId === senderId ? selectedChat?.users[0] : selectedChat?.users[1]
  }

  // const onSendMessage = async (e) => {
  //   if (e.key === 'Enter' && messageText) {
  //     socket.emit('stop typing', selectedChat.chatId)
  //     const sendMessageRes = await sendMessage(selectedChat?.chatId, messageText)
  //     socket.emit("new message", sendMessageRes)
  //     setMessageText('')
  //   }
  // }

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
        updateMessages(res.data);
        setMessageText('')
      } catch (e) {
        console.log('eeeeeeeee', e)
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
      // if (
      //   !selectedChatCompare || // if chat is not selected or doesn't match current chat
      //   selectedChatCompare.chatId !== newMessageRecieved.chatId
      // ) {
      //   if (!notifications.includes(newMessageRecieved)) {
      //     updateNotifications(newMessageRecieved)
      //     setFetchAgain(!fetchAgain)
      //   }
      // } else {
        updateMessages(newMessageRecieved);
    //   }
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

  // const typingHandler = useCallback(
  //   debounce((e) => {
  //     setMessageText(e.target.value);
  
  //     if (!socketConnected) return;
  
  //     if (!isSelfTyping) {
  //       setIsSelfTyping(true);
  //       socket.emit('typing', selectedChat.chatId);
  //     }
  
  //     setTimeout(() => {
  //       socket.emit('stop typing', selectedChat.chatId);
  //       setIsSelfTyping(false);
  //     }, 3000);
  //   }, 300),
  //   [socketConnected, selectedChat, isSelfTyping]
  // );

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
                // <ScrollableChat isOtherTyping={isOtherTyping} />
                <div className="scrollable-chat-container">
                  {messages &&
                    messages.length &&
                    messages.reverse().map((m, i) => {
                      const sender = getMessageSender(m?.senderId)
                      return (
                        <div key={i} className={`message-container ${sender?.userId === user?.userId ? 'user' : 'sender'}`}>
                          {/* {(isSameSender(messages, m, i, user.userId) || isLastMessage(messages, i, user.userId)) && (
                            <div className="message-tooltip">
                              <img className="message-avatar" alt={m.sender.name} src={m.sender.pic} />
                              <span className="tooltip-text">{m.sender.name}</span>
                            </div>
                          )} */}
                          <div
                            className={`message-content ${sender?.userId === user.userId ? 'user' : 'sender'}`}
                            style={
                              {
                                // marginLeft: isSameSenderMargin(messages, m, i, user.userId),
                                // marginTop: isSameUser(messages, m, i, user.userId) ? 3 : 10,
                              }
                            }
                          >
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
            {/* <ChatInput selectedChat={selectedChat} /> */}
            {showEmojiPicker && <Picker className="emoji-picker" pickerStyle={{ width: '100%' }} onEmojiClick={onEmojiClick} />}
            <div className="chatinput-bar">
              {/* {isOtherTyping && (
                    <div className="message-typing">
                      <span className="message-typing-text">Typing...</span>
                    </div>
                  )} */}
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

export default connect(mapStateToProps, {
  getMessagesForChat,
  updateMessages
})(memo(ChatBox))
// export default memo(ChatBox)

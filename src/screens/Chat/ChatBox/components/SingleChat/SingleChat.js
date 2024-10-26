// import React, { useContext, useEffect, useState, memo } from 'react'
// import axios from 'axios'
// import io from 'socket.io-client'
// import './SingleChat.css'
// import { ChatContext } from '../../../../../utils/Context/ChatContext'
// import { toast, ToastContainer } from 'react-toastify'
// import ScrollableChat from '../../../ScrollableChat/ScrollableChat'
// import { connect } from 'react-redux'
// import Socket from '../../../services/socket/socket'

// const ENDPOINT = 'http://localhost:4000'

// const socket = new Socket()
// let selectedChatCompare

// const mapStateToProps = (state) => ({
//   selectedChat: state.chatsReducer.selectedChat,
//   user: state.authReducer.user,
//   chats: state.chatsReducer.chats,
//   isLoading: state.chatsReducer.isLoading,
//   notifications: state.chatsReducer.notifications,
//   messages: state.chatsReducer.messages,
//   isOtherTyping: state.chatsReducer.isOtherTyping,
//   fetchAgain: state.chatsReducer.fetchAgain,
// })

// const SingleChat = (props) => {
//   const { selectedChat, notifications, user, messages, chats, fetchAgain, isOtherTyping } = props
//   const { getMessagesForChat, onStopTypingEvent, onTypingEvent, onMessageReceivedEvent, clearMessages } = props
//   const [newMessage, setNewMessage] = useState('')

//   const fetchMessages = async () => {
//     if (!selectedChat) return
//     getMessagesForChat(selectedChat?.chatId, user)
//     socket.emit('join chat', selectedChat?.chatId)
//   }

//   const sendMessage = async (event) => {
//     if (event.key === 'Enter' && newMessage) {
//       socket.emit('stop typing', selectedChat?.chatId)
//       try {
//         const config = {
//           headers: {
//             'Content-type': 'application/json',
//           },
//         }
//         setNewMessage('')
//         const { data } = await axios.post(
//           'http://localhost:4000/message/createNewMessage',
//           {
//             content: newMessage,
//             chatId: userChatValues.selectedChat,
//           },
//           {
//             ...config,
//             withCredentials: true,
//           },
//         )
//         socket.emit('new message', data)
//         setMessages([...messages, data])
//       } catch (error) {
//         console.log(error)
//       }
//     }
//   }

//   useEffect(() => {
//     socket = io(ENDPOINT)
//     socket.emit('setup', user)
//     socket.on('connected', () => setSocketConnected(true))
//     socket.on('typing', () => setisOtherTyping(true))
//     socket.on('stop typing', () => setisOtherTyping(false))

//     return () => {
//       socket.off('connected')
//       socket.off('typing')
//       socket.off('stop typing')
//       socket.disconnect()
//     }
//   }, [])

//   useEffect(() => {
//     fetchMessages()

//     selectedChatCompare = userChatValues.selectedChat
//   }, [userChatValues.selectedChat])

//   useEffect(() => {
//     socket.on('message recieved', (newMessageReceived) => {
//       if (
//         !selectedChatCompare || // if chat is not selected or doesn't match current chat
//         selectedChatCompare._id !== newMessageReceived.chat._id
//       ) {
//         if (!userChatValues.notification.includes(newMessageReceived)) {
//           setUserChatValues((currentValues) => ({
//             ...currentValues,
//             notification: [newMessageReceived, ...currentValues.notification],
//           }))
//           // setFetchAgain(!fetchAgain)
//         }
//       } else {
//         setMessages([...messages, newMessageReceived])
//       }
//     })

//     return () => {
//       socket.off('message received')
//     }
//   })

//   const typingHandler = (e) => {
//     setNewMessage(e.target.value)

//     if (!socketConnected) return

//     if (!typing) {
//       setTyping(true)
//       socket.emit('typing', userChatValues.selectedChat._id)
//     }
//     let lastTypingTime = new Date().getTime()
//     var timerLength = 3000
//     setTimeout(() => {
//       var timeNow = new Date().getTime()
//       var timeDiff = timeNow - lastTypingTime
//       if (timeDiff >= timerLength && typing) {
//         socket.emit('stop typing', userChatValues.selectedChat._id)
//         setTyping(false)
//       }
//     }, timerLength)
//   }

//   return (
//     <>
//       {selectedChat ? (
//         <div className="single-chat-container">
//           <div className="messages-container">
//             <div className="messages">
//               <ScrollableChat messages={messages} />
//             </div>
//           </div>
//           <div className="message-input">
//             {isOtherTyping && (
//               <div className="message-typing">
//                 <span className="message-typing-text">Typing...</span>
//               </div>
//             )}
//             <input type="text" placeholder="Enter a message..." value={newMessage} onChange={typingHandler} onKeyDown={sendMessage} />
//           </div>
//         </div>
//       ) : (
//         <div className="single-chat-container">
//           <div className="no-chat-selected">Click on a user to start chatting</div>
//         </div>
//       )}
//       <ToastContainer />
//     </>
//   )
// }

// export default connect(mapStateToProps, null)(memo(SingleChat))

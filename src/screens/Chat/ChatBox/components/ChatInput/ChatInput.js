// import { useState, memo } from 'react'
// import './ChatInput.css'
// import { SVG } from '../../../../../assets'
// import Picker from 'emoji-picker-react'
// import { connect } from 'react-redux'

// import { sendMessage, emitTyping, setTypingState, emitStopTyping } from '../../../../../actions/chats.action'

// const mapStateToProps = (state) => ({
//   // selectedChat: state.chatsReducer.selectedChat,
//   user: state.authReducer.user,
//   isOtherTyping: state.chatsReducer.isOtherTyping,
// })

// const ChatInput = (props) => {
//   const { user, sendMessage, selectedChat, isOtherTyping, setTypingState, emitTyping, emitStopTyping } = props
//   const [messageText, setMessageText] = useState('')
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false)
//   const [isSelfTyping, setIsSelfTyping] = useState(false)

//   const onEmojiClick = (event, emojiObject) => {
//     setMessageText((prevState) => prevState + emojiObject.emoji)
//     setShowEmojiPicker(false)
//   }

//   const onSendMessage = async (e) => {
//     e.preventDefault()
//     if (messageText) {
//       const recepientId = selectedChat?.users[0].userId === user.userId ? selectedChat?.users[1].userId : selectedChat?.users[0].userId
//       // emitStopTyping(selectedChat?.chatId, user?.userId)
//       sendMessage(selectedChat?.chatId, messageText)
//       setMessageText('')
//     }
//   }

//   const typingHandler = (e) => {
//     setMessageText(e.target.value)
//     // if (!socketConnected) return

//     // const recepientId = selectedChat?.users[0].userId === user.userId ? selectedChat?.users[1].userId : selectedChat?.users[0].userId
//     // if (!isSelfTyping) {
//     //   setIsSelfTyping(true)
//     //   emitTyping(selectedChat?.chatId, user?.userId)
//     // }
//     // let lastTypingTime = new Date().getTime()
//     // var timerLength = 1000
//     // setTimeout(() => {
//     //   var timeNow = new Date().getTime()
//     //   var timeDiff = timeNow - lastTypingTime
//     //   if (timeDiff >= timerLength && isOtherTyping) {
//     //     emitStopTyping(selectedChat?.chatId, user?.userId)
//     //     setIsSelfTyping(false)
//     //   }
//     // }, timerLength)
//   }

//   return (
//     <>
//       {showEmojiPicker && <Picker className="emoji-picker" pickerStyle={{ width: '100%' }} onEmojiClick={onEmojiClick} />}
//       <div className="chatinput-bar">
//         {/* {isOtherTyping && (
//           <div className="message-typing">
//             <span className="message-typing-text">Typing...</span>
//           </div>
//         )} */}
//         <form className="chatinput-form" onSubmit={onSendMessage}>
//           <img className="chat-input-emoji-picker" src={SVG.AddEmojiIcon} onClick={() => setShowEmojiPicker((prevState) => !prevState)} />
//           <input type="text" placeholder="Enter your message..." className="chatinput" value={messageText} onChange={typingHandler} />
//           <button type="submit" className="chatinput-actions">
//             <img className="chatinput-submit-button" src={SVG.ChatInputIcon} />
//           </button>
//         </form>
//       </div>
//     </>
//   )
// }

// export default connect(mapStateToProps, { sendMessage, emitTyping, setTypingState, emitStopTyping })(memo(ChatInput))

// import React, { useEffect, useRef, memo } from 'react'
// import './ScrollableChat.css'
// import { connect } from 'react-redux'

// const mapStateToProps = (state) => ({
//   user: state.authReducer.user,
//   messages: state.chatsReducer.messages,
//   selectedChat: state.chatsReducer.selectedChat,
// })

// const ScrollableChat = (props) => {
//   const { user, messages, selectedChat, isOtherTyping } = props

//   // const scrollRef = useRef()

//   const getMessageSender = (senderId) => {
//     if (!senderId) return null
//     return selectedChat?.users[0]?.userId === senderId ? selectedChat?.users[0] : selectedChat?.users[1]
//   }

//   // useEffect(() => {
//   //   scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
//   // }, [])

//   return (
//     <div className="scrollable-chat-container">
//       {messages &&
//         messages.length &&
//         messages.reverse().map((m, i) => {
//           const sender = getMessageSender(m?.senderId)
//           return (
//             <div key={i} className={`message-container ${sender?.userId === user?.userId ? 'user' : 'sender'}`}>
//               {/* {(isSameSender(messages, m, i, user.userId) || isLastMessage(messages, i, user.userId)) && (
//                 <div className="message-tooltip">
//                   <img className="message-avatar" alt={m.sender.name} src={m.sender.pic} />
//                   <span className="tooltip-text">{m.sender.name}</span>
//                 </div>
//               )} */}
//               <div
//                 className={`message-content ${sender?.userId === user.userId ? 'user' : 'sender'}`}
//                 style={
//                   {
//                     // marginLeft: isSameSenderMargin(messages, m, i, user.userId),
//                     // marginTop: isSameUser(messages, m, i, user.userId) ? 3 : 10,
//                   }
//                 }
//               >
//                 <span className={`message-content-text ${sender?.userId === user.userId ? 'user' : 'sender'}`}>{m.content}</span>
//               </div>
//             </div>
//           )
//         })}
//       {isOtherTyping && (
//         <div className="message-typing">
//           <span className="message-typing-text">Typing...</span>
//         </div>
//       )}
//     </div>
//   )
// }

// export default connect(mapStateToProps, null)(memo(ScrollableChat))

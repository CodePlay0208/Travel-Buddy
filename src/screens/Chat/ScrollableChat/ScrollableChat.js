import React, { useEffect, useRef, useContext, memo } from 'react'
import { isLastMessage, isSameSender, isSameSenderMargin, isSameUser } from '../utils/chat-utils'
import './ScrollableChat.css'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  user: state.profileReducer.profile
})

const ScrollableChat = (props) => {
  const { user, messages } = props
  const scrollRef = useRef()

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="scrollable-chat-container">
      {messages &&
        messages.map((m, i) => (
          <div className="message-container" key={m._id} ref={scrollRef}>
            {(isSameSender(messages, m, i, user._id) || isLastMessage(messages, i, user._id)) && (
              <div className="message-tooltip">
                <img className="message-avatar" alt={m.sender.name} src={m.sender.pic} />
                <span className="tooltip-text">{m.sender.name}</span>
              </div>
            )}
            <span
              className={`message-content ${m.sender._id === user._id ? 'user' : 'sender'}`}
              style={{
                marginLeft: isSameSenderMargin(messages, m, i, user._id),
                marginTop: isSameUser(messages, m, i, user._id) ? 3 : 10,
              }}
            >
              {m.content}
            </span>
          </div>
        ))}
    </div>
  )
}

export default connect(mapStateToProps, null)(memo(ScrollableChat))

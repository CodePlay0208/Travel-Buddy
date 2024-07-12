import React, { useEffect, useRef, useContext } from 'react';
import { isLastMessage, isSameSender, isSameSenderMargin, isSameUser } from '../../../Utils/Config';
import './ScrollableChat.css';
import { UserLoginContext } from '../../../Utils/Context/UserLoginContext';

const ScrollableChat = ({ messages }) => {
  const { loggedInUserValues } = useContext(UserLoginContext);
  const scrollRef = useRef();
  console.log("the user is", loggedInUserValues);
  console.log("the messages are", messages);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="scrollable-chat-container">
      {messages && messages.map((m, i) => (
        
        <div className="message-container" key={m._id} ref={scrollRef}>
          {(isSameSender(messages, m, i, loggedInUserValues._id) || isLastMessage(messages, i, loggedInUserValues._id)) && (
            <div className="message-tooltip">
              <img
                className="message-avatar"
                alt={m.sender.name}
                src={m.sender.pic}
              />
              <span className="tooltip-text">{m.sender.name}</span>
            </div>
          )}
          <span
            className={`message-content ${m.sender._id === loggedInUserValues._id ? 'user' : 'sender'}`}
            style={{
              marginLeft: isSameSenderMargin(messages, m, i, loggedInUserValues._id),
              marginTop: isSameUser(messages, m, i, loggedInUserValues._id) ? 3 : 10,
            }}
          >
            {m.content}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ScrollableChat;

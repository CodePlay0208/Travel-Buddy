import React from 'react';
import './ChatItem.css';

const ChatItem = ({ active, name, message, newMessages }) => {
  return (
    <div className={`chat-item ${active ? 'active' : ''}`}>
      <div className="avatar"></div>
      <div className="chat-texts">
        <div className="chat-name">
          <span>{name}</span>
          {newMessages && <span className="new-message-badge">{newMessages}</span>}
        </div>
        <div className="chat-message">{message}</div>
      </div>
    </div>
  );
};

export default ChatItem;

import React from 'react';
import './ChatBox.css';
import ChatInput from './ChatInput';

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-top-bar">
        <div className="chat-user-info">
          <div className="chat-user-avatar"></div>
          <div className="chat-user-name">David Moore</div>
        </div>
      </div>
      <div className="chat-messages">
        {/* Messages will go here */}
      </div>
      <ChatInput />
    </div>
  );
};

export default Chat;

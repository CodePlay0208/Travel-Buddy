import React from 'react';
import './ChatBox.css';
import ChatInput from './ChatInput';

const ChatBox = () => {
  return (
    <div className="chatbox">
      <div className="chatbox-top-bar">
        <div className="chatbox-user-info">
          <div className="chatbox-user-avatar"></div>
          <div className="chatbox-user-name">David Moore</div>
        </div>
      </div>
      <div className="chatbox-messages">
        {/* Messages will go here */}
      </div>
      <ChatInput />
    </div>
  );
};

export default ChatBox;

import React from 'react';
import './ChatList.css';

const ChatList = ({ chats, setCurrentChat }) => {
  return (
    <div className="chat-list">
      {chats.map((chat, index) => (
        <div key={index} className="chat-list-item" onClick={() => setCurrentChat(chat)}>
          {chat}
        </div>
      ))}
    </div>
  );
};

export default ChatList;

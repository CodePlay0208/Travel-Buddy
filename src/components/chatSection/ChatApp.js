import React, { useState } from 'react';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';
import MessageInput from './MessageInput';
import './ChatApp.css';

const ChatApp = () => {
  const [messages, setMessages] = useState({
    chat1: [],
    chat2: [],
  });
  const [currentChat, setCurrentChat] = useState('chat1');

  const handleSendMessage = (message) => {
    setMessages({
      ...messages,
      [currentChat]: [...messages[currentChat], { text: message, sender: 'user' }],
    });
  };

  return (
    <div className="chat-app">
      <ChatList chats={Object.keys(messages)} setCurrentChat={setCurrentChat} />
      <div className="chat-section">
        <ChatWindow messages={messages[currentChat]} />
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatApp;

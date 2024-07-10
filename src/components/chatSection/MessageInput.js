import React, { useState } from 'react';
import './MessageInput.css';

const MessageInput = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="message-input">
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder="Type a message..." 
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default MessageInput;

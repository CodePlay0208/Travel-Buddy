import React from 'react';
import './ChatSideBar.css';
import ChatItem from './ChatItem';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ChatItem active={true} name="David Moore" message="You: i don't remember anything 😄" />
      <ChatItem name="Jessica Drew" message="Ok, see you later" newMessages={2} />
      <ChatItem name="Greg James" message="I got a job at SpaceX 🎉 🚀" />
      <ChatItem name="Emily Dorson" message="Can we reschedule our meeting?" />
      {/* Add more ChatItem components as needed */}
    </div>
  );
};

export default Sidebar;

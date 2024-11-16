import React, { memo, useState, useEffect } from 'react';
import ChatBox from './ChatBox/ChatBox';
import ChatSideBar from './ChatSideBar/ChatSideBar';
import { ToastContainer } from 'react-toastify';
import './ChatPage.css';
import Navbar from '../../components/Navbar/Navbar';

const ChatPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width and set the mobile flag
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Check on initial render
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close sidebar by default on mobile
  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true); // Ensure it's always open on larger screens
    }
  }, [isMobile]);

  const toggleSidebar = () => {
    if (isMobile) setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="con">
      <Navbar notifications={notifications} setNotifications={setNotifications} />
      <div className="chatpage-container">
        {isMobile && (
          <button className="hamburger" onClick={toggleSidebar}>
            ☰
          </button>
        )}
        {isMobile && isSidebarOpen && (
          <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)} />
        )}
        <ChatSideBar className={isSidebarOpen ? 'open' : ''} toggleSidebar={toggleSidebar} />
        <ChatBox notifications={notifications} setNotifications={setNotifications} />
        <ToastContainer />
      </div>
    </div>
  );
};

export default memo(ChatPage);

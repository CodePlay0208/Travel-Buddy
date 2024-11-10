import React, { memo, useState } from 'react'
import ChatBox from './ChatBox/ChatBox'
import ChatSideBar from './ChatSideBar/ChatSideBar'
import { ToastContainer } from 'react-toastify'
import './ChatPage.css'
import Navbar from '../../components/Navbar/Navbar'

const ChatPage = () => {
  const [notifications, setNotifications] = useState([])

  return (
    <div>
      <Navbar notifications={notifications} setNotifications={setNotifications} />
      <div className="chatpage-container">
        <ChatSideBar />
        <ChatBox notifications={notifications} setNotifications={setNotifications} />
        <ToastContainer />
      </div>
    </div>
  )
}

export default memo(ChatPage)

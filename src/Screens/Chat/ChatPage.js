import React, { memo } from 'react'
import ChatBox from './ChatBox/ChatBox'
import ChatSideBar from './ChatSideBar/ChatSideBar'
import { ToastContainer } from 'react-toastify'
import './ChatPage.css'
import Navbar from '../../components/Navbar/Navbar'

const ChatPage = () => {
  return (
    <>
      <Navbar />
      <div className="chatpage-container">
        <ChatSideBar />
        <ChatBox />
        <ToastContainer />
      </div>
    </>
  )
}

export default memo(ChatPage)

import React, { useState } from 'react'
import Chatbox from './ChatBox/ChatBox'
import ChatSideBar from './ChatSideBar/ChatSideBar'
import { ToastContainer } from 'react-toastify'
import './ChatPage.css'

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false)

  return (
    <>
      <div className="chatpage-container">
        <ChatSideBar fetchAgain={fetchAgain} />
        <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
      </div>
      <ToastContainer />
    </>
  )
}

export default Chatpage

import React, { memo, useCallback, useEffect } from 'react'
import ChatBox from './ChatBox/ChatBox'
import ChatSideBar from './ChatSideBar/ChatSideBar'
import { ToastContainer } from 'react-toastify'
import './ChatPage.css'
import { connect } from 'react-redux'
import { getAllChats } from '../../actions/chats.action'
import Navbar from '../../components/Navbar/Navbar'

const mapStateToProps = (state) => ({
  fetchAgain: state.chatsReducer.fetchAgain
})

const Chatpage = (props) => {
  const { getAllChats, fetchAgain } = props

  const fetchAllChats = useCallback(() => {
    getAllChats()
  }, [getAllChats, fetchAgain])

  useEffect(() => {
    fetchAllChats()
  }, [fetchAllChats])

  return (
    <>
      {/* <Navbar/> */}
      <div className="chatpage-container">
        <ChatSideBar />
        <ChatBox />
      </div>
      <ToastContainer />
    </>
  )
}

export default connect(mapStateToProps, { getAllChats })(memo(Chatpage))
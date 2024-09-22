import React, { useContext, useEffect, useState, memo } from 'react'
import axios from 'axios'
import io from 'socket.io-client'
import './SingleChat.css'
import { ChatContext } from '../../../utils/Context/ChatContext'
import { toast, ToastContainer } from 'react-toastify'
import ScrollableChat from '../ScrollableChat/ScrollableChat'
import { connect } from 'react-redux'

const ENDPOINT = 'http://localhost:4000'

let socket
let selectedChatCompare

const mapStateToProps = (state) => ({
  user: state.profileReducer.profile,
  selectedChat: state.chatsReducer.selectedChat
})

const SingleChat = (props) => {
  const { fetchAgain, setFetchAgain } = props
  const { user, selectedChat } = props
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const [newMessage, setNewMessage] = useState('')
  const [socketConnected, setSocketConnected] = useState(false)
  const [typing, setTyping] = useState(false)
  const [istyping, setIsTyping] = useState(false)

  const { userChatValues, setUserChatValues } = useContext(ChatContext)

  const fetchMessages = async () => {
    if (!userChatValues.selectedChat) return

    try {
      setLoading(true)

      const { data } = await axios.get(`http://localhost:4000/message/getAllMessages/${userChatValues.selectedChat._id}`, {
        withCredentials: true,
      })
      setMessages(data)
      setLoading(false)

      socket.emit('join chat', userChatValues.selectedChat._id)
    } catch (error) {
      toast({
        title: 'Error Occured!',
        description: 'Failed to Load the Messages',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      })
    }
  }

  const sendMessage = async (event) => {
    if (event.key === 'Enter' && newMessage) {
      socket.emit('stop typing', userChatValues.selectedChat._id)
      try {
        const config = {
          headers: {
            'Content-type': 'application/json',
          },
        }
        setNewMessage('')
        const { data } = await axios.post(
          'http://localhost:4000/message/createNewMessage',
          {
            content: newMessage,
            chatId: userChatValues.selectedChat,
          },
          {
            ...config,
            withCredentials: true,
          },
        )
        socket.emit('new message', data)
        setMessages([...messages, data])
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    socket = io(ENDPOINT)
    socket.emit('setup', user)
    socket.on('connected', () => setSocketConnected(true))
    socket.on('typing', () => setIsTyping(true))
    socket.on('stop typing', () => setIsTyping(false))

    return () => {
      socket.off('connected')
      socket.off('typing')
      socket.off('stop typing')
      socket.disconnect()
    }
  }, [])

  useEffect(() => {
    fetchMessages()

    selectedChatCompare = userChatValues.selectedChat
  }, [userChatValues.selectedChat])

  useEffect(() => {
    socket.on('message recieved', (newMessageReceived) => {
      if (
        !selectedChatCompare || // if chat is not selected or doesn't match current chat
        selectedChatCompare._id !== newMessageReceived.chat._id
      ) {
        if (!userChatValues.notification.includes(newMessageReceived)) {
          setUserChatValues((currentValues) => ({
            ...currentValues,
            notification: [newMessageReceived, ...currentValues.notification],
          }))
          setFetchAgain(!fetchAgain)
        }
      } else {
        setMessages([...messages, newMessageReceived])
      }
    })

    return () => {
      socket.off('message received')
    }
  })

  const typingHandler = (e) => {
    setNewMessage(e.target.value)

    if (!socketConnected) return

    if (!typing) {
      setTyping(true)
      socket.emit('typing', userChatValues.selectedChat._id)
    }
    let lastTypingTime = new Date().getTime()
    var timerLength = 3000
    setTimeout(() => {
      var timeNow = new Date().getTime()
      var timeDiff = timeNow - lastTypingTime
      if (timeDiff >= timerLength && typing) {
        socket.emit('stop typing', userChatValues.selectedChat._id)
        setTyping(false)
      }
    }, timerLength)
  }

  return (
    <>
      {selectedChat ? (
        <div className="single-chat-container">
          <div className="messages-container">
            <div className="messages">
              <ScrollableChat messages={messages} />
            </div>
          </div>
          <div className="message-input">
            {istyping && (
              <div className="message-typing">
                <span className="message-typing-text">Typing...</span>
              </div>
            )}
            <input type="text" placeholder="Enter a message..." value={newMessage} onChange={typingHandler} onKeyDown={sendMessage} />
          </div>
        </div>
      ) : (
        <div className="single-chat-container">
          <div className="no-chat-selected">Click on a user to start chatting</div>
        </div>
      )}
      <ToastContainer />
    </>
  )
}

export default connect(mapStateToProps, null)(memo(SingleChat))

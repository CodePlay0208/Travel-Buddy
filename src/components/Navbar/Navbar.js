import React, { useContext, useState, memo } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserLoginContext } from '../../utils/Context/LoggedInUserContext'
import { ChatContext } from '../../utils/Context/ChatContext'
import { SVG } from '../../assets'
import {
  Nav,
  WebAppNameAndLogo,
  OtherContentsOfNavBar,
  NavContainer,
  NavContents,
  Signup,
  NavButton,
  ProfileImageContainer,
} from '../../styles/Navbar.styles'
import Dropdown from '../Dropdown/Dropdown'
import { connect } from 'react-redux'
import './Navbar.css'
import { logout } from '../../actions/auth.action'
import { getNotifications } from '../../actions/notification.action'
import NotificationItem from './NotificationItem'

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  profilePic: state.profileReducer.profile?.profilePic,
})

const Navbar = (props) => {
  const { isAuthenticated, notifications = [], setNotifications = () => {}, logout, profilePic } = props
  const [showUserProfileDropDownList, setShowUserProfileDropDownList] = useState(false)
  const { loggedInUserValues, setLoggedInUserValues } = useContext(UserLoginContext)
  const [showNotification, setShowNotification] = useState(false)
  // This state will hold the notifications data you get from getNotifications
  const [notificationAlerts, setNotificationAlerts] = useState([])

  const navigate = useNavigate()

  const userProfileDropDownData = [
    { value: 'My Profile', path: '/user-profile' },
    { value: 'My Trips', path: '/user-trips' },
    { value: 'Sign Out', path: 'signOut' },
  ]

  const handleClickOnProfilePic = () => {
    setShowUserProfileDropDownList(!showUserProfileDropDownList)
  }

  const handleSignOutLogic = async () => {
    await logout()
    navigate('/')
    window.location.reload()
  }

  const { userChatValues, setUserChatValues } = useContext(ChatContext)

  const accessChat = async (userId) => {
    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      }
      const { data } = await axios.post(
        `https://api.travmigoz.com/chat/fetchOrCreateChats`,
        { userId },
        { ...config, withCredentials: true },
      )
      if (!userChatValues.chats.find((c) => c._id === data._id)) {
        setUserChatValues((currentValues) => ({
          ...currentValues,
          chats: [data, ...currentValues.chats],
        }))
      }
      setUserChatValues((currentValues) => ({
        ...currentValues,
        selectedChat: data,
      }))
    } catch (error) {
      console.log(error)
    }
  }

  const selectSuggestion = (suggestion) => {
    setShowUserProfileDropDownList(false)
    if (suggestion.path === 'signOut') {
      handleSignOutLogic()
    } else {
      navigate(suggestion.path)
    }
  }

  const onChatClick = () => {
    setNotifications([])
    navigate('/chats')
  }

  const onNotificationClick = async () => {
    const fetchedNotifications = await getNotifications()
    setNotificationAlerts([
      { title: 'Notification', message: 'You have a new notification', profilePic: 'https://www.example.com/image.jpg' },
    ])
    setShowNotification(!showNotification)
  }
  const handleNotificationConfirm = (notification) => {
    console.log('Confirmed notification:', notification)
  }

  const handleNotificationDelete = (notification) => {
    console.log('Deleted notification:', notification)
  }

  return (
    <NavContainer isImageNavbar={props.isImageNavbar}>
      <Nav>
        <WebAppNameAndLogo
          onClick={() => {
            localStorage.removeItem('inputValues')
            navigate('/')
          }}
        >
          {props.isLandingPage ? '' : 'Travmigoz'}
        </WebAppNameAndLogo>

        {isAuthenticated ? (
          <OtherContentsOfNavBar>
            <NavButton
              onClick={() => {
                localStorage.removeItem('inputValues')
                navigate('/publish-trip')
              }}
            >
              Publish Trip
            </NavButton>

            <NavContents onClick={onChatClick}>
              <img src={SVG.ChatButton} alt="Chat" />
              {notifications?.length > 0 && <div className="notification-badge" />}
            </NavContents>

            <NavContents onClick={onNotificationClick}>
              <img src={SVG.NotificationButton} alt="Notification" />
              {showNotification && (
                <Dropdown
                  data={notificationAlerts}
                  renderItem={(item) => (
                    <NotificationItem notification={item} onConfirm={handleNotificationConfirm} onDelete={handleNotificationDelete} />
                  )}
                  setShowDropdown={setShowNotification}
                />
              )}
            </NavContents>

            <ProfileImageContainer onClick={handleClickOnProfilePic}>
              <img src={profilePic?.[0] ? profilePic[0] : SVG.ProfileIcon} alt="Profile" />
              {showUserProfileDropDownList && (
                <Dropdown
                  data={userProfileDropDownData}
                  selectSuggestion={selectSuggestion}
                  setShowDropdown={setShowUserProfileDropDownList}
                />
              )}
            </ProfileImageContainer>
          </OtherContentsOfNavBar>
        ) : (
          <OtherContentsOfNavBar>
            <Signup onClick={() => navigate('/login')}>Login</Signup>
          </OtherContentsOfNavBar>
        )}
      </Nav>
    </NavContainer>
  )
}

export default connect(mapStateToProps, { logout })(memo(Navbar))

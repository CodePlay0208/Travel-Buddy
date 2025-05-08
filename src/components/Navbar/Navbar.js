import React, { useContext, useState, memo, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserLoginContext } from '../../utils/Context/LoggedInUserContext'
import { ChatContext } from '../../utils/Context/ChatContext'
import { images, SVG } from '../../assets'
import {
  Nav,
  WebAppNameAndLogo,
  OtherContentsOfNavBar,
  NavContainer,
  NavContents,
  Signup,
  NavButton,
  ProfileImageContainer,
  Logo,
} from '../../styles/Navbar.styles'
import Dropdown from '../Dropdown/Dropdown'
import { connect } from 'react-redux'
import './Navbar.css'
import { isTokenValid, logout } from '../../actions/auth.action'
import { getNotifications, deleteNotification } from '../../actions/notification.action'
import NotificationItem from './NotificationItem'
import { addMemberTrip } from '../../actions/trips.action'
import { getOrCreateChat } from '../../actions/chats.action'
import { jwtDecode } from 'jwt-decode'
import { env } from '../../services/api-services/config/env'

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  profilePic: state.profileReducer.profile?.profilePic,
  notificationsAlert: state.notificationReducer?.notifications,
})

const Navbar = (props) => {
  const {
    isAuthenticated,
    notifications = [],
    setNotifications = () => {},
    logout,
    profilePic,
    getNotifications,
    deleteNotification,
    addMemberTrip,
    getOrCreateChat,
    notificationsAlert,
    isTokenValid,
  } = props

  const [showUserProfileDropDownList, setShowUserProfileDropDownList] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.token) {
      const decoded = jwtDecode(localStorage.token)
      const valid = decoded.exp * 1000 > Date.now()
      if (!valid) {
        logout()
        navigate('/')
      }
    } else {
      logout()
    }
  }, [])
  const { loggedInUserValues, setLoggedInUserValues } = useContext(UserLoginContext)
  const { userChatValues, setUserChatValues } = useContext(ChatContext)

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

  const accessChat = async (userId) => {
    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      }
      const { data } = await axios.post(
        `${env.BASE_API_URL}chat/fetchOrCreateChats`,
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
    await getNotifications()
    setShowNotification(!showNotification)
  }

  const handleNotificationConfirm = async (notification) => {
    await addMemberTrip(notification.tripId, notification.senderId)
  }

  const handleNotificationDelete = (notification) => {
    deleteNotification(notification.notificationId)
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
          <Logo src={images.travmigoz_logo} alt="travmigoz logo" />
        </WebAppNameAndLogo>

        {isAuthenticated ? (
          <OtherContentsOfNavBar>
            <NavButton
              onClick={() => {
                localStorage.removeItem('inputValues')
                navigate('/publish-trip')
              }}
            >
              <div>Publish Trip</div>
              <img src={SVG.publishTrip} alt="publishTrip" />
            </NavButton>

            {/* <NavContents onClick={onChatClick}>
              <img src={SVG.ChatButton} alt="Chat" />
              {notifications?.length > 0 && <div className="notification-badge" />}
            </NavContents> */}

            <NavContents onClick={onNotificationClick}>
              <img src={SVG.NotificationButton} alt="Notification" />
              {notificationsAlert?.length > 0 && <div className="notification-badge" />}
            </NavContents>

            {showNotification && (
              <Dropdown
                data={notificationsAlert}
                selectSuggestion={(notification) => {
                  navigate(`/trip/${notification.tripId}`)
                }}
                selectable={false}
                title="Notification"
                renderItem={(item) => (
                  <NotificationItem
                    notification={item}
                    onConfirm={handleNotificationConfirm}
                    onDelete={handleNotificationDelete}
                    onChatNow={async (notification) => {
                      const isChatCreated = await getOrCreateChat(notification.senderId)
                      if (isChatCreated) {
                        navigate('/chats')
                      }
                    }}
                  />
                )}
                setShowDropdown={setShowNotification}
              />
            )}

            <ProfileImageContainer onClick={handleClickOnProfilePic}>
              <img src={profilePic?.[0] ? profilePic[0].preSignedUrl : SVG.ProfileIcon} alt="Profile" />
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
            <NavButton
              onClick={() => {
                localStorage.removeItem('inputValues')
                navigate('/publish-trip')
              }}
            >
              <div>Publish Trip</div>
              <img src={SVG.publishTrip} alt="publishTrip" />
            </NavButton>

            <Signup onClick={() => navigate('/login')}>Login</Signup>
          </OtherContentsOfNavBar>
        )}
      </Nav>
    </NavContainer>
  )
}

export default connect(mapStateToProps, { isTokenValid, logout, getNotifications, deleteNotification, addMemberTrip, getOrCreateChat })(
  memo(Navbar),
)

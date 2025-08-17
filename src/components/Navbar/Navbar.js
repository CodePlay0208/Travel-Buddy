import React, { useContext, useState, memo, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserLoginContext } from '../../utils/Context/LoggedInUserContext'
import { ChatContext } from '../../utils/Context/ChatContext'
import { images, NotificationSvg, SVG } from '../../assets'
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
import './Navbar.css'
import NotificationItem from './NotificationItem'
import { jwtDecode } from 'jwt-decode'
import { env } from '../../services/api-services/config/env'
import PublishTrip from '../../assets/svg/iconTrip'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../store/slices/auth-slice'
import { deleteNotification, getNotifications } from '../../store/slices/notification-slice'
import { addMemberTrip } from '../../store/slices/trips-slice'

const Navbar = (props) => {
  const { isAuthenticated } = useSelector((state) => state.authReducer)
  const { profile } = useSelector((state) => state.profileReducer)
  const { notifications: notificationsAlert } = useSelector((state) => state.notificationReducer)
  const dispatch = useDispatch()
  const { notifications = [], setNotifications = () => {}, getOrCreateChat } = props

  const [showUserProfileDropDownList, setShowUserProfileDropDownList] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.token) {
      const decoded = jwtDecode(localStorage.token)
      const valid = decoded.exp * 1000 > Date.now()
      if (!valid) {
        dispatch(logout())
        navigate('/')
      }
    } else {
      dispatch(logout())
    }
  }, [logout, navigate, dispatch])
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
    await dispatch(logout()).unwrap()
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
      const { data } = await axios.post(`${env.BASE_API_URL}chat/fetchOrCreateChats`, { userId }, { ...config, withCredentials: true })
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
      //console.log(error)
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
    await dispatch(getNotifications()).unwrap()
    setShowNotification(!showNotification)
  }

  const handleNotificationConfirm = async (notification) => {
    await dispatch(addMemberTrip(notification.tripInstanceId, notification.senderId)).unwrap()
  }

  const handleNotificationDelete = (notification) => {
    dispatch(deleteNotification(notification.notificationId)).unwrap()
  }

  return (
    <NavContainer isImageNavbar={props.isImageNavbar}>
      <Nav isImageNavbar={props.isImageNavbar}>
        <WebAppNameAndLogo
          onClick={() => {
            localStorage.removeItem('inputValues')
            navigate('/')
          }}
        >
          <Logo src={images.travmigoz_logo} alt="travmigoz logo" />
        </WebAppNameAndLogo>
        <OtherContentsOfNavBar>
          <NavButton
            onClick={() => {
              navigate('/chats')
            }}
          >
            <div>Chat</div>
            <PublishTrip />
          </NavButton>
        </OtherContentsOfNavBar>
        {isAuthenticated ? (
          <OtherContentsOfNavBar>
            {/* <NavContents onClick={onChatClick}>
              <img src={SVG.ChatButton} alt="Chat" />
              {notifications?.length > 0 && <div className="notification-badge" />}
            </NavContents> */}

            <NavContents onClick={onNotificationClick}>
              <NotificationSvg />
              {notificationsAlert?.length > 0 && <div className="notification-badge" />}
            </NavContents>
            <NavButton
              onClick={() => {
                localStorage.removeItem('inputValues')
                navigate('/publish-trip')
              }}
            >
              <div>Publish Trip</div>
              <PublishTrip />
            </NavButton>
            {showNotification && (
              <Dropdown
                data={notificationsAlert}
                selectSuggestion={(notification) => {
                  navigate(`/trip/${notification.tripInstanceId}`)
                }}
                selectable={false}
                title="Notification"
                renderItem={(item) => (
                  <NotificationItem
                    notification={item}
                    onConfirm={handleNotificationConfirm}
                    onDelete={handleNotificationDelete}
                    onChatNow={async (notification) => {
                      // const isChatCreated = await getOrCreateChat(notification.senderId)
                      // if (isChatCreated) {
                      //   navigate('/chats')
                      // }
                    }}
                  />
                )}
                setShowDropdown={setShowNotification}
              />
            )}

            <ProfileImageContainer onClick={handleClickOnProfilePic}>
              <img src={profile?.profilePic?.[0] ? profile?.profilePic[0].preSignedUrl : SVG.ProfileIcon} alt="Profile" />
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
              <PublishTrip />
            </NavButton>

            <Signup onClick={() => navigate('/login')}>Login</Signup>
          </OtherContentsOfNavBar>
        )}
      </Nav>
    </NavContainer>
  )
}

export default memo(Navbar)

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
const mapStateToProps = (state) => {
  console.log(state)
  return {
    isAuthenticated: state.authReducer.isAuthenticated,
    profilePic: state.profileReducer.profile.profilePic,
  }
}

const Navbar = (props) => {
  const { isAuthenticated, notifications = [], setNotifications = () => {}, logout, profilePic } = props
  const [showUserProfileDropDownList, setShowUserProfileDropDownList] = useState(false)
  const { loggedInUserValues, setLoggedInUserValues } = useContext(UserLoginContext)
  const navigate = useNavigate()
  console.log(profilePic)
  const userProfileDropDownData = [
    { value: 'My Profile', path: '/user-profile' },
    { value: 'My Trips', path: '/user-trips' },
    { value: 'Sign Out', path: 'signOut' },
  ]

  const handleClickOnProfilePic = () => {
    setShowUserProfileDropDownList(!showUserProfileDropDownList)
  }

  const handleSignOutLogic = async () => {
    //TODO: do all the necessary stuff
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
        {
          ...config,
          withCredentials: true,
        },
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

        {/* <button onClick={() => {
          logout()
        }}>LOGOUT</button> */}

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
            <ProfileImageContainer onClick={handleClickOnProfilePic}>
              <img src={profilePic[0] ? profilePic : SVG.ProfileIcon} alt="Profile" />
              {showUserProfileDropDownList && <Dropdown data={userProfileDropDownData} selectSuggestion={selectSuggestion}></Dropdown>}
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

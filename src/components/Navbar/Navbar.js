import React, { useContext, useEffect, useState, memo } from 'react'
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
  ListItemValueForIdx,
  UserProfileDropDownList,
  ListItemValueForUserProfileData,
  ProfileImageContainer,
} from '../../Styles/Navbar.styles'
import Dropdown from '../Dropdown/Dropdown'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth.action'

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  user: state.authReducer.user
})

const Navbar = (props) => {
  const { isAuthenticated, user, logout } = props
  const [showUserProfileDropDownList, setShowUserProfileDropDownList] = useState(false)
  const { loggedInUserValues, setLoggedInUserValues } = useContext(UserLoginContext)
  const navigate = useNavigate()

  const userProfileDropDownData = [
    { value: 'My Profile', path: '/user-profile' },
    { value: 'My Trips', path: '/user-trips' },
    { value: 'Sign Out', path: 'signOut' },
  ]

  const handleClickOnProfilePic = () => {
    if (loggedInUserValues._id != '') {
      setShowUserProfileDropDownList((currentValue) => !currentValue)
    } else {
      sessionStorage.setItem('redirectUrl', '/userProfile')
      navigate('/login')
    }
  }

  const handleSignOutLogic = () => {
    //TODO: do all the necessary stuff
    fetch('http://localhost:4000/login/logout', {
      method: 'POST',
      credentials: 'include', // Ensure cookies are sent with the request
    })
      .then((response) => {
        if (response.ok) {
          setLoggedInUserValues({
            _id: '',
            username: '',
            emailId: '',
            profilePic: '',
          })
          // Optionally redirect or update UI after logout
        } else {
          console.error('Logout failed:', response.statusText)
          // Handle logout failure, if needed
          if (!response.ok) {
            return response.json().then((error) => {
              throw new Error(error)
            })
          }
        }
      })
      .catch((error) => {
        console.error('Error logging out:', error)
        // Handle network errors or other issues
      })
    navigate('/')
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
        `http://localhost:4000/chat/fetchOrCreateChats`,
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
  const handleChat = () => {
    accessChat('6690ab18c2d9d0a71a4533da')
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
          {props.isLandingPage? "": "Travmigoz"}
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
            <NavContents
              onClick={() => {
                navigate('/chats')
              }}
            >
              <img src={SVG.ChatButton} alt="Chat" />
            </NavContents>
            <ProfileImageContainer onClick={handleClickOnProfilePic}>
              <img src={SVG.ProfileIcon} alt="Profile" />
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

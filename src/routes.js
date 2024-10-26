import React from 'react'
import LandingPage from './Screens/LandingPage/LandingPage'
import SearchResultsPage from './Screens/SearchResultsPage/SearchResultsPage'
import PublishTrip from './Screens/PublishTrip/PublishTrip'
import ChatPage from './Screens/Chat/ChatPage'
import LoginPage from './Screens/AuthFlow/LoginPage/loginPage'
import VerifyCode from './Screens/AuthFlow/VerifyCode/VerifyCode'
import SignUp from './Screens/AuthFlow/SignUpPage/SignUp'
import TripPage from './components/TripPage/TripPage'
import UserProfile from './Screens/UserProfile/UserProfile'
import ForgotPassword from './Screens/AuthFlow/ForgotPassword/ForgotPassword'
import SetPassword from './Screens/AuthFlow/SetPassword/SetPassword'

export const routes = [
  {
    path: '/',
    element: <LandingPage />,
    isPrivate: false
  },

  {
    path: '/search-results-page',
    element: <SearchResultsPage />,
    isPrivate: false
  },
  {
    path: '/publish-trip',
    element: <PublishTrip />,
    isPrivate: true
  },
  {
    path: '/chats',
    element: <ChatPage />,
    isPrivate: true
  },

  {
    path: '/login',
    element: <LoginPage />,
    isPrivate: false
  },

  {
    path: '/user-profile',
    element: <UserProfile />,
    isPrivate: true
  },
  {
    path: '/trip/:id',
    element: <TripPage />,
    isPrivate: false
  },
  {
    path: '/verify-otp',
    element: <VerifyCode />,
    isPrivate: false
  },

  {
    path: '/forget-password',
    element: <ForgotPassword />,
    isPrivate: false
  },

  {
    path: '/set-password',
    element: <SetPassword />,
    isPrivate: false
  },

  {
    path: '/signup',
    element: <SignUp />,
    isPrivate: false
  },
]

import React from 'react'
import LandingPage from './xyz/LandingPage/LandingPage'
import SearchResultsPage from './xyz/SearchResultsPage/SearchResultsPage'
import PublishTrip from './xyz/PublishTrip/PublishTrip'
import ChatPage from './xyz/Chat/ChatPage'
import LoginPage from './xyz/AuthFlow/LoginPage/loginPage'
import VerifyCode from './xyz/AuthFlow/VerifyCode/VerifyCode'
import SignUp from './xyz/AuthFlow/SignUpPage/SignUp'
import TripPage from './components/TripPage/TripPage'
import UserProfile from './xyz/UserProfile/UserProfile'
import ForgotPassword from './xyz/AuthFlow/ForgotPassword/ForgotPassword'
import SetPassword from './xyz/AuthFlow/SetPassword/SetPassword'

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

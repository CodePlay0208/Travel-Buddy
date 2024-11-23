import React from 'react'
import LandingPage from './screens/LandingPage/LandingPage'
import SearchResultsPage from './screens/SearchResultsPage/SearchResultsPage'
import PublishTrip from './screens/PublishTrip/PublishTrip'
import ChatPage from './screens/Chat/ChatPage'
import LoginPage from './screens/AuthFlow/LoginPage/loginPage'
import VerifyCode from './screens/AuthFlow/VerifyCode/VerifyCode'
import SignUp from './screens/AuthFlow/SignUpPage/SignUp'
import TripPage from './components/TripPage/TripPage'
import UserProfile from './screens/UserProfile/UserProfile'
import ForgotPassword from './screens/AuthFlow/ForgotPassword/ForgotPassword'
import SetPassword from './screens/AuthFlow/SetPassword/SetPassword'
import UserTrips from './screens/UserTrips/UserTrips'

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
  {
    path: '/user-trip',
    element: <UserTrips />,
    isPrivate: true
  },
]

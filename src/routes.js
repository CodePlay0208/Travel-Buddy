import React from "react";
import LandingPage from "./Screens/LandingPage/landingPage";
import SearchResultsPage from "./Screens/SearchResultsPage/searchResultsPage";
import PublishTrip from "./Screens/PublishTrip/PublishTrip";
import ChatPage from "./components/Chat/ChatPage";
import LoginPage from "./Screens/AuthFlow/LoginPage/loginPage";
import VerifyCode from "./Screens/AuthFlow/VerifyCode/VerifyCode";
import SignUp from "./Screens/AuthFlow/SignUpPage/SignUp";
import TripPage from "./components/TripPage/TripPage";
import UserProfile from "./Screens/UserProfile/UserProfile";
import ForgotPassword from "./Screens/AuthFlow/ForgotPassword/ForgotPassword";
import SetPassword from "./Screens/AuthFlow/SetPassword/SetPassword";

export const routes = [
  {
    path: '/',
    element: <LandingPage />,
  },

  {
    path: '/search-results-page',
    element: <SearchResultsPage />,
  },
  {
    path: '/publish-trip',
    element: <PublishTrip />,
  },
  {
    path: '/chats',
    element: <ChatPage />,
  },

  {
    path: '/login',
    element: <LoginPage />,
  },

  {
    path: '/user-profile',
    element: <UserProfile />,
  },
  {
    path: '/trip/:id',
    element: <TripPage />,
  },
  {
    path: '/verify-otp',
    element: <VerifyCode />,
  },

  {
    path: '/forget-password',
    element: <ForgotPassword />,
  },

  {
    path: '/set-password',
    element: <SetPassword />,
  },

  {
    path: '/signup',
    element: <SignUp />,
  },
]

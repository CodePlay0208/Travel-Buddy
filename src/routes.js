import React from "react";
import LandingPage from "./Screens/LandingPage/landingPage";
import SearchResultsPage from "./Screens/SearchResultsPage/searchResultsPage";
import PublishTrip from "./Screens/PublishTrip/PublishTrip";
import ChatPage from "./components/Chat/ChatPage";
import LoginPage from "./Screens/LoginPage/loginPage";
import VerifyCode from "./Screens/VerifyCode/VerifyCode";
import SignUp from "./Screens/SignUpPage/SignUp";
import TripPage from "./components/TripPage/TripPage";
import UserProfile from "./Screens/UserProfile/UserProfile";
import ForgotPassword from "./Screens/ForgotPassword/ForgotPassword";
import SetPassword from "./Screens/SetPassword/SetPassword";

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

    // {
    //     "path": "/user-trips",
    //     "element": <UserTrips/>
    // },

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

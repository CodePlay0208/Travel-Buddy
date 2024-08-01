import React from "react";
import LandingPage from "./Screens/LandingPage/landingPage";
import SearchResultsPage from "./components/SearchResultsPage/SearchResultsPage";
import PublishTrip from "./components/PublishTrip/PublishTrip";
import ChatPage from "./components/Chat/ChatPage";
import LoginPage from "./components/LoginPage/LoginPage";
import EnterEmail from "./components/LoginPage/EnterEmail";
import VerifyOTP from "./components/LoginPage/VerifyOTP";
import SignUp from "./components/SignUpPage/SignUp";
import TripPage from "./components/TripPage/TripPage";
import UserProfile from "./components/UserProfile/UserProfile";
import UserTrips from "./components/UserProfile/UserTrips/UserTrips";

export const routes = [ 
    {
        "path": "/",
        "element": <LandingPage/>
    },

    {
        "path": "/search-results-page",
        "element": <SearchResultsPage/>
    },
    {
        "path": "/publish-trip",
        "element": <PublishTrip/>
    },
    {
        "path": "/chats",
        "element": <ChatPage/>
    },

    {
        "path": "/login-page",
        "element": <LoginPage/>
    },

    {
        "path": "/user-profile",
        "element": <UserProfile/>
    },

    {
        "path": "/user-trips",
        "element": <UserTrips/>
    },

    {
        "path": "/trip/:id",
        "element": <TripPage/>
    },
    {
        "path": "/verify-otp",
        "element": <VerifyOTP/>
    },

    {
        "path": "/enter-email",
        "element": <EnterEmail/>
    },

    {
        "path": "/signup",
        "element": <SignUp/>
    },
]

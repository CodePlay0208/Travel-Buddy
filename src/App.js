import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import SearchResultsPage from "./components/SearchResultsPage/SearchResultsPage";
import SearchPage from "./components/SearchPage/SearchPage";
import HomePage from "./components/HomePage/HomePage";
import { TripsContext } from "./Utils/Context/TripsContext";
import PublishTrip from "./components/PublishTrip/PublishTrip";
import React, { useEffect, useState } from "react";
import { TopDestinationsContext } from "./Utils/Context/TopDestinationsContext";
import { InputValuesContext } from "./Utils/Context/InputValuesContext";
import LoginPage from "./components/LoginPage/LoginPage";
import {
  UserLoginContext,
} from "./Utils/Context/UserLoginContext";
import UserProfile from "./components/UserProfile/UserProfile";
import UserTrips from "./components/UserTrips/UserTrips";
import TripPage from "./components/TripPage/TripPage";
import VerifyOTP from "./components/LoginPage/VerifyOTP";
import EnterEmail from "./components/LoginPage/EnterEmail";
import SignUp from "./components/SignUpPage/SignUp";
import ChatPage from "./components/Chat/ChatPage";
import { ChatContext } from "./Utils/Context/ChatContext";

const App = () => {
  const [tripsData, setTripsData] = useState([
    {
      id: 0,
      startLocation: "D",
      endLocation: "M",
      totalMembers: 4,
      age: -1,
      gender: "Male",
      description: "",
      destinationImages: "",
      userName: "",
      phoneNumber: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const [topDestinations, setTopDestinations] = useState([""]);

  const [userChatValues, setUserChatValues] = useState({
    selectedChat: "",
    userId: "",
    notification: "",
    chats:[""],
  });

  useEffect(() => {
    // TODO: Fetch from API
    const topDestinationsFromAPI = [
      "Mussorie",
      "Delhi",
      "Bangalore",
      "TamilNadu",
      "Mumbai",
    ];
    setTopDestinations(topDestinationsFromAPI);
  }, []);

  const [inputValues, setInputValues] = useState({
    destination: "",
    startDate: "",
  });

  const [loggedInUserValues, setLoggedInUserValues] = useState({
    _id:"",
    username:"",
    emailId:"",
    profilePic:""
  });

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    console.log("the value is", value);
    const parts = value.split(`; ${name}=`);
    console.log("the parts is", parts);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        console.log("checking if user is logged in");
        const sessionCookie = getCookie("connect.sid");
        console.log("the cookie is", sessionCookie);
        // Configure fetch options based on session cookie presence
        const fetchOptions = {
          method: "GET",
        };

        // Add credentials: 'include' only if session cookie is present
        if (sessionCookie) {
          fetchOptions.credentials = "include";
          console.log("including") // Ensure cookies are sent with the request
        }
        return fetch("http://localhost:4000/login/checkSession", fetchOptions)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.loggedIn) {
              console.log("User is logged in:", data.user);
              setLoggedInUserValues(data.user);    
              // Handle logged in user state
            } else {
              console.log("User is not logged in");
             
            }
          })
          .catch((error) => {
            console.error("Error checking session:", error);
           
          });
      } catch (error) {

        console.error("Error checking session:", error);
      }
    };

    checkUserLoggedIn();
  }, []);

  const navigate = useNavigate();

  return (
    <TripsContext.Provider value={{ tripsData, setTripsData }}>
      <TopDestinationsContext.Provider
        value={{ topDestinations, setTopDestinations }}
      >
        <InputValuesContext.Provider value={{ inputValues, setInputValues }}>
          <UserLoginContext.Provider
            value={{ loggedInUserValues, setLoggedInUserValues }}
          >
            <ChatContext.Provider value={{ userChatValues, setUserChatValues }}>
              <div>
                <Routes>
                  <Route exact path="/" element={<HomePage />} />
                  <Route
                    exact
                    path="/search-results-page"
                    element={<SearchResultsPage />}
                  />
                  <Route path="/search-page" element={<SearchPage />}></Route>
                  <Route
                    exact
                    path="/publish-trip"
                    element={<PublishTrip />}
                  ></Route>
                  <Route exact path="/chats" element={<ChatPage />}></Route>
                  <Route path="/login-page" element={<LoginPage />} />
                  <Route path="/userProfile" element={<UserProfile />} />
                  <Route path="/userTrips" element={<UserTrips />} />
                  <Route path="/trip/:id" element={<TripPage />} />
                  <Route path="/verifyOTP" element={<VerifyOTP />} />
                  <Route path="/enterEmail" element={<EnterEmail />} />
                  <Route path="/signUp" element={<SignUp />}></Route>
                </Routes>
              </div>
            </ChatContext.Provider>
          </UserLoginContext.Provider>
        </InputValuesContext.Provider>
      </TopDestinationsContext.Provider>
    </TripsContext.Provider>
  );
  function InvalidRoute() {
    navigate("/");
    return null;
  }
};

export default App;

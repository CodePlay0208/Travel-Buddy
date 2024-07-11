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
import {UserLoginContext, checkUserLoggedIn } from "./Utils/Context/UserLoginContext";
import UserProfile from "./components/UserProfile/UserProfile";
import UserTrips from "./components/UserTrips/UserTrips";
import TripPage from "./components/TripPage/TripPage";
import VerifyOTP from "./components/LoginPage/VerifyOTP";
import EnterEmail from "./components/LoginPage/EnterEmail";
import SignUp from "./components/SignUpPage/SignUp";
import ChatApp from './components/chatSection/ChatApp'

const App =() =>{
  const [tripsData, setTripsData] = useState([
    {
      id: 0,
      startLocation: "D",
      endLocation: "M",
      totalMembers: 4,
      age: -1,
      gender: "Male",
      description: "",
      destinationImages:"",
      userName:"",
      phoneNumber:"",
      startDate:"",
      endDate:""
    },
  ]);

  const [topDestinations, setTopDestinations] = useState([""]);

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

  const [isUserLoggedIn , setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        console.log("checking if user is logged in");
        const sessionCookie = document.cookie.includes('connect.sid');
      
        // Configure fetch options based on session cookie presence
        const fetchOptions = {
          method: "GET"
        };
      
        // Add credentials: 'include' only if session cookie is present
        if (sessionCookie) {
          fetchOptions.credentials = "include"; // Ensure cookies are sent with the request
        }
        return fetch("http://localhost:4000/login/checkSession", fetchOptions)
          .then((res) => res.json())
          .then((data) => {
              console.log(data)
            if (data.loggedIn) {
              console.log("User is logged in:", data.user);
              setIsUserLoggedIn(true);
              // Handle logged in user state
            } else {
              console.log("User is not logged in");
              setIsUserLoggedIn(false);  
            }
          })
          .catch((error) => {
            console.error("Error checking session:", error);
            setIsUserLoggedIn(false);
          });
      } catch (error) {
        setIsUserLoggedIn(false);
        console.error("Error checking session:", error);
      }
    };

    checkUserLoggedIn();
  }, []); 
  

  

  const navigate = useNavigate();

  return (
    <TripsContext.Provider value={{ tripsData,  setTripsData }}>
      <TopDestinationsContext.Provider
        value={{ topDestinations, setTopDestinations }}
      >
        <InputValuesContext.Provider value={{inputValues, setInputValues}}>
        <UserLoginContext.Provider value={{isUserLoggedIn, setIsUserLoggedIn}}>
       
      <div>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route
              exact
              path="/search-results-page"
              element={<SearchResultsPage />}
            />
            <Route path="/search-page" element={<SearchPage />}></Route>
            <Route exact path="/publish-trip" element={<PublishTrip />}></Route>
            <Route exact path="/chats" element={<ChatApp />}></Route>
            <Route path = "/login-page" element={<LoginPage/>} />
            <Route path = "/userProfile" element={<UserProfile/>} />
            <Route path = "/userTrips" element={<UserTrips/>} />
            <Route path="/trip/:id" element={<TripPage />} />
            <Route path="/verifyOTP" element={<VerifyOTP />} />
            <Route path="/enterEmail" element={<EnterEmail />} />
            <Route path = "/signUp" element = {<SignUp/>}></Route>
          </Routes>
          </div>
          </UserLoginContext.Provider>
        </InputValuesContext.Provider>
      </TopDestinationsContext.Provider>
    </TripsContext.Provider>
  );
  function InvalidRoute() {
    navigate('/');
    return null;
  }
}

export default App;

import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import {UserLoginContext} from "../../Utils/Context/UserLoginContext";
import { checkUserLoggedIn } from "../../Utils/Context/UserLoginContext";
import { ChatContext } from "../../Utils/Context/ChatContext";

const Navbar = (props) => {


  const {loggedInUserValues , setLoggedInUserValues} = useContext(UserLoginContext);

  console.log("the user is logged in navbar", loggedInUserValues);

  const userProfileDropDownData = [
    {value : "My Profile" , path: "/userProfile"} , 
    {value : "My Trips" , path: "/userTrips"} , 
    {value : "Sign Out" , path: "signOut"} ];

    const [showUserProfileDropDownList, setShowUserProfileDropDownList] = useState(false);
    const navigate = useNavigate();


  useEffect(()=>{

    const removeDropDownList = (event)=>{
      const hasTheUserClickedOnProfilePic = document.getElementById("imgForUserProfile").contains(event.target);
      if(!hasTheUserClickedOnProfilePic){
        setShowUserProfileDropDownList(false);
      }
    }
    
    document.addEventListener('click', removeDropDownList);

    return ()=> document.removeEventListener('click' , removeDropDownList);

  },[]);


const handleClickOnProfilePic = ()=>{
  console.log("login status" ,loggedInUserValues);
    if(loggedInUserValues._id != ""){
      console.log("hehe");
      setShowUserProfileDropDownList((currentValue)=> !currentValue);
    }
    else{
      sessionStorage.setItem('redirectUrl', "/userProfile");
      navigate("/login-page");
    }
  }

  const handleSignOutLogic=()=>{
    console.log("Rrrr");
    //TODO: do all the necessary stuff
    fetch('http://localhost:4000/login/logout', {
      method: 'POST',
      credentials: 'include', // Ensure cookies are sent with the request
    })
    .then(response => {
      if (response.ok) {
        console.log('Logged out successfully');
      setLoggedInUserValues({
        _id:"",
        username:"",
        emailId:"",
        profilePic:""
      });
        // Optionally redirect or update UI after logout
      } else {
        console.error('Logout failed:', response.statusText);
        // Handle logout failure, if needed
          if(!response.ok){
            return response.json().then(error => {
              throw new Error(error);
            });
          }
      }
    })
    .catch(error => {
      console.error('Error logging out:', error);
      // Handle network errors or other issues
    });
    navigate("/")
  }

  const {userChatValues, setUserChatValues} = useContext(ChatContext);

  const accessChat = async (userId) => {
    console.log(userId);

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(`http://localhost:4000/chat/fetchOrCreateChats`, { userId }, {
        ...config,
         withCredentials: true
      }
      );

      if (!userChatValues.chats.find((c) => c._id === data._id)){
        setUserChatValues((currentValues)=>({
          ...currentValues , chats:[data , ...currentValues.chats]
        }))
      } 
      setUserChatValues((currentValues)=>({
        ...currentValues , selectedChat: data
      }))

      console.log(userChatValues);
     
    } catch (error) {
      console.log(error);
    }
  };

  function handleChat(){
    console.log("current user is", UserLoginContext);
    accessChat("6690ab18c2d9d0a71a4533da");
    navigate("/chats");
  }

  return (
    <nav className="nav">
      <div
        className="webAppNameAndLogo"
        onClick={() => {
          localStorage.removeItem("inputValues");
          navigate("/");
        }}
      >
        Travel Buddy
      </div>
      <div className="otherContentsOfNavBar">
        {props.visibilityForSearch && (
          <div
            className="nav-link nav-button"
            id="search-button"
            onClick={() => {

              navigate("/search-page");
            }}
          >
            Search
          </div>
        )}
        {!props.visibilityForSearch && (
          <div className="nav-link nav-button" id="search-button"></div>
        )}
        <div
          className="nav-link nav-button"
          onClick={() => {
            localStorage.removeItem("inputValues");
              navigate("/publish-trip");
          }}
        >
          Publish Trip
        </div>
        <div id="imgForUserProfile"  onClick={handleClickOnProfilePic}>

          {// TODO: Write logic to display user profile pic instead of svg if the user is logged in
          }
          <svg className="profilePicSvg" xmlns="http://www.w3.org/2000/svg" 
            version="1.1" x="0px" y="0px" viewBox="0 0 100 125" style={{enableBackground:"new 0 0 100 100"}}>
            <g><g><path d="M50,95.5c25.1,0,45.5-20.4,45.5-45.5S75.1,4.5,50,4.5S4.5,24.9,4.5,50S24.9,95.5,50,95.5z M50,27.6   
             c8.3,0,15.1,6.8,15.1,15.1c0,8.3-6.8,15.1-15.1,15.1S34.9,51,34.9,42.7C34.9,34.3,41.7,27.6,50,27.6z M24.3,86.3    
             C28,73,38.3,63.4,50.4,63.4c12,0,22.2,9.4,25.9,22.5c-7.4,5.4-16.5,8.6-26.3,8.6C40.4,94.5,31.6,91.5,24.3,86.3z" /></g></g>
          </svg>
           {showUserProfileDropDownList && (
                <div className="userProfileDropDownList">
                  {userProfileDropDownData.map((data) => (
                    <li
                      key={data.value}
                      className="listItemValueForIdx"
                      onClick={() => {
                        setShowUserProfileDropDownList(false);
                        const path = `${data.path}`;
                        if(path == "signOut"){
                          setShowUserProfileDropDownList((currentValue)=> !currentValue);
                          handleSignOutLogic();
                        }
                        else{
                          setShowUserProfileDropDownList((currentValue)=> !currentValue);
                          navigate(path);
                        }
                      }}
                    >
                      <p className="listItemValueForUserProfileData" id="listItemValueForUserProfileData">{data.value}</p>
                    </li>
                  ))}
                </div>
              )}
        </div>
      </div>
      <button onClick={handleChat}>Chat</button>
    </nav>
  );
};

export default Navbar;

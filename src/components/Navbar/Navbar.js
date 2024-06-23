import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import {UserLoginContext} from "../../Utils/Context/UserLoginContext";



const Navbar = (props) => {

  const {userLoginData, setUserLoginData} = useContext(UserLoginContext);
  const userProfileDropDownData = [
    {value : "My Profile" , path: "/userProfile"} , 
    {value : "My Trips" , path: "/userTrips"} , 
    {value : "Sign Out" , path: "signOut"} ];

    const [showUserProfileDropDownList, setShowUserProfileDropDownList] = useState(false);
    const navigate = useNavigate();

  useEffect(()=>{
    //TODO: fetch if the user is logged in
    const isUserLoggedIn = true;

    setUserLoginData((currentUserLoginData)=>({
      ...currentUserLoginData, isUserLoggedIn: isUserLoggedIn
    }));
    
  },[]);

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

    if(userLoginData.isUserLoggedIn){
      setShowUserProfileDropDownList((currentValue)=> !currentValue);
    }
    else{
      navigate("/login-page");
    }
  }

  const handleSignOutLogic=()=>{
    //TODO: do all the necessary stuff
    setUserLoginData((currentUserLoginData)=>({
      ...currentUserLoginData, isUserLoggedIn: false
    }));
    navigate("/")
  }

  return (
    <nav className="nav">
      <div
        className="webAppNameAndLogo"
        onClick={() => {
          localStorage.clear();
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
            localStorage.clear();
            if(userLoginData.isUserLoggedIn){
              navigate("/publish-trip");
            }
            else{
              navigate("/login-page");
            }
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
    </nav>
  );
};

export default Navbar;

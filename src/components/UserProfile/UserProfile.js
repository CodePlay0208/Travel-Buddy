import React, { useEffect, useContext } from "react";
import Navbar from "../Navbar/Navbar";
import "./UserProfile.css";
import UserSideBar from "../UserSideBar/UserSideBar";
import UserProfileDashBoard from "../UserProfileDashBoard/UserProfileDashBoard";
import {UserLoginContext} from "../../Utils/Context/UserLoginContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
    
    const {userLoginData, setUserLoginData} = useContext(UserLoginContext);
    const navigate = useNavigate();
    useEffect(()=>{
        if(!userLoginData.isUserLoggedIn){
            toast.error("User Not Logged In", {
                autoClose: 1000
              });
              navigate("/");
        }
    }, []);
    return (
        <div className="userProfileHeadContainer">
            <Navbar visibilityForSearch={true}></Navbar>
            <div className="userProfileInnerContainer">
            <div className="sideBarContainerInUserTrips"> <UserSideBar/></div>
            <div className="searchResultsContainerInUserTrips">
            <UserProfileDashBoard></UserProfileDashBoard>
                 </div> 
            </div>
        </div>
    );
}

export default UserProfile;
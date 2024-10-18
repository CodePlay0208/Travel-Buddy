import React, { useEffect, useContext } from "react";
import Navbar from "../Navbar/Navbar";
import "./UserProfile.css";
import UserSideBar from "./UserSideBar/UserSideBar";
import UserProfileDashBoard from "./UserProfileDashBoard/UserProfileDashBoard";
import { UserLoginContext } from "../../utils/Context/LoggedInUserContext";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { checkUserLoggedIn } from "../../utils/Context/LoggedInUserContext";

const UserProfile = () => {
  const navigate = useNavigate();
 
  const {loggedInUserValues} = useContext(UserLoginContext);


  useEffect(() => {
    if (loggedInUserValues._id == "") {
      navigate("/login");
    }
  });

  return (
    <div className="userProfileHeadContainer">
      <Navbar visibilityForSearch={true}></Navbar>
      <div className="userProfileInnerContainer">
        <div className="sideBarContainerInUserTrips">
          {" "}
          <UserSideBar />
        </div>
        <div className="searchResultsContainerInUserTrips">
          <UserProfileDashBoard></UserProfileDashBoard>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

import React, { useEffect, useContext } from "react";
import Navbar from "../Navbar/Navbar";
import "./UserProfile.css";
import UserSideBar from "./UserSideBar/UserSideBar";
import UserProfileDashBoard from "./UserProfileDashBoard/UserProfileDashBoard";
import { UserLoginContext } from "../../Utils/Context/LoggedInUserContext";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { checkUserLoggedIn } from "../../Utils/Context/LoggedInUserContext";

const UserProfile = () => {
  const navigate = useNavigate();
 
  const {loggedInUserValues} = useContext(UserLoginContext);


  useEffect(() => {
    console.log("i am in profile url", loggedInUserValues);
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

import React, { useState, useEffect } from "react";
import "./UserProfileDashBoard.css";
import axios from "axios";

const UserProfileDashBoard = () => {
  const [userData, setUserData] = useState({
    id: 0,
    userName: "",
    phoneNumber: "",
    emailId: "",
    rating: "4.96",
    isVerified: false,
    profileImage: "" // Add this field to store the image URL
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/user/getUserProfile",
          { withCredentials: true });
        // const data = await response.json();
        setUserData(response.data);
        // console.log(response);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="userInformation">
      <div className="img-container">
        <img className="userProfileImage" src={userData.profileImage} alt="User Profile" />
      </div>
      <h2 className="userProfileDashUserName">{userData.userName}</h2>
      <div><span className="infoAttributeName">Account Status:</span> {userData.isVerified ? "Verified" : "Not Verified"}</div>
      <div><span className="infoAttributeName">User Rating:</span> {userData.rating}</div>
      <div><span className="infoAttributeName">Email Id:</span> {userData.emailId}</div>
      <div className="userShortIntro">
        <label className="infoAttributeName">Contact No:</label>
        <input className="userPhoneNumber" value={userData.phoneNumber} disabled />
      </div>
      <button className="verify-btn">Get Verified Now</button>
    </div>
  );
};

export default UserProfileDashBoard;

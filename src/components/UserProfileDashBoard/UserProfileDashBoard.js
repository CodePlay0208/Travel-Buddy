import React from "react";
import "./UserProfileDashBoard.css";
import sampleImage from "../../data/Images/myimg.png";

function getUserData() {
  return {
    id: 0,
    userName: "Tushar Moudgil",
    phoneNumber: "9896311789",
    emailId: "tusharmoudgil22@gmail.com",
    rating: "4.96",
    isVerified: false
  };
}

const UserProfileDashBoard = () => {
  // TODO: Fetch User data using email id or password
  const userData = getUserData();

  return (
    <div className="userInformation">
          {
            //:TODO How to retrieve image from backend and render it here
          }
          <div className="img-container">
          <img className="userProfileImage" src={sampleImage}></img>
          </div>
          <h2 className="userProfileDashUserName">{userData.userName}</h2>
          <div><span className="infoAttributeName">Account Status:</span> {userData.isVerified? "Verified" : "Not Verified"}</div>
          <div><span className="infoAttributeName">User Rating:</span> {userData.rating}</div>
          <div><span className="infoAttributeName">Email Id:</span> {userData.emailId}</div>
          <div className="userShortIntro">
            <label className="infoAttributeName">Contact No:</label>
            <input className="userPhoneNumber" value={userData.phoneNumber} disabled/>
          </div>

          {//TODO: Do the verification process
          }
          <button className="verify-btn">Get Verified Now</button>
        </div>
  );
};

export default UserProfileDashBoard;

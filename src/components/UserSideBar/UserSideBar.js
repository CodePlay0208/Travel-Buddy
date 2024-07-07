import React from 'react';
import "./UserSideBar.css";
import { useNavigate } from 'react-router-dom';

const UserSideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="sideBar">
        <ul className="listOfSideBarItems">
            <li onClick={()=>{navigate("/userProfile")}}>My Profile</li>
            <li onClick={()=>{navigate("/userTrips")}}>My Trips</li>
            <li onClick={()=>{navigate("/")}}>Home</li>
        </ul>
    </div>
  )
}

export default UserSideBar

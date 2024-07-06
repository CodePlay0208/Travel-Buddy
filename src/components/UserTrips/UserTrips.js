import React, { useEffect, useState, useContext } from "react";
import Navbar from "../Navbar/Navbar";
import UserSideBar from "../UserSideBar/UserSideBar";
import SearchResultsSection from "../SearchResultsSection/SearchResultsSection";
import data from "../../data/data.json";
import "./UserTrips.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {UserLoginContext} from "../../Utils/Context/UserLoginContext";
import { useNavigate } from "react-router-dom";

const UserTrips= () => {
    const [tripsData, setTripsData] = useState([]);
    const {userLoginData, setUserLoginData} = useContext(UserLoginContext);
    const navigate = useNavigate();
    useEffect(()=>{
        if(!userLoginData.isUserLoggedIn){
            toast.error("User Not Logged In", {
                autoClose: 1000
              });
              navigate("/");
        }
        //TODO: get user trips
        const userTrips = data;
        setTripsData(userTrips);
    }, []);
    return (
        <div className="userTripsHeadContainer">
            <Navbar visibilityForSearch={true}></Navbar>
            <div className="userTripsInnerContainer">
            <div className="sideBarContainerInUserTrips"> <UserSideBar/></div>
            <div className="searchResultsContainerInUserTrips">
            <SearchResultsSection tripsData={tripsData} isUserTrip={true}/>
                 </div>
            </div>
            <ToastContainer/>
        </div>
    );
}

export default UserTrips;
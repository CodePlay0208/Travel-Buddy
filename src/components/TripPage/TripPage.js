import React, {useContext} from 'react';
import Navbar from '../Navbar/Navbar';
import SearchMenu from '../SearchMenu/SearchMenu';
import { useParams } from 'react-router-dom';
import data from "../../data/data.json";
import Footer from '../Footer/Footer';
import "./TripPage.css";
import {UserLoginContext} from "../../Utils/Context/UserLoginContext";
import {useNavigate } from 'react-router-dom';

function getTripFromTripId(id){

    //TODO: integrate the API to get trip from Id
    

    return data.filter((obj)=>obj["id"] == id);
}

const TripPage = () => {
    const paramsInUrl = useParams();
    const tripId = paramsInUrl.id;
    const trip = getTripFromTripId(tripId)[0];
    const {userLoginData, setUserLoginData} = useContext(UserLoginContext);
  const navigate = useNavigate();


    const handleClickOnChatButton = ()=>{
        if(userLoginData.isUserLoggedIn){
    
        }
        else{
          navigate("/login-page");
        }
      }
    

  return (
    <div>
    <Navbar visibilityForSearch={true}></Navbar>
        <div className="trip-details-container">
        <div className=" genericContainerInTripPage">
                <div className='personalInformation'>
                <img src = {trip["profileImg"]} className='profileImageInTripPage'></img>
                <div className="nameAndRating">
                    <div className='nameContainerInsidePersonalInformationInTripPage'>{trip["name"]}</div>
                    <div>{trip["gender"]}</div>
                    <div className='ratingContainerInsidePersonalInformationInTripPage'> <span className='ratingInTripPage'>Rating: </span>{trip["userRating"]}</div>
                </div>
                </div>
                <div className='descriptionInTripPage'>
                    <span className="descriptionSpanInTripPage">Description: </span>
                    {trip["description"]}
                </div>
            </div>
            <div className='dividerInTripPage'></div>
            <div className="headLocationContainerInTripPage">
            <div className="startContainerInTripPage genericContainerInTripPage">
                <span className='headerSpanInTripPage'>From:</span>
                <div className='locationContainerInTripPage'>
                <span className='locationInTripPage'>{trip["startLocation"]}</span>
                <span className='dateInTripPage'>{trip["startDate"]}</span>
                </div>
            </div>

            <div className="endContainerInTripPage genericContainerInTripPage">
                <span className='headerSpanInTripPage'>To:</span>
                <div className='locationContainerInTripPage'>
                <span className='locationInTripPage'>{trip["endLocation"]}</span>
                <span className='dateInTripPage'>{trip["endDate"]}</span>
                </div>
            </div>
            </div>
            <div className='dividerInTripPage'></div>
            <div className='totalMembers'>
                <span className="totalMembersInTripPage">Total Members</span>
                <span className="totalMembersValueInTripPage">{trip["totalMembers"]}</span>
            </div>
            <div className='dividerInTripPage'></div>
            <div className="destinationImagesContainerInTripPage">
                <h1 className='headingInTripPage'> Destination Images</h1>
                {
                //TODO: images will be an  array, so manipulate it accordingly, use a for loop
                }
               <img src = {trip["destinationImages"]} className='destinationImagesInTripPage'></img>
            </div>
        <div className="chatBtnContainer">
        <button className="chat-now-btnInTripPage" role="button" onClick={handleClickOnChatButton}>Chat Now</button>
        </div>
        </div>
        <Footer></Footer>
</div>
  )
}

export default TripPage

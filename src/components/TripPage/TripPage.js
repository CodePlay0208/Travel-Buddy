import React, { useContext, useState,useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router-dom';
import data from "../../data/data.json";
import Footer from '../Footer/Footer';
import "./TripPage.css";
import { UserLoginContext } from "../../Utils/Context/UserLoginContext";
import { useNavigate } from 'react-router-dom';

function getTripFromTripId(id) {
    // TODO: integrate the API to get trip from Id
    return data.filter((obj) => obj["id"] == id);
}

const TripPage = () => {
    const paramsInUrl = useParams();
    const tripId = paramsInUrl.id;
    const trip = getTripFromTripId(tripId)[0];
    const { userLoginData } = useContext(UserLoginContext);
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % trip.destinationImages.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [trip.destinationImages.length]);

    const handleClickOnChatButton = () => {
        if (userLoginData.isUserLoggedIn) {
            // Implement chat functionality
        } else {
            navigate("/login-page");
        }
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % trip.destinationImages.length);
    };

    const handlePreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + trip.destinationImages.length) % trip.destinationImages.length);
    };

    return (
        <div>
            <Navbar visibilityForSearch={true} />
            <div className="trip-details-container">
                <div className="leftPanel">
                    <div className="destinationImagesContainerInTripPage">
                        <h1 className="headingInTripPage">Destination Images</h1>
                        <div className="image-slider">
                            <button className="arrow-button" onClick={handlePreviousImage}>{"<"}</button>
                            <img src={trip.destinationImages[currentImageIndex]} className="destinationImagesInTripPage" alt="Trip Destination" />
                            <button className="arrow-button" onClick={handleNextImage}>{">"}</button>
                        </div>
                    </div>
                </div>
                <div className="rightPanel">
                    <div className="genericContainerInTripPage">
                        <div className="personalInformation">
                            <img src={trip.profileImg} className="profileImageInTripPage" alt="Profile" />
                            <div className="nameAndRating">
                                <div className="nameContainerInsidePersonalInformationInTripPage">{trip.name}</div>
                                <div>{trip.gender}</div>
                                <div className="ratingContainerInsidePersonalInformationInTripPage"><span className="ratingInTripPage">Rating: </span>{trip.userRating}</div>
                            </div>
                        </div>
                        <div className="descriptionInTripPage">
                            <span className="descriptionSpanInTripPage">Description: </span>
                            {trip.description}
                        </div>
                    </div>
                    <div className="dividerInTripPage"></div>
                    <div className="headLocationContainerInTripPage">
                        <div className="startContainerInTripPage genericContainerInTripPage">
                            <span className="headerSpanInTripPage">From:</span>
                            <div className="locationContainerInTripPage">
                                <span className="locationInTripPage">{trip.startLocation}</span>
                                <span className="dateInTripPage">{trip.startDate}</span>
                            </div>
                        </div>

                        <div className="endContainerInTripPage genericContainerInTripPage">
                            <span className="headerSpanInTripPage">To:</span>
                            <div className="locationContainerInTripPage">
                                <span className="locationInTripPage">{trip.endLocation}</span>
                                <span className="dateInTripPage">{trip.endDate}</span>
                            </div>
                        </div>
                    </div>
                    <div className="dividerInTripPage"></div>
                    <div className="totalMembers">
                        <span className="totalMembersInTripPage">Total Members</span>
                        <span className="totalMembersValueInTripPage">{trip.totalMembers}</span>
                    </div>
                    <div className="dividerInTripPage"></div>

                    <div className="chatBtnContainer">
                        <button className="chat-now-btnInTripPage" role="button" onClick={handleClickOnChatButton}>Chat Now</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TripPage;

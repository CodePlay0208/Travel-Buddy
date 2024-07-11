import React, { useContext, useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import "./TripPage.css";
import { UserLoginContext } from "../../Utils/Context/UserLoginContext";

const TripPage = () => {
    const { id: tripId } = useParams();
    const { isUserLoggedIn } = useContext(UserLoginContext);
    const navigate = useNavigate();
    const [trip, setTrip] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrip = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/trips/${tripId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch trip data');
                }
                const result = await response.json();
                setTrip(result);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchTrip();
    }, [tripId]);

    useEffect(() => {
        if (trip && trip.destinationImages && trip.destinationImages.length > 0) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % trip.destinationImages.length);
            }, 2000);

            return () => clearInterval(interval);
        }
    }, [trip]);

    const handleClickOnChatButton = () => {
        if (isUserLoggedIn) {
            navigate("/chats")
            // Implement chat functionality
        } else {
            navigate("/login-page");
        }
    };

    const handleNextImage = () => {
        if (trip && trip.destinationImages) {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % trip.destinationImages.length);
        }
    };

    const handlePreviousImage = () => {
        if (trip && trip.destinationImages) {
            setCurrentImageIndex((prevIndex) => (prevIndex - 1 + trip.destinationImages.length) % trip.destinationImages.length);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!trip) {
        return (
            <div>
                <Navbar visibilityForSearch={true} />
                <div className="trip-details-container">
                    <h1>Trip not found</h1>
                </div>
                <Footer />
            </div>
        );
    }

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

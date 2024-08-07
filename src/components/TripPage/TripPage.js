import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../NavBar/Navbar';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import "./TripPage.css";
import { UserLoginContext } from "../../Utils/Context/LoggedInUserContext";
import { ChatContext } from '../../Utils/Context/ChatContext';
import DatePicker from '../DatePicker/DatePicker';
import ImagesSection from './ImagesSection/ImagesSection';
import data from "../../data/data.json"
const TripPage = () => {
  const { id: tripId } = useParams();
  const { loggedInUserValues } = useContext(UserLoginContext);
  const navigate = useNavigate();
  const [trip, setTrip] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [inputValues, setInputValues] = useState(trip);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/trips/${tripId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch trip data');
        }
        const result = await response.json();
        setTrip({...result,startDate : formatDate(result.startDate),endDate : formatDate(result.endDate)});
        setInputValues(result);
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

  const { userChatValues, setUserChatValues } = useContext(ChatContext);

  const accessChat = async (userId) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(`http://localhost:4000/chat/fetchOrCreateChats`, { userId }, {
        ...config,
        withCredentials: true
      });
      setUserChatValues((currentValues) => ({
        ...currentValues, selectedChat: data
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleClickOnChatButton = (userId) => {
    if (loggedInUserValues._id !== "") {
      accessChat(userId);
      navigate("/chats");
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

  const handleEditButtonClick = async () => {
    if (isEditing) {
      try {
        const response = await axios.put(`http://localhost:4000/api/edit_trip/${tripId}`, trip, { withCredentials: true });
        if (response.status !== 200) {
          throw new Error('Failed to save trip data');
        }
        setIsEditing(false);
      } catch (error) {
        setError(error.message);
      }
    } else {
      setIsEditing(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTrip((prevTrip) => ({
      ...prevTrip,
      [name]: value
    }));
  };

  const handleDateChange = (date, name) => {
    setTrip((prevTrip) => ({
      ...prevTrip,
      [name]: date
    }));
  };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  // if (!trip) {
  //   return (
  //     <div>
  //       <Navbar visibilityForSearch={true} />
  //       <div className="trip-details-container">
  //         <h1>Trip not found</h1>
  //       </div>
  //       <Footer />
  //     </div>
  //   );
  // }

  return (
    <div>
    <Navbar/>
    <ImagesSection images={data[0].destinationImages}/>
      {/* <Navbar visibilityForSearch={true} />
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
                <div className="nameContainerInsidePersonalInformationInTripPage">
                  
                </div>
                <div>
                  {isEditing ? (
                    <input
                      type="text"
                      name="sex"
                      value={trip.sex}
                      onChange={handleInputChange}
                    />
                  ) : (
                    trip.sex
                  )}
                </div>
                <div>
                  {isEditing ? (
                    <input
                      type="number"
                      name="age"
                      value={trip.age}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <span>Age: {trip.age}</span>
                  )}
                </div>
                <div className="ratingContainerInsidePersonalInformationInTripPage">
                  <span className="ratingInTripPage">Rating: </span>{trip.userRating}
                </div>
              </div>
            </div>
            <div className="descriptionInTripPage">
              <span className="descriptionSpanInTripPage">Description: </span>
              {isEditing ? (
                <textarea
                  name="description"
                  value={trip.description}
                  onChange={handleInputChange}
                />
              ) : (
                trip.description
              )}
            </div>
          </div>
          <div className="dividerInTripPage"></div>
          <div className="headLocationContainerInTripPage">
            <div className="startContainerInTripPage genericContainerInTripPage">
              <span className="headerSpanInTripPage">From:</span>
              <span className="locationInTripPage">{trip.startLocation}</span>
              <div className="locationContainerInTripPage">
                {isEditing ? (
                  <div className="alignPadding datepicker">
                    <DatePicker inputValues={trip.startDate} setInputValues={setTrip} onValue={'startDate'} placeholderValue={"Enter Start Date"} />
                  </div>
                ) : (
                  <span className="dateInTripPage">{trip.startDate}</span>
                )}
              </div>
            </div>

            <div className="endContainerInTripPage genericContainerInTripPage">
              <span className="headerSpanInTripPage">To:</span>
              <span className="locationInTripPage">{trip.endLocation}</span>
              <div className="locationContainerInTripPage">
                {isEditing ? (
                  <div className="alignPadding datepicker">
                    <DatePicker inputValues={trip.endDate} setInputValues={setTrip} onValue={'endDate'} placeholderValue={"Enter End Date"} />
                  </div>
                ) : (
                  <span className="dateInTripPage">{trip.endDate}</span>
                )}
              </div>
            </div>
          </div>
          <div className="dividerInTripPage"></div>
          <div className="totalMembers">
            <span className="totalMembersInTripPage">Total Members</span>
            {isEditing ? (
              <input
                type="number"
                name="totalMembers"
                value={trip.totalMembers}
                onChange={handleInputChange}
              />
            ) : (
              <span className="totalMembersValueInTripPage">{trip.totalMembers}</span>
            )}
          </div>
          <div className="dividerInTripPage"></div>

          <div className="chatBtnContainer">
            <button className="chat-now-btnInTripPage" role="button" onClick={() => {
              handleClickOnChatButton(trip.user)
            }}>Chat Now</button>
          </div>
          <div className="editBtnContainer">
            <button className="edit-btnInTripPage" role="button" onClick={handleEditButtonClick}>
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>
        </div>
      </div>
      <Footer /> */}
    </div>
  );
};

export default TripPage;

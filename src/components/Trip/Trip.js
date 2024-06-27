import React, { useContext, useState, useEffect } from 'react';
import { UserLoginContext } from "../../Utils/Context/UserLoginContext";
import "./Trip.css";
import { useNavigate } from 'react-router-dom';

const Trip = ({ trip }) => {
  const { userLoginData } = useContext(UserLoginContext);
  const navigate = useNavigate();
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const images = trip.destinationImages;
      const sizeOfImages = images.length;
      setImageIndex((currentImageIndex) => (currentImageIndex + 1) % sizeOfImages)
    }, 2000)

    return () => clearInterval(intervalId);
  }, [])

  const handleClickOnChatButton = () => {
    if (userLoginData.isUserLoggedIn) {
      // Add your chat handling logic here
    } else {
      navigate("/login-page");
    }
  };

  return (
    <div className="cards" onClick={()=> navigate(`/trip/${trip.id}`)}>

<a className="card">
        <img src={trip.destinationImages[imageIndex]} className="card__image" alt={trip.startLocation} />
        <div className="card__overlay">
          <div className="card__header">
            <div className="card__header-text">
              <p><strong>From:</strong>{trip.startLocation}</p>
              <p><strong>To:</strong> {trip.endLocation}</p>
            </div>
            <div className='card__user'>
              <div className='card__profile'>
                <img src={trip.profileImg} alt="" />
              </div>
              <p>{trip.name}</p>
            </div>
          </div>
          <div className="card__description">
            <p><strong>No. of Members:</strong>{trip.totalMembers}</p>
            <p><strong>Age:</strong>{trip.age}</p>
            <p><strong>Sex:</strong> {trip.sex}</p>
            <p className='descriptioncard'><strong>Description:</strong>{trip.description} </p>
            <button className="chat-now-btn" role="button" onClick={handleClickOnChatButton}>Chat Now</button>
          </div>
        </div>

      </a>
    </div>
  );
};

export default Trip;

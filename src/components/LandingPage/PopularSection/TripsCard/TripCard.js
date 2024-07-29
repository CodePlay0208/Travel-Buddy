import React from 'react';
import Slider from 'react-slick';
import './TripCard.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TripCard = ({ trip }) => {
  const {
    profileImg,
    name,
    startLocation,
    endLocation,
    totalMembers,
    age,
    gender,
    description,
    destinationImages
  } = trip;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false // Disable arrows
  };

  return (
    <div className="trip-card">
      <Slider {...settings} className="trip-images">
        {destinationImages.map((image, index) => (
          <img key={index} src={image} alt={`Destination ${index}`} className="destination-image" />
        ))}
      </Slider>
      <div className="trip-profile">
        <img src={profileImg} alt={`${name}'s profile`} className="profile-image" />
        <h2 className="profile-name">{name}</h2>
      </div>
      <div className="trip-info">
        <p className="trip-locations">{startLocation} to {endLocation}</p>
        <p className="trip-members">Total Members: {totalMembers}</p>
        <p className="trip-age-gender">Age: {age}, Gender: {gender}</p>
        <p className="trip-description">{description}</p>
        <button className="trip-button">Chat Now</button>
      </div>
    </div>
  );
};

export default TripCard;

import React from 'react';
import './TripCard.css'; // Import your styles

const TripCard = ({ name, profileImg, startLocation, endLocation, totalMembers, age, gender, description, destinationImages }) => {
  return (
    <div className="trip-card">
      <img src={profileImg} alt={`${name}'s profile`} className="profile-img"/>
      <h3>{name}</h3>
      <p>{startLocation} to {endLocation}</p>
      <p>Members: {totalMembers}</p>
      <p>Age: {age}, Gender: {gender}</p>
      <p>{description}</p>
      <div className="destination-images">
        {destinationImages.map((img, index) => (
          <img key={index} src={img} alt={`Destination ${index + 1}`} className="destination-img"/>
        ))}
      </div>
    </div>
  );
}

export default TripCard;

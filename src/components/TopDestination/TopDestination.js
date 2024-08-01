import React from 'react';
import './TopDestination.css';

import firstImage from '../../data/image.png';

const TopDestination = () => (
  <div className="frame">
    <img 
      src={firstImage} 
      alt="" 
      className="background-image" 
    />
    <div className="rectangle40" />
    <div className="heading">Where do you want to go?</div>
    <div className="location-container">
      <button className="location-box">Bangalore</button>
      <button className="location-box">Tamil Nadu</button>
      <button className="location-box">Mumbai</button>
    </div>
    <button className="explore-button">Explore more places</button>
  </div>
);

export default TopDestination;

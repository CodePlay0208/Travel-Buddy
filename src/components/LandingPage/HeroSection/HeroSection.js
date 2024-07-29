import React from 'react';
import './HeroSection.css';
import firstImage from '../../../data/Images/heroSection/image1.png';
import secondImage from '../../../data/Images/heroSection/image3.png';
import thirdImage from '../../../data/Images/heroSection/image4.png';
import fourthImage from '../../../data/Images/heroSection/image2.png';
import fifthImage from '../../../data/Images/heroSection/image5.png';
import sixthImage from '../../../data/Images/heroSection/image6.png';

const HeroSection = () => {
  const cardData = [
    { id: 1, image: firstImage, rating: 3.5, name: 'Place name' },
    { id: 2, image: secondImage, rating: 3.5, name: 'Place name' },
    { id: 3, image: thirdImage, rating: 3.5, name: 'Place name' },
    { id: 4, image: fourthImage, rating: 3.5, name: 'Place name' },
    { id: 5, image: fifthImage, rating: 3.5, name: 'Place name' },
    { id: 6, image: sixthImage, rating: 3.5, name: 'Place name' },
  ];

  return (
    <section className="heroSection">
      <div className="heroSection-text">
        <h1>Top Destinations</h1>
        <div className="heroSection-buttonGroup">
          <button className="heroSection-button heroSection-btnPrimary">Location</button>
          <button className="heroSection-button heroSection-btnSecondary">Location</button>
          <button className="heroSection-button heroSection-btnSecondary">Location</button>
          <button className="heroSection-button heroSection-btnSecondary">Location</button>
          <button className="heroSection-button heroSection-btnSecondary">Location</button>
        </div>
      </div>
      <div className="heroSection-cards">
        {cardData.map((card) => (
          <div key={card.id} className={`heroSection-card heroSection-card${card.id}`}>
            <div className="heroSection-cardImg" style={{ backgroundImage: `url(${card.image})` }}>
              <div className="heroSection-rating">{card.rating}</div>
            </div>
            <div className="heroSection-placeName">{card.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

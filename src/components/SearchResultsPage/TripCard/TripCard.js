import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TripCard.css'; // Import your styles

const TripCard = ({ name, profileImg, startDate, endDate, startLocation, endLocation, totalMembers, age, gender, description, destinationImages }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };

  return (
    <div className="tripCard__container">
      <div className="tripCard__leftContainer">
        <Slider {...settings}>
          {destinationImages.map((img, index) => (
            <div key={index} className="tripCard__carouselItem">
              <img src={img} alt={`Destination ${index + 1}`} className="tripCard__destinationImg" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="tripCard__rightContainer">
        <div className="tripCard__profileSection">
          <img src={profileImg} alt={`${name}'s profile`} className="tripCard__profileImg" />
          <h3 className="tripCard__username">{name}</h3>
        </div>
        <div className="tripCard__details">
          <div className="tripCard__separatorLine"></div>
          <div className="tripCard__locations">
            <div className="tripCard__detailsLeft">
              <div className="tripCard__dateLabel">Start date: {startDate}</div>
              <div className="tripCard__separatorLine"></div>
              <div className="tripCard__dateLabel">End date: {endDate}</div>
            </div>
            <div className="tripCard__detailsRight">
              <div className="tripCard__dateLabel">Start Location: {startLocation}</div>
              <div className="tripCard__separatorLine"></div>
              <div className="tripCard__dateLabel">End Location: {endLocation}</div>
              <div className="tripCard__separatorLine"></div>
            </div>
          </div>
          <div className="tripCard__description">Desc. {truncateDescription(description, 50)}</div>
        </div>
        <div className="tripCard__chatNow">
        
          <button className="tripCard__chatButton">
          <svg className='lefttochatnow'></svg>
          Chat Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default TripCard;

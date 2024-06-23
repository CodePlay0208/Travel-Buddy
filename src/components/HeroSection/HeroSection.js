import React from 'react';
import Slider from 'react-slick';
import './HeroSection.css'; // Import the CSS file for custom styles

const photos = [
  { id: 1, url: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg', description: 'Photo 1 description' },
  { id: 2, url: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg', description: 'Photo 2 description' },
  { id: 3, url: 'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', description: 'Photo 3 description' },
];

const Hero = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3000 milliseconds = 3 seconds
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="hero-section">
        <Slider {...settings}>
          {photos.map(photo => (
            <div key={photo.id} className="slider-item">
              <img src={photo.url} alt={`Slide ${photo.id}`} />
              <div className="description">
                <h2>{photo.description}</h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="section-content section-content--large">
        <ul className="content-list">
          <li className="content-item">
            <div className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-11h2v2h-2v-2zm0 4h2v6h-2v-6z"/></svg>
            </div>
            <div className="description-container">
              <h2 className="content-title">Your pick of rides at low prices</h2>
              <p className="content-description">No matter where you’re going, by bus or carpool, find the perfect ride from our wide range of destinations and routes at low prices.</p>
            </div>
          </li>
          <li className="content-item">
            <div className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-11h2v2h-2v-2zm0 4h2v6h-2v-6z"/></svg>
            </div>
            <div className="description-container">
              <h2 className="content-title">Trust who you travel with</h2>
              <p className="content-description">We take the time to get to know each of our members and bus partners. We check reviews, profiles and IDs, so you know who you’re travelling with and can book your ride at ease on our secure platform.</p>
            </div>
          </li>
          <li className="content-item">
            <div className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-11h2v2h-2v-2zm0 4h2v6h-2v-6z"/></svg>
            </div>
            <div className="description-container">
              <h2 className="content-title">Scroll, click, tap and go!</h2>
              <p className="content-description">Booking a ride has never been easier! Thanks to our simple app powered by great technology, you can book a ride close to you in just minutes.</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Hero;

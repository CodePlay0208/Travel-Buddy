import React from 'react';
import Slider from 'react-slick';
import './HeroSection.css'; // Create this CSS file for custom styles

const photos = [
  { id: 1, url: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg', description: 'Photo 1 description' },
  { id: 2, url: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg', description: 'Photo 2 description' },
  { id: 3, url: 'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', description: 'Photo 3 description' },
];

const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow next" onClick={onClick}>
      &#10095;
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow prev" onClick={onClick}>
      &#10094;
    </div>
  );
};

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3000 milliseconds = 3 seconds
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
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
  );
};

export default Hero;

import React, { useState } from 'react';
import './ImagesSection.css'; // Ensure you import the CSS file

const ImageSection = () => {
    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg',
        'image5.jpg',
        'image6.jpg'
    ];
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
      };
    
      const handleNextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    
      const handlePrevImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      };
    
      return (
        <div className="image-section">
          <div className="selected-image-container">
            <img src={images[selectedImageIndex]} alt="Selected" className="selected-image" />
            <div className="navigation-arrows">
              <button onClick={handlePrevImage} className="arrow-button">◀</button>
              <button onClick={handleNextImage} className="arrow-button">▶</button>
            </div>
          </div>
          <div className="thumbnail-container">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => handleImageClick(index)}
                className={`thumbnail ${index === selectedImageIndex ? 'selected' : ''}`}
              />
            ))}
          </div>
        </div>
      );
    };

export default ImageSection;

import React, { useState } from 'react';
import './ImagesSection.css';

const ImageSection = ({ images }) => {
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
      {images.length > 0 ? (
        <>
          <div className="selected-image-container">
            <img src={images[selectedImageIndex]} alt="Selected" className="selected-image" />
            {images.length > 1 && (
              <div className="navigation-arrows">
                <button onClick={handlePrevImage} className="arrow-button">◀</button>
                <button onClick={handleNextImage} className="arrow-button">▶</button>
              </div>
            )}
          </div>
          <div className={`thumbnail-container thumbnails-${images.length}`}>
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
        </>
      ) : (
        <div className="no-images">No Images Available</div>
      )}
    </div>
  );
};

export default ImageSection;

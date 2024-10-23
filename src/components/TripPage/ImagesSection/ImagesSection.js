import React from 'react';
import './ImagesSection.css';

const ImageSection = ({ images }) => {
  const renderImages = () => {
    if (images.length === 2) {
      return (
        <div className="image-row two-images">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} className="image-item" />
          ))}
        </div>
      );
    } else if (images.length === 3) {
      return (
        <div className="image-row three-images">
          <img src={images[0]} alt="Main Image" className="main-image" />
          <div className="right-images">
            {images.slice(1).map((image, index) => (
              <img key={index} src={image} alt={`Image ${index + 2}`} className="image-item" />
            ))}
          </div>
        </div>
      );
    } else if (images.length === 4) {
      return (
        <div className="image-row four-images">
          <img src={images[0]} alt="Main Image" className="main-image" />
          <div className="right-images">
            <img src={images[1]} alt="Tall Image" className="tall-image" />
            <div className="stacked-images">
              {images.slice(2).map((image, index) => (
                <img key={index} src={image} alt={`Image ${index + 3}`} className="image-item" />
              ))}
            </div>
          </div>
        </div>
      );
    } else if (images.length >= 5) {
      return (
        <div className="image-row five-images">
          <img src={images[0]} alt="Main Image" className="main-image" />
          <div className="right-images">
            <img src={images[1]} alt="Tall Image" className="tall-image" />
            <div className="stacked-images">
              {images.slice(2).map((image, index) => (
                <img key={index} src={image} alt={`Image ${index + 3}`} className="image-item" />
              ))}
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="image-section">
      {images.length > 0 ? renderImages() : <div className="no-images">No Images Available</div>}
    </div>
  );
};

export default ImageSection;

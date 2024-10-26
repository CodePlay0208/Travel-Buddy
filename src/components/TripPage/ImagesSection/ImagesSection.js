import React from 'react'
import {
  ImageSectionWrapper,
  ImageRow,
  OnlyImage,
  MainImage,
  RightImages,
  ImageItem,
  TallImage,
  StackedImages,
  LLSection,
  LRSection,
} from './ImagesSection.styled'

const ImageSection = ({ images }) => {
  const renderImages = () => {
    if (images.length === 1) {
      return (
        <ImageRow>
          <OnlyImage src={images[0]} alt="Main Image" />
        </ImageRow>
      )
    }
    if (images.length === 2) {
      return (
        <ImageRow className="two-images">
          {images.map((image, index) => (
            <MainImage key={index} src={image} alt={`Image ${index + 1}`} />
          ))}
        </ImageRow>
      )
    } else if (images.length === 3) {
      return (
        <ImageRow className="three-images">
          <MainImage src={images[0]} alt="Main Image" />
          <RightImages>
            {images.slice(1).map((image, index) => (
              <ImageItem key={index} src={image} alt={`Image ${index + 2}`} />
            ))}
          </RightImages>
        </ImageRow>
      )
    } else if (images.length === 4) {
      return (
        <ImageRow className="four-images">
          <MainImage src={images[0]} alt="Main Image" />
          <RightImages>
            <TallImage src={images[1]} alt="Tall Image" />
            <LRSection>
              <StackedImages src={images[2]}  />
              <StackedImages src={images[3]} />
            </LRSection>
          </RightImages>
        </ImageRow>
      )
    } else if (images.length >= 5) {
      return (
        <ImageRow className="five-images">
          <MainImage src={images[0]} alt="Main Image" />
          <RightImages>
            <LLSection>
              <StackedImages src={images[1]} alt="Tall Image" />
              <StackedImages src={images[2]} alt="Tall Image" />
            </LLSection>
            <LRSection>
              <StackedImages src={images[3]} alt="Tall Image" />
              <StackedImages src={images[4]} alt="Tall Image" />
            </LRSection>
          </RightImages>
        </ImageRow>
      )
    }
  }

  return (
    <ImageSectionWrapper>{images.length > 0 ? renderImages() : <div className="no-images">No Images Available</div>}</ImageSectionWrapper>
  )
}

export default ImageSection

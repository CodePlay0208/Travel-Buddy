import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styled from 'styled-components'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 95vh;
`

const StyledImage = styled.img`
  width: max-content;
  max-width: 90%;
  max-height: 90vh;
  object-fit: contain;
`

const CustomCarousel = styled(Carousel)`
  .control-arrow {
    background-color: black;
    opacity: 0.8;
  }
  .control-arrow:hover {
    background-color: black;
    opacity: 1;
  }
  .control-arrow:before {
    border-color: white;
  }
`

const ImageOverlay = ({ images, overlay, setOverlay, currentIndex }) => {
  if (!overlay) return null

  return (
    <Overlay onClick={() => setOverlay(false)}>
      <CarouselContainer onClick={(e) => e.stopPropagation()}>
        <CustomCarousel selectedItem={currentIndex} showThumbs={false} dynamicHeight={true} infiniteLoop={true} showIndicators={false}>
          {images.map((image, index) => (
            <div key={index} className="imagesa ">
              <StyledImage src={image} alt={`carousel-${index}`} />
            </div>
          ))}
        </CustomCarousel>
      </CarouselContainer>
    </Overlay>
  )
}

export default ImageOverlay

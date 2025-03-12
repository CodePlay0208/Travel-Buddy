import React, { useEffect, useCallback } from 'react'
import ReactDOM from 'react-dom'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100rem;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-in-out;
`

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 95vh;
  position: relative;
`

const StyledImage = styled.img`
  width: auto;
  max-width: 90%;
  max-height: 90vh;
  object-fit: contain;
`

const CustomCarousel = styled(Carousel)`
  .control-arrow {
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 0.8;
  }
  .carousel .control-arrow:hover {
    background-color: transparent;
    opacity: 1;
  }
  .control-arrow:before {
    border-color: white;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  z-index: 1001;

  &:hover {
    color: red;
  }
`

const PortalWrapper = ({ children }) => {
  const mount = document.getElementById('modal-root') || document.body
  return ReactDOM.createPortal(children, mount)
}

const ImageOverlay = React.memo(({ images, overlay, setOverlay, currentIndex = 0 }) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        setOverlay(false)
      }
    },
    [setOverlay],
  )

  useEffect(() => {
    if (overlay) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [overlay, handleKeyDown])

  if (!overlay) return null

  return (
    <PortalWrapper>
      <Overlay aria-modal="true" role="dialog" onClick={() => setOverlay(false)}>
        <CarouselContainer onClick={(e) => e.stopPropagation()}>
          <CustomCarousel
            selectedItem={currentIndex}
            showThumbs={false}
            dynamicHeight
            infiniteLoop
            showIndicators={false}
            useKeyboardArrows
          >
            {images.map((image, index) => (
              <div key={index}>
                <StyledImage src={image.preSignedUrl || image} alt={`carousel-${index}`} loading="lazy" />
              </div>
            ))}
          </CustomCarousel>
          <CloseButton onClick={() => setOverlay(false)} aria-label="Close overlay">
            &times;
          </CloseButton>
        </CarouselContainer>
      </Overlay>
    </PortalWrapper>
  )
})

export default ImageOverlay

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components';

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
`;

const CarouselContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: contain;
    width: 80%;
`;

const ImageOverlay = ({ images, overlay, setOverlay, currentIndex }) => {
    if (!overlay) return null;

    return (
        <Overlay onClick={() => setOverlay(false)}>
            <CarouselContainer onClick={(e) => e.stopPropagation()}>
                <Carousel
                    selectedItem={currentIndex} // Start from the clicked image
                    showThumbs={false}
                    dynamicHeight={true}
                    infiniteLoop={true}
                    dots={false}
                >
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`carousel-${index}`} />
                        </div>
                    ))}
                </Carousel>
            </CarouselContainer>
        </Overlay>
    );
};

export default ImageOverlay;

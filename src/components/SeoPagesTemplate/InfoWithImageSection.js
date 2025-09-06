import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import secondImage from './secondImage.jpg' // Ensure this image exists in the same directory

// Styled Components
const SectionContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 60px;
  margin-bottom: 60px;
  width: 100%;
  transition: all 0.3s ease;

  &.expanded {
    flex-direction: column;
    width: 100%;
  }

  @media (max-width: 440px) {
    flex-direction: column;
    gap: 32px;
    margin-bottom: 32px;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 60px;
  width: 100%;
  flex: ${(props) => (props.expanded ? 'none' : '1')};

  p {
    font-family: 'Montserrat', Arial, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 150%;
    text-align: justify;
    color: #000000;
    margin: 0;
    width: 100%;

    @media (max-width: 440px) {
      font-family: Montserrat;
      font-weight: 400;
      font-style: Regular;
      font-size: 16px;
      line-height: 150%;
      letter-spacing: 0%;
      text-align: justify;
    }
  }
`

const ImageContainer = styled.div`
  width: 470px;
  height: 528px;
  border-radius: 14px;
  background-image: url(${secondImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  flex-shrink: 0;

  @media (max-width: 440px) {
    width: 100%;
    height: 400px;
    border-radius: 14px;
    background-position: top;
  }
`

const InfoWithImageSection = ({ text, imageUrl }) => {
  const [expanded, setExpanded] = useState(false)
  const textRef = useRef(null)

  useEffect(() => {
    const checkTextHeight = () => {
      if (textRef.current) {
        const textHeight = textRef.current.scrollHeight
        const imageHeight = 700

        // If text content is taller than image, expand to full width
        if (textHeight > imageHeight) {
          setExpanded(true)
        } else {
          setExpanded(false)
        }
      }
    }

    // Check on mount and when text changes
    checkTextHeight()

    // Add resize listener for responsive behavior
    window.addEventListener('resize', checkTextHeight)
    return () => window.removeEventListener('resize', checkTextHeight)
  }, [text])

  return (
    <SectionContainer className={expanded ? 'expanded' : ''}>
      <TextContainer ref={textRef} expanded={expanded}>
        <p>{text}</p>
      </TextContainer>
      {!expanded && <ImageContainer imageUrl={imageUrl} />}
    </SectionContainer>
  )
}

export default InfoWithImageSection

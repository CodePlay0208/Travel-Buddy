import React from 'react'
import styled from 'styled-components'
import { images } from '../../assets'
import backgroundImage1 from './firstImage.jpg'

const BackgroundSectionContainer = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4.5% 3.5%;
  gap: 12px;
  isolation: isolate;
  height: 450px;
  width: 100%;
  background-image: url(${(props) => props.backgroundImage || backgroundImage1});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid #000000;
  border-radius: 15px;
  position: relative;
  margin-bottom: 60px;
  border: none;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 15px;
    z-index: 0;
  }

  @media (max-width: 440px) {
    width: 100%;
    height: 180px;
    border-radius: 14px;
    margin-bottom: 32px;
  }
`
const BackgroundSectionContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  max-width: 1299px;
`
const BackgroundSectionHeading = styled.h1`
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  font-size: 3.25rem;
  line-height: 120%;
  text-align: center;
  color: #8dd3bb;
  margin: 0;
  width: 100%;
  max-width: 1297px;
  min-height: 74px;
  z-index: 1;
`
const BackgroundSectionParagraph = styled.p`
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 600;
  font-size: 1.85rem;
  line-height: 150%;
  text-align: center;
  color: #ffffff;
  margin: 0;
  width: 100%;
  max-width: 1299px;
  min-height: 96px;
  z-index: 2;
`

const BackgroundSection = ({ section }) => (
  <BackgroundSectionContainer backgroundImage={section.backgroundImage}></BackgroundSectionContainer>
)

export default BackgroundSection

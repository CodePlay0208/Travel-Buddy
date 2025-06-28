import React from 'react'
import styled from 'styled-components'

import backgroundImage1 from './firstImage.jpg'

const FrameTwo = styled.div`
  width: 100%;
  height: 730px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 60px;

  @media (max-width: 440px) {
    flex-direction: column-reverse;
    gap: 40px;
    height: 100%;
    align-items: flex-start;
    border-radius: 52px;
    padding-top: 40px;
    background-color: white;
    transform: translateY(-40px);
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 2% 0;
  gap: 40px;
  width: 45%;

  @media (max-width: 440px) {
    width: 100%;
    padding: 0 16px;
    align-items: center;
    gap: 32px;
  }
`

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
`

const Title = styled.h1`
  margin: 0;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 3.25rem;
  line-height: 120%;
  letter-spacing: 0%;

  color: #252525;

  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 32px;
    line-height: 120%;
    letter-spacing: 0%;
  }
`

const SubTitle = styled.p`
  margin: 0;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 1.39rem;
  line-height: 150%;
  letter-spacing: 0%;
  text-align: justify;

  color: #000;
  .black {
    color: #000;
  }

  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: justify;
  }
`

const ImageWrapper = styled.div`
  width: 42.5%;
  height: 726px;
  background: url(${backgroundImage1});
  background-size: cover;
  background-position: center;
  border-radius: 0 112.5px 112px 0;

  @media (max-width: 440px) {
    width: 95%;
    height: 345px;
    padding: 0 5% 0 0%;
    border-top-right-radius: 53.17px;
    border-bottom-right-radius: 52.93px;
  }
`

const DescSection = () => {
  return (
    <FrameTwo>
      <ImageWrapper />
      <Content>
        <TitleGroup>
          <Title>About Us</Title>
        </TitleGroup>
        <SubTitle>
          Travmigoz, your trusted travel partner bridging the gap between dream vacations and trusted travel experts. We are not just a
          platform — we are the connection between curious travelers and reliable vendors who specialize in crafting unforgettable travel
          experiences.
          <br />
          At Travmigoz, our mission is simple: to make travel planning easy, transparent, and stress-free. Whether you're looking for a
          serene getaway, an adventurous escape, or a cultural expedition, we connect you with the right tour providers who understand your
          travel needs and offer personalized packages at the best prices.
          <br />
          We partner with verified travel vendors from across India and beyond, ensuring that every package listed on our platform meets
          quality and service standards. As a neutral mediator, we help you compare, choose, and communicate directly with vendors, giving
          you control and confidence over your travel bookings.
        </SubTitle>
      </Content>
    </FrameTwo>
  )
}

export default DescSection

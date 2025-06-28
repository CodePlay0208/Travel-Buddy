import React from 'react'
import { FrameTwo, Content, TitleGroup, Title, SubTitle, ImageWrapper } from './DescSection.styled'

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

import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { SVG } from '../../assets/svg'
import {
  TripCardContainer,
  LeftContainer,
  RightContainer,
  ProfileSection,
  ProfileImg,
  Username,
  Details,
  Locations,
  DetailsLeft,
  DetailsRight,
  DetailsContainer,
  DateLabel,
  SeparatorLine,
  Description,
  ChatNow,
  ChatButton,
  CarouselItem,
  DestinationImg,
} from '../../Styles/TripCard.styled'

const TripCard = ({ trip }) => {
  const { name=`name`, profileImg, startDate, endDate, startLocation, endLocation, totalMembers, age, gender, description, destinationImages } =
    trip
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
  }

  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text
    }
    return text.slice(0, maxLength) + '...'
  }

  return (
    <TripCardContainer>
      <LeftContainer>
        <Slider {...settings}>
          {destinationImages.map((img, index) => (
            <CarouselItem key={index}>
              <DestinationImg src={img} alt={`Destination ${index + 1}`} />
            </CarouselItem>
          ))}
        </Slider>
      </LeftContainer>
      <RightContainer>
        <ProfileSection>
          <ProfileImg src={profileImg} alt={` profile`} />
          <Username>{`name`}</Username>
        </ProfileSection>
        <Details>
          <SeparatorLine />
          <Locations>
            <DetailsLeft>
              <DateLabel>Start date: {startDate}</DateLabel>
              <SeparatorLine />
              <DateLabel>End date: {endDate}</DateLabel>
            </DetailsLeft>
            <DetailsContainer>
              <img src={SVG.aeroplaneWithLocation} alt="" />
              <DetailsRight>
                <DateLabel>Start Location: {startLocation}</DateLabel>
                <SeparatorLine />
                <DateLabel>End Location: {endLocation}</DateLabel>
                <SeparatorLine />
              </DetailsRight>
            </DetailsContainer>
          </Locations>
          <Description>Desc. {truncateDescription(description, 50)}</Description>
        </Details>
        <ChatNow>
          <ChatButton>
            <img src={SVG.ChatNow} alt="" />
            Chat Now
          </ChatButton>
        </ChatNow>
      </RightContainer>
    </TripCardContainer>
  )
}

export default TripCard

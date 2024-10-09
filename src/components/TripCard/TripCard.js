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
  Duration,
  Date,
  Title,
  Description,
  ChatNow,
  ChatButton,
  CarouselItem,
  DestinationImg,
  Budget,
  SubTitle,
  Price,
} from '../../Styles/TripCard.styled'

const TripCard = ({ trip }) => {
  const {
    name = `name`,
    profileImg,
    startDate,
    endDate,
    duration,
    startLocation,
    endLocation,
    budget,
    description,
    destinationImages,
  } = trip
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
          {console.log(destinationImages)}
          {destinationImages.map((img, index) => (
            <CarouselItem key={index}>
              <DestinationImg src={img} alt={`Destination ${index + 1}`} />
            </CarouselItem>
          ))}
        </Slider>
      </LeftContainer>
      <RightContainer>
        {/* <ProfileSection>
          <ProfileImg src={profileImg} alt={` profile`} />
          <Username>{`name`}</Username>
        </ProfileSection> */}
        <Details>
          <Duration>
            <img src={SVG.ChatNow} alt="" />
            {duration}
          </Duration>
          <Title>{`${startLocation} to ${endLocation}`}</Title>
          <Date>{`${startDate} - ${endDate}`}</Date>
          <Description>{truncateDescription(description, 150)}</Description>
          <ChatNow>
            <Budget>
              <SubTitle>Approx Budget</SubTitle>
              <Price>Rs {budget}</Price>
            </Budget>
            <ChatButton>Chat Now</ChatButton>
          </ChatNow>
        </Details>
      </RightContainer>
    </TripCardContainer>
  )
}

export default TripCard

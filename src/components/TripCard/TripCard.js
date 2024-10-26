import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { SVG } from '../../assets/svg'
import {
  TripCardContainer,
  LeftContainer,
  RightContainer,
  Details,
  Duration,
  DateComp,
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

const TripCard = (props) => {
  const {
    startDate,
    endDate,
    duration,
    startLocation,
    endLocation,
    budget,
    description,
    croppedDestinationImages: destinationImages,
  } = props.trip
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
  }

  const truncateDescription = (text, maxLength) => {
    if(!text){
      return "";
    }
    if (text.length <= maxLength) {
      return text
    }
    return text.slice(0, maxLength) + '...'
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getUTCDate();
    const month = date.toLocaleString('default', { month: 'long' });
    return `${day} ${month}`;
  }
  
  return (
    <TripCardContainer>
      <LeftContainer>
        <Slider {...settings}>
          {destinationImages?.map((img, index) => (
            <CarouselItem key={index}>
              <DestinationImg src={img} alt={`Destination ${index + 1}`} />
            </CarouselItem>
          ))}
        </Slider>
      </LeftContainer>
      <RightContainer>
        <Details>
          <Duration>
            <img src={SVG.ChatNow} alt="" />
            {duration}
          </Duration>
          <Title>{`${startLocation} To ${endLocation}`}</Title>
          <DateComp>{`${formatDate(startDate)} - ${formatDate(endDate)}`}</DateComp>
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

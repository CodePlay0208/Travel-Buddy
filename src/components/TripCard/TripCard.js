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
} from '../../xyzStyles/TripCard.styled'
import { useNavigate } from "react-router-dom";
import { memo } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './TripCard.css'
import { connect } from 'react-redux'
import { getOrCreateChat } from '../../actions/chats.action'
import { computeDateAndTimeUntilNowInString, formatDate } from '../../utils/DateUtils'

const TripCard = (props) => {
  const {
    tripId,
    profileImg,
    startLocation,
    destination,
    totalMembers,
    age,
    gender,
    description,
    destinationImages,
    budget,
    startDate,
    endDate,
    tripMembers,
    publisherId,
    publishedTime
  } = props || {}

  const duration = computeDateAndTimeUntilNowInString(publishedTime)
  const navigate = useNavigate()

  const { getOrCreateChat } = props
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
  }

  const truncateDescription = (text, maxLength) => {
    if (text) {
      if (text.length <= maxLength) {
        return text
      }
      return text.slice(0, maxLength) + '...'
    }
    return ''
  }

  const onChatNowClick = async (e) => {
    e.stopPropagation()
    const isChatCreated = await getOrCreateChat(publisherId)
    if (isChatCreated) {
      navigate('/chats')
    }
  }

  const onCardPress = () => {
    navigate(`/trip/${tripId}`)
  }
  
  return (
    <TripCardContainer onClick={onCardPress} >
      <LeftContainer>
        <Slider {...settings}>
          {destinationImages && destinationImages.map((img, index) => (
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
            {`${duration} ago`}
          </Duration>
          <Title>{`${startLocation?.split(',')[0]} To ${destination?.split(',')[0]}`}</Title>
          <DateComp>{`${formatDate(startDate)} - ${formatDate(endDate)}`}</DateComp>
          <Description>{truncateDescription(description, 150)}</Description>
          <ChatNow>
            <Budget>
              <SubTitle>Approx Budget</SubTitle>
              <Price>Rs {budget}</Price>
            </Budget>
            <ChatButton onClick={onChatNowClick}>Chat Now</ChatButton>
          </ChatNow>
        </Details>
      </RightContainer>
    </TripCardContainer>
  )
}

export default connect(null, { getOrCreateChat })(memo(TripCard))

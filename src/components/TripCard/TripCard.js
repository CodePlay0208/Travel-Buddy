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
import { useNavigate } from "react-router-dom";
import { memo } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './TripCard.css'
import { connect } from 'react-redux'
import { getOrCreateChat } from '../../actions/chats.action'
import { computeDateAndTimeUntilNowInString, formatDate } from '../../utils/DateUtils'

const mapStateToProps = (state) => ({
})

const TripCard = (props) => {
const TripCard = (props) => {
  const {
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

  const onChatNowClick = async () => {
    const isChatCreated = await getOrCreateChat(publisherId)
    if (isChatCreated) {
      navigate('/chats')
    }
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
          <Title>{`${startLocation} to ${destination}`}</Title>
          <Date>{`${formatDate(startDate)} - ${formatDate(endDate)}`}</Date>
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

export default connect(mapStateToProps, { getOrCreateChat })(memo(TripCard))

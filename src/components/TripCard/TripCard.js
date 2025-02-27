import React, { memo } from 'react'
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
} from '../../styles/TripCard.styled'
import { useNavigate } from 'react-router-dom'
import './TripCard.css'
import { connect } from 'react-redux'
import { getOrCreateChat } from '../../actions/chats.action'
import { computeDateAndTimeUntilNowInString, formatDate } from '../../utils/DateUtils'
import { deleteUserTrip } from '../../actions/trips.action'

const TripCard = ({ trip, getOrCreateChat, editEnable = false }) => {
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
    croppedDestinationImages,
    minBudget,
    maxBudget,
    startDate,
    endDate,
    tripMembers,
    publisherId,
    createdAt,
  } = trip || {}

  const duration = computeDateAndTimeUntilNowInString(createdAt)
  const navigate = useNavigate()

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
  }

  const truncateDescription = (text, maxLength) => {
    if (text) {
      return text.length <= maxLength ? text : text.slice(0, maxLength) + '...'
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
    <TripCardContainer onClick={onCardPress}>
      <LeftContainer>
        <Slider {...settings}>
          {croppedDestinationImages &&
            croppedDestinationImages.map((img, index) => (
              <CarouselItem key={index}>
                <DestinationImg src={img.preSignedUrl} alt={`Destination ${index + 1}`} />
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
              <Price>
                Rs {minBudget} - {maxBudget}
              </Price>
            </Budget>
            {!editEnable && <ChatButton onClick={onChatNowClick}>Chat Now</ChatButton>}
            {editEnable && <ChatButton onClick={() => {}}>Edit Trip</ChatButton>}
          </ChatNow>
        </Details>
      </RightContainer>
    </TripCardContainer>
  )
}

export default connect(null, { getOrCreateChat, deleteUserTrip })(memo(TripCard))

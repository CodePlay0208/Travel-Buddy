import React, { memo } from 'react'
import { Container, Slider, Card, Badge, BadgeText, SliderHeading, CardContainer } from './SlidingSection.styled'
import { computeDateAndTimeUntilNowInString } from '../../utils/DateUtils'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const cardData = [
  {
    background:
      'https://previews.123rf.com/images/rawpixel/rawpixel1704/rawpixel170416831/75837080-mountain-sky-clouds-scenery-landscape-beautiful.jpg',
    text: '12 Days to go',
  },
  {
    background:
      'https://previews.123rf.com/images/rawpixel/rawpixel1704/rawpixel170416831/75837080-mountain-sky-clouds-scenery-landscape-beautiful.jpg',
    text: '10 Days to go',
  },
  {
    background:
      'https://previews.123rf.com/images/rawpixel/rawpixel1704/rawpixel170416831/75837080-mountain-sky-clouds-scenery-landscape-beautiful.jpg',
    text: '5 Days to go',
  },
  {
    background:
      'https://previews.123rf.com/images/rawpixel/rawpixel1704/rawpixel170416831/75837080-mountain-sky-clouds-scenery-landscape-beautiful.jpg',
    text: '5 Days to go',
  },
  {
    background:
      'https://previews.123rf.com/images/rawpixel/rawpixel1704/rawpixel170416831/75837080-mountain-sky-clouds-scenery-landscape-beautiful.jpg',
    text: '5 Days to go',
  },
  {
    background:
      'https://previews.123rf.com/images/rawpixel/rawpixel1704/rawpixel170416831/75837080-mountain-sky-clouds-scenery-landscape-beautiful.jpg',
    text: '5 Days to go',
  },
  {
    background:
      'https://previews.123rf.com/images/rawpixel/rawpixel1704/rawpixel170416831/75837080-mountain-sky-clouds-scenery-landscape-beautiful.jpg',
    text: '5 Days to go',
  },
  {
    background:
      'https://previews.123rf.com/images/rawpixel/rawpixel1704/rawpixel170416831/75837080-mountain-sky-clouds-scenery-landscape-beautiful.jpg',
    text: '5 Days to go',
  },
]

const SlidingSection = () => {
  const { trips, randomTrips } = useSelector((state) => state.tripReducer)
  const navigate = useNavigate()
  const handleCardClick = (tripInstanceId) => {
    navigate('/trip/' + tripInstanceId)
  }
  return (
    <Container>
      <Slider cardCount={8}>
        {randomTrips?.trips?.slice(0, 8).map((card, index) => (
          <CardContainer key={index} onClick={() => handleCardClick(card.tripInstanceId)}>
            <Card key={index} src={card?.croppedDestinationImages?.[0]?.preSignedUrl} />
            <Badge>
              <BadgeText>{computeDateAndTimeUntilNowInString(card?.createdAt)} ago</BadgeText>
            </Badge>
          </CardContainer>
        ))}
      </Slider>
      <SliderHeading>
        <h1>
          Discover & Book Your Next Adventure with Travmigoz<span>&deg;</span>
        </h1>
        <p>Find your amigos and travel now!</p>
      </SliderHeading>
    </Container>
  )
}

SlidingSection.displayName = 'SlidingSection'

export default memo(SlidingSection)

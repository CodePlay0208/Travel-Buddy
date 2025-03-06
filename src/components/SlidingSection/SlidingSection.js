import React, { memo } from 'react'
import { Container, Slider, Card, Badge, BadgeText, SliderHeading, CardContainer } from './SlidingSection.styled'
import { connect } from 'react-redux'
import { computeDateAndTimeUntilNowInString } from '../../utils/DateUtils'

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

const mapStateToProps = (state) => ({
  trips: state.tripReducer.trips,

  searchForm: state.tripReducer.searchForm,
})

const SlidingSection = ({ trips }) => {
  return (
    <Container>
      <Slider cardCount={trips?.length}>
        {trips.slice(0, 8).map((card, index) => (
          <CardContainer>
            <Card key={index} src={card?.croppedDestinationImages?.[0]?.preSignedUrl} />
            <Badge>
              <BadgeText>{computeDateAndTimeUntilNowInString(card?.createdAt)} ago</BadgeText>
            </Badge>
          </CardContainer>
        ))}
      </Slider>
      <SliderHeading>
        <h2>
          Travel and Make Friends<span>&deg;</span>
        </h2>
        <p>Find your amigos and travel now!</p>
      </SliderHeading>
    </Container>
  )
}

export default connect(mapStateToProps, null)(memo(SlidingSection))

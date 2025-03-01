import React from 'react'
import { Container, Slider, Card, Badge, BadgeText, SliderHeading } from './SlidingSection.styled'

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
  return (
    <Container>
      
      <Slider cardCount={cardData.length}>
        {cardData.map((card, index) => (
          <Card key={index} background={card.background}>
            <Badge>
              <BadgeText>{card.text}</BadgeText>
            </Badge>
          </Card>
        ))}
      </Slider>
      <SliderHeading>
        <h2 >
          More than 2500 trips are live <span>&deg;</span>
        </h2>
        <p  style={{ fontSize: '2vw' }}>Find your amigos and travel now!</p>
      </SliderHeading>
    </Container>
  )
}

export default SlidingSection

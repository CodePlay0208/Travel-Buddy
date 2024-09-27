import React from 'react'
import {
  HeroSectionContainer,
  HeroSectionText,
  HeroSectionButtonGroup,
  HeroSectionButton,
  HeroSectionCards,
  HeroSectionCard,
  HeroSectionCardImg,
  HeroSectionRating,
  HeroSectionPlaceName,
} from '../../Styles/HeroSection.styles'
import firstImage from '../../data/Images/heroSection/image1.png'
import secondImage from '../../data/Images/heroSection/image3.png'
import thirdImage from '../../data/Images/heroSection/image4.png'
import fourthImage from '../../data/Images/heroSection/image2.png'
import fifthImage from '../../data/Images/heroSection/image5.png'
import sixthImage from '../../data/Images/heroSection/image6.png'

const HeroSection = () => {
  const cardData = [
    { id: 1, image: firstImage, name: 'Place name' },
    { id: 2, image: secondImage, name: 'Place name' },
    { id: 3, image: thirdImage, name: 'Place name' },
    { id: 4, image: fourthImage, name: 'Place name' },
    { id: 5, image: fifthImage, name: 'Place name' },
    { id: 6, image: sixthImage, name: 'Place name' },
  ]

  return (
    <HeroSectionContainer>
      <HeroSectionText>
        <h1>Top Destinations</h1>
        <HeroSectionButtonGroup>
          <HeroSectionButton primary>Location</HeroSectionButton>
          <HeroSectionButton>Location</HeroSectionButton>
          <HeroSectionButton>Location</HeroSectionButton>
          <HeroSectionButton>Location</HeroSectionButton>
          <HeroSectionButton>Location</HeroSectionButton>
        </HeroSectionButtonGroup>
      </HeroSectionText>
      <HeroSectionCards>
        {cardData.map((card) => (
          <HeroSectionCard key={card.id}>
            <HeroSectionCardImg image={card.image}>
              <HeroSectionRating>{card.rating}</HeroSectionRating>
            </HeroSectionCardImg>
            <HeroSectionPlaceName>{card.name}</HeroSectionPlaceName>
          </HeroSectionCard>
        ))}
      </HeroSectionCards>
    </HeroSectionContainer>
  )
}

export default HeroSection

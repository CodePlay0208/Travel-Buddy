import { memo, useCallback } from 'react'
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
} from '../../styles/HeroSection.styles'
import firstImage from '../../data/Images/heroSection/image1.png'
import secondImage from '../../data/Images/heroSection/image3.png'
import thirdImage from '../../data/Images/heroSection/image4.png'
import fourthImage from '../../data/Images/heroSection/image2.png'
import fifthImage from '../../data/Images/heroSection/image5.png'
import sixthImage from '../../data/Images/heroSection/image6.png'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setSearchForm } from '../../store/slices/trips-slice'

const HeroSection = () => {
  const { searchForm } = useSelector((state) => state.tripReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onHeroItemClick = useCallback((value) => {
    dispatch(setSearchForm({ 
      ...searchForm,
      'destination': value 
    }))
    navigate('/trips')
  }, [])

  const cardData = [
    { id: 1, image: firstImage, searchQuery: 'Manali, Himachal Pradesh', displayName: 'Manali' },
    { id: 2, image: secondImage, searchQuery: 'Ooty, Tamil Nadu', displayName: 'Ooty' },
    { id: 3, image: thirdImage, searchQuery: 'Shimla, Himachal Pradesh', displayName: 'Shimla' },
    { id: 4, image: fourthImage, searchQuery: 'Udaipur, Rasjasthan', displayName: 'Udaipur' },
    { id: 5, image: fifthImage, searchQuery: 'Rameswaram, Tamil Nadu', displayName: 'Rameswaram' },
    { id: 6, image: sixthImage, searchQuery: 'Nanital, Uttarakhand', displayName: 'Nanital' },
  ]

  return (
    <HeroSectionContainer>
      <HeroSectionText>
        <h1>Top Destinations</h1>
        <HeroSectionButtonGroup>
        {cardData.map((card, index) => (
          index === 0 
            ? <HeroSectionButton primary key={index} onClick={() => onHeroItemClick(card?.searchQuery)}>{card?.displayName}</HeroSectionButton>
            : <HeroSectionButton key={index} onClick={() => onHeroItemClick(card?.searchQuery)}>{card?.displayName}</HeroSectionButton>
        ))}
        </HeroSectionButtonGroup>
      </HeroSectionText>
      <HeroSectionCards>
        {cardData.map((card) => (
          <HeroSectionCard key={card.id} onClick={() => onHeroItemClick(card?.searchQuery)}>
            <HeroSectionCardImg image={card.image}></HeroSectionCardImg>
            <HeroSectionPlaceName>{card.displayName}</HeroSectionPlaceName>
          </HeroSectionCard>
        ))}
      </HeroSectionCards>
    </HeroSectionContainer>
  )
}

export default memo(HeroSection)

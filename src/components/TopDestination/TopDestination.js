import { memo, useCallback } from 'react'
import {
  Frame,
  BackgroundImage,
  Rectangle40,
  Heading,
  LocationContainer,
  LocationBox,
  ExploreButton,
} from '../../styles/TopDestination.styled.js'
import firstImage from '../../data/image.png'
import { connect } from 'react-redux'
import { setSearchForm } from '../../actions/trips.action'
import { useNavigate } from 'react-router-dom'
import { SVG } from '../../assets/index.js'

const mapStateToProps = (state) => ({
  searchForm: state.tripReducer.searchForm,
})

const TopDestination = (props) => {
  const { searchForm, setSearchForm } = props
  const navigate = useNavigate()

  const onHeroItemClick = useCallback((value) => {
    setSearchForm({
      ...searchForm,
      destination: value,
    })
    navigate('/trips')
  }, [])

  const cardData = [
    { id: 1, searchQuery: 'Manali, Himachal Pradesh', displayName: 'Manali', icon: SVG.delhi },
    { id: 2, searchQuery: 'Gokarna, Karnataka', displayName: 'Gokarna', icon: SVG.banglore },
    { id: 3, searchQuery: 'Hampta Pass Trek, Manali', displayName: 'Hampta Pass', icon: SVG.mumbai },
    { id: 4, searchQuery: 'Hyderabad, Telangana', displayName: 'Hyderabad', icon: SVG.hyderabad },
  ]

  return (
    <Frame>
      <BackgroundImage src={firstImage} alt="" />
      <Heading>Where do you want to go?</Heading>
      <LocationContainer>
        {cardData.map((card, index) => (
          <LocationBox key={index} onClick={() => onHeroItemClick(card?.searchQuery)}>
            <img src={card?.icon} alt={card?.displayName} /> {card?.displayName}
          </LocationBox>
        ))}
        <ExploreButton
          onClick={() => {
            navigate('/trips')
          }}
        >
          Explore more places
        </ExploreButton>
      </LocationContainer>
    </Frame>
  )
}

export default connect(mapStateToProps, { setSearchForm })(memo(TopDestination))

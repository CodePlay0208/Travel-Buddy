import { memo, useCallback } from 'react'
import {
  Frame,
  BackgroundImage,
  Rectangle40,
  Heading,
  LocationContainer,
  LocationBox,
  ExploreButton,
} from '../../xyzStyles/TopDestination.styled.js'
import firstImage from '../../data/image.png'
import { connect } from 'react-redux'
import { setSearchForm } from '../../actions/trips.action'
import { useNavigate } from 'react-router-dom'

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
    navigate('/search-results-page')
  }, [])

  const cardData = [
    { id: 1, searchQuery: 'Delhi, India', displayName: 'Delhi' },
    { id: 2, searchQuery: 'Bangalore, Karnataka', displayName: 'Bangalore' },
    { id: 3, searchQuery: 'Mumbai, Maharashtra', displayName: 'Mumbai' },
  ]

  return (
    <Frame>
      <BackgroundImage src={firstImage} alt="" />
      <Rectangle40></Rectangle40>
      <Heading>Where do you want to go?</Heading>
      <LocationContainer>
        {cardData.map((card, index) => (
          <LocationBox key={index} onClick={() => onHeroItemClick(card?.searchQuery)}>
            {card?.displayName}
          </LocationBox>
        ))}
      </LocationContainer>
      <ExploreButton
        onClick={() => {
          navigate('/search-results-page')
        }}
      >
        Explore more places
      </ExploreButton>
    </Frame>
  )
}

export default connect(mapStateToProps, { setSearchForm })(memo(TopDestination))

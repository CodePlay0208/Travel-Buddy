import React, { memo } from 'react'
import Header from '../../components/Header/Header'
import TripCard from '../../components/TripCard/TripCard'
import Footer from '../../components/Footer/Footer'
import { connect } from 'react-redux'
import { SearchResultsPageContainer, TripList, SearchResultButtonDiv, ShowMoreButton } from './SearchResultsPage.styled'

const mapStateToProps = (state) => ({
  trips: state.trip.trips,
  loading: state.trip.loading,
  error: state.trip.error,
})

const SearchResultsPage = (props) => {
  const { trips } = props

  return (
    <SearchResultsPageContainer>
      <Header isImageNavbar={true} />
      <TripList>
        {trips.map((trip) => (
          <TripCard
            key={trip._id}
            name={trip?.name}
            profileImg={trip?.profileImg}
            startLocation={trip?.startLocation}
            endLocation={trip?.endLocation}
            totalMembers={trip?.totalMembers}
            age={trip?.age}
            gender={trip.gender}
            description={trip.description}
            destinationImages={trip.destinationImages}
          />
        ))}
      </TripList>
      <SearchResultButtonDiv>
        <ShowMoreButton>Show More</ShowMoreButton>
      </SearchResultButtonDiv>
      <Footer />
    </SearchResultsPageContainer>
  )
}

export default connect(mapStateToProps, null)(memo(SearchResultsPage))

import React, { memo, useEffect } from 'react'
import Header from '../../components/Header/Header'
import TripCard from '../../components/TripCard/TripCard'
import Footer from '../../components/Footer/Footer'
import { connect } from 'react-redux'
import { SearchResultsPageContainer, TripList, SearchResultButtonDiv, ShowMoreButton } from './SearchResultsPage.styled'
import { getTrips } from '../../actions/trips.action'

const mapStateToProps = (state) => ({
  trips: state.trip.trips,
  loading: state.trip.loading,
  error: state.trip.error,
})


const SearchResultsPage = (props) => {
  const { trips, getTrips } = props

  useEffect(async ()=>{
    await getTrips(searchForm)
  },[searchForm]);

  return (
    <SearchResultsPageContainer>
      <Header isImageNavbar={true} />
      <TripList>
        {trips.map((trip) => (
          <TripCard
            key={trip.tripId}
            trip={trip}
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

export default connect(mapStateToProps, {getTrips})(memo(SearchResultsPage))

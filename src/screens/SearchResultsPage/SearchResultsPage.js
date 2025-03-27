import React, { memo, useEffect } from 'react'
import Header from '../../components/Header/Header'
import TripCard from '../../components/TripCard/TripCard'
import Footer from '../../components/Footer/Footer'
import { connect } from 'react-redux'
import { SearchResultsPageContainer, TripList, SearchResultButtonDiv, ShowMoreButton } from './SearchResultsPage.styled'
import { getTrips } from '../../actions/trips.action'
import { Helmet } from 'react-helmet-async'

const mapStateToProps = (state) => ({
  trips: state.tripReducer.trips,
  searchForm: state.tripReducer.searchForm,
})

const SearchResultsPage = (props) => {
  const { trips, getTrips, searchForm } = props

  useEffect(() => {
    getTrips(searchForm)
  }, [getTrips, searchForm])

  return (
    <SearchResultsPageContainer>
      <Helmet>
        <title>Explore Amazing Trips | Find Your Next Travel Adventure</title>
        <meta
          name="description"
          content="Explore handpicked travel experiences and find your travel buddy for your trips with Travmigoz. Find your perfect destination and start your journey today!"
        />
      </Helmet>
      <Header isImageNavbar={true} title="Discover Stunning Travel Destinations. Enjoy Amazing Trips with Travmigoz " />
      <h1 style={{ textAlign: 'center' }}>Discover Stunning Travel Destinations. Enjoy Amazing Trips with Travmigoz </h1>
      <TripList>{trips && trips.map((trip) => <TripCard key={trip?.tripId} trip={trip} />)}</TripList>
      <SearchResultButtonDiv>
        <ShowMoreButton>Show More</ShowMoreButton>
      </SearchResultButtonDiv>
      <Footer />
    </SearchResultsPageContainer>
  )
}

export default connect(mapStateToProps, { getTrips })(memo(SearchResultsPage))

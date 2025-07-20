import React, { memo, useEffect } from 'react'
import Header from '../../components/Header/Header'
import TripCard from '../../components/TripCard/TripCard'
import Footer from '../../components/Footer/Footer'
import { connect } from 'react-redux'
import { SearchResultsPageContainer, TripList, SearchResultButtonDiv, ShowMoreButton } from './SearchResultsPage.styled'
import { getTrips } from '../../actions/trips.action'
import { Helmet } from 'react-helmet-async'
import TravmigozFilter from '../../components/TravmigozFilter'

const mapStateToProps = (state) => ({
  trips: state.tripReducer.trips,
  searchForm: state.tripReducer.searchForm,
})

const SearchResultsPage = (props) => {
  const { trips, getTrips, searchForm } = props

  useEffect(() => {
    getTrips(searchForm)
  }, [getTrips, searchForm])

  const showMoreTrips = () => {
    getTrips(searchForm, trips.length, 50, true, true)
  }
  return (
    <SearchResultsPageContainer>
      <Helmet>
        <title>Explore Amazing Trips | Find Your Next Travel Adventure</title>
        <meta
          name="description"
          content="Explore handpicked travel experiences and find your travel buddy for your trips with Travmigoz. Find your perfect destination and start your journey today!"
        />
      </Helmet>
      <Header isImageNavbar={true} title="Discover Stunning Travel Destinations. Enjoy Amazing Trips with Travmigoz " key="search_result" />
      <TravmigozFilter />
      <h1 style={{ textAlign: 'center' }}>Discover Stunning Travel Destinations. Enjoy Amazing Trips with Travmigoz </h1>
      <TripList>{trips && trips.map((trip) => <TripCard key={trip?.tripId} trip={trip} />)}</TripList>
      <SearchResultButtonDiv>
        <ShowMoreButton onClick={showMoreTrips}>Show More</ShowMoreButton>
      </SearchResultButtonDiv>
      <Footer />
    </SearchResultsPageContainer>
  )
}

SearchResultsPage.displayName = 'SearchResultsPage'

export default connect(mapStateToProps, { getTrips })(memo(SearchResultsPage))

import React, { memo, useEffect } from 'react'
import Header from '../../components/Header/Header'
import TripCard from '../../components/TripCard/TripCard'
import Footer from '../../components/Footer/Footer'
import { SearchResultsPageContainer, TripList, SearchResultButtonDiv, ShowMoreButton } from './SearchResultsPage.styled'
import { Helmet } from 'react-helmet-async'
import TravmigozFilter from '../../components/TravmigozFilter'
import { useSelector, useDispatch } from 'react-redux'
import { getTrips } from '../../store/slices/trips-slice'

const SearchResultsPage = () => {
  const { trips, searchForm } = useSelector((state) => state.tripReducer)
  const { filters, sortBy } = useSelector((state) => state.filtersReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTrips({ ...searchForm, ...filters, sortBy }))
  }, [getTrips, searchForm, filters, sortBy])

  const showMoreTrips = () => {
    dispatch(getTrips({ ...searchForm, ...filters, sortBy }, trips.length, 50, true, true))
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
      {/* <TravmigozFilter /> */}
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

export default memo(SearchResultsPage)

import React, { memo, useEffect } from 'react'
import Header from '../../components/Header/Header'
import TripCard from '../../components/TripCard/TripCard'
import Footer from '../../components/Footer/Footer'
import { connect } from 'react-redux'
import { SearchResultsPageContainer, TripList, SearchResultButtonDiv, ShowMoreButton } from './SearchResultsPage.styled'
import { getTrips } from '../../actions/trips.action'

const mapStateToProps = (state) => ({
  trips: state.tripReducer.trips,
  loading: state.tripReducer.loading,
  error: state.tripReducer.error,
})


const SearchResultsPage = (props) => {
  const { trips, getTrips } = props

  // useEffect(async ()=>{
  //   await getTrips(searchForm)
  // },[searchForm]);

  return (
    <SearchResultsPageContainer>
      <Header isImageNavbar={true} />
      <TripList>
        {trips && trips.map((trip) => (
          <TripCard
            key={trip?.tripId}
            profileImg={trip?.profileImg || null}
            startLocation={trip?.startLocation}
            destination={trip?.destination}
            totalMembers={trip?.totalMembers}
            age={trip?.age}
            gender={trip?.gender}
            description={trip?.description}
            destinationImages={trip?.destinationImages || []}
            budget={trip?.budget}
            startDate={trip?.startDate}
            endDate={trip?.endDate}
            tripMembers={trip?.tripMembers}
            publisherId={trip?.userId}
            publishedTime={trip?.createdAt}
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

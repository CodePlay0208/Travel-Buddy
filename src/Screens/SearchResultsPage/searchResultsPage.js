import React, { memo } from 'react'
import './searchResultsPage.css'
import Header from '../../components/Header/Header'
import TripCard from '../../components/TripCard/TripCard'
import Footer from '../../components/Footer/Footer'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  trips: state.trip.trips,
  loading: state.trip.loading,
  error: state.trip.error,
})

const SearchResultsPage = (props) => {
  const { trips } = props

  return (
    <div>
      <Header isImageNavbar={true} />
      <div className="trip-list">
        {trips.map((trip) => (
          <TripCard
            key={trip.id}
            name={trip.name}
            profileImg={trip.profileImg}
            startLocation={trip.startLocation}
            endLocation={trip.endLocation}
            totalMembers={trip.totalMembers}
            age={trip.age}
            gender={trip.gender}
            description={trip.description}
            destinationImages={trip.destinationImages}
          />
        ))}
      </div>
      <div className="search-result-button-div">
        <button className="showMoreButton">Show More</button>
      </div>
      <Footer />
    </div>
  )
}

export default connect(mapStateToProps, null)(memo(SearchResultsPage))

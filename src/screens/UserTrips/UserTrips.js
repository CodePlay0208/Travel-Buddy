import React, { memo, useEffect } from 'react'
import TripCard from '../../components/TripCard/TripCard'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { connect } from 'react-redux'
import { getUserTrips, deleteUserTrip } from '../../actions/trips.action'
import { TripList } from './UserTrips.styled'
import { getProfile } from '../../actions/profile.action'

const mapStateToProps = (state) => ({
  trips: state.tripReducer.userTrip?.trips,

  profile: state.profileReducer.profile,
})

const UserTrips = (props) => {
  const { trips, getProfile, getUserTrips, deleteUserTrip } = props

  useEffect(() => {
    getProfile()
    getUserTrips()
  }, [])
  const onDeleteTripClick = (tripId) => async (e) => {
    e.stopPropagation()
    await deleteUserTrip(tripId)
  }
  return (
    <>
      <Navbar />
      <TripList>
        {trips && trips.length > 0 ? (
          trips.map((trip) => (
            <TripCard
              key={trip?.tripId}
              tripId={trip?.tripId}
              profileImg={trip?.profileImg || null}
              startLocation={trip?.startLocation}
              destination={trip?.destination}
              totalMembers={trip?.totalMembers}
              age={trip?.age}
              gender={trip?.gender}
              description={trip?.description}
              destinationImages={trip?.croppedDestinationImages || []}
              budget={trip?.budget}
              startDate={trip?.startDate}
              endDate={trip?.endDate}
              tripMembers={trip?.tripMembers}
              publisherId={trip?.userId}
              publishedTime={trip?.createdAt}
              deleteEnable={true}
              onDelete={onDeleteTripClick(trip?.tripId)}
            />
          ))
        ) : (
          <p>No trips found.</p>
        )}
      </TripList>
      <Footer />
    </>
  )
}

export default connect(mapStateToProps, { getProfile, getUserTrips, deleteUserTrip })(memo(UserTrips))

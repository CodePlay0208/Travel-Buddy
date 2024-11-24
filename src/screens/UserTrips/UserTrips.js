import React, { memo, useEffect } from 'react'
import TripCard from '../../components/TripCard/TripCard'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { getUserTrips } from '../../actions/trips.action'

import { connect } from 'react-redux'
import { TripList } from './UserTrips.styled'

const mapStateToProps = (state) => ({
  trips: state.tripReducer.trips,
})
const UserTrips = (props) => {
  const { trips, getUserTrips } = props

  useEffect(() => {
    getUserTrips()
  }, [])

  return (
    <>
      <Navbar />
      <TripList>
        {trips &&
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
            />
          ))}
      </TripList>
      <Footer />
    </>
  )
}

export default connect(mapStateToProps, { getUserTrips })(memo(UserTrips))

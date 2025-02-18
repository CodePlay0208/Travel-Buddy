import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './UserProfile.css'
import UserDashboard from './UserDashboard/UserDashboard'
import React, { memo, useEffect, useState } from 'react'
import Modal from '../../components/Modal/Modal'
import TripCard from '../../components/TripCard/TripCard'
import { connect } from 'react-redux'
import { getProfile } from '../../actions/profile.action'
import { deleteUserTrip, getUserTrips, getUserWishlist, getUserPastTrips, getUserRequested } from '../../actions/trips.action'
import { toast } from 'react-toastify'
import TripList from '../../components/Trip/TripList'

const mapStateToProps = (state) => ({
  myTrips: state.tripReducer.userTrip?.trips,
  profile: state.profileReducer.profile,
  wishlistTrips: state.tripReducer.userTrip?.wishlistTrips,
  pastTrips: state.tripReducer.userTrip?.pastTrips,
  requestedTrips: state.tripReducer.userTrip?.requestedTrips,
})
const UserProfile = (props) => {
  const {
    myTrips,
    getProfile,
    getUserWishlist,
    getUserPastTrips,
    getUserTrips,
    deleteUserTrip,
    wishlistTrips,
    pastTrips,
    requestedTrips,
    getUserRequested,
  } = props

  const [modalState, setModalState] = useState({ isOpen: false, tripId: null })

  useEffect(() => {
    getUserTrips()
    getUserWishlist()
    getUserPastTrips()
    getUserRequested()
  }, [])

  const onDeleteTripClick = (tripId) => (e) => {
    e.stopPropagation()
    setModalState({ isOpen: true, tripId })
  }

  const handleDeleteAccount = async () => {
    const { tripId } = modalState
    setModalState({ isOpen: false, tripId: null })
    try {
      await deleteUserTrip(tripId)
      toast.success('Trip deleted successfully!', { autoClose: 1500 })
    } catch (error) {
      toast.error('Failed to delete trip. Please try again.', { autoClose: 1500 })
    }
  }

  const handleCancelDelete = () => {
    setModalState({ isOpen: false, tripId: null })
  }

  const tripContent =
    myTrips?.length > 0 ? (
      myTrips.map((trip) => (
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
    )
  return (
    <div>
      <Navbar />
      <UserDashboard />
      <TripList title="Requested Trips" trips={requestedTrips} />
      <TripList title="Wishlist" trips={wishlistTrips} />
      <TripList title="My Trips" trips={myTrips} />
      <TripList title="Joined Trips" trips={pastTrips} />
      <Footer />
      {modalState.isOpen && (
        <Modal
          message="Are you sure you want to delete this trip? This action cannot be undone."
          onConfirm={handleDeleteAccount}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  )
}

export default connect(mapStateToProps, { getProfile, getUserTrips, deleteUserTrip, getUserWishlist, getUserPastTrips, getUserRequested })(
  memo(UserProfile),
)

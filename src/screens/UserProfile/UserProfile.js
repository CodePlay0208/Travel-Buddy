import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './UserProfile.css'
import UserDashboard from './UserDashboard/UserDashboard'
import React, { memo, useEffect, useState } from 'react'
import { TripList } from '../UserTrips/UserTrips.styled'
import Modal from '../../components/Modal/Modal'
import TripCard from '../../components/TripCard/TripCard'
import { connect } from 'react-redux'
import { getProfile } from '../../actions/profile.action'
import { deleteUserTrip, getUserTrips } from '../../actions/trips.action'
import { toast } from 'react-toastify'

const mapStateToProps = (state) => ({
  trips: state.tripReducer.userTrip?.trips,
  profile: state.profileReducer.profile,
})
const UserProfile = (props) => {
  const { trips, getProfile, getUserTrips, deleteUserTrip } = props

  const [modalState, setModalState] = useState({ isOpen: false, tripId: null })

  useEffect(() => {
    getProfile()
    getUserTrips()
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
    trips?.length > 0 ? (
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
    )
  return (
    <div>
      <Navbar />
      <UserDashboard />
      <h1 className='heading'>My Trips</h1>
      <TripList>{tripContent}</TripList>
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

export default connect(mapStateToProps, { getProfile, getUserTrips, deleteUserTrip })(memo(UserProfile))

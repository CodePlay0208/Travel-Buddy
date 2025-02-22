import React, { memo, useEffect, useState } from 'react'
import TripCard from '../../components/TripCard/TripCard'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { connect } from 'react-redux'
import { getUserTrips, deleteUserTrip } from '../../actions/trips.action'
import { TripList } from './UserTrips.styled'
import { getProfile } from '../../actions/profile.action'
import { toast } from 'react-toastify'
import Modal from '../../components/Modal/Modal'

const mapStateToProps = (state) => ({
  trips: state.tripReducer.userTrip?.trips,
  profile: state.profileReducer.profile,
})

const UserTrips = (props) => {
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
    trips?.length > 0 ? trips.map((trip) => <TripCard key={trip?.tripId} trip={trip} editEnable={true} />) : <p>No trips found.</p>

  return (
    <>
      <Navbar />
      <TripList>{tripContent}</TripList>
      <Footer />
      {modalState.isOpen && (
        <Modal
          message="Are you sure you want to delete this trip? This action cannot be undone."
          onConfirm={handleDeleteAccount}
          onCancel={handleCancelDelete}
        />
      )}
    </>
  )
}

export default connect(mapStateToProps, { getProfile, getUserTrips, deleteUserTrip })(memo(UserTrips))

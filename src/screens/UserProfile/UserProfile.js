import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './UserProfile.css'
import UserDashboard from './UserDashboard/UserDashboard'
import React, { memo, useEffect, useState } from 'react'
import Modal from '../../components/Modal/Modal'
import TripCard from '../../components/TripCard/TripCard'
import { toast } from 'react-toastify'
import TripList from '../../components/Trip/TripList'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUserTrip, getUserPastTrips, getUserRequested, getUserTrips, getUserWishlist } from '../../store/slices/trips-slice'

const UserProfile = () => {
  const { userTrip, wishlistTrips, pastTrips, requestedTrips } = useSelector((state) => state.tripReducer)
  const dispatch = useDispatch()

  const [modalState, setModalState] = useState({ isOpen: false, tripId: null })

  useEffect(() => {
    dispatch(getUserTrips())
    dispatch(getUserWishlist())
    dispatch(getUserPastTrips())
    dispatch(getUserRequested())
  }, [])

  const onDeleteTripClick = (tripId) => (e) => {
    e.stopPropagation()
    setModalState({ isOpen: true, tripId })
  }

  const handleDeleteAccount = async () => {
    const { tripId } = modalState
    setModalState({ isOpen: false, tripId: null })
    try {
      await dispatch(deleteUserTrip(tripId)).unwrap()
      toast.success('Trip deleted successfully!', { autoClose: 1500 })
    } catch (error) {
      toast.error('Failed to delete trip. Please try again.', { autoClose: 1500 })
    }
  }

  const handleCancelDelete = () => {
    setModalState({ isOpen: false, tripId: null })
  }

  const tripContent =
    userTrip?.trips?.length > 0 ? userTrip?.trips.map((trip) => <TripCard key={trip?.tripId} trip={trip} />) : <p>No trips found.</p>
  return (
    <div>
      <Navbar />
      <UserDashboard />
      <TripList title="Requested Trips" trips={requestedTrips?.trips} />
      <TripList title="Wishlist" trips={wishlistTrips?.trips} />
      <TripList title="My Trips" trips={userTrip?.trips} editEnable={true} />
      <TripList title="Joined Trips" trips={pastTrips?.trips} />
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

export default memo(UserProfile)

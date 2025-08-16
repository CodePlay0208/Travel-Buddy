import React, { memo, useEffect, useState } from 'react'
import TripCard from '../../components/TripCard/TripCard'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { TripList } from './UserTrips.styled'
import { toast } from 'react-toastify'
import Modal from '../../components/Modal/Modal'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUserTrip, getUserTrips } from '../../store/slices/trips-slice'
import { getProfile } from '../../store/slices/profile-slice'

const UserTrips = () => {
  const { userTrip } = useSelector((state) => state.tripReducer)
  const dispatch = useDispatch()

  const [modalState, setModalState] = useState({ isOpen: false, tripId: null })

  useEffect(() => {
    dispatch(getProfile())
    dispatch(getUserTrips())
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
    userTrip?.trips?.length > 0 ? (
      userTrip?.trips.map((trip) => <TripCard key={trip?.tripId} trip={trip} editEnable={true} />)
    ) : (
      <p>No trips found.</p>
    )

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

export default memo(UserTrips)

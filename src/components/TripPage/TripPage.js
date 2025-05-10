import React, { useState, useEffect, useCallback, memo } from 'react'
import Navbar from '../Navbar/Navbar'
import { useParams } from 'react-router-dom'
import Footer from '../Footer/Footer'
import ImagesSection from './ImagesSection/ImagesSection'
import DetailsSection from './DetailsSection/DetailsSection'
import PopularSection from '../PopularSection/PopularSection'
import { connect } from 'react-redux'
import { Container } from './TripPage.styled'
import { getTripById, editTrip } from '../../actions/trips.action'
import { ToastContainer, toast } from 'react-toastify'
import { StyledToastContainer } from '../../styles/Global'

const mapStateToProps = (state) => ({
  trip: state.tripReducer.trip,
  profile: state.profileReducer.profile,
})

const TripPage = (props) => {
  const { trip, getTripById, profile, editTrip } = props
  const { id: tripIdFromParams } = useParams()
  const [tripId, setTripId] = useState(tripIdFromParams)
  const [isEditMode, setIsEditMode] = useState(false)

  const [editedData, setEditedData] = useState({})
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [tripIdFromParams])

  useEffect(() => {
    setTripId(tripIdFromParams)
  }, [tripIdFromParams])

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const isUserTrip = trip?.userId === profile?.userId || false

  const fetchTrip = useCallback(() => {
    if (tripId) {
      getTripById(tripId)
    }
  }, [getTripById, tripId])

  useEffect(() => {
    fetchTrip()
  }, [fetchTrip])

  useEffect(() => {
    if (trip && trip.destinationImages && trip.destinationImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % trip.destinationImages.length)
      }, 2000)

      return () => clearInterval(interval)
    }
  }, [trip])

  useEffect(() => {
    if (trip) {
      setEditedData({
        description: trip.description || '',
      })
    }
  }, [trip])

  const onToggleEditMode = () => {
    setIsEditMode((prev) => !prev)
  }

  const onSaveTrip = async () => {
    const formData = { ...editedData, gender: 'male' }

    const formDataNew = new FormData()

    Object.entries(formData).forEach(([key, value]) => {
      formDataNew.append(key, value)
    })
    await editTrip(trip.tripId, formDataNew, true)
    setIsEditMode(false)
    fetchTrip()
  }

  return (
    <>
      <Navbar />
      <Container>
        <ImagesSection preSignedUrl={trip?.destinationImages || []} isEditMode={isEditMode} />
        <DetailsSection
          isUserTrip={isUserTrip}
          isEditMode={isEditMode}
          editedData={editedData}
          setEditedData={setEditedData}
          setEditMode={onToggleEditMode}
          onSaveTrip={onSaveTrip}
        />
        <StyledToastContainer />
      </Container>
      <PopularSection title="Trip" />
      <Footer />
    </>
  )
}

export default connect(mapStateToProps, { getTripById, editTrip })(memo(TripPage))

import React, { useState, useEffect, useCallback, memo } from 'react'
import Navbar from '../Navbar/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import Footer from '../Footer/Footer'
import ImagesSection from './ImagesSection/ImagesSection'
import DetailsSection from './DetailsSection/DetailsSection'
import PopularSection from '../PopularSection/PopularSection'
import { Container } from './TripPage.styled'
import { ToastContainer, toast } from 'react-toastify'
import { StyledToastContainer } from '../../styles/Global'
import { AdminEmail } from './AdminEmail'
import PreferencesSection from '../PreferencesSection'
import { useSelector, useDispatch } from 'react-redux'
import { editTrip, getTripById } from '../../store/slices/trips-slice'

const TripPage = () => {
  const { trip } = useSelector((state) => state.tripReducer)
  const { profile } = useSelector((state) => state.profileReducer)
  const dispatch = useDispatch()

  const { id: tripIdFromParams } = useParams()
  const [tripId, setTripId] = useState(tripIdFromParams)
  const [isEditMode, setIsEditMode] = useState(false)
  const navigate = useNavigate()
  const [editedData, setEditedData] = useState({})
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [tripIdFromParams])

  useEffect(() => {
    setTripId(tripIdFromParams)
  }, [tripIdFromParams])

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const publisher = trip?.joinedMembers?.find((user) => user?.userId === trip?.hostId)
  const isUserTrip = trip?.hostId === profile?.userId || AdminEmail.includes(profile?.emailId)|| false 

  const fetchTrip = useCallback(async () => {
    if (tripId) {
      const res = await dispatch(getTripById(tripId)).unwrap()
      if(!res){
        navigate('/')
      }
    }
    else {
      toast.error('Trip ID is not provided.')
    }
  }, [getTripById, navigate, tripId])

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
    await dispatch(editTrip(trip.baseTripId, formDataNew, true)).unwrap()
    setIsEditMode(false)
    fetchTrip()
  }

  return (
    <>
      <Navbar />
      <Container>
        <ImagesSection preSignedUrl={trip?.destinationImages || []} isEditMode={isEditMode} />
        <PreferencesSection preferences={trip?.preferences}/>
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
      <PopularSection title="Similar Trips" />
      <Footer />
    </>
  )
}

TripPage.displayName = 'TripPage'

export default memo(TripPage)

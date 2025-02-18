import React, { useState, useEffect, useCallback, memo } from 'react'
import Navbar from '../Navbar/Navbar'
import { useParams } from 'react-router-dom'
import Footer from '../Footer/Footer'
import ImagesSection from './ImagesSection/ImagesSection'
import data from '../../data/data.json'
import DetailsSection from './DetailsSection/DetailsSection'
import PopularSection from '../PopularSection/PopularSection'
import { connect } from 'react-redux'

import { Container } from './TripPage.styled'
import { getTripById } from '../../actions/trips.action'

const mapStateToProps = (state) => ({
  trip: state.tripReducer.trip,
  profile: state.profileReducer.profile,
})

const TripPage = (props) => {
  const { trip, getTripById, profile } = props
  const { id: tripIdFromParams } = useParams()
  const [tripId, setTripId] = useState(tripIdFromParams)

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

  return (
    <>
      <Navbar />
      <Container>
        <ImagesSection images={trip?.destinationImages || []} />
        <DetailsSection isUserTrip={isUserTrip} />
      </Container>
      <PopularSection title="Similar Trip" margin={`0 6.5%`} padding={`10px 0`} fontSize={`4vw`} />
      <Footer />
    </>
  )
}

export default connect(mapStateToProps, { getTripById })(memo(TripPage))

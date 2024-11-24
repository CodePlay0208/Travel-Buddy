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
import { getTrip } from '../../actions/trips.action'

const mapStateToProps = (state) => ({
  trip: state.tripReducer.trip,
})

const TripPage = (props) => {
  const { trip, getTrip } = props
  const { id: tripId } = useParams()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const fetchTrip = useCallback(() => {
    getTrip(tripId)
  }, [tripId])

  useEffect(() => {
    fetchTrip()
  }, [])

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
        <DetailsSection />
      </Container>
      <PopularSection title="Similar Trip" margin={`0 15%`} fontSize={`80px`} padding={`10px 0`} />
      <Footer />
    </>
  )
}

export default connect(mapStateToProps, { getTrip })(memo(TripPage))

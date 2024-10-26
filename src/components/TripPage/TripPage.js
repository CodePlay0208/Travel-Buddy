import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import { useParams } from 'react-router-dom'
import Footer from '../Footer/Footer'
import './TripPage.css'
import ImagesSection from './ImagesSection/ImagesSection'
import data from '../../data/data.json'
import DetailsSection from './DetailsSection/DetailsSection'
import PopularSection from '../PopularSection/PopularSection'

import { Container } from './TripPage.styled'

const TripPage = () => {
  const { id: tripId } = useParams()
  const [trip, setTrip] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [inputValues, setInputValues] = useState(trip)

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/trips/${tripId}`)
        if (!response.ok) {
          throw new Error('Failed to fetch trip data')
        }
        const result = await response.json()
        setTrip({ ...result, startDate: formatDate(result.startDate), endDate: formatDate(result.endDate) })
        setInputValues(result)
        setLoading(false)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
    }

    fetchTrip()
  }, [tripId])

  useEffect(() => {
    if (trip && trip.destinationImages && trip.destinationImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % trip.destinationImages.length)
      }, 2000)

      return () => clearInterval(interval)
    }
  }, [trip])

  const formatDate = (isoString) => {
    const date = new Date(isoString)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}-${month}-${year}`
  }

  return (
    <>
      <Navbar />
      <Container>
        <ImagesSection images={data[tripId-1].destinationImages} />
        <DetailsSection />
      </Container>
      <PopularSection title="Similar Trip"  margin={`0 15%`} fontSize={`40px`}/>
      <Footer />
    </>
  )
}

export default TripPage

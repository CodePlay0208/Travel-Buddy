import React from 'react'
import { destinationContent } from '../data/destinationContent'
import DestinationTemplate from '../components/DestinationTemplate'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const TrekkingTripsPage = () => (
  <>
    <Navbar />
    <DestinationTemplate destination={destinationContent.trekkingTrips} destinationName="trekking-trips" />
    <Footer />
  </>
)

export default TrekkingTripsPage

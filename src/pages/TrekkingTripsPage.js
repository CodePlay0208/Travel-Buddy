import React from 'react'
import { destinationContent } from '../data/destinationContent'
import DestinationTemplate from '../components/DestinationTemplate'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const TrekkingTripsPage = () => (
  <>
    <Navbar isImageNavbar={true} />
    <DestinationTemplate destination={destinationContent.trekkingTrips} destinationName="trekking-trips" isBlog={true} />
    <Footer />
  </>
)

export default TrekkingTripsPage

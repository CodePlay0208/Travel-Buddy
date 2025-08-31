import React from 'react'
import { destinationContent } from '../data/destinationContent'
import DestinationTemplate from '../components/DestinationTemplate'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const TourTravelPage = () => (
  <>
    <Navbar />
    <DestinationTemplate destination={destinationContent.tourTravel} destinationName="tour-travel" />
    <Footer />
  </>
)

export default TourTravelPage

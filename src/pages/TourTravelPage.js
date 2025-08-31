import React from 'react'
import { destinationContent } from '../data/destinationContent'
import DestinationTemplate from '../components/DestinationTemplate'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const TourTravelPage = () => (
  <>
    <Navbar isImageNavbar={true} />
    <DestinationTemplate destination={destinationContent.tourTravel} destinationName="tour-travel" isBlog={true} />
    <Footer />
  </>
)

export default TourTravelPage

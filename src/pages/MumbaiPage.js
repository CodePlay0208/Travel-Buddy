import React from 'react'
import DestinationTemplate from '../components/DestinationTemplate'
import { destinationContent } from '../data/destinationContent'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const MumbaiPage = () => (
  <>
    <Navbar isImageNavbar={true} />
    <DestinationTemplate destination={destinationContent.mumbai} destinationName="mumbai" />
    <Footer />
  </>
)

export default MumbaiPage

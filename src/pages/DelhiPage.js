import React from 'react'
import DestinationTemplate from '../components/DestinationTemplate'
import { destinationContent } from '../data/destinationContent'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const DelhiPage = () => (
  <>
    <Navbar isImageNavbar={true} />
    <DestinationTemplate destination={destinationContent.delhi} destinationName="delhi" />
    <Footer />
  </>
)

export default DelhiPage

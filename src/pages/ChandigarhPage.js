import React from 'react'
import DestinationTemplate from '../components/DestinationTemplate'
import { destinationContent } from '../data/destinationContent'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const ChandigarhPage = () => (
  <>
    <Navbar isImageNavbar={true} />
    <DestinationTemplate destination={destinationContent.chandigarh} destinationName="chandigarh" />
    <Footer />
  </>
)

export default ChandigarhPage

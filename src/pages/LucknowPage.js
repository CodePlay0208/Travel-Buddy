import React from 'react'
import DestinationTemplate from '../components/DestinationTemplate'
import { destinationContent } from '../data/destinationContent'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const LucknowPage = () => (
  <>
    <Navbar isImageNavbar={true} />
    <DestinationTemplate destination={destinationContent.lucknow} destinationName="lucknow" />
    <Footer />
  </>
)

export default LucknowPage

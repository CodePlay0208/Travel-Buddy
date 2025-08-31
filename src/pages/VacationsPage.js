import React from 'react'
import { destinationContent } from '../data/destinationContent'
import DestinationTemplate from '../components/DestinationTemplate'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const VacationsPage = () => (
  <>
    <Navbar />
    <DestinationTemplate destination={destinationContent.vacations} destinationName="vacations" />
    <Footer />
  </>
)

export default VacationsPage

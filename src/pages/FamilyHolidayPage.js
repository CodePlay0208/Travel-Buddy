import React from 'react'
import { destinationContent } from '../data/destinationContent'
import DestinationTemplate from '../components/DestinationTemplate'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const FamilyHolidayPage = () => (
  <>
    <Navbar />
    <DestinationTemplate destination={destinationContent.familyHoliday} destinationName="family-holiday" isBlog={true} />
    <Footer />
  </>
)

export default FamilyHolidayPage

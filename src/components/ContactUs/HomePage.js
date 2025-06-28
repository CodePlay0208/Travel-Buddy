import React from 'react'
import WaitingScreen from './WaitingScreen.js'
import CardsSection from './CardsSection.js'
import SignUpSection from './SignUpSection.js'
import { PageWrapper } from './HomePage.styled'
import Navbar from '../Navbar/Navbar.js'
import Footer from '../Footer/Footer.js'

const HomePage = () => (
  <>
    <Navbar />
    <PageWrapper>
      <WaitingScreen />

      <CardsSection />

      <SignUpSection />
    </PageWrapper>
    <Footer />
  </>
)

export default HomePage

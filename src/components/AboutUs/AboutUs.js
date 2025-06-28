import React from 'react'
import WaitingScreen from './WaitingScreen.js'
import DescSection from './DescSection.js'
import SignUpSection from './SignUpSection.js'
import { PageWrapper } from './AboutUs.styled'
import Navbar from '../Navbar/Navbar.js'
import Footer from '../Footer/Footer.js'
import VisionSection from './VisionSection.js'

const AboutUs = () => (
  <>
    <Navbar />
    <PageWrapper>
      <WaitingScreen />
      <DescSection />

      <SignUpSection />
      <VisionSection />
    </PageWrapper>
    <Footer />
  </>
)

export default AboutUs

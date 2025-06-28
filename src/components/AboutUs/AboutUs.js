import React from 'react'
import WaitingScreen from './WaitingScreen.js'
import DescSection from './DescSection.js'
import SignUpSection from './SignUpSection.js'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar.js'
import Footer from '../Footer/Footer.js'
import VisionSection from './VisionSection.js'

const PageWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 125px;
  margin-bottom: 100px;
  @media (max-width: 440px) {
    gap: 0px;
  }
`

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

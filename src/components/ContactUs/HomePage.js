import React from 'react'
import WaitingScreen from './WaitingScreen.js'
import CardsSection from './CardsSection.js'
import SignUpSection from './SignUpSection.js'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar.js'
import Footer from '../Footer/Footer.js'

const PageWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  margin-bottom: 100px;
`

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

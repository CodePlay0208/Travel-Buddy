import React, { useEffect } from 'react'
import './landingPage.css'
import Header from '../../components/Header/Header'
import PopularSection from '../../components/PopularSection/PopularSection'
import AboutSection from '../../components/AboutSection/AboutSection'
import HeroSection from '../../components/HeroSection/HeroSection'
import TopDestination from '../../components/TopDestination/TopDestination'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import { useDispatch } from 'react-redux'
import { setSearchForm } from '../../store/slices/trips-slice'

const LandingPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setSearchForm({
      destination: '',
      startDate: '',
    }))
  }, [])

  return (
    <div className="LandingContainer">
      <Header isImageNavbar={true} isLandingPage={true} />
      <PopularSection />
      <AboutSection />
      <HeroSection />
      <TopDestination />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default LandingPage

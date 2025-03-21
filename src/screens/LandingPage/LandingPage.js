import { useEffect, memo } from 'react'
import './LandingPage.css'
import Header from '../../components/Header/Header'
import PopularSection from '../../components/PopularSection/PopularSection'
import AboutSection from '../../components/AboutSection/AboutSection'
import HeroSection from '../../components/HeroSectionV2/HeroSection'
import TopDestination from '../../components/TopDestination/TopDestination'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import { connect } from 'react-redux'
import { setSearchForm } from '../../actions/trips.action'
import { loadUser } from '../../actions/auth.action'
import SlidingSection from '../../components/SlidingSection/SlidingSection'
import { Helmet } from 'react-helmet-async'

const LandingPage = (props) => {
  const { setSearchForm, loadUser } = props

  useEffect(() => {
    setSearchForm({
      destination: '',
      startDate: '',
    })
  }, [setSearchForm])

  return (
    <div className="LandingContainer">
      <Helmet>
        <title>Travmigoz - Home</title>
        <meta
          name="description"
          content="Plan your perfect trip with Travmigoz! Discover the best travel options, explore amazing destinations, and enjoy unforgettable experiences with your travel buddy."
        />
      </Helmet>
      <Header isImageNavbar={true} isLandingPage={true} />
      <SlidingSection />
      <HeroSection />
      <PopularSection />
      <TopDestination />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default connect(null, { setSearchForm, loadUser })(memo(LandingPage))

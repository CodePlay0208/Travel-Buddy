import { useEffect, memo, useCallback } from 'react'
import './LandingPage.css'
import Header from '../../components/Header/Header'
import PopularSection from '../../components/PopularSection/PopularSection'
import AboutSection from '../../components/AboutSection/AboutSection'
import HeroSection from '../../components/HeroSection/HeroSection'
import TopDestination from '../../components/TopDestination/TopDestination'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import { connect } from 'react-redux'
import { loadUser } from '../../actions/auth.action'
import { disconnectSocket } from '../../actions/chats.action'

const mapStateToProps = (state) => ({
  user: state.authReducer.user
})
const LandingPage = (props) => {
  const { loadUser } = props

  useEffect(() => {
    loadUser()

    // return () => {
    //   disconnectSocket()
    // }
  }, [])

  return (
    <div className="LandingContainer">
      <Header isImageNavbar={true} isLandingPage={true}/>
      <PopularSection/>
        <AboutSection/>
        <HeroSection/>
        <TopDestination/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default connect(null, { loadUser })(memo(LandingPage))

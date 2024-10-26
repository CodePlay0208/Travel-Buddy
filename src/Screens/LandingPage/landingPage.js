import React from 'react';
import './landingPage.css';
import Header from '../../components/Header/Header';
import PopularSection from '../../components/PopularSection/PopularSection';
import AboutSection from '../../components/AboutSection/AboutSection';
import HeroSection from '../../components/HeroSection/HeroSection';
import TopDestination from '../../components/TopDestination/TopDestination';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';

const landingPage = () => {
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
  );
}

export default landingPage;

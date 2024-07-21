import React from 'react';
import './LandingPage.css';
import Header from './Header/Header';
import PopularSection from './PopularSection/PopularSection';
import AboutSection from './AboutSection/AboutSection';
import HeroSection from './HeroSection/HeroSection';
const LandingPage = () => {
  return (
    <div className="LandingContainer">
      <Header/>
      <PopularSection/>
        <AboutSection/>
        <HeroSection/>
    </div>
  );
}

export default LandingPage;

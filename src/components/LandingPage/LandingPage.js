import React from 'react';
import './LandingPage.css';
import Header from './Header/Header';
import PopularSection from './PopularSection/PopularSection';
import AboutSection from './AboutSection/AboutSection';
const LandingPage = () => {
  return (
    <div className="LandingContainer">
      <Header/>
      <PopularSection/>
        <AboutSection/>
    </div>
  );
}

export default LandingPage;

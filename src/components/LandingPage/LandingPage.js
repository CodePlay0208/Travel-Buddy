import React from 'react';
import './LandingPage.css';
import Header from './Header/Header';
import PopularSection from './PopularSection/PopularSection';
const LandingPage = () => {
  return (
    <div className="LandingContainer">
      <Header/>
      <PopularSection/>
    </div>
  );
}

export default LandingPage;

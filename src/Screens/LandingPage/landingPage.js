import React from 'react';
import Header from '../../components/Header/Header';
import PopularSection from '../../components/PopularSection/PopularSection';
import AboutSection from '../../components/AboutSection/AboutSection';
import HeroSection from '../../components/HeroSection/HeroSection';
import TopDestination from '../../components/TopDestination/TopDestination';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';
import { LandingContainer } from '../../components/styles/LandingPage.styled';

const LandingPage = () => {
  return (
    <LandingContainer>
      <Header isImageNavbar={true} />
      <PopularSection />
      <AboutSection />
      <HeroSection />
      <TopDestination />
      <Newsletter />
      <Footer />
    </LandingContainer>
  );
};

export default LandingPage;

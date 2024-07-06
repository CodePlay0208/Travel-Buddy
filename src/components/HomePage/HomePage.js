import React from 'react';
import './HomePage.css';
import Navbar from '../Navbar/Navbar';
import SearchMenu from '../SearchMenu/SearchMenu';
import Footer from '../Footer/Footer';
import HeroSection from '../HeroSection/HeroSection'
import FAQSection from '../HeroSection/FaqSection/FaqSection';
import PopularTrips from '../HeroSection/PopularTrips/PopularTrips';

const SearchResults = () => {
  return (
    <div>
       <Navbar visibilityForSearch={true}></Navbar>
       <SearchMenu></SearchMenu>
       <HeroSection/>
       <PopularTrips/>
       <FAQSection/>
       <Footer></Footer>
    </div>
  );
};

export default SearchResults;
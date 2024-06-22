import React from 'react';
import './HomePage.css';
import Navbar from '../Navbar/Navbar';
import SearchMenu from '../SearchMenu/SearchMenu';
import Footer from '../Footer/Footer';
import HeroSection from '../HeroSection/HeroSection'

const SearchResults = () => {
  return (
    <div>
       <Navbar visibilityForSearch={true}></Navbar>
       <SearchMenu></SearchMenu>
       <HeroSection/>
       <Footer></Footer>
    </div>
  );
};

export default SearchResults;
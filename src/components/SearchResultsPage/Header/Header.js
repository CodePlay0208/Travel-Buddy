import React from 'react';
import './Header.css';
import LandingPageImage from "../../../data/Images//searchResult/header.png";
import SearchMenu from '../../SearchMenu/SearchMenu';
import SearchBar from '../../LandingPage/SearchBar/SearchBar'
const Header = () => {
  return (
    <>
      <div className="HeaderContainer">
        
        <div className="LandingHeader">
          <img src={LandingPageImage} alt="Landing Page" className="LandingImage" />
        </div>
        <div className="HeaderDescription">
          <div className="HeaderDesHeading">Make your travel whishlist, we’ll do the rest</div>
          <div className="HeaderDesPara">Special offers to suit your plan</div>
        </div>
        <div className="HeaderSearchBar">
          <SearchBar />
        </div>
      </div>
    </>
  );
}

export default Header;

import React from 'react';
import './Header.css';
import LandingPageImage from "../../data/Images/searchResult/header.png";
import SearchBar from '../SearchBar/SearchBar';
import Navbar from '../NavBar/Navbar';

const SearchResultHeader = (props) => {
  return (
    <>
      <div className="HeaderContainer">
       {
        props.isImageNavbar && <Navbar isImageNavbar={props.isImageNavbar}/>
       }
        <div className="LandingHeader">
          <img src={LandingPageImage} alt="Landing Page" className="LandingImage" />
        </div>
        <div className="HeaderDescription">
          <div className="HeaderDesHeading">Travmigoz</div>
          <div className="HeaderDesPara">Find Your Travel Amigos!</div>
        </div>
        <div className="HeaderSearchBar">
          <SearchBar />
        </div>
      </div>
    </>
  );
}

export default SearchResultHeader;

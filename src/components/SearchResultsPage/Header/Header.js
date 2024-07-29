import React from 'react';
import './Header.css';
import LandingPageImage from "../../../data/Images/searchResult/header.png";
import SearchBar from '../../LandingPage/SearchBar/SearchBar';

const SearchResultHeader = () => {
  return (
    <>
      <div className="SearchResultHeaderContainer">
        <div className="SearchResultLandingHeader">
          <img src={LandingPageImage} alt="Landing Page" className="SearchResultLandingImage" />
        </div>
        <div className="SearchResultHeaderDescription">
          <div className="SearchResultHeaderDesHeading">Make your travel wishlist, we’ll do the rest</div>
          <div className="SearchResultHeaderDesPara">Special offers to suit your plan</div>
        </div>
        <div className="SearchResultHeaderSearchBar">
          <SearchBar />
        </div>
      </div>
    </>
  );
}

export default SearchResultHeader;

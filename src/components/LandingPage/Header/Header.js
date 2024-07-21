import React from 'react';
import './Header.css';
import LandingPageImage from "../../../data/Images/landingpage.jpeg";
import SearchMenu from '../../SearchMenu/SearchMenu';

const Header = () => {
  return (
    < >
      <div className="HeaderContainer">
        <div className="HeaderNavbar">
          <div className="HeaderNavLeft">
            <div className="NavContents">Travmigoz</div>
            <div className="NavContents">Publish Trip</div>
          </div>
          <div className="HeaderNavRight">
            <div className="NavContents login">Login</div>
            <div className="NavContents signup">Sign Up</div>
          </div>
        </div>
        <div className="LandingHeader">
          <img src={LandingPageImage} alt="Landing Page" className="LandingImage" />
        </div>
        <div className="HeaderDescription">
          <div className="HeaderDesHeading">Live & Travel</div>
          <div className="HeaderDesPara">Special offers to suit your plan</div>
        </div>
        <div className="HeaderSearchBar">
          <SearchMenu />
        </div>
      </div>
    </>
  );
}

export default Header;

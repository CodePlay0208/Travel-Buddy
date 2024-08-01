import React from 'react';
import './Header.css';
import LandingPageImage from "../../../data/Images/landingpage.jpeg";
import SearchMenu from '../../SearchMenu/SearchMenu';
import SearchBar from '../SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';



const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="HeaderContainer">
        <div className="HeaderNavbar">
          <div className="HeaderNavLeft">
            <div className="NavContents" onClick={()=>navigate("/")}>Travmigoz</div>
          </div>
          <div className="HeaderNavRight">
            <div className="NavContents publishTrip" onClick={()=>navigate("/publish-trip")}>Publish Trip</div>
            <div className="NavContents login" onClick={()=>navigate("/login-page")}>Login</div>
          </div>
        </div>
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

export default Header;

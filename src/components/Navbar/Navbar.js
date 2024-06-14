import React from 'react';
import './Navbar.css';


const Navbar = (props) => {
  return (
    <nav className="nav">
        <div className='webAppNameAndLogo'>
          Travel Buddy
        </div>
        <div className='otherContentsOfNavBar'>
            {props.visibilityForSearch && <a href="/search-page" className="nav-link nav-button" id="search-button">Search</a>}
            <a href="/signup" className="nav-link nav-button" >Publish a Trip</a>
        </div>
    </nav>
  );
};

export default Navbar;
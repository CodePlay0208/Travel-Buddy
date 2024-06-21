import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();
  return (
    <nav className="nav">
      <div
        className="webAppNameAndLogo"
        onClick={() => {
          localStorage.clear();
          navigate("/");
        }}
      >
        Travel Buddy
      </div>
      <div className="otherContentsOfNavBar">
        {props.visibilityForSearch && (
          <div
            className="nav-link nav-button"
            id="search-button"
            onClick={() => {
    
              navigate("/search-page");
            }}
          >
            Search
          </div>
        )}
        {!props.visibilityForSearch && (
          <div className="nav-link nav-button" id="search-button"></div>
        )}
        <div
          className="nav-link nav-button"
          onClick={() => {
            localStorage.clear();
            navigate("/publish-trip");
          }}
        >
          Publish Trip
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

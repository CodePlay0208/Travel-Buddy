import React , {useState}from 'react';
import './Header.css';
import LandingPageImage from "../../data/Images/searchResult/header.png";
import SearchMenu from '../SearchMenu/SearchMenu';
import Navbar from '../NavBar/Navbar';
import { InputValuesContext } from '../../Utils/Context/InputValuesContext';

const SearchResultHeader = (props) => {

  const [inputValues , setInputValues] = useState({destination:'', startDate:''});

  return (
    <InputValuesContext.Provider
    value={{ inputValues , setInputValues}}
  >
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
          <SearchMenu />
        </div>
      </div>
    </InputValuesContext.Provider>
  );
}

export default SearchResultHeader;

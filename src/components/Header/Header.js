import React , {useState, memo , useMemo}from 'react';
import './Header.css';
import LandingPageImage from "../../data/Images/searchResult/header.png";
import SearchMenu from '../SearchMenu/SearchMenu';
import Navbar from '../Navbar/Navbar';
import { InputValuesContext } from '../../Utils/Context/InputValuesContext';

const SearchResultHeader = (props) => {

  const [inputValues, setInputValues] = useState({
    destination: '',
    startDate: ''
  });

  const memocontext = useMemo(()=>({inputValues , setInputValues}) , [inputValues])

  return (
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
        <InputValuesContext.Provider
        value={memocontext}
      >
        <div className="HeaderSearchBar">
          <SearchMenu />
        </div>
        </InputValuesContext.Provider>
      </div>
  );
}

export default memo(SearchResultHeader);

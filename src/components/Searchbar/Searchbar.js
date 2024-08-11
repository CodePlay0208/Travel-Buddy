import React from 'react';
import './Searchbar.css';
import { SVG } from '../../assets'



const Searchbar = ({ inputValues, setInputValues, onValue, placeholderValue }) => {

  const searchBarChangeHandler = (event) => {
    setInputValues((currentInputValues) => ({
      ...currentInputValues,
      [onValue]: event.target.value
    }));
  }

  return (
    <div className="SearchBar-DestinationContainer" onClick={() => { document.getElementById('searchBar-destination-input').focus() }}>
      <input
        type="text"
        className="SearchBar-location"
        placeholder={placeholderValue}
        id='searchBar-destination-input'
        value={inputValues}
        onChange={searchBarChangeHandler} 
        autoComplete='off'/>
      <div className="SearchBar-Image">
        <img src={SVG.LocationIcon} className="locationIcon" />
      </div>
    </div>
  )
}

export default Searchbar
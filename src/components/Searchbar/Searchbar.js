import React, { useState,useEffect } from 'react';
import './Searchbar.css';
import { SVG } from '../../assets';
import axios from 'axios';

const Searchbar = ({ inputValues, setInputValues, onValue, placeholderValue }) => {
  const [suggestions, setSuggestions] = useState([]); // To store location suggestions
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const searchBarChangeHandler = async (event) => {
    
    const value = event.target.value;
    console.log(value);
    setInputValues((currentInputValues) => ({
      ...currentInputValues,
      [onValue]: value
    }));

    // Fetch location suggestions using axios
    if (value.length > 2) {
      try {
        const response = await axios.get(`http://localhost:4000/location/getLocationByName/${value}`);
        setSuggestions(response.data); // Assuming response.data contains the city and state objects
        setDropdownVisible(true);
      } catch (error) {
        console.error('Error fetching location suggestions:', error);
      }
    } else {
      setDropdownVisible(false); // Hide dropdown if input length is less than 3
    }
  };
  const selectSuggestion = (suggestion) => {
    // Set the selected value in the input field
    setInputValues((currentInputValues) => ({
      ...currentInputValues,
      [onValue]: `${suggestion.city}, ${suggestion.state}`,
    }));
  
    // Debug: Check if the inputValues are updated correctly
    console.log("Updated inputValues:", inputValues);
  
    // Hide the dropdown after ensuring the value is updated
    setTimeout(() => setDropdownVisible(false), 0);
  };
  

  return (
    <div className="SearchBar-DestinationContainer" onClick={() => { document.getElementById('searchBar-destination-input').focus(); }}>
      <input
        type="text"
        className="SearchBar-location"
        placeholder={placeholderValue}
        id="searchBar-destination-input"
        value={inputValues} // Show the selected value in the input field
        onChange={searchBarChangeHandler}
        autoComplete="off"
      />
      <div className="SearchBar-Image">
        <img src={SVG.LocationIcon} className="locationIcon" alt="Location Icon" />
      </div>
      {/* Dropdown for suggestions */}
      {isDropdownVisible && suggestions.length > 0 && (
        <ul className="SearchBar-Dropdown">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="SearchBar-DropdownItem"
              onClick={() => selectSuggestion(suggestion)}
            >
              {suggestion.city}, {suggestion.state}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Searchbar;

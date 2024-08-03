import React from 'react';
import './SearchBar.css';

const Searchbar = ()=> {
  return (
    <div className="SearchBar-DestinationContainer" onClick={()=>{document.getElementById('searchBar-destination-input').focus()}}>
        <input type = "text" className="SearchBar-location" placeholder='Destination' id='searchBar-destination-input'/>
        <div className="SearchBar-Image">
          <svg viewBox="0 0 31 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M31 41.3661C31 43.4154 24.0563 45.0704 15.5 45.0704C6.94366 45.0704 0 43.4154 0 41.3661C0 39.5352 5.56338 38.0281 12.8592 37.7183H18.1408C25.4437 38.0281 31 39.5352 31 41.3661Z" fill="#E3E2E1" />
          <path d="M15.5 0C7.54226 0 1.09155 6.44366 1.09155 14.4014C1.09155 22.3592 15.5 41.3662 15.5 41.3662C15.5 41.3662 29.9014 22.3592 29.9014 14.4014C29.9014 6.44366 23.4578 0 15.5 0ZM15.5 23.9366C10.2324 23.9366 5.96479 19.669 5.96479 14.4014C5.96479 9.1338 10.2324 4.8662 15.5 4.8662C20.7676 4.8662 25.0352 9.1338 25.0352 14.4014C25.0352 19.669 20.7676 23.9366 15.5 23.9366Z" fill="#E82327" />
        </svg>
        </div>
      </div>
  )
}

export default Searchbar
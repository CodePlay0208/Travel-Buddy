import React from 'react';
import './HomePage.css';
import Navbar from '../Navbar/Navbar';
import Searchbar from '../Searchbar/Searchbar';


const SearchResults = () => {
  return (
    <div>
       <Navbar visibilityForSearch={true}></Navbar>
       <Searchbar></Searchbar>
    </div>
  );
};

export default SearchResults;
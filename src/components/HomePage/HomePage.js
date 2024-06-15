import React from 'react';
import './HomePage.css';
import Navbar from '../Navbar/Navbar';
import Searchbar from '../Searchbar/Searchbar';
import Footer from '../Footer/Footer';


const SearchResults = () => {
  return (
    <div>
       <Navbar visibilityForSearch={true}></Navbar>
       <Searchbar></Searchbar>
       <Footer></Footer>
    </div>
  );
};

export default SearchResults;
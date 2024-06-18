import React from 'react';
import './HomePage.css';
import Navbar from '../Navbar/Navbar';
import SearchMenu from '../SearchMenu/SearchMenu';
import Footer from '../Footer/Footer';


const SearchResults = () => {
  return (
    <div>
       <Navbar visibilityForSearch={true}></Navbar>
       <SearchMenu></SearchMenu>
       <Footer></Footer>
    </div>
  );
};

export default SearchResults;
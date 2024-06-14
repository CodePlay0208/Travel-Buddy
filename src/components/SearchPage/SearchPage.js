import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Searchbar from '../Searchbar/Searchbar';

const SearchPage = () =>{
    return(
        <div className = "container">
             <Navbar visibilityForSearch={false}></Navbar>
             <Searchbar></Searchbar>
        </div>
    );
};

export default SearchPage;

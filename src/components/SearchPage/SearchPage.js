import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Searchbar from '../Searchbar/Searchbar';
import Footer from '../Footer/Footer';

const SearchPage = () =>{
    return(
        <div>
             <Navbar visibilityForSearch={false}></Navbar>
             <Searchbar></Searchbar>
             <Footer></Footer>
        </div>
    );
};

export default SearchPage;

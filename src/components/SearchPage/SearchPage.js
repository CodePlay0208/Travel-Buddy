import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import SearchMenu from '../SearchMenu/SearchMenu';
import Footer from '../Footer/Footer';

const SearchPage = () =>{
    return(
        <div>
             <Navbar visibilityForSearch={false}></Navbar>
             <SearchMenu ></SearchMenu>
             <Footer></Footer>
        </div>
    );
};

export default SearchPage;

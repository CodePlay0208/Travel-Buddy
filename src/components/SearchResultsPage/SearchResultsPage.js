import React, { useState, useContext, useEffect } from "react";
import "./SearchResultsPage.css";
import Navbar from "../Navbar/Navbar";
import Searchbar from "../Searchbar/Searchbar";
import FilterSection from "../FilterSection/FilterSection";
import SearchResultsSection from "../SearchResultsSection/SearchResultsSection";
import { FilterContext } from "../../Utils/Context/FilterContext";
import {TripsContext} from "../../Utils/Context/TripsContext";
import {InputValuesContext} from  "../../Utils/Context/InputValuesContext";
import data from "../../data/data.json";


const SearchResultsPage = () => {
  const [filterData, setFilterData] = useState({
    fromAge: 0,
    toAge: 100,
    gender: "",
  });

  console.log("search results page");

  const {inputValues} = useContext(InputValuesContext);

  const tripsContext = useContext(TripsContext);

  console.log("The input values are", inputValues);

  useEffect(()=>{
    const arr = data;
    tripsContext.setTripsData(arr);
  },[inputValues]);
 

  return (
    <div>
        <Navbar visibilityForSearch={false}></Navbar>
        <Searchbar></Searchbar>
        <FilterContext.Provider
          value={{
            ...filterData,
            setFilterData: setFilterData,
          }}
        >
          <div className="search-results-page-container">
            <div className="filter-section">
              <FilterSection visibility = {true} />
            </div>

            <div className="search-results-section">
              <SearchResultsSection />
            </div>
          </div>
        </FilterContext.Provider>
    </div>
  );
};

export default SearchResultsPage;

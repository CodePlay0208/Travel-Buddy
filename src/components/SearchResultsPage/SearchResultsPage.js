import React, { useState, useContext, useEffect } from "react";
import "./SearchResultsPage.css";
import Navbar from "../Navbar/Navbar";
import SearchMenu from "../SearchMenu/SearchMenu";
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

  const {inputValues} = useContext(InputValuesContext);

  const [tripsData, setTripsData] = useState([]);


  useEffect(()=>{
    // TODO: fetch trips data
    const arr = data;
    setTripsData(arr);
  },[inputValues]);
 

  return (
    <div>
        <Navbar visibilityForSearch={false}></Navbar>
        <SearchMenu></SearchMenu>
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
              <SearchResultsSection tripsData={tripsData} isUserTrip = {false}/>
            </div>
          </div>
        </FilterContext.Provider>
    </div>
  );
};

export default SearchResultsPage;

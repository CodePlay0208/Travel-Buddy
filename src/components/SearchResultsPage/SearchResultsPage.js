import React, { useState, useContext } from "react";
import "./SearchResultsPage.css";
import Navbar from "../Navbar/Navbar";
import Searchbar from "../Searchbar/Searchbar";
import FilterSection from "../FilterSection/FilterSection";
import SearchResultsSection from "../SearchResultsSection/SearchResultsSection";
import { FilterContext } from "../../Utils/Context/FilterContext";


const SearchResultsPage = () => {
  const [filterData, setFilterData] = useState({
    fromAge: 0,
    toAge: 100,
    sex: "",
  });

 

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
          <div className="container">
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

import React, { useState, useContext, useEffect } from "react";
import "./SearchResultsPage.css";
import Navbar from "../Navbar/Navbar";
import SearchMenu from "../SearchMenu/SearchMenu";
import FilterSection from "../FilterSection/FilterSection";
import SearchResultsSection from "../SearchResultsSection/SearchResultsSection";
import { FilterContext } from "../../Utils/Context/FilterContext";
import { TripsContext } from "../../Utils/Context/TripsContext";
import { InputValuesContext } from "../../Utils/Context/InputValuesContext";
import data from "../../data/data.json";

const SearchResultsPage = () => {
  const [filterData, setFilterData] = useState({
    fromAge: 0,
    toAge: 100,
    gender: "",
  });

  const { inputValues } = useContext(InputValuesContext);
  const [tripsData, setTripsData] = useState([]);

  useEffect(() => {
    const convertDateFormat = (dateStr) => {
      const [day, month, year] = dateStr.split('-');
      return `${year}-${month}-${day}`;
    };

    const fetchTrips = async () => {
      const { destination, startDate } = inputValues;

      if (!destination || !startDate) {
        return; // Don't make a request if either destination or date is empty
      }

      try {
        const date = convertDateFormat(startDate);
        const response = await fetch(`http://localhost:4000/api/trips?destination=${destination}&date=${date}`);
        const result = await response.json();

        if (response.ok) {
          setTripsData(result);
        } else {
          console.error('Failed to fetch trips:', result.message);
        }
      } catch (error) {
        console.error('Error fetching trips:', error);
      }
    };

    fetchTrips();
  }, [inputValues]);

  useEffect(() => {
    console.log(tripsData);
  }, [tripsData]);

  return (
    <div>
      <Navbar visibilityForSearch={false} />
      <SearchMenu />
      <FilterContext.Provider
        value={{
          ...filterData,
          setFilterData,
        }}
      >
        <div className="search-results-page-container">
          <div className="filter-section">
            <FilterSection visibility={true} />
          </div>
          <div className="search-results-section">
            <SearchResultsSection tripsData={tripsData} isUserTrip={false} />
          </div>
        </div>
      </FilterContext.Provider>
    </div>
  );
};

export default SearchResultsPage;

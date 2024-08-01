import React, { useState, useContext, useEffect } from "react";
import "./SearchResultsPage.css";
import Navbar from "../Navbar/Navbar";
import { FilterContext } from "../../Utils/Context/FilterContext";
import { InputValuesContext } from "../../Utils/Context/InputValuesContext";
import tripData from "../../data/data.json";
import Header from "../Header/Header";
import TripCard from "../TripCard/TripCard";
import Footer from "../Footer/Footer"
const SearchResultsPage = () => {
  const [filterData, setFilterData] = useState({
    fromAge: 0,
    toAge: 100,
    gender: "",
  });

  const { inputValues } = useContext(InputValuesContext);
  const [tripsData, setTripsData] = useState([]);

  const convertDateFormat = (dateStr) => {
    const [day, month, year] = dateStr.split("-");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const fetchTrips = async () => {
      const { destination, startDate } = inputValues;
      if (!destination || !startDate) {
        console.log("Destination or startDate is missing.");
        return; // Don't make a request if either destination or date is empty
      }
      try {
        const date = convertDateFormat(startDate);
        console.log(`Fetching trips for destination: ${destination}, date: ${date}`);
        const response = await fetch(`http://localhost:4000/api/trips?destination=${destination}&date=${date}`, {
          credentials: 'include'
        });
        const result = await response.json();
        if (response.ok) {
          setTripsData(result);
        } else {
          console.error("Failed to fetch trips:", result.message);
        }
      } catch (error) {
        console.error("Error fetching trips:", error);
      }
    };
    fetchTrips();
  }, [inputValues]);


  return (
    <div>
      <FilterContext.Provider
        value={{
          ...filterData,
          setFilterData,
        }}
      >
        {/* <div className="search-results-page-container">
          <div className="filter-section">
            <FilterSection visibility={true} />
          </div>
          <div className="search-results-section">
            <SearchResultsSection tripsData={tripsData} isUserTrip={false} />
          </div>
        </div> */}
        <Navbar/>
        <Header/>
        <div className="trip-list">
      {tripData.map((trip) => (
        <TripCard
          key={trip.id}
          name={trip.name}
          profileImg={trip.profileImg}
          startLocation={trip.startLocation}
          endLocation={trip.endLocation}
          totalMembers={trip.totalMembers}
          age={trip.age}
          gender={trip.gender}
          description={trip.description}
          destinationImages={trip.destinationImages}
        />
      ))}
    </div>
    <Footer/>
      </FilterContext.Provider>
    </div>
  );
};

export default SearchResultsPage;

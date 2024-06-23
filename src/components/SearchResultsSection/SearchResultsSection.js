import React, { useContext, useEffect, useState } from "react";
import "./SearchResultsSection.css";
import { FilterContext } from "../../Utils/Context/FilterContext";
import Trip from "../Trip/Trip";
import { TripsContext } from "../../Utils/Context/TripsContext";


const SearchResultsSection = (props) => {

  const filterContext = useContext(FilterContext);
  const trips = props.tripsData;

  const filterTrip = (trip) =>{
    console.log(filterContext);
    console.log(trip);
    return (trip.age >= filterContext.fromAge && trip.age <= filterContext.toAge && (filterContext.gender === '' || trip.sex === filterContext.gender))
  }

  let finalTrips = trips;

  if(!props.isUserTrip){
    finalTrips = trips.filter((trip) => filterTrip(trip));
  }


  return (
    <div className="search-results-section-container">
      <div className="headerForSearchResults">
      </div>
      <div className="trips">
        {finalTrips && finalTrips.map((trip) =>(<Trip key ={trip.id} trip={trip} />)
        )}
      </div>
    </div>
  );
};

export default SearchResultsSection;

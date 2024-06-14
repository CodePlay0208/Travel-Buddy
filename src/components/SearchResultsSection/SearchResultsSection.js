import React, { useContext, useEffect, useState } from "react";
import "./SearchResultsSection.css";
import { FilterContext } from "../../Utils/Context/FilterContext";
import Trip from "../Trip/Trip";
import { TripsContext } from "../../Utils/Context/TripsContext";


const SearchResultsSection = () => {

  const tripsContext = useContext(TripsContext);
  const filterContext = useContext(FilterContext);
  const trips = tripsContext.tripsData;

  const filterTrip = (trip) =>{
    return (trip.age >= filterContext.fromAge && trip.age <= filterContext.toAge && (filterContext.sex === '' || trip.sex === filterContext.sex))
  }


  let finalTrips = trips.filter((trip) => filterTrip(trip));
  console.log("The final trips are ", finalTrips);
  return (
    <div className="container">
      <div className="headerForSearchResults"></div>
      <div className="trips">
        {finalTrips && finalTrips.map((trip) =>(<Trip key ={trip.id} trip={trip} />)
        )}
      </div>
    </div>
  );
};

export default SearchResultsSection;

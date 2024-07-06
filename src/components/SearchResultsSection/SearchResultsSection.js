import React, { useContext, useEffect, useState, useRef } from "react";
import "./SearchResultsSection.css";
import { FilterContext } from "../../Utils/Context/FilterContext";
import Trip from "../Trip/Trip";

const SearchResultsSection = (props) => {
  const filterContext = useContext(FilterContext);
  const [displayedTrips, setDisplayedTrips] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loader = useRef(null);

  const trips = props.tripsData || [];

  const filterTrip = (trip) => {
    return (
      trip.age >= filterContext.fromAge &&
      trip.age <= filterContext.toAge &&
      (filterContext.gender === '' || trip.gender === filterContext.gender)
    );
  };

  const loadTrips = (page) => {
    if (trips.length > 0) {
      setLoading(true);
      const startIndex = (page - 1) * 10;
      const endIndex = startIndex + 10;
      const filteredTrips = trips.filter((trip) => filterTrip(trip));
      const newTrips = filteredTrips.slice(startIndex, endIndex);
      setDisplayedTrips((prevTrips) => [...prevTrips, ...newTrips]);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (trips.length > 0) {
      setDisplayedTrips([]); // Reset displayed trips when trips data changes
      setPage(1); // Reset page to 1 when trips data changes
    }
  }, [trips]);

  useEffect(() => {
    if (page === 1 && displayedTrips.length === 0) {
      loadTrips(1); // Load initial trips
    } else if (page > 1) {
      loadTrips(page); // Load more trips when page changes
    }
  }, [page, trips]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    }, options);

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, []);

  return (
    <div className="search-results-section-container">
      <div className="headerForSearchResults">
        {/* Your header content */}
      </div>
      <div className="trips">
        {displayedTrips.map((trip) => (
          <Trip key={trip.id} trip={trip} />
        ))}
      </div>
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      <div className="loaderContainer">
      <div ref={loader} className="loader"></div>
      </div>
      
    </div>
  );
};

export default SearchResultsSection;

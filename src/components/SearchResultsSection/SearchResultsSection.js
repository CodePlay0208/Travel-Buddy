import React, { useContext, useEffect, useState, useRef } from "react";
import "./SearchResultsSection.css";
import { FilterContext } from "../../Utils/Context/FilterContext";
import Trip from "../Trip/Trip";

const SearchResultsSection = (props) => {
  const { fromAge, toAge, gender } = useContext(FilterContext);
  const [displayedTrips, setDisplayedTrips] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loader = useRef(null);
  const [hasMore, setHasMore] = useState(true);

  const trips = props.tripsData || [];

  const filterTrip = (trip) => {
    return (
      trip.age >= fromAge &&
      trip.age <= toAge &&
      (gender === "" || trip.gender === gender)
    );
  };

  const loadTrips = (page) => {
    setLoading(true);
    const startIndex = (page - 1) * 10;
    const endIndex = startIndex + 10;
    const filteredTrips = trips.filter(filterTrip);
    const newTrips = filteredTrips.slice(startIndex, endIndex);
    
    if (newTrips.length === 0) {
      setHasMore(false);
    } else {
      setDisplayedTrips((prevTrips) => [...prevTrips, ...newTrips]);
    }
    
    setLoading(false);
  };

  useEffect(() => {
    setDisplayedTrips([]); // Reset displayed trips when trips data changes
    setPage(1); // Reset page to 1 when trips data changes
    setHasMore(true); // Reset hasMore when trips data changes
  }, [trips]);

  useEffect(() => {
    if (page === 1 && displayedTrips.length === 0) {
      loadTrips(1); // Load initial trips
    } else if (page > 1) {
      loadTrips(page); // Load more trips when page changes
    }
  }, [page, trips, fromAge, toAge, gender]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !loading && hasMore) {
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
  }, [loading, hasMore]);

  return (
    <div className="search-results-section-container">
      <div className="headerForSearchResults">
        {/* Your header content */}
      </div>
      <div className="trips">
        {displayedTrips.map((trip) => (
          <Trip key={trip._id} trip={trip} />
        ))}
      </div>
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      {hasMore && (
        <div className="loaderContainer">
          <div ref={loader} className="loader"></div>
        </div>
      )}
    </div>
  );
};

export default SearchResultsSection;

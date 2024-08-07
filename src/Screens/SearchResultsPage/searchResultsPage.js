import React, { useState, useContext, useEffect } from "react";
import "./searchResultsPage.css";
import { InputValuesContext } from "../../Utils/Context/InputValuesContext";
import tripData from "../../data/data.json";
import Header from "../../components/Header/Header";
import TripCard from "../../components/TripCard/TripCard";
import Footer from "../../components/Footer/Footer";
import { convertDateFormat } from "../../Utils/Config";


const SearchResultsPage = () => {

  const { inputValues } = useContext(InputValuesContext);
  const [tripsData, setTripsData] = useState([]);

  

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
        <Header isImageNavbar={true}/>
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
    <div className="search-result-button-div">


    <button className='showMoreButton'>Show More</button>
    </div>
    <Footer/>
    </div>
  );
};

export default SearchResultsPage;

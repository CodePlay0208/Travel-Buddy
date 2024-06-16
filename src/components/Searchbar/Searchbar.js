import React, { useState, useContext } from "react";
import "./Searchbar.css";
import { Link, useNavigate } from "react-router-dom";
import { TripsContext } from "../../Utils/Context/TripsContext";
import data from "../../data/data.json"
const Searchbar = () => {
  const [inputValues, setInputValues] = useState({
    destination: "",
    startDate: "",
  });
  const tripsContext = useContext(TripsContext);
  const navigate = useNavigate();
  return (
    <div className="search-container">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          
          const arr = data;

          tripsContext.setTripsData(arr);
          console.log(inputValues.startDate);
          navigate("/search-results-page");
        }}
      >
        <input
          type="text"
          name="destination"
          placeholder="Enter Destination"
          value={inputValues.destination}
          onChange={(event) =>
            setInputValues((currentInputValues) => ({
              ...currentInputValues,
              destination: event.target.value,
            }))
          }
        />
        <input
          type="date"
          name="start_date"
          placeholder="Travel Date"
          value={inputValues.date}
          onChange={(event) =>
            setInputValues((currentInputValues) => ({
              ...currentInputValues,
              startDate: event.target.value,
            }))
          }
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Searchbar;

import React, { useState, useContext, useEffect } from "react";
import "./Searchbar.css";
import { Link, useNavigate } from "react-router-dom";
import { TripsContext } from "../../Utils/Context/TripsContext";
import data from "../../data/data.json"
import { InputValuesContext } from "../../Utils/Context/InputValuesContext";




function validateDestination(destination){
  return destination != null && destination != undefined && destination != "";
}

function validatestartData(date){
  return date != null && date != undefined
}

function submitForm(inputValues, navigate){
  const isValidDestination = validateDestination(inputValues.destination);
  const isValidStartDate = validatestartData(inputValues.startDate);
  if(isValidDestination && isValidStartDate){
    localStorage.setItem("inputValues", JSON.stringify(inputValues));
    navigate("/search-results-page");
  }
  else if(!isValidDestination){
    document.getElementById("destination").focus();

  }
  else{
    document.getElementById("startDate").focus();
  }
}

const Searchbar = () => {
  const { inputValues, setInputValues } = useContext(InputValuesContext);

  useEffect(() => {
   
    const storedInputValues = localStorage.getItem("inputValues");
    console.log("The stored input values in searchbar are", storedInputValues);
    if (storedInputValues) {
      const parsedInputValues = JSON.parse(storedInputValues);
      setInputValues(parsedInputValues);
    }
    else{
      setInputValues({
        destination: "",
        startDate: "",
      })
    }

  }, []);

  const navigate = useNavigate();
  return (
    <div className="search-container">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          submitForm(inputValues, navigate);
        }}
      >
        <input
          type="text"
          name="destination"
          placeholder="Enter Destination"
          id = "destination"
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
          id = "startDate"
          value={inputValues.startDate}
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

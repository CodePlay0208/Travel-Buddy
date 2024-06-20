import React, { useState, useContext, useEffect } from "react";
import "./SearchMenu.css";
import { useNavigate } from "react-router-dom";
import { InputValuesContext } from "../../Utils/Context/InputValuesContext";
import SearchBar from "../SearchBar/SearchBar";

function validateDestination(destination) {
  return destination != null && destination != undefined && destination != "";
}

function validatestartData(date) {
  return date != null && date != undefined && date != "";
}

function submitForm(inputValues, navigate) {
  const isValidDestination = validateDestination(inputValues.destination);
  const isValidStartDate = validatestartData(inputValues.startDate);
  if (isValidDestination && isValidStartDate) {
    console.log("the input values are", inputValues);
    localStorage.setItem("inputValues", JSON.stringify(inputValues));
    navigate("/search-results-page");
  } else if (!isValidDestination) {
    document.getElementById("location-search-bar").focus();
  } else {
    document.getElementById("startDate").focus();
  }
}


const SearchMenu = () => {
  const { inputValues, setInputValues } = useContext(InputValuesContext);
  console.log("the input values are", inputValues);
 
  useEffect(() => {
    const storedInputValues = localStorage.getItem("inputValues");
    console.log("The stored input values in searchbar are", storedInputValues);
    if (storedInputValues) {
      const parsedInputValues = JSON.parse(storedInputValues);
      setInputValues(parsedInputValues);
      // setInputValueForSearchBar(parsedInputValues.destination);
    } else {
      setInputValues({
        destination: "",
        startDate: "",
      });
    }
  }, []);

  const navigate = useNavigate();
  return (
    <div className="search-container">
      <form className="searchMenuInputForm"
        onSubmit={(event) => {
          event.preventDefault();
          submitForm(inputValues, navigate);
        }}
      >
       <SearchBar setInputValueFunction= {setInputValues} setInputValueVariable={"destination"} placeholder={"Enter Your Destination"} id={"homePageSearchBar"}></SearchBar>

        <input
          type="date"
          name="start_date"
          placeholder="Travel Date"
          id="startDate"
          value={inputValues.startDate}
          onChange={(event) =>
            setInputValues((currentInputValues) => ({
              ...currentInputValues,
              startDate: event.target.value,
            }))
          }
        />
        <button type="submit" className="searchbar-searchBtn">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchMenu;

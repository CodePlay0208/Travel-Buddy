import React, { useState, useContext, useEffect } from "react";
import "./SearchMenu.css";
import { useNavigate } from "react-router-dom";
import { InputValuesContext } from "../../Utils/Context/InputValuesContext";
import SearchBar from "../SearchBar/SearchBar";
import DatePickerValue from "../DatePicker/DatePicker";

function validateDestination(destination) {
  return destination !== null && destination !== undefined && destination !== "";
}

function validatestartData(date) {
  return date !== null && date !== undefined && date !== "";
}

function submitForm(inputValues, navigate) {
  const isValidDestination = validateDestination(inputValues.destination);
  const isValidStartDate = validatestartData(inputValues.startDate);
  if (isValidDestination && isValidStartDate) {
    localStorage.setItem("inputValues", JSON.stringify(inputValues));
    navigate("/search-results-page");
  } else if (!isValidDestination) {
    document.getElementById("homePageSearchBar").focus();
  } else {
    document.getElementById("startDate").focus();
  }
}




const SearchMenu = () => {
  
  const { inputValues, setInputValues } = useContext(InputValuesContext);
 
 
  useEffect(() => {
    const storedInputValues = localStorage.getItem("inputValues");
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
      <div className="alignPadding">
      <SearchBar setInputValueFunction= {setInputValues} setInputValueVariable={"destination"} placeholder={"Enter Your Destination"} id={"homePageSearchBar"} setValuesFromLocalStorage = {true}></SearchBar>

      </div>
      <div className="alignPadding datepicker">

        <DatePickerValue inputValues={inputValues.startDate} setInputValues={setInputValues} onValue={'startDate'} placeholderValue={"Select Travel date"}/>
      </div>
      {/* {console.log(inputValues)}
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
        /> */}
        <div className="alignPadding">
          <button type="submit" className="searchBar searchbar-searchBtn">
            Search
          </button>
        </div>
        
      </form>
    </div>
  );
};

export default SearchMenu;

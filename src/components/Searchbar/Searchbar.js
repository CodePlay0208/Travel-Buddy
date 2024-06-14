import React, { useState, useContext } from "react";
import "./Searchbar.css";
import { Link, useNavigate } from "react-router-dom";
import { TripsContext } from "../../Utils/Context/TripsContext";

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
          const arr = [
            {
              id: 1,
              startLocation: "Delhi",
              endLocation: "Mussorie",
              totalMembers: 4,
              age: 25,
              sex:"Male",
              description: "Hi we are a group of 4 people and we are planning to go to mussorie, anyone can join who are interested."
            },
            {
              id: 2,
              startLocation: "Bangalore",
              endLocation: "Tamil Nadu",
              totalMembers: 3,
              age: 37,
              sex: "Female",
              description: "Hi,owjnfgewofnewofeowfbnewofnsdkc cl qklfqwpfnpqjwpjqwpfnqpc qwpc wqpkq cpwqcnqpcnfpnwqfpnwqfoihovnownvewpv "
            },
            {
              id: 3,
              startLocation: "Delhi",
              endLocation: "Chandigrah",
              totalMembers: 3,
              age: 37,
              sex: "Female",
              description: "Hi,owjnfgewofnewofeowfbnewofnsdkc cl qklfqwpfnpqjwpjqwpfnqpc qwpc wqpkq cpwqcnqpcnfpnwqfpnwqfoihovnownvewpv "
            },
            {
              id: 4,
              startLocation: "Bangalore",
              endLocation: "USA",
              totalMembers: 3,
              age: 37,
              sex: "Female",
              description: "Hi,owjnfgewofnewofeowfbnewofnsdkc cl qklfqwpfnpqjwpjqwpfnqpc qwpc wqpkq cpwqcnqpcnfpnwqfpnwqfoihovnownvewpv "
            },
            {
              id: 5,
              startLocation: "Bangalore",
              endLocation: "USA",
              totalMembers: 3,
              age: 37,
              sex: "Female",
              description: "Hi,owjnfgewofnewofeowfbnewofnsdkc cl qklfqwpfnpqjwpjqwpfnqpc qwpc wqpkq cpwqcnqpcnfpnwqfpnwqfoihovnownvewpv "
            },
            {
              id: 6,
              startLocation: "Bangalore",
              endLocation: "USA",
              totalMembers: 3,
              age: 37,
              sex: "Female",
              description: "Hi,owjnfgewofnewofeowfbnewofnsdkc cl qklfqwpfnpqjwpjqwpfnqpc qwpc wqpkq cpwqcnqpcnfpnwqfpnwqfoihovnownvewpv "
            },
          ];
          tripsContext.setTripsData(arr);
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

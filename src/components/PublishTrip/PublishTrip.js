import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./PublishTrip.css";
import SearchBar from "../SearchBar/SearchBar";
import data from "../../data/data.json";

function submitForm(inputValues) {
  // TODO: integrate totalusers API
  let getTotalUsers = 5;
  getTotalUsers++;
  inputValues["id"] = getTotalUsers;
  //TODO: send data to backend
  data.push(inputValues);
}

const PublishTrip = () => {
  const initialPublishTripValues = {
    id:0,
    startLocation: "",
    endLocation: "",
    totalMembers: "",
    age: "",
    gender: "",
    description: "",
    image: "",
    userName: "",
    phoneNumber: "",
    startDate: "",
    endDate: "",
  };
  const [inputValues, setInputValues] = useState(initialPublishTripValues);
  return (
    <div>
      <Navbar visibilityForSearch={true}></Navbar>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          submitForm(inputValues);
          setInputValues(initialPublishTripValues);
        }}
      >
        <div className="publish-trip-form">
          <h2 className="publish-trip-heading">Publish Your Trip!</h2>

          <div className="input-element">
            <label className="publish-trips-label" htmlFor="name">
              Name
            </label>
            <input
              className="publish-trips-input"
              type="text"
              placeholder="Enter Your Name"
              id="name"
              onChange={(event) => {
                setInputValues((currentInputValues) => ({
                  ...currentInputValues,
                  userName: event.target.value,
                }));
              }}
              value={inputValues.userName}
            ></input>
          </div>
          <div className="input-element">
            <label
              className="publish-trips-label"
              htmlFor="startlocationSearchBar"
            >
              Start Location
            </label>
            <SearchBar
              placeholder={"Enter Start Location"}
              id={"startlocationSearchBar"}
              setInputValueFunction={setInputValues}
              setInputValueVariable={"startLocation"}
            ></SearchBar>
          </div>
          <div className="input-element">
            <label
              className="publish-trips-label"
              htmlFor="destinationSearchBar"
            >
              Destination
            </label>
            <SearchBar
              placeholder={"Enter Your Destination"}
              id={"destinationSearchBar"}
              setInputValueFunction={setInputValues}
              setInputValueVariable={"endLocation"}
            ></SearchBar>
          </div>
          <div className="input-element">
            <label className="publish-trips-label" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              className="publish-trips-input"
              type="text"
              placeholder="Enter Your Phone Number"
              id="phoneNumber"
              onChange={(event) => {
                setInputValues((currentInputValues) => ({
                  ...currentInputValues,
                  phoneNumber: event.target.value,
                }));
              }}
              value={inputValues.phoneNumber}
            ></input>
          </div>
          <div className="input-element">
            <label className="publish-trips-label" htmlFor="startDate">
              Start Date
            </label>
            <input
              className="publish-trips-input"
              type="text"
              placeholder="Enter Start Date Of the Journey"
              id="startDate"
              onChange={(event) => {
                setInputValues((currentInputValues) => ({
                  ...currentInputValues,
                  startDate: event.target.value,
                }));
              }}
              value={inputValues.startDate}
            ></input>
          </div>

          <div className="input-element">
            <label className="publish-trips-label" htmlFor="endDate">
              End Date
            </label>
            <input
              className="publish-trips-input"
              type="text"
              placeholder="Enter End Date Of the Journey"
              id="endDate"
              onChange={(event) => {
                setInputValues((currentInputValues) => ({
                  ...currentInputValues,
                  endDate: event.target.value,
                }));
              }}
              value={inputValues.endDate}
            ></input>
          </div>
          <div className="input-element">
            <label className="publish-trips-label" htmlFor="totalMembers">
              Total Members
            </label>
            <input
              type="text"
              className="publish-trips-input"
              placeholder="Enter Current Total Members"
              id="totalMembers"
              onChange={(event) => {
                setInputValues((currentInputValues) => ({
                  ...currentInputValues,
                  totalMembers: event.target.value,
                }));
              }}
              value={inputValues.totalMembers}
            ></input>
          </div>
          <div className="input-element">
            <label className="publish-trips-label" htmlFor="age">
              Age
            </label>
            <input
              className="publish-trips-input"
              type="text"
              placeholder="Enter Your Age"
              id="age"
              onChange={(event) => {
                setInputValues((currentInputValues) => ({
                  ...currentInputValues,
                  age: event.target.value,
                }));
              }}
              value={inputValues.age}
            ></input>
          </div>
          <div className="input-element">
            <label htmlFor="input-file" className="input-file-label">
              Upload Image
            </label>
            <input
              className="publish-trips-input"
              id="input-file"
              type="file"
            />
          </div>
          <div className="input-element">
            <label className="publish-trips-label" htmlFor="gender">
              Gender
            </label>
            <input
              className="publish-trips-input"
              type="text"
              placeholder="Enter Your Gender"
              id="gender"
              onChange={(event) => {
                setInputValues((currentInputValues) => ({
                  ...currentInputValues,
                  gender: event.target.value,
                }));
              }}
              value={inputValues.gender}
            ></input>
          </div>
          <div className="input-element">
            <label className="publish-trips-label" htmlFor="description">
              Description
            </label>
            <textarea
              className="publish-trips-textarea"
              placeholder="Enter Your Trip's Description"
              id="description"
              onChange={(event) => {
                setInputValues((currentInputValues) => ({
                  ...currentInputValues,
                  description: event.target.value,
                }));
              }}
              value={inputValues.description}
            ></textarea>
          </div>
          <div className="input-element">
            <button className="input-file-label publish-btn" type="submit">
              Publish
            </button>
          </div>
        </div>
      </form>

      <Footer></Footer>
    </div>
  );
};

export default PublishTrip;

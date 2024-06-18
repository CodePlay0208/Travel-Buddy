import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./PublishTrip.css";
import SearchBar from "../SearchBar/SearchBar";

const PublishTrip = () => {
  return (
    <div>
      <Navbar visibilityForSearch={true}></Navbar>

      <form>
        <div className="publish-trip-form">
          <h2 className="publish-trip-heading">Publish Your Trip!</h2>

          <div className="input-element">
            <label className="publish-trips-label">Name</label>
            <input
              className="publish-trips-input"
              type="text"
              placeholder="Enter Your Name"
            ></input>
          </div>
          <div className="input-element">
            <label className="publish-trips-label">Start Location</label>
            <SearchBar placeholder={"Enter Start Location"}></SearchBar>
          </div>
          <div className="input-element">
            <label className="publish-trips-label">Destination</label>
            <SearchBar placeholder={"Enter Your Destination"}></SearchBar>
          </div>
          <div className="input-element">
            <label className="publish-trips-label">Phone Number</label>
            <input
              className="publish-trips-input"
              type="text"
              placeholder="Enter Your Phone Number"
            ></input>
          </div>
          <div className="input-element">
            <label className="publish-trips-label">Start Date</label>
            <input
              className="publish-trips-input"
              type="text"
              placeholder="Enter Start Date Of the Journey"
            ></input>
          </div>

          <div className="input-element">
            <label className="publish-trips-label">End Date</label>
            <input
              className="publish-trips-input"
              type="text"
              placeholder="Enter End Date Of the Journey"
            ></input>
          </div>
          <div className="input-element">
            <label className="publish-trips-label">Total Members</label>
            <input
              type="text"
              className="publish-trips-input"
              placeholder="Enter Current Total Members"
            ></input>
          </div>
          <div className="input-element">
            <label className="publish-trips-label">Age</label>
            <input
              className="publish-trips-input"
              type="text"
              placeholder="Enter Your Age"
            ></input>
          </div>
          <div className="input-element">
            <label for="input-file" className="input-file-label">
              Upload Image
            </label>
            <input
              className="publish-trips-input"
              id="input-file"
              type="file"
            />
          </div>
          <div className="input-element">
            <label className="publish-trips-label">Gender</label>
            <input
              className="publish-trips-input"
              type="text"
              placeholder="Enter Your Gender"
            ></input>
          </div>
          <div className="input-element">
            <label className="publish-trips-label">Description</label>
            <textarea
              className="publish-trips-textarea"
              placeholder="Enter Your Trip's Description"
            ></textarea>
          </div>
          <div className="input-element">
            <button className="input-file-label publish-btn">Publish</button>
          </div>
        </div>
      </form>

      <Footer></Footer>
    </div>
  );
};

export default PublishTrip;

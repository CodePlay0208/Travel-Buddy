import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./PublishTrip.css";
import SearchBar from "../SearchBar/SearchBar";
import { DatePicker, Space, Typography } from 'antd';
import data from "../../data/data.json";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dropDownSvg from '../../data/Images/dropDown.svg'
import DateRangePicker from "../RangePicker/RangePicker";

function submitForm(inputValues) {
  // TODO: integrate totalusers API
  let getTotalUsers = 5;
  getTotalUsers++;
  inputValues["id"] = getTotalUsers;
  //TODO: send data to backend
  data.push(inputValues);
  console.log("publishing toast");
  toast.success("Trip Published", {
    closeOnClick: true,
    position: "top-right",
    autoClose: 50
  });
}

function validateForm(inputValues){
  const isValidUserName = inputValues.userName != null && inputValues.userName != undefined && inputValues.userName != "";
  const isValidStartLocation = inputValues.startLocation != null && inputValues.startLocation != undefined && inputValues.startLocation != "";
  const isValidDestination = inputValues.endLocation != null && inputValues.endLocation != undefined && inputValues.endLocation != "";
  const isValidStartDate = inputValues.startDate != null && inputValues.startDate != undefined && inputValues.startDate != "";
  const isValidEndDate = inputValues.endDate != null && inputValues.endDate != undefined && inputValues.endDate != "";
  const isValidTotalMembers = inputValues.totalMembers != null && inputValues.totalMembers != undefined && inputValues.totalMembers != "";
  const isValidAge = inputValues.age != null && inputValues.age != undefined && inputValues.age != "";
  const isValidGender = inputValues.gender != null && inputValues.gender != undefined && inputValues.gender != "";

  console.log(inputValues);

  if(!isValidUserName){
    toast.error("Enter Valid User Name");
    document.getElementById("name").focus();
    return false;
  }

  else if(!isValidStartLocation){
    toast.error("Enter Valid Start Location");
    document.getElementById("startlocationSearchBar").focus();
    return false;
  }

  else if(!isValidDestination){
    toast.error("Enter Valid Destination");
    document.getElementById("destinationSearchBar").focus();
    return false;
  }

  else if(!isValidStartDate){
    toast.error("Select Valid Start Date");
    document.getElementById("startDate").focus();
    return false;
  }

  else if(!isValidEndDate){
    toast.error("Select Valid End Date");
    document.getElementById("endDate").focus();
    return false;
  }

  else if(!isValidTotalMembers){
    toast.error("Select Valid Total Members");
    document.getElementById("publish-trips-input-totalMembers").focus();
    return false;
  }

  else if(!isValidAge){
    toast.error("Select Valid Age");
    document.getElementById("publish-trips-input-age").focus();
    return false;
  }

  else if(!isValidGender){
    toast.error("Select Valid Gender");
    document.getElementById("publish-trips-input-gender").focus();
    return false
  }

  return true;
}



const PublishTrip = () => {
  const initialPublishTripValues = {
    id: 0,
    startLocation: "",
    endLocation: "",
    totalMembers: "",
    age: "",
    gender: "",
    description: "",
    image:[],
    userName: "",
    phoneNumber: "",
    startDate: "",
    endDate: "",
  };
  const [inputValues, setInputValues] = useState(initialPublishTripValues);
  const genderDropDownData = ["Male", "Female", "Prefer Not To Say"];
  const [showGenderDropDownList, setShowGenderDropDownList] = useState(false);
  const totalMembersDropDownData = ["1", "2", "3", "4", ">=5"];
  const [showTotalMembersDropDownList, setShowTotalMembersDropDownList] = useState(false);
  const ageGroupDropDownData = ["0-10", "11-17", "18-35", "36-50", ">=50"];
  const [showAgeGroupDropDownList, setShowAgeGroupDropDownList] = useState(false);
  const acceptableImageUploadTypes = ".jpg, .jpeg, .png";

  
  function handleImageUpload(event){

    setInputValues((currentInputValues)=>({
      ...currentInputValues, image: event.target.files
    }))
    let files = event.target.files;
    let preview = document.getElementById('previewUploadedImages');
    preview.style.display = "flex";
    preview.style.flexDirection = "column";
    preview.style.marginTop = "10px";
    preview.innerHTML = '';
    
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      const urlForFile = URL.createObjectURL(file);
      let fileInfo = document.createElement('a');
      fileInfo.textContent = `File Name: ${file.name}`;
      fileInfo.href = urlForFile;
      fileInfo.target="_blank";
      fileInfo.style.fontSize = '14px';
      fileInfo.style.marginTop = '10px';
      fileInfo.style.color = "#615e5e";
      fileInfo.click();
      preview.appendChild(fileInfo);
  }
}

  useEffect(() => {

    const selectDefaultValuesForGenderBar = (event) => {
      const isEventInDropDownMenu = document.getElementById("listItemValueForGender") && document.getElementById("listItemValueForGender").contains(event.target);
      const isEventInButton = document.getElementById("publish-trips-input-gender").contains(event.target);
      const isEventInGenderField = isEventInButton || isEventInDropDownMenu;

      if (inputValues.gender == "" && showGenderDropDownList && !isEventInGenderField) {
        setInputValues((currentInputValues) => ({
          ...currentInputValues, gender: genderDropDownData[0]
        }))
        setShowGenderDropDownList(false);
      }

      else if (showGenderDropDownList && !isEventInGenderField) {
        setShowGenderDropDownList(false);
      }
    }

    const selectDefaultValuesForTotalMembersBar = (event) => {
      const isEventInDropDownMenu = document.getElementById("listItemValueForTotalMembers") && document.getElementById("listItemValueForTotalMembers").contains(event.target);
      const isEventInButton = document.getElementById("publish-trips-input-totalMembers").contains(event.target);
      const isEventInTotalMembersField = isEventInButton || isEventInDropDownMenu;

      if (inputValues.totalMembers == "" && showTotalMembersDropDownList && !isEventInTotalMembersField) {
        setInputValues((currentInputValues) => ({
          ...currentInputValues, totalMembers: totalMembersDropDownData[0]
        }))
        setShowTotalMembersDropDownList(false);
      }

      else if (showTotalMembersDropDownList && !isEventInTotalMembersField) {
        setShowTotalMembersDropDownList(false);
      }
    }

    const selectDefaultValuesForAgeBar = (event) => {
      const isEventInDropDownMenu = document.getElementById("listItemValueForAge") && document.getElementById("listItemValueForAge").contains(event.target);
      const isEventInButton = document.getElementById("publish-trips-input-age").contains(event.target);
      const isEventInAgeField = isEventInButton || isEventInDropDownMenu;

      console.log(inputValues.age, isEventInDropDownMenu, isEventInButton, isEventInAgeField);

      if (inputValues.age === "" && showAgeGroupDropDownList && !isEventInAgeField) {
        console.log("fired");
        setInputValues((currentInputValues) => ({
          ...currentInputValues, age: ageGroupDropDownData[2]
        }))
        setShowAgeGroupDropDownList(false);
      }

      else if (showAgeGroupDropDownList && !isEventInAgeField) {
        setShowAgeGroupDropDownList(false);
      }
    }

    document.addEventListener('click', selectDefaultValuesForGenderBar);
    document.addEventListener('click', selectDefaultValuesForTotalMembersBar);
    document.addEventListener('click', selectDefaultValuesForAgeBar);

    return () => {
      document.removeEventListener('click', selectDefaultValuesForGenderBar);
      document.removeEventListener('click', selectDefaultValuesForTotalMembersBar);
      document.removeEventListener('click', selectDefaultValuesForAgeBar)
    }
  }, [showGenderDropDownList, showTotalMembersDropDownList, showAgeGroupDropDownList]);

  console.log(inputValues);

  return (

    <div>
      <Navbar visibilityForSearch={true}></Navbar>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          const isValidForm = validateForm(inputValues);
          if(isValidForm){
            submitForm(inputValues);
            setInputValues(initialPublishTripValues);
          }
        }}
      >
        <div className="publish-trip-form">
          <h2 className="publish-trip-heading" onClick={()=> document.getElementById("name").focus()}>Publish Your Trip!</h2>

          <div className="input-element">
            <label className="publish-trips-label" htmlFor="name">
              Name<sup className="mandatoryFieldSignInPublishTrips">*</sup>
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
              Start Location<sup className="mandatoryFieldSignInPublishTrips">*</sup>
            </label>
            <SearchBar
              placeholder={"Enter Start Location"}
              id={"startlocationSearchBar"}
              setInputValueFunction={setInputValues}
              setInputValueVariable={"startLocation"}
              setValuesFromLocalStorage = {false}
            ></SearchBar>
          </div>
          <div className="input-element">
            <label
              className="publish-trips-label"
              htmlFor="destinationSearchBar"
            >
              Destination <sup className="mandatoryFieldSignInPublishTrips">*</sup>
            </label>
            <SearchBar
              placeholder={"Enter Your Destination"}
              id={"destinationSearchBar"}
              setInputValueFunction={setInputValues}
              setInputValueVariable={"endLocation"}
              setValuesFromLocalStorage = {false}
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
            <DateRangePicker setInputValues={setInputValues} inputValues={inputValues}/>
          </div>
          <div className="input-element">
            <label className="publish-trips-label" htmlFor="endDate">
              End Date<sup className="mandatoryFieldSignInPublishTrips">*</sup>
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
            <label className="publish-trips-label" htmlFor="publish-trips-input-totalMembers">
              Total Members<sup className="mandatoryFieldSignInPublishTrips">*</sup>
            </label>
            <div>
              <button
                onClick={() => {
                  setShowTotalMembersDropDownList(true);
                }}
                className="publish-trips-input publish-trips-input-dropDownBtn"
                autoComplete="off"
                id="publish-trips-input-totalMembers"
                type="button"
                value={inputValues.totalMembers}
              >{inputValues.totalMembers == "" ? "Select Current Total Members" : inputValues.totalMembers}
                <svg xmlns="http://www.w3.org/2000/svg" className="dropDownSvg" viewBox="0 0 24 30" x="0px" y="0px"><title>Sort-Down-arrow-drop-triangle</title><path d="M18,8H6a1,1,0,0,0-.71,1.71l6,6a1,1,0,0,0,1.41,0l6-6A1,1,0,0,0,18,8Z" /><text x="0" y="39" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by IconSrc</text><text x="0" y="44" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>

              </button>

              {showTotalMembersDropDownList && (
                <div className="dropDownListForPublishTripInputs">
                  {totalMembersDropDownData.map((data, idx) => (
                    <li
                      key={data}
                      onClick={() => {
                        console.log(data);
                        setShowTotalMembersDropDownList(false);
                        setInputValues((currentInputValues) => ({
                          ...currentInputValues, totalMembers: data
                        }));
                      }}
                    >
                      <p className="listItemValueForPublishTripInputs" >{data}</p>
                    </li>
                  ))}
                </div>
              )}

            </div>
          </div>
          <div className="input-element">
            <label className="publish-trips-label" htmlFor="age">
              Age<sup className="mandatoryFieldSignInPublishTrips">*</sup>
            </label>
            <div>
              <button
                onClick={() => {
                  setShowAgeGroupDropDownList(true);
                }}
                className="publish-trips-input publish-trips-input-dropDownBtn"
                autoComplete="off"
                type="button"
                id="publish-trips-input-age"
                value={inputValues.age}
              >{inputValues.age == "" ? "Select Your Age" : inputValues.age}
                <svg xmlns="http://www.w3.org/2000/svg" className="dropDownSvg" viewBox="0 0 24 30" x="0px" y="0px"><title>Sort-Down-arrow-drop-triangle</title><path d="M18,8H6a1,1,0,0,0-.71,1.71l6,6a1,1,0,0,0,1.41,0l6-6A1,1,0,0,0,18,8Z" /><text x="0" y="39" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by IconSrc</text><text x="0" y="44" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>

              </button>

              {showAgeGroupDropDownList && (
                <div className="dropDownListForPublishTripInputs">
                  {ageGroupDropDownData.map((data) => (
                    <li
                      key={data}
                      className="listItemValueForIdx"
                      onClick={() => {
                        setShowAgeGroupDropDownList(false);
                        setInputValues((currentInputValues) => ({
                          ...currentInputValues, age: data
                        }));
                      }}
                    >
                      <p className="listItemValueForPublishTripInputs" id="listItemValueForAge">{data}</p>
                    </li>
                  ))}
                </div>
              )}

            </div>
          </div>
          <div className="input-element" id = "uploadImagesElement">
            <label htmlFor="input-file" className="input-file-label">
              Upload Images
            </label>
            <input
              className="publish-trips-input"
              id="input-file"
              type="file"
              accept={acceptableImageUploadTypes}
              multiple
              onChange={handleImageUpload}
            />
            <div id="previewUploadedImages"></div>
          </div>
          <div className="input-element">
            <label className="publish-trips-label" htmlFor="publish-trips-input-gender">
              Gender<sup className="mandatoryFieldSignInPublishTrips">*</sup>
            </label>
            <div>
              <button
                onClick={() => {
                  setShowGenderDropDownList(true);
                }}
                className="publish-trips-input publish-trips-input-dropDownBtn"
                autoComplete="off"
                type="button"
                id="publish-trips-input-gender"
                value={inputValues.gender}
              >{inputValues.gender == "" ? "Select Your Gender" : inputValues.gender}
                <svg xmlns="http://www.w3.org/2000/svg" className="dropDownSvg" viewBox="0 0 24 30" x="0px" y="0px"><title>Sort-Down-arrow-drop-triangle</title><path d="M18,8H6a1,1,0,0,0-.71,1.71l6,6a1,1,0,0,0,1.41,0l6-6A1,1,0,0,0,18,8Z" /><text x="0" y="39" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by IconSrc</text><text x="0" y="44" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>

              </button>

              {showGenderDropDownList && (
                <div className="dropDownListForPublishTripInputs">
                  {genderDropDownData.map((data) => (
                    <li
                      key={data}
                      className="listItemValueForIdx"
                      onClick={() => {
                        setShowGenderDropDownList(false);
                        setInputValues((currentInputValues) => ({
                          ...currentInputValues, gender: data
                        }));
                      }}
                    >
                      <p className="listItemValueForPublishTripInputs" id="listItemValueForGender">{data}</p>
                    </li>
                  ))}
                </div>
              )}

            </div>
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
      <ToastContainer />
    </div>
  );
};

export default PublishTrip;

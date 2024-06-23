import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./PublishTrip.css";
import SearchBar from "../SearchBar/SearchBar";
import { DatePicker, Space, Typography } from 'antd';
import data from "../../data/data.json";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UploadImages from "../UploadImages/UploadImages";
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
  console.log(data);
  toast.success("Trip Published", {
    autoClose: 100
  });
}

function validateForm(inputValues, isClickOnHeading) {
  const isValidUserName = inputValues.userName != null && inputValues.userName != undefined && inputValues.userName != "";
  const isValidStartLocation = inputValues.startLocation != null && inputValues.startLocation != undefined && inputValues.startLocation != "";
  const isValidDestination = inputValues.endLocation != null && inputValues.endLocation != undefined && inputValues.endLocation != "";
  const isValidStartDate = inputValues.startDate != null && inputValues.startDate != undefined && inputValues.startDate != "";
  const isValidEndDate = inputValues.endDate != null && inputValues.endDate != undefined && inputValues.endDate != "";
  const isValidTotalMembers = inputValues.totalMembers != null && inputValues.totalMembers != undefined && inputValues.totalMembers != "";
  const isValidAge = inputValues.age != null && inputValues.age != undefined && inputValues.age != "";
  const isValidGender = inputValues.gender != null && inputValues.gender != undefined && inputValues.gender != "";

  console.log(inputValues);

  let errorMessage = false;

  if (!isValidUserName) {
    errorMessage = "Enter Valid User Name";
    document.getElementById("name").focus();
  }

  else if (!isValidStartLocation) {
    errorMessage = "Enter Valid Start Location";
    document.getElementById("startlocationSearchBar").focus();
  }

  else if (!isValidDestination) {
    errorMessage = "Enter Valid Destination";
    document.getElementById("destinationSearchBar").focus();
  }

  else if (!isValidStartDate) {
    errorMessage = "Select Valid Start Date";
    document.getElementById("startDate").focus();
  }

  else if (!isValidEndDate) {
    errorMessage = "Select Valid End Date";
    document.getElementById("endDate").focus();
  }

  else if (!isValidTotalMembers) {
    errorMessage = "Select Valid Total Members";
    document.getElementById("publish-trips-input-totalMembers").focus();
  }

  else if (!isValidAge) {
    errorMessage = "Select Valid Age";
    document.getElementById("publish-trips-input-age").focus();
  }

  else if (!isValidGender) {
    errorMessage = "Select Valid Gender";
    document.getElementById("publish-trips-input-gender").focus();
  }

  if (!errorMessage) {
    return true;
  }

  if (!isClickOnHeading) {
    toast.error(errorMessage, {
      autoClose: 1000
    });
  }

  return false;
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
    destinationImages: [],
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
  // const [uploadedFiles, setUploadedFiles] = useState([]);
  const acceptableImageUploadTypes = ".jpg, .jpeg, .png";

  function handleImageUpload(event) {
    if (event.target.files.length > 5) {
      toast.warning("Kindly upload Images less than 6", {
        autoClose: 1000
      });
      return;
    }

    let files = event.target.files;
    files = Array.prototype.slice.call(files);
    let totalSizeOfFiles = 0;
    files.forEach((file) => {
      totalSizeOfFiles += file.size;
    })
    if (totalSizeOfFiles > (1048576) * (5)) {
      toast.error("Total size of files must be less than 5 MB", {
        autoClose: 1000
      })
      return;
    }

    setInputValues((currentInputValues) => ({
      ...currentInputValues, destinationImages: files
    }));
  }


  useEffect(()=>{

    let files = inputValues.destinationImages;
    let preview = document.getElementById('previewUploadedImages');
    preview.style.display = "flex";
    preview.style.flexDirection = "column";
    preview.style.marginTop = "10px";
    preview.innerHTML = '';
    preview.style.marginLeft = "12px";
    files.forEach((file) => {
      const urlForFile = URL.createObjectURL(file);
      let fileContainer = document.createElement('div');
      fileContainer.style.display = "flex";
      fileContainer.style.flexDirection = "row";
      fileContainer.style.alignItems = "center";
      let fileInfo = document.createElement('a');
      fileInfo.textContent = `File Name: ${file.name}`;
      fileInfo.href = urlForFile;
      fileInfo.target = "_blank";
      fileInfo.style.fontSize = '16px';
      fileInfo.style.marginTop = '10px';
      fileContainer.style.cursor = "pointer";
      fileInfo.style.color = "#615e5e";
      let deleteImageBtn = document.createElement('span');
      deleteImageBtn.innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 50 50"> <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z"></path></svg>'
      deleteImageBtn.style.marginTop = '13px';
      deleteImageBtn.style.color = "#615e5e";
      deleteImageBtn.style.marginLeft = "13px";
      deleteImageBtn.style.cursor = "pointer";
      deleteImageBtn.id = file.name;
      deleteImageBtn.onclick = () => {
        files = files.filter((file) => file.name !== deleteImageBtn.id);
        setInputValues((currentInputValues) => ({
          ...currentInputValues, destinationImages: files
        }));
      }
      fileContainer.appendChild(fileInfo);
      fileContainer.appendChild(deleteImageBtn);
      preview.appendChild(fileContainer);
    })
  }, [inputValues]);

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
          const isValidForm = validateForm(inputValues, false);
          if (isValidForm) {
            submitForm(inputValues);
            setInputValues(initialPublishTripValues);
          }
        }}
      >
        <div className="publish-trip-form">
          <h2 className="publish-trip-heading" onClick={() => validateForm(inputValues, true)}>Publish Your Trip!</h2>

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
              setValuesFromLocalStorage={false}
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
              setValuesFromLocalStorage={false}
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
          <div className="input-element" id="uploadImagesElement">
            <label htmlFor="input-file" className="input-file-label">
              Upload Images Of Destination (&lt;6)
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
            <button className=" publish-btn" type="submit">
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

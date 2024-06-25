import React, { Component, useContext } from "react";
import Navbar from "../Navbar/Navbar";
import SearchMenu from "../SearchMenu/SearchMenu";
import Footer from "../Footer/Footer";
import "./SearchPage.css";
import { useNavigate } from "react-router-dom";
import { InputValuesContext } from "../../Utils/Context/InputValuesContext";

const SearchPage = () => {
  const { inputValues, setInputValues } = useContext(InputValuesContext);
  let searchList = localStorage.getItem("allSearches");
  if (searchList) {
    searchList = JSON.parse(searchList);
    searchList = Array.from(searchList);
    searchList.reverse();
  }

  const navigate = useNavigate();
  return (
    <div className="searchPageContainer">
      <Navbar visibilityForSearch={false}></Navbar>
      <SearchMenu></SearchMenu>
      <div className="containerForRecentSearches">
        {searchList &&
          searchList.map((search, idx) => {
            return (
              <div
                className="searchHistoryValueContainer"
                key={idx}
                onClick={() => {
                    const newInputValues = {
                        destination: search.destination,
                        startDate: search.startDate,
                      };
                  localStorage.setItem("inputValues", JSON.stringify(newInputValues));
                  setInputValues(newInputValues);
                  navigate("/search-results-page");
                }}
              >
                <div className="searchHistoryValue">
                  <span className="destinationHistory">
                    {search.destination}
                  </span>
                  <span className="startDateHistory">{search.startDate}</span>
                </div>
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-hidden="true"
                  className="iconInSearchHistory"
                >
                  <g color="neutralIconDefault">
                    <g color="currentColor">
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M8.293 6.707a1 1 0 0 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12z"
                        clipRule="evenodd"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            );
          })}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SearchPage;

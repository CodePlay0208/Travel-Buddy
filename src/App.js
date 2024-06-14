import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResultsPage from "./components/SearchResultsPage/SearchResultsPage";
import SearchPage from "./components/SearchPage/SearchPage";
import HomePage from "./components/HomePage/HomePage";
import { TripsContext } from "./Utils/Context/TripsContext";
import React, { useState } from "react";

function App() {
  const [tripsData, setTripsData] = useState([
      {
        id: 0,
        startLocation: "D",
        endLocation: "M",
        totalMembers: 4,
        age: -1,
        sex: "Male",
        description:""
      }
    ]
  );
  return (
    <TripsContext.Provider
    value={{tripsData, setTripsData: setTripsData }}
  >

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            exact
            path="/search-results-page"
            element={<SearchResultsPage />}
          />
          <Route exact path="/search-page" element={<SearchPage />}></Route>
        </Routes>
      </BrowserRouter>
      </TripsContext.Provider>
  );
}

export default App;

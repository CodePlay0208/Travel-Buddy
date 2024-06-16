import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResultsPage from "./components/SearchResultsPage/SearchResultsPage";
import SearchPage from "./components/SearchPage/SearchPage";
import HomePage from "./components/HomePage/HomePage";
import { TripsContext } from "./Utils/Context/TripsContext";
import PublishTrip from "./components/PublishTrip/PublishTrip";
import React, { useEffect, useState } from "react";
import { TopDestinationsContext } from "./Utils/Context/TopDestinationsContext";
import { InputValuesContext } from "./Utils/Context/InputValuesContext";

function App() {
  const [tripsData, setTripsData] = useState([
    {
      id: 0,
      startLocation: "D",
      endLocation: "M",
      totalMembers: 4,
      age: -1,
      gender: "Male",
      description: "",
      image:""
    },
  ]);

  const [topDestinations, setTopDestinations] = useState([""]);

  useEffect(() => {
    // TODO: Fetch from API
    const topDestinationsFromAPI = [
      "Mussorie",
      "Delhi",
      "Bangalore",
      "TamilNadu",
      "Mumbai",
    ];
    setTopDestinations(topDestinationsFromAPI);
  }, []);

  const [inputValues, setInputValues] = useState({
    destination: "",
    startDate: "",
  });

  return (
    <TripsContext.Provider value={{ tripsData,  setTripsData }}>
      <TopDestinationsContext.Provider
        value={{ topDestinations, setTopDestinations }}
      >

        <InputValuesContext.Provider value={{inputValues, setInputValues}}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route
              exact
              path="/search-results-page"
              element={<SearchResultsPage />}
            />
            <Route exact path="/search-page" element={<SearchPage />}></Route>
            <Route exact path="/publish-trip" element={<PublishTrip />}></Route>
          </Routes>
        </BrowserRouter>
        </InputValuesContext.Provider>
      </TopDestinationsContext.Provider>
    </TripsContext.Provider>
  );
}

export default App;

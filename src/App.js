import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResultsPage from "./components/SearchResultsPage/SearchResultsPage";
import SearchPage from "./components/SearchPage/SearchPage";
import HomePage from "./components/HomePage/HomePage";
import { TripsContext } from "./Utils/Context/TripsContext";
import PublishTrip from "./components/PublishTrip/PublishTrip";
import React, { useEffect, useState } from "react";
import { TopDestinationsContext } from "./Utils/Context/TopDestinationsContext";

function App() {
  const [tripsData, setTripsData] = useState([
    {
      id: 0,
      startLocation: "D",
      endLocation: "M",
      totalMembers: 4,
      age: -1,
      sex: "Male",
      description: "",
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

  return (
    <TripsContext.Provider value={{ tripsData, setTripsData: setTripsData }}>
      <TopDestinationsContext.Provider
        value={{ topDestinations, setTopDestinations: setTopDestinations }}
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
            <Route exact path="/publish-trip" element={<PublishTrip />}></Route>
          </Routes>
        </BrowserRouter>
      </TopDestinationsContext.Provider>
    </TripsContext.Provider>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  UserLoginContext,
} from "./Utils/Context/UserLoginContext";
import { routes } from "./routes";
import axios from "axios";

const App = () => {

  const [loggedInUserValues, setLoggedInUserValues] = useState({
    _id: "",
    username: "",
    emailId: "",
    profilePic: "",
    phoneNumber: "",
    isLoggedIn: false
  });

  useEffect(() => {

    const fetchRoutes = async () => {
      try {
        const response = await axios.get("/path/to/routes.json");
      } catch (error) {
      }
    };

    fetchRoutes();
  }, []);

  return (

    <UserLoginContext.Provider
      value={{ loggedInUserValues, setLoggedInUserValues }}
    >
      <Routes>
        {
          routes.map((route) => (
            <Route exact path={route.path} element={route.element} />
          ))
        }
      </Routes>
    </UserLoginContext.Provider>
  );

};

export default App;

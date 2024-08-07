import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  UserLoginContext,
} from "./Utils/Context/LoggedInUserContext";
import { routes } from "./routes";



const App = () => {

  const [loggedInUserValues, setLoggedInUserValues] = useState({
    _id: "",
    username: "",
    emailId: "",
    profilePic: "",
    phoneNumber: "",
    isLoggedIn: false
  });

  

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

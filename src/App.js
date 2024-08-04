import React, { useEffect, useState } from "react"
import "./App.css"
import { Routes, Route, useNavigate } from "react-router-dom"
import {
  UserLoginContext,
} from "./Utils/Context/UserLoginContext"
import { routes } from "./routes"
import axios from "axios"
import { Provider } from 'react-redux'
import store from './store'


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
    <Provider store={store}>

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
    </Provider>

  );

};

export default App;

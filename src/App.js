import React, { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
// import {
//   UserLoginContext,
// } from "./Utils/Context/UserLoginContext"
import { routes } from './routes'
import axios from 'axios'
import { Provider } from 'react-redux'
import store from './store'
import { AuthApi } from './api-services/api-invokes'

const App = () => {
  const [loggedInUserValues, setLoggedInUserValues] = useState({
    _id: '',
    username: '',
    emailId: '',
    profilePic: '',
    phoneNumber: '',
    isLoggedIn: false,
  })

  useEffect(() => {
    const payload = {
      email: 'tusharmoudgil@gmail.com',
      password: 'password',
      rememberMe: true,
    }
    const res = AuthApi.loginUser(payload)
  }, [])

  return (
    <Provider store={store}>
      {/*<UserLoginContext.Provider*/}
      {/*  value={{ loggedInUserValues, setLoggedInUserValues }}*/}
      {/*>*/}
      <Routes>
        {routes.map((route) => (
          <Route exact path={route.path} element={route.element} />
        ))}
      </Routes>
      {/*</UserLoginContext.Provider>*/}
    </Provider>
  )
}

export default App

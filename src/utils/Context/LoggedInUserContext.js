import React, { createContext } from "react";

export const UserLoginContext = createContext({
  loggedInUserValues:{
    _id:"",
    username:"",
    emailId:"",
    profilePic:"",
    phoneNumber: "",
    isLoggedIn: false
  } ,
  setLoggedInUserValues: () => {}
});



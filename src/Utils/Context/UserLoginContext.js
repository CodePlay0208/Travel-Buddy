import React, { createContext } from "react";

export const UserLoginContext = createContext({
  userLoginData: [
    {
      isUserLoggedIn: "",
    },
  ],
  setUserLoginData: () => {}
});

import React, { createContext } from "react";

export const UserLoginContext = createContext({
  isUserLoggedIn: false,
  setIsUserLoggedIn: () => {}
});



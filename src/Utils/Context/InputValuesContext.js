import React, { createContext } from "react";

export const InputValuesContext = createContext({
  inputValues: {
    destination: "",
    startDate: "",
  },

  setInputValues: () => {},
});

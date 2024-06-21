import React, { createContext } from "react";

export const TripsContext = createContext({
  tripsData: [
    {
      id: 0,
      startLocation: "D",
      endLocation: "M",
      totalMembers: 4,
      age: -1,
      gender: "Male",
      description:"",
      image:"",
      userName:"",
      phoneNumber:"",
      startDate:"",
      endDate:""
    },
  ],
  setTripsData: () => {}
});

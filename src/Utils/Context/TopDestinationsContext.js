import React, { createContext} from "react";

export const TopDestinationsContext = createContext({
    topDestinations: [""],
    setTopDestinations: ()=>{}
});
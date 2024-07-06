import React, { createContext} from "react";

export const FilterContext = createContext({
    fromAge:0,
    toAge:100,
    gender:"Male",
    setFilterData: ()=>{}
});
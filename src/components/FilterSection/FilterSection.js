import React, { useContext } from "react";
import "./FilterSection.css";
import { FilterContext } from "../../Utils/Context/FilterContext";

const FilterSection = (props) => {
  const filterDataContext = useContext(FilterContext);
  return (
    <div>
      {props.visibility && (
        <div className="filterSectionContainer">
          <div className="sort-by">
            <h2>Sort By</h2>
            <label>
              <input
                type="radio"
                name="sort-by-departure"
                value="earliest-departure"
              />
              Earliest Departure Date
            </label>
            <label>
              <input
                type="radio"
                name="sort-by-departure"
                value="closest-departure-point"
              />
              Closest to Departure Point
            </label>  
          </div>
          <div className="preferences">
            <h2>Preferences</h2>
            <div>
              <label>Age:</label>
              <div>
                <label htmlFor="fromAge">From:</label>
                <input
                  type="number"
                  id="fromAge"
                  name="fromAge"
                  onChange={(event) => {
                    const value = event.target.value ? event.target.value : 100;
                    filterDataContext.setFilterData((currentData) => ({
                      ...currentData,
                      fromAge: value,
                    }));
                  }}
                />
                <label htmlFor="toAge">To:</label>
                <input
                  type="number"
                  id="toAge"
                  name="toAge"
                  onChange={(event) => {
                    const value = event.target.value ? event.target.value : 100;
                    filterDataContext.setFilterData((currentData) => ({
                      ...currentData,
                      toAge: value,
                    }));
                  }}
                />
                {filterDataContext.fromAge > filterDataContext.toAge && (
                  <span>Please enter valid range</span>
                )}
              </div>
            </div>
            <div>
              <label>gender:</label>
              <div>
                <label>
                  <input
                    type="radio"
                    value="Male"
                    checked={filterDataContext.gender === "Male"}
                    onChange={(event) =>
                      filterDataContext.setFilterData((currentData) => ({
                        ...currentData,
                        gender: event.target.value,
                      }))
                    }
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    value="Female"
                    checked={filterDataContext.gender === "Female"}
                    onChange={(event) =>
                      filterDataContext.setFilterData((currentData) => ({
                        ...currentData,
                        gender: event.target.value,
                      }))
                    }
                  />
                  Female
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSection;

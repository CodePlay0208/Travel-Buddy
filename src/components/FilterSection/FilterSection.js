import React, { useContext } from "react";
import "./FilterSection.css";
import { FilterContext } from "../../Utils/Context/FilterContext";

const FilterSection = (props) => {
  const  filterDataContext  = useContext(FilterContext);
  const { fromAge, toAge, gender, setFilterData } = filterDataContext;

  return (
    <div className={`filterSectionWrapper ${props.visibility ? 'visible' : 'hidden'}`}>
      <div className="filterSectionContainer">
        <div className="sort-by">
          <h2>Sort By</h2>
          <div className="options">
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
        </div>
        <div className="preferences">
          <h2>Preferences</h2>
          <div className="age-preference">
            <label>Age:</label>
            <div className="age-inputs">
              <div>
                <label htmlFor="fromAge">From:</label>
                <input
                  type="number"
                  id="fromAge"
                  name="fromAge"
                  defaultValue={fromAge}
                  onChange={(event) => {
                    const value = event.target.value ? parseInt(event.target.value, 10) : 100;
                    setFilterData((currentData) => ({
                      ...currentData,
                      fromAge: value,
                    }));
                  }}
                />
              </div>
              <div>
                <label htmlFor="toAge">To:</label>
                <input
                  type="number"
                  id="toAge"
                  name="toAge"
                  defaultValue={toAge}
                  onChange={(event) => {
                    const value = event.target.value ? parseInt(event.target.value, 10) : 100;
                    setFilterData((currentData) => ({
                      ...currentData,
                      toAge: value,
                    }));
                  }}
                />
              </div>
            </div>
            {fromAge > toAge && (
              <span className="error-message">Please enter a valid age range</span>
            )}
          </div>
          <div className="gender-preference">
            <label>Gender:</label>
            <div className="gender-options">
              <label>
                <input
                  type="radio"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(event) =>
                    setFilterData((currentData) => ({
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
                  checked={gender === "Female"}
                  onChange={(event) =>
                    setFilterData((currentData) => ({
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
    </div>
  );
};

export default FilterSection;

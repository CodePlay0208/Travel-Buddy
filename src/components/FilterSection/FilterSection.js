import React, { useContext } from "react";
import "./FilterSection.css";
import { FilterContext } from "../../Utils/Context/FilterContext";

const FilterSection = ({ visibility }) => {
  const filterDataContext = useContext(FilterContext);
  const { fromAge, toAge, gender, setFilterData } = filterDataContext;

  const handleClearAll = () => {
    setFilterData({
      fromAge: 0,
      toAge: 100,
      gender: "",
    });
  };

  return (
    <div className={`filterSectionWrapper ${visibility ? 'visible' : 'hidden'}`}>
      <div className="filterSectionContainer">
        <div className="filterHeader">
          <button type="button" className="clearButton" onClick={handleClearAll}>
            Clear all
          </button>
        </div>

        <section>
          <h3 className="sectionTitle">Sort by</h3>
          <ul aria-label="Sort by" role="radiogroup" className="filterOptions">
            <li>
              <label className="filterOptionLabel">
                <input
                  type="radio"
                  name="sort-by-departure"
                  value="earliest-departure"
                />
                Earliest Departure Date
              </label>
            </li>
            <li>
              <label className="filterOptionLabel">
                <input
                  type="radio"
                  name="sort-by-departure"
                  value="closest-departure-point"
                />
                Closest to Departure Point
              </label>
            </li>
          </ul>
        </section>

        <div aria-hidden="true" className="divider">
          <hr />
        </div>

        <section>
          <h3 className="sectionTitle">Preferences</h3>
          <div className="agePreference">
            <label className="preferenceLabel">Age:</label>
            <div className="ageInputs">
              <div>
                <label htmlFor="fromAge">From:</label>
                <input
                  type="number"
                  id="fromAge"
                  name="fromAge"
                  value={fromAge}
                  onChange={(event) => {
                    const value = event.target.value ? parseInt(event.target.value, 10) : 0;
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
                  value={toAge}
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
              <span className="errorMessage">Please enter a valid age range</span>
            )}
          </div>
          <div className="genderPreference">
            <label className="preferenceLabel">Gender:</label>
            <div className="genderOptions">
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
        </section>
      </div>
    </div>
  );
};

export default FilterSection;

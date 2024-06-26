import React, { useContext } from "react";
import "./FilterSection.css";
import { FilterContext } from "../../Utils/Context/FilterContext";

const FilterSection = ({ visibility }) => {
  const filterDataContext = useContext(FilterContext);
  const { fromAge, toAge, gender, setFilterData } = filterDataContext;

  const handleClearAll = () => {
    setFilterData({
      fromAge: 0,
      toAge: 0,
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
                <div className="filterOptionText">Earliest Departure Date</div>
              </label>
            </li>
            <li>
              <label className="filterOptionLabel">
                <input
                  type="radio"
                  name="sort-by-departure"
                  value="closest-departure-point"
                />
                <div className="filterOptionText">Closest to Departure Point</div>
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
                  type="text"
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
                  type="text"
                  id="toAge"
                  name="toAge"
                  value={toAge}
                  onChange={(event) => {
                    const value = event.target.value ? parseInt(event.target.value, 10) : 0;
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
                <div className="filterOptionText">Male</div>
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
                <div className="filterOptionText">Female</div>
              </label>
            </div>
          </div>
        </section>
        
        <section>
          <h3 className="sectionTitle">Trust and safety</h3>
          <ul aria-label="Sort by" role="radiogroup" className="filterOptions">
            <li>
              <label className="filterOptionLabel">
                <input
                  type="radio"
                  name="sort-by-departure"
                  value="earliest-departure"
                />
                <div className="filterOptionText">Verified Profile</div>
              </label>
            </li>
            
          </ul>
        </section>
      </div>
    </div>
  );
};

export default FilterSection;

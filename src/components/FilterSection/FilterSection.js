import React, { useContext } from "react";
import "./FilterSection.css";
import { FilterContext } from "../../Utils/Context/FilterContext";

const FilterSection = ({ visibility }) => {
  const filterDataContext = useContext(FilterContext);
  const { fromAge, toAge, gender, ratings, tripLength, budget, members, persona, setFilterData } = filterDataContext;

  const handleClearAll = () => {
    setFilterData({
      fromAge: 0,
      toAge: 100,
      gender: "",
      ratings: "",
      tripLength: "",
      budget: "",
      members: 1,
      persona: "",
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
                  name="sort-by"
                  value="earliest-departure"
                />
                <div className="filterOptionText">Earliest Departure Date</div>
              </label>
            </li>
            <li>
              <label className="filterOptionLabel">
                <input
                  type="radio"
                  name="sort-by"
                  value="closest-departure-point"
                />
                <div className="filterOptionText">Closest to Departure Point</div>
              </label>
            </li>
            <li>
              <label className="filterOptionLabel">
                <input
                  type="radio"
                  name="sort-by"
                  value="ratings"
                />
                <div className="filterOptionText">Ratings</div>
              </label>
            </li>
            <li>
              <label className="filterOptionLabel">
                <input
                  type="radio"
                  name="sort-by"
                  value="shortest-trip"
                />
                <div className="filterOptionText">Shortest Trip</div>
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
              <label className="filterOptionLabel">
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
              <label className="filterOptionLabel">
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
          <div className="personaPreference">
            <label className="preferenceLabel">Persona:</label>
            <div className="personaOptions">
              <label className="filterOptionLabel">
                <input
                  type="radio"
                  value="Agent"
                  checked={persona === "Agent"}
                  onChange={(event) =>
                    setFilterData((currentData) => ({
                      ...currentData,
                      persona: event.target.value,
                    }))
                  }
                />
                <div className="filterOptionText">Agent</div>
              </label>
              <label className="filterOptionLabel">
                <input
                  type="radio"
                  value="Traveller"
                  checked={persona === "Traveller"}
                  onChange={(event) =>
                    setFilterData((currentData) => ({
                      ...currentData,
                      persona: event.target.value,
                    }))
                  }
                />
                <div className="filterOptionText">Traveller</div>
              </label>
            </div>
          </div>
          <div className="budgetPreference">
            <label className="preferenceLabel">Budget range:</label>
            <select
              name="budget"
              value={budget}
              onChange={(event) => {
                setFilterData((currentData) => ({
                  ...currentData,
                  budget: event.target.value,
                }));
              }}
            >
              <option value="">Select budget range</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="membersPreference">
            <label className="preferenceLabel">Total Members:</label>
            <select
              name="members"
              value={members}
              onChange={(event) => {
                setFilterData((currentData) => ({
                  ...currentData,
                  members: event.target.value,
                }));
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </section>

        <section>
          <h3 className="sectionTitle">Trust and safety</h3>
          <ul aria-label="Trust and safety" role="radiogroup" className="filterOptions">
            <li>
              <label className="filterOptionLabel">
                <input
                  type="radio"
                  name="trustAndSafety"
                  value="verified-profile"
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

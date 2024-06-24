import React , {useContext} from 'react';
import './PopularTrips.css'; // Import CSS file
import { TopDestinationsContext } from "../../../Utils/Context/TopDestinationsContext";
import { InputValuesContext } from "../../../Utils/Context/InputValuesContext";
import { useNavigate } from "react-router-dom";

function getTodayDate() {
  const todayDate = new Date();
  const year = todayDate.getFullYear();
  const month = String(todayDate.getMonth() + 1).padStart(2, "0");
  const day = String(todayDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

const PopularTrips = () => {
  const { topDestinations } = useContext(TopDestinationsContext);

  const {setInputValues } = useContext(InputValuesContext);

  const navigate = useNavigate();

  return (
    <section data-testid="e2e-home-popular-trips-section" className="popular-trips-section">
      <div className="popular-trips-container">
        <article className="popular-trip-article">
          <h2 className="popular-trip-title">Where do you want to go?</h2>
          <ul className="popular-trip-list">
            <li className="popular-trip-item">
              <div
                type="button"
                className="popular-trip-link"
                onClick={() => {
                  const todayDateInString = getTodayDate();
                  setInputValues({ startDate: todayDateInString, destination: "Delhi" });
                  localStorage.setItem(
                    "inputValues",
                    JSON.stringify({
                      startDate: todayDateInString,
                      destination: "Delhi",
                    })
                  );
                  navigate("/search-results-page");
                }}
              >
                <span className="popular-trip-text">
                  <span >Delhi</span>
                </span>
                <span className="popular-trip-icon">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-hidden="true"
                    className="icon"
                  >
                    <g color="neutralIconDefault">
                      <g color="currentColor">
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M8.293 6.707a1 1 0 0 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12z"
                          clipRule="evenodd"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </span>
              </div>
            </li>
            <li className="popular-trip-item">
              <div
                type="button"
                className="popular-trip-link"
                onClick={() => {
                  const todayDateInString = getTodayDate();
                  setInputValues({ startDate: todayDateInString, destination: "Bengaluru" });
                  localStorage.setItem(
                    "inputValues",
                    JSON.stringify({
                      startDate: todayDateInString,
                      destination: "Bengaluru",
                    })
                  );
                  navigate("/search-results-page");
                }}
              >
                <span className="popular-trip-text">
                  <span>Bengaluru</span>
                </span>
                <span className="popular-trip-icon">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-hidden="true"
                    className="icon"
                  >
                    <g color="neutralIconDefault">
                      <g color="currentColor">
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M8.293 6.707a1 1 0 0 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12z"
                          clipRule="evenodd"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </span>
              </div>
            </li>
            <li className="popular-trip-item">
              <div
                type="button"
                className="popular-trip-link"
                onClick={() => {
                  const todayDateInString = getTodayDate();
                  setInputValues({ startDate: todayDateInString, destination: "Manali" });
                  localStorage.setItem(
                    "inputValues",
                    JSON.stringify({
                      startDate: todayDateInString,
                      destination: "Manali",
                    })
                  );
                  navigate("/search-results-page");
                }}
              >
                <span className="popular-trip-text">
                  <span>Manali</span>
                </span>
                <span className="popular-trip-icon">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-hidden="true"
                    className="icon"
                  >
                    <g color="neutralIconDefault">
                      <g color="currentColor">
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M8.293 6.707a1 1 0 0 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12z"
                          clipRule="evenodd"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </span>
              </div>
            </li>
          </ul>
        </article>
        <div className="popular-trip-button-container">
          <a
            aria-expanded="false"
            aria-controls="region-wheredoyouwanttogo"
            className="popular-trip-button"
            href='#topDestinations'
          >
            See our most popular destinations
          </a>
        </div>
      </div>
    </section>
  );
};

export default PopularTrips;

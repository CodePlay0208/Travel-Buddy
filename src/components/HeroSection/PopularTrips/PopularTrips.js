import React from 'react';
import './PopularTrips.css'; // Import CSS file

const PopularTrips = () => {
  return (
    <section data-testid="e2e-home-popular-trips-section" className="popular-trips-section">
      <div className="popular-trips-container">
        <article className="popular-trip-article">
          <h2 className="popular-trip-title">Where do you want to go?</h2>
          <ul className="popular-trip-list">
            <li className="popular-trip-item">
              <a
                type="button"
                className="popular-trip-link"
                href="#"
              >
                <span className="popular-trip-text">
                  <span>Delhi</span>
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
              </a>
            </li>
            <li className="popular-trip-item">
              <a
                type="button"
                className="popular-trip-link"
                href="#"
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
              </a>
            </li>
            <li className="popular-trip-item">
              <a
                type="button"
                className="popular-trip-link"
                href="#"
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
              </a>
            </li>
          </ul>
        </article>
        <div className="popular-trip-button-container">
          <button
            aria-expanded="false"
            aria-controls="region-wheredoyouwanttogo"
            className="popular-trip-button"
          >
            See our most popular rides
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularTrips;

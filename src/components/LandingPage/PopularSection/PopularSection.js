import React from 'react';
import "./PopularSection.css"
import data from "../../../data/data.json";
import TripCard from './TripsCard/TripCard';
import Trip from '../../Trip/Trip'
const PopularSection = () => {

    return (
        <>
            <div className="popularTripContainer">
                <div className="popularTripHeading">
                    <div className="popularHeadingLeft">Find Popular Destination</div>
                    <div className="popularHeadingRight">
                        <button className='popularButton'>
                            Show More
                        </button>
                    </div>
                </div>
                <div className="popularTripContent">
                    {data.map((d) => (
                        <TripCard trip={d} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default PopularSection;
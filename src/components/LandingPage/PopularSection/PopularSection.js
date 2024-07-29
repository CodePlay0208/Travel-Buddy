import React, { useRef } from 'react';
import "./PopularSection.css";
import data from "../../../data/data.json";
import TripCard from './TripsCard/TripCard';

const PopularSection = () => {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -380, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 380, behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="popularTripContainer">
                <div className="popularTripHeading">
                    <div className="popularHeadingLeft">Find Popular Destination</div>
                    <div className="popularHeadingRight">
                        <button className="arrowButton left" onClick={scrollLeft}>{"<"}</button>
                        <button className="arrowButton right" onClick={scrollRight}>{">"}</button>
                    </div>
                </div>
                <div className="popularTripContent" ref={scrollContainerRef}>
                    {data.map((d, index) => (
                        <TripCard key={index} trip={d} />
                    ))}
                </div>
                <div className='popularButton-div'>
                    <button className='popularButton'>Show More</button>
                </div>
            </div>
        </>
    );
};

export default PopularSection;

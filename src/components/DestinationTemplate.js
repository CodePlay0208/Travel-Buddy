import React, { useState, useEffect, memo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';


import { ContentSection, HeaderSection, PageContainer } from './Destination/DestinationPage.styled';
import { Section } from './HeroSectionV2/HeroSection.styled';
import TripList from './Trip/TripList';
import { getTrips, getTripsByStartLocation } from '../actions/trips.action';

const mapStateToProps = (state) => ({
  trips: state.tripReducer.trips,
  startLocationTrips: state.tripReducer.startLocationTrips,


})
const DestinationTemplate = ({ startLocationTrips, trips, getTrips, destination, getTripsByStartLocation }) => {
  const navigate = useNavigate();


  useEffect(() => {
    if (!destination || !destination.searchTag) {
      navigate('/');
      return;
    }
    getTrips({
      destination: destination.searchTag || '',
      startDate: '',
    }, 0, 50, false, true)

    getTripsByStartLocation({
      destination: '',
      startDate: '',
    }, 0, 50, false, true, destination.searchTag)
  }, [destination, getTrips, getTripsByStartLocation, navigate])

  if (!destination) {
    return <div>Destination not found</div>;
  }

  return (
    <PageContainer>
      <HeaderSection>
        <h1>{destination.title}</h1>
        <h2>{destination.subtitle}</h2>
        <p>{destination.description}</p>
      </HeaderSection>

      <ContentSection>
        <Section>
          <h3>Overview</h3>
          <p>{destination.content.overview}</p>
        </Section>
      </ContentSection>

      {(!trips || !trips.length) && (!startLocationTrips || !startLocationTrips.length) ? (
        <TripList
          title={`Available Trips to ${destination.searchTag}`}
          trips={trips}
          editEnable={false}
        />
      ) : (
        <>
          {trips && trips.length > 0 && (
            <TripList
              title={`Available Trips to ${destination.searchTag}`}
              trips={trips}
              editEnable={false}
            />
          )}
          {startLocationTrips && startLocationTrips.length > 0 && (
            <TripList
              title={`Available Trips from ${destination.searchTag}`}
              trips={startLocationTrips}
              editEnable={false}
            />
          )}
        </>
      )}
      <ContentSection>

        <Section>
          <h3>Top Attractions</h3>
          <p>{destination.content.attractions}</p>
        </Section>
        <Section>
          <h3>Best Time to Visit</h3>
          <p>{destination.content.bestTime}</p>
        </Section>
      </ContentSection>


    </PageContainer>
  );
};

export default connect(mapStateToProps, { getTrips, getTripsByStartLocation })(memo(DestinationTemplate));

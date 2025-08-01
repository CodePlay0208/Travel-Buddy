import React, { useState, useEffect, memo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';


import { ContentSection, HeaderSection, PageContainer } from './Destination/DestinationPage.styled';
import { Section } from './HeroSectionV2/HeroSection.styled';
import TripList from './Trip/TripList';
import { getTrips } from '../actions/trips.action';

const mapStateToProps = (state) => ({
  trips: state.tripReducer.trips,
})
const DestinationTemplate = ({ trips, getTrips, destination }) => {
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
  }, [destination, getTrips, navigate])

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

      <TripList
        title={`Available ${destination.title}`}
        trips={trips}
        editEnable={false}
      />
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

export default connect(mapStateToProps, { getTrips })(memo(DestinationTemplate));

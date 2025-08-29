import React, { useEffect, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { PageContainer, HeaderSection } from './Destination/DestinationPage.styled';
import TripList from './Trip/TripList';
import { getTrips, getTripsByStartLocation } from '../actions/trips.action';
import SectionTemplate from './SeoPagesTemplate/SectionTemplate';

const mapStateToProps = (state) => ({
  trips: state.tripReducer.trips,
  startLocationTrips: state.tripReducer.startLocationTrips,
});

const DestinationTemplate = ({ startLocationTrips, trips, getTrips, destination, getTripsByStartLocation }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!destination || !destination.searchTag) {
      navigate('/');
      return;
    }
    getTrips(
      { destination: destination.searchTag || '', startDate: '' },
      0, 50, false, true
    );
    getTripsByStartLocation(
      { destination: '', startDate: '' },
      0, 50, false, true, destination.searchTag
    );
  }, [destination, getTrips, getTripsByStartLocation, navigate]);

  if (!destination) {
    return <div>Destination not found</div>;
  }

  // Prepare data for SectionTemplate
  const sectionTemplateData = {
    sections: [
      ...(destination.hero ? [destination.hero] : []),
      ...(destination.content?.sections || [])
    ],
    faqs: destination.content?.faqs || []
  };

  return (
    <>
      {destination.seo && (
        <Helmet>
          <title>{destination.seo.metaTitle}</title>
          <meta name="description" content={destination.seo.metaDescription} />
          {destination.seo.metaKeywords && (
            <meta name="keywords" content={destination.seo.metaKeywords} />
          )}
          {destination.seo.canonicalUrl && (
            <link rel="canonical" href={destination.seo.canonicalUrl} />
          )}
        </Helmet>
      )}

      <PageContainer>
        <HeaderSection>
          <h1>{destination.title}</h1>
          {destination.subtitle && <h2>{destination.subtitle}</h2>}
          <p>{destination.description}</p>
        </HeaderSection>

        {/* Use new SectionTemplate for enhanced content */}
        <SectionTemplate
          sections={sectionTemplateData.sections}
          faqs={sectionTemplateData.faqs}
        />

        {/* Trip listings */}
        {(!trips || !trips.length) && (!startLocationTrips || !startLocationTrips.length) ? (
          <TripList title={`Available Trips to ${destination.searchTag}`} trips={trips} editEnable={false} />
        ) : (
          <>
            {trips?.length > 0 && (
              <TripList title={`Available Trips to ${destination.searchTag}`} trips={trips} editEnable={false} />
            )}
            {startLocationTrips?.length > 0 && (
              <TripList title={`Available Trips from ${destination.searchTag}`} trips={startLocationTrips} editEnable={false} />
            )}
          </>
        )}
      </PageContainer>
    </>
  );
};

export default connect(mapStateToProps, { getTrips, getTripsByStartLocation })(memo(DestinationTemplate));

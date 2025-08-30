import React, { useEffect, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { PageContainer, HeaderSection, TripSection } from './Destination/DestinationPage.styled';
import TripList from './Trip/TripList';
import { getTrips, getTripsByStartLocation } from '../actions/trips.action';
import SectionTemplate from './SeoPagesTemplate/SectionTemplate';
import FAQAccordion from './SeoPagesTemplate/FAQAccordion';
import BackgroundSectionBlock from './SeoPagesTemplate/BackgroundSectionBlock';
import SectionBlock from './SeoPagesTemplate/SectionBlock';
import TemplateHeader from './TemplateHeader';
import { Header } from 'antd/es/layout/layout';
import BackgroundSection from './SeoPagesTemplate/BackgroundSection';
import InfoWithImageSection from './SeoPagesTemplate/InfoWithImageSection';

const mapStateToProps = (state) => ({
  trips: state.tripReducer.trips,
  startLocationTrips: state.tripReducer.startLocationTrips,
});

const DestinationTemplate = ({ startLocationTrips, trips, getTrips, destination = {}, getTripsByStartLocation }) => {
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

  const heading = destination.pageHeading;
  const title = destination.pageTitle
  const content = destination.pageContent;
  const sections = destination.sections || [
    {
      heading: { h1: "Explore Goa with Our Holiday Packages" },
      paragraph: { p: "Goa is more than just beaches, it's a journey through culture, cuisine, and coastlines. Our holiday packages in Goa cover top destinations such as:" },
      list: [
        "Baga Beach: Nightlife, water sports, and beach shacks",
        "Calangute & Anjuna: Local markets and lively scenes",
        "Palolem & Colva: Calm waters, clean sands, perfect for quiet stays",
        "Old Goa: Visit Basilica of Bom Jesus, Se Cathedral, and Church of St. Francis of Assisi",
        "Fort Aguada: panoramic sea views and Portuguese history"
      ]
    },
    {
      heading: { h2: "Honeymoon & Family-Friendly Goa Packages" },
      paragraph: { p: "For couples, our Goa honeymoon packages offer romantic moments like sunset cruises on the Mandovi River, beachside stays in Morjim, and candlelit dinners by the sea. For families, enjoy Dudhsagar Waterfalls, Butterfly Beach, and the Bhagwan Mahavir Wildlife Sanctuary." }
    },
    {
      heading: "Culture, Cuisine & Hidden Corners",
      paragraph: "Beyond the beaches, Goa's heart beats in its traditions. Experience festivals, night markets, the Latin Quarter of Fontainhas, and authentic Goan cuisine such as prawn balchão, fish curry rice, and bebinca."
    },
    {
      backgroundImage: "https://example.com/goa-beach.jpg",
      heading: "Book Your Goa Travel Package Today",
      paragraph: "Whether you're here for a weekend, honeymoon, or longer, our Goa packages give you a complete experience without the stress of planning."
    }
  ];

  const faqs = destination.faqs || [
    {
      question: "What is the average Goa trip cost for 3 to 5 days?",
      answer: "₹8,500 to ₹25,000 per person depending on hotel category and season."
    },
    {
      question: "Which are the best places to visit in Goa?",
      answer: "Baga Beach, Fort Aguada, Dudhsagar Waterfalls, Old Goa churches, Palolem, Spice Plantations, Fontainhas."
    },
    {
      question: "Is North Goa or South Goa better for tourists?",
      answer: "North Goa for nightlife and markets, South Goa for peace and nature. Many packages include both."
    },
    {
      question: "What is included in Goa tour packages?",
      answer: "Accommodation, breakfast, sightseeing tours, transfers, and local support."
    },
    {
      question: "When is the best time to visit Goa?",
      answer: "October to March, during pleasant weather and festive celebrations."
    }
  ];

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

        <TemplateHeader heading={heading} content={title} />


        <HeaderSection>
          <InfoWithImageSection
            text={content}
          />

          {sections.map((section, index) => {
            if (section.backgroundImage) {
              return <BackgroundSectionBlock key={index} section={section} />;
            }
            else if (index === 0) {
              return <>

                <SectionBlock key={index} section={section} />
                <BackgroundSection key={index} section={section} />
              </>
            }
            return <SectionBlock key={index} section={section} />;
          })}


          <TripSection>

            {/* Trip listings */}
            {(!trips || !trips.length) && (!startLocationTrips || !startLocationTrips.length) ? (
              <TripList padding={'0'} justify={'center'} title={`Available Trips to ${destination.searchTag}`} trips={trips} editEnable={false} />
            ) : (
              <>
                {trips?.length > 0 && (
                  <TripList padding={'0'} justify={'center'} title={`Available Trips to ${destination.searchTag}`} trips={trips} editEnable={false} />
                )}
                {startLocationTrips?.length > 0 && (
                  <TripList padding={'0'} justify={'center'} title={`Available Trips from ${destination.searchTag}`} trips={startLocationTrips} editEnable={false} />
                )}
              </>
            )}
          </TripSection>
          <FAQAccordion faqs={faqs} />
        </HeaderSection>
      </PageContainer>
    </>
  );
};

export default connect(mapStateToProps, { getTrips, getTripsByStartLocation })(memo(DestinationTemplate));

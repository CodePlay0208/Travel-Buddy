import React, { useEffect, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet-async'
import { PageContainer, HeaderSection, TripSection } from './Destination/DestinationPage.styled'
import TripList from './Trip/TripList'
import { getTrips, getTripsByStartLocation } from '../actions/trips.action'
import SectionTemplate from './SeoPagesTemplate/SectionTemplate'
import FAQAccordion from './SeoPagesTemplate/FAQAccordion'
import BackgroundSectionBlock from './SeoPagesTemplate/BackgroundSectionBlock'
import SectionBlock from './SeoPagesTemplate/SectionBlock'
import TemplateHeader from './TemplateHeader'
import { Header } from 'antd/es/layout/layout'
import BackgroundSection from './SeoPagesTemplate/BackgroundSection'
import InfoWithImageSection from './SeoPagesTemplate/InfoWithImageSection'
import { TripList as GridList } from '../screens/SearchResultsPage/SearchResultsPage.styled'
import TripCard from './TripCard/TripCard'

const mapStateToProps = (state) => ({
  trips: state.tripReducer.trips,
  startLocationTrips: state.tripReducer.startLocationTrips,
})

const DestinationTemplate = ({ startLocationTrips, trips, getTrips, destination = {}, getTripsByStartLocation, isBlog }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (isBlog) {
      getTrips({ destination: '', startDate: '' }, 0, 50, false, true)
      return
    }
    if (!destination || !destination.searchTag) {
      navigate('/')
      return
    }
    getTrips({ destination: destination.searchTag || '', startDate: '' }, 0, 50, false, true)
    getTripsByStartLocation({ destination: '', startDate: '' }, 0, 50, false, true, destination.searchTag)
  }, [destination, getTrips, getTripsByStartLocation, navigate])

  if (!destination) {
    return <div>Destination not found</div>
  }

  const heading = destination.pageHeading
  const title = destination.pageTitle
  const content = destination.pageContent
  const sections = destination.sections || []

  const faqs = destination.faqs || []

  return (
    <>
      {destination.seo && (
        <Helmet>
          <title>{destination.seo.metaTitle}</title>
          <meta name="description" content={destination.seo.metaDescription} />
          {destination.seo.metaKeywords && <meta name="keywords" content={destination.seo.metaKeywords} />}
          {destination.seo.canonicalUrl && <link rel="canonical" href={destination.seo.canonicalUrl} />}
        </Helmet>
      )}

      <PageContainer>
        <TemplateHeader heading={heading} content={title} />

        <HeaderSection>
          <InfoWithImageSection text={content} />
          <TripSection>
            {/* Trip listings */}
            {(!trips || !trips.length) && (!startLocationTrips || !startLocationTrips.length) ? (
              <TripList
                padding={'0'}
                justify={'center'}
                title={`Available Trips to ${destination.searchTag}`}
                trips={trips?.slice(0, 10)}
                editEnable={false}
              />
            ) : (
              <>
                {trips?.length > 0 && (
                  <TripList
                    padding={'0'}
                    justify={'center'}
                    title={`Available Trips to ${destination.searchTag}`}
                    trips={trips?.slice(0, 20)}
                    editEnable={false}
                  />
                )}
                {startLocationTrips?.length > 0 && (
                  <TripList
                    padding={'0'}
                    justify={'center'}
                    title={`Available Trips from ${destination.searchTag}`}
                    trips={startLocationTrips?.slice(0, 20)}
                    editEnable={false}
                  />
                )}
              </>
            )}
          </TripSection>

          {sections.map((section, index) => {
            if (section.backgroundImage) {
              return <BackgroundSectionBlock key={index} section={section} />
            } else if (index === 0) {
              return (
                <>
                  <SectionBlock key={index} section={section} />
                  <BackgroundSection key={index} section={section} />
                </>
              )
            }
            return <SectionBlock key={index} section={section} />
          })}
          <GridList>{trips && trips?.slice(10, 20)?.map((trip) => <TripCard key={trip?.tripId} trip={trip} />)}</GridList>

          <FAQAccordion faqs={faqs} />
           <TripSection>
            {/* Trip listings */}
            {(!trips || !trips.length) && (!startLocationTrips || !startLocationTrips.length) ? (
              <TripList
                padding={'0'}
                justify={'center'}
                title={`Other Related Trips`}
                trips={trips?.slice(20)}
                editEnable={false}
              />
            ) : (
              <>
                {trips?.length > 0 && (
                  <TripList
                    padding={'0'}
                    justify={'center'}
                    title={`Other Related Trips`}
                    trips={trips?.slice(20)}
                    editEnable={false}
                  />
                )}
                {startLocationTrips?.length > 0 && (
                  <TripList
                    padding={'0'}
                    justify={'center'}
                    title={`Other Related Trips`}
                    trips={startLocationTrips?.slice(20)}
                    editEnable={false}
                  />
                )}
              </>
            )}
          </TripSection>
        </HeaderSection>
      </PageContainer>
    </>
  )
}

export default connect(mapStateToProps, { getTrips, getTripsByStartLocation })(memo(DestinationTemplate))

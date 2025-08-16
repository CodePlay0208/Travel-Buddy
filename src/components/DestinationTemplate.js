import React, { useEffect, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ContentSection, HeaderSection, PageContainer } from './Destination/DestinationPage.styled'
import { Section } from './HeroSectionV2/HeroSection.styled'
import TripList from './Trip/TripList'
import { useSelector, useDispatch } from 'react-redux'
import { getTrips, getTripsByStartLocation } from '../store/slices/trips-slice'

const DestinationTemplate = ({ destination }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { trips, startLocationTrips } = useSelector((state) => state.tripReducer)

  useEffect(() => {
    if (!destination || !destination.searchTag) {
      navigate('/')
      return
    }
    dispatch(getTrips({ destination: destination.searchTag || '', startDate: '' }, 0, 50, false, true))
    dispatch(getTripsByStartLocation({ destination: '', startDate: '' }, 0, 50, false, true, destination.searchTag))
  }, [destination, getTrips, getTripsByStartLocation, navigate])

  if (!destination) {
    return <div>Destination not found</div>
  }

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
        <HeaderSection>
          <h1>{destination.title}</h1>
          <h2>{destination.subtitle}</h2>
          <p>{destination.description}</p>
        </HeaderSection>

        {destination.content?.sections?.map((sec, idx) => (
          <ContentSection key={idx}>
            <Section>
              <h2>{sec.heading}</h2>
              {sec.paragraph && <p>{sec.paragraph}</p>}
              {sec.list && (
                <ul>
                  {sec.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </Section>
          </ContentSection>
        ))}

        {(!trips || !trips.length) && (!startLocationTrips || !startLocationTrips.length) ? (
          <TripList title={`Available Trips to ${destination.searchTag}`} trips={trips} editEnable={false} />
        ) : (
          <>
            {trips?.length > 0 && <TripList title={`Available Trips to ${destination.searchTag}`} trips={trips} editEnable={false} />}
            {startLocationTrips?.length > 0 && (
              <TripList title={`Available Trips from ${destination.searchTag}`} trips={startLocationTrips} editEnable={false} />
            )}
          </>
        )}

        {destination.content?.faqs && (
          <ContentSection>
            <Section>
              <h3>Frequently Asked Questions</h3>
              {destination.content.faqs.map((faq, idx) => (
                <div key={idx}>
                  <h4>{faq.question}</h4>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </Section>
          </ContentSection>
        )}
      </PageContainer>
    </>
  )
}

export default memo(DestinationTemplate)

import React, { memo } from 'react'
import { Container, DayTitle, DayTitleContainer } from './TripItinerary.styled'
import ItineraryPreview from './ItineraryPreview'
import { connect } from 'react-redux'
const mapStateToProps = (state) => ({
  trip: state.tripReducer.trip,
})
const TripItinerary = ({ trip }) => {
  let dayTabs =
    Array.isArray(trip?.dayTabs) && trip.dayTabs.length > 0
      ? trip.dayTabs.filter(
          (tab) => typeof tab === 'object' && tab && typeof tab.dayTitle === 'string' && Array.isArray(tab.dayDescription),
        )
      : []

  // Filter out any dayTabs that are missing a valid dayTitle or dayDescription
  dayTabs = dayTabs.filter((tab) => typeof tab === 'object' && tab && typeof tab.dayTitle === 'string' && Array.isArray(tab.dayDescription))

  // Sort safely if dayTabId exists and is a number-like string
  dayTabs = dayTabs.sort((a, b) => Number(a.dayTabId ?? 0) - Number(b.dayTabId ?? 0))

  const shortItineraryData = {
    dayTitle: 'Short Itinerary',
    dayDescription: dayTabs.map((dayTab) => dayTab?.dayTitle ?? 'Day' + dayTabs.dayTabId + 1),
  }

  const [curIdx, setCurIdx] = React.useState(0)
  const handleTabClick = (index) => {
    setCurIdx(index)
  }
  return (
    <Container>
      {dayTabs.length === 0 ? (
        <div style={{ fontSize: '1.5rem', padding: '2rem', textAlign: 'center', color: '#888' }}>No itinerary available</div>
      ) : (
        <>
          <DayTitleContainer>
            <DayTitle onClick={() => handleTabClick(-1)} className={curIdx === -1 ? 'active' : ''}>
              Quick Itinerary
            </DayTitle>
            {dayTabs.map((dayTab, index) => (
              <DayTitle key={dayTab.dayTabId || index} onClick={() => handleTabClick(index)} className={index === curIdx ? 'active' : ''}>
                {`Day ${index + 1}`}
              </DayTitle>
            ))}
          </DayTitleContainer>
          <ItineraryPreview
            tripData={curIdx >= 0 ? dayTabs[curIdx] || { dayTitle: '', dayDescription: [] } : shortItineraryData}
            isShortItinerary={curIdx === -1}
            handleShortItineraryClick={(idx) => setCurIdx(idx)}
          />
        </>
      )}
    </Container>
  )
}

export default connect(mapStateToProps, null)(memo(TripItinerary))

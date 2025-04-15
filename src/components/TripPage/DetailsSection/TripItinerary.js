import React from 'react'
import { Container, DayTitle, DayTitleContainer, PreviewContainer } from './TripItinerary.styled'
import ItineraryPreview from './ItineraryPreview'

const TripItinerary = () => {
  // Sample itinerary data
  const dayTabs = [
    {
      dayTitle: 'Explore',
      dayDescription: [
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
      ],
    },
    {
      dayTitle: 'Explore Day 2',
      dayDescription: [
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
      ],
    },
    {
      dayTitle: 'Explore Day 3',
      dayDescription: [
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
      ],
    },
    {
      dayTitle: 'Explore Day 4',
      dayDescription: [
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
      ],
    },
    {
      dayTitle: 'Explore Day 4',
      dayDescription: [
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
        "The Louvre, or the Louvre Museum, is the world's most-visited museum, and a historic  e Museum, is the world's most-visited museum, and a historic e Museum, is the",
      ],
    },
  ]
  const shortItineraryData = {
    dayTitle: 'Short Itinerary',
    dayDescription: dayTabs.map((dayTab) => dayTab.dayTitle),
  }

  const [curIdx, setCurIdx] = React.useState(0)
  const handleTabClick = (index) => {
    setCurIdx(index)
  }
  return (
    <Container>
      <DayTitleContainer>
        <DayTitle onClick={() => handleTabClick(-1)} className={curIdx === -1 ? 'active' : ''}>
          Short Itinerary
        </DayTitle>
        {dayTabs.map((dayTab, index) => (
          <DayTitle onClick={() => handleTabClick(index)} className={index === curIdx ? 'active' : ''}>
            {dayTab.dayTitle}
          </DayTitle>
        ))}
      </DayTitleContainer>
      <ItineraryPreview tripData={curIdx >= 0 ? dayTabs[curIdx] : shortItineraryData}></ItineraryPreview>
    </Container>
  )
}

export default TripItinerary

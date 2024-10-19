import React, { useRef } from 'react'
import {
  PopularTripContainer,
  PopularButtonDiv,
  PopularTripHeading,
  PopularTripContent,
  PopularHeadingLeft,
  PopularHeadingRight,
  PopularButton,
  ArrowButton,
} from '../../Styles/PopularSection.styles'
import data from '../../data/data.json'
import TripCard from '../TripCard/TripCard'

const PopularSection = (props) => {
  const scrollContainerRef = useRef(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' })
    }
  }

  return (
    <PopularTripContainer>
      <PopularTripHeading>
        <PopularHeadingLeft>Find Popular Destination</PopularHeadingLeft>
        <PopularHeadingRight>
          <ArrowButton className="left" onClick={scrollLeft} aria-label="Scroll Left">
            {'<'}
          </ArrowButton>
          <ArrowButton className="right" onClick={scrollRight} aria-label="Scroll Right">
            {'>'}
          </ArrowButton>
        </PopularHeadingRight>
      </PopularTripHeading>
      <PopularTripContent ref={scrollContainerRef} margin={props?.margin ? props.margin : `0 5.5%`}>
        {data.map((d, index) => (
          <TripCard key={index} trip={d} />
        ))}
      </PopularTripContent>
      <PopularButtonDiv>
        <PopularButton>Show More</PopularButton>
      </PopularButtonDiv>
    </PopularTripContainer>
  )
}

export default PopularSection

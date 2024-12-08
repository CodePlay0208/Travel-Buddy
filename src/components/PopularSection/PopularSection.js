import React, { memo, useEffect, useRef } from 'react'
import {
  PopularTripContainer,
  PopularButtonDiv,
  PopularTripHeading,
  PopularTripContent,
  PopularHeadingLeft,
  PopularHeadingRight,
  PopularButton,
  ArrowButton,
} from '../../styles/PopularSection.styles'
import data from '../../data/data.json'
import TripCard from '../TripCard/TripCard'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { getTrips } from '../../actions/trips.action'

const mapStateToProps = (state) => ({
  trips: state.tripReducer.trips,

  searchForm: state.tripReducer.searchForm,
})
const PopularSection = (props) => {
  const { trips, searchForm, getTrips } = props
  const navigate = useNavigate()
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    getTrips(searchForm)
  }, [])

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
      <PopularTripHeading
        margin={props?.margin ? props.margin : `5% 10% 0 10%`}
        fontSize={props?.fontSize ? props.fontSize : `100%`}
        padding={props?.padding ? props.padding : '30px 0'}
      >
        <PopularHeadingLeft>{props?.title ? props.title : `Find Popular Destination`} </PopularHeadingLeft>
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
        {trips.map((trip) => (
          <TripCard
            key={trip?.tripId}
            tripId={trip?.tripId}
            profileImg={trip?.profileImg || null}
            startLocation={trip?.startLocation}
            destination={trip?.destination}
            totalMembers={trip?.totalMembers}
            age={trip?.age}
            gender={trip?.gender}
            description={trip?.description}
            destinationImages={trip?.croppedDestinationImages || []}
            budget={trip?.budget}
            startDate={trip?.startDate}
            endDate={trip?.endDate}
            tripMembers={trip?.tripMembers}
            publisherId={trip?.userId}
            publishedTime={trip?.createdAt}
          />
        ))}
      </PopularTripContent>
      <PopularButtonDiv>
        <PopularButton
          onClick={() => {
            navigate('/search-results-page')
          }}
        >
          Show More
        </PopularButton>
      </PopularButtonDiv>
    </PopularTripContainer>
  )
}

export default connect(mapStateToProps, { getTrips })(memo(PopularSection))

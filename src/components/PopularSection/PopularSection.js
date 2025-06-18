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
  ArrowButtonContainer,
} from '../../styles/PopularSection.styles'
import data from '../../data/data.json'
import TripCard from '../TripCard/TripCard'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { getTrips, getRandomTrips } from '../../actions/trips.action'
import { SVG } from '../../assets'

const mapStateToProps = (state) => ({
  trips: state.tripReducer.trips,
  randomTrips: state.tripReducer.randomTrips,
  searchForm: state.tripReducer.searchForm,
})

const PopularSection = (props) => {
  const { trips, searchForm, getTrips, randomTrips, getRandomTrips } = props
  const navigate = useNavigate()
  const scrollContainerRef = useRef(null)
  useEffect(() => {
    getTrips({
      destination: '',
      startDate: '',
    })
  }, [getTrips, searchForm])

  useEffect(() => {
    console.log('Calling getRandomTrips', getRandomTrips)
    getRandomTrips({
      destination: '',
      startDate: '',
    })
  }, [getRandomTrips])

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -390, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 390, behavior: 'smooth' })
    }
  }

  return (
    <PopularTripContainer>
      <PopularTripHeading
        margin={props?.margin ? props.margin : `5% 0 0 5%`}
        fontSize={props?.fontSize ? props.fontSize : `100%`}
        padding={props?.padding ? props.padding : '30px 0'}
      >
        <PopularHeadingLeft>{props?.title ? props.title : `Find Popular Destination`} </PopularHeadingLeft>
        <PopularHeadingRight>
          <PopularButtonDiv>
            <PopularButton
              onClick={() => {
                navigate('/trips')
              }}
            >
              Explore Now
            </PopularButton>
          </PopularButtonDiv>
        </PopularHeadingRight>
      </PopularTripHeading>
      <PopularTripContent ref={scrollContainerRef} margin={props?.margin ? props.margin : `0 5.5%`}>
        <ArrowButton className="left" onClick={scrollLeft} aria-label="Scroll Left">
          <img src={SVG.leftArrowBlack} alt="" />
        </ArrowButton>
        <ArrowButton className="right" onClick={scrollRight} aria-label="Scroll Right">
          <img src={SVG.rightArrowBlack} alt="" />
        </ArrowButton>
        {randomTrips?.trips?.map((trip) => (
          <TripCard key={trip?.tripInstanceId} trip={trip} />
        ))}
      </PopularTripContent>
    </PopularTripContainer>
  )
}

PopularSection.displayName = 'PopularSection'

export default connect(mapStateToProps, { getTrips, getRandomTrips })(memo(PopularSection))

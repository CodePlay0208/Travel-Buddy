import React from 'react'
import TripCard from '../TripCard/TripCard'
import { Container, Heading } from './TripList.styled'

const TripList = ({ title, trips ,editEnable}) => {
  return (
    <>
      <Heading>{title}</Heading>
      <Container>
        {trips?.map((trip) => (
          <TripCard key={trip?.tripId} trip={trip} editEnable={editEnable}/>
        ))}
      </Container>
    </>
  )
}

export default TripList

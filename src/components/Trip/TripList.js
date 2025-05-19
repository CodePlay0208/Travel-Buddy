import React from 'react'
import TripCard from '../TripCard/TripCard'
import { Container, Heading } from './TripList.styled'

const TripList = ({ title, trips, editEnable }) => {
  return (
    <>
      <Heading>{title}</Heading>
      <Container>
        {!!trips?.length ? (
          trips?.map((trip) => <TripCard key={trip?.tripInstanceId} trip={trip} editEnable={editEnable} />)
        ) : (
          <p>No trips found.</p>
        )}
      </Container>
    </>
  )
}

export default TripList

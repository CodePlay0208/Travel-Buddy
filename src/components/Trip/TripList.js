import React from 'react'
import TripCard from '../TripCard/TripCard'
import { Container, Heading } from './TripList.styled'

const TripList = ({ title, trips }) => {
  return (
    <Container>
      <Heading>{title}</Heading>
      {trips?.map((trip) => (
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
    </Container>
  )
}

export default TripList

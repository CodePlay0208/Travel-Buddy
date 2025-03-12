import React from 'react'
import { Button } from '../../styles/Global'
import styled from 'styled-components'
import { images } from '../../assets'

const NotificationEvents = {
  USER_REQUEST_TO_JOIN: 'userRequestToJoinTrip',
  ADD_MEMBER_TO_TRIP: 'addMemberToTrip',
  REMOVE_MEMBER_FROM_TRIP_AS_HOST: 'removeMemberFromTripAsHost',
  LEAVE_TRIP: 'leaveTrip',
}

const Container = styled.div`
  width: 100%;
`

const Content = styled.div`
  width: 100%;
`

const Heading = styled.div`
  font-weight: 700;
  font-size: clamp(0.94rem, 1rem, 1.76rem);
  line-height: clamp(1.23rem, 1.3rem, 2.3rem);
  letter-spacing: 0%;
`

const Para = styled.div`
  font-weight: 600;
  font-size: clamp(0.7rem, 0.8rem, 1.3rem);
  line-height: clamp(0.92rem, 1rem, 1.7rem);
  letter-spacing: 0%;
`

const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 5%;
`

const ActionButton = styled(Button)`
  font-size: clamp(1rem, 1rem, 1.8rem);
  background: ${(props) => props.background && props.background};
  padding: 2.5% 8%;
`

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5%;
  justify-content: space-evenly;
`

const Element = styled.span`
  font-size: clamp(0.75rem, 0.9rem, 1.5rem);
  line-height: clamp(1rem, 1.2rem, 1.7rem);
  font-weight: 600;
  width: ${(props) => props.width};
  display: flex;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    background: #f1f1f1;
  }
`

const ProfilePicture = styled.img`
  width: 4rem;
  border-radius: 50%;
`

const getNotificationMessage = (notification) => {
  switch (notification.event) {
    case NotificationEvents.USER_REQUEST_TO_JOIN:
      return 'wants to join your trip'
    case NotificationEvents.ADD_MEMBER_TO_TRIP:
      return 'added you to the trip'
    case NotificationEvents.REMOVE_MEMBER_FROM_TRIP_AS_HOST:
      return 'was removed from the trip'
    case NotificationEvents.LEAVE_TRIP:
      return 'left the trip'
    default:
      return 'sent you a notification'
  }
}

const getHeadingMessage = (notification) => {
  switch (notification.event) {
    case NotificationEvents.USER_REQUEST_TO_JOIN:
      return notification.username ? `${notification.username}'s Join Request` : 'Join request'
    case NotificationEvents.ADD_MEMBER_TO_TRIP:
      return notification.username ? `${notification.username} added You` : 'Member added'
    case NotificationEvents.REMOVE_MEMBER_FROM_TRIP_AS_HOST:
      return notification.username ? `${notification.username} removed You` : 'Member removed'
    case NotificationEvents.LEAVE_TRIP:
      return notification.username ? `${notification.username} left the Trip` : 'Member left'
    default:
      return 'Trip Notification'
  }
}

const NotificationItem = ({ notification, onConfirm, onDelete, onChatNow }) => {
  return (
    <Container>
      <DetailsContainer>
        <ProfilePicture src={notification.profilePic?.[0]?.preSignedUrl || images.defaultProfileImg} alt="Profile" />
        <Content>
          <Heading>{getHeadingMessage(notification)}</Heading>
          <Para>{getNotificationMessage(notification)}</Para>
        </Content>
        <Element
          width={'10%'}
          onClick={(e) => {
            e.stopPropagation()
            onDelete(notification)
          }}
        >
          X
        </Element>
      </DetailsContainer>
      <ActionContainer>
        {notification.event === NotificationEvents.USER_REQUEST_TO_JOIN && (
          <ActionButton
            onClick={(e) => {
              e.stopPropagation()
              onConfirm(notification)
              onDelete(notification)
            }}
          >
            Accept
          </ActionButton>
        )}
        <ActionButton
          background="#E0E0E0"
          onClick={(e) => {
            e.stopPropagation()
            onChatNow(notification)
          }}
        >
          Chat Now
        </ActionButton>
      </ActionContainer>
    </Container>
  )
}

export default NotificationItem

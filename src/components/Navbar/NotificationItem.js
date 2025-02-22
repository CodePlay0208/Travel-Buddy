import React from 'react'
import { Button } from '../../styles/Global'
import styled from 'styled-components'
import { images } from '../../assets'

const Container = styled.div`
  width: 100%;
`

const Content = styled.div`
  width: 100%;
`

const Heading = styled.div`
  font-weight: 700;
  font-size: clamp(0.94vw, 1rem, 1.76vw);
  line-height: clamp(1.23vw, 1.3rem, 2.3vw);
  letter-spacing: 0%;
`

const Para = styled.div`
  font-weight: 600;
  font-size: clamp(0.7vw, 0.8rem, 1.3vw);
  line-height: clamp(0.92vw, 1rem, 1.7vw);
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
  font-size: clamp(1vw, 1rem, 1.8vw);
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
  font-size: clamp(0.75vw, 0.9rem, 1.5vw);
  line-height: clamp(1vw, 1.2rem, 1.7vw);
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
  width: 4vw;
  border-radius: 50%;
`

const NotificationItem = ({ notification, onConfirm, onDelete,onChatNow }) => {
  return (
    <Container>
      <DetailsContainer>
        <ProfilePicture src={notification.profilePic?.[0] || images.defaultProfileImg} alt="Profile" />
        <Content>
          <Heading>{notification.username ? `${notification.username}'s Request` : 'Trip Request'}</Heading>
          <Para>Wants to join your trip</Para>
        </Content>
        <Element width={'10%'} onClick={() => onDelete(notification)}>
          X
        </Element>
      </DetailsContainer>
      <ActionContainer>
        <ActionButton onClick={() => onConfirm(notification)}>Accept</ActionButton>
        <ActionButton background="#E0E0E0" onClick={() => onChatNow(notification)}>
          Chat Now
        </ActionButton>
      </ActionContainer>
    </Container>
  )
}

export default NotificationItem

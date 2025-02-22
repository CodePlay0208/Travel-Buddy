import React from 'react'
import { Button } from '../../styles/Global'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
`

const ActionButton = styled(Button)`
  font-size: 1vw;
  background: ${(props) => props.background && props.background};
  padding: 5% 15%;
`
const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
const NotificationItem = ({ notification, onConfirm, onDelete }) => {
  return (
    <Container>
      <p>{notification.message}</p>
      <ActionContainer>
        <ActionButton onClick={() => onConfirm(notification)}>Accept</ActionButton>
        <ActionButton background="#E0E0E0" onClick={() => onDelete(notification)}>
          Chat Now
        </ActionButton>
      </ActionContainer>
    </Container>
  )
}

export default NotificationItem

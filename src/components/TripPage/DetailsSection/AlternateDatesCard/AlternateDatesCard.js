import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Header, IconWrapper, Title, Content, DateRow, Column, Label, ValueWrapper, Value, Arrow } from './AlternateDatesCard.styled'
import { CalendarIcon, ArrowIcon } from './Icons'

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
}

const AlternateDatesCard = ({ relatedTrips = [], onClose }) => {
  const navigate = useNavigate()
  const handleDateRowClick = (tripInstanceId) => {
    if (onClose) onClose()
    navigate(`/trip/${tripInstanceId}`)
  }
  return (
    <Card>
      <Header>
        <IconWrapper>
          <CalendarIcon width={28} height={28} />
        </IconWrapper>
        <Title>Alternate Trip Dates</Title>
      </Header>
      <Content>
        {relatedTrips.map((trip, idx) => (
          <DateRow key={trip.tripInstanceId} onClick={() => handleDateRowClick(trip.tripInstanceId)} style={{ cursor: 'pointer' }}>
            <Column>
              <Label>Start date</Label>
              <ValueWrapper>
                <Value>{formatDate(trip.startDate)}</Value>
              </ValueWrapper>
            </Column>
            <Arrow>
              <ArrowIcon width={25} height={24} />
            </Arrow>
            <Column>
              <Label>End date</Label>
              <ValueWrapper>
                <Value>{formatDate(trip.endDate)}</Value>
              </ValueWrapper>
            </Column>
          </DateRow>
        ))}
      </Content>
    </Card>
  )
}

export default AlternateDatesCard

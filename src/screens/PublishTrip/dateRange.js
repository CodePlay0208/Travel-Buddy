import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2%;
  background: #ddf2eb;
  border-radius: 10px;

  @media (max-width: 440px) {
    padding: 4% 2%;
  }
`

const Element = styled.span`
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 600;
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    font-size: 2.5rem;
    line-height: 3rem;
  }
`

const DateRange = ({ startDate, totalDays, onDelete }) => {
  const [day, month, year] = startDate.split('-').map(Number)
  const start = new Date(year, month - 1, day)

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const dayOf = (date) => dayNames[date.getDay()]
  const formatDate = (date) => {
    const d = String(date.getDate()).padStart(2, '0')
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const m = monthNames[date.getMonth()]
    const y = date.getFullYear()
    return `${d} ${m} ${y}`
  }

  const duration = totalDays ? parseInt(totalDays, 10) : 0

  const end = duration >= 0 ? new Date(start) : null
  if (end) {
    end.setDate(start.getDate() + duration)
  }

  return (
    <Container>
      <Element width={'20%'}>{dayOf(start)}</Element>
      <Element width={'35%'}>{formatDate(start)}</Element>
      <Element width={'35%'}>{end ? formatDate(end) : ''}</Element>
      <Element width={'10%'} onClick={onDelete}>
        X
      </Element>
    </Container>
  )
}

DateRange.displayName = 'DateRange'

export default DateRange

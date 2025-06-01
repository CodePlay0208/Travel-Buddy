import React, { useRef, useState, useLayoutEffect } from 'react'
import { Container, PreviewTitle, DayTitle, Content, List, ListItem } from './TripDetailPreview.styled'

const TripDetailPreview = ({ tripData, margin }) => {
  const { startDate = ['a', 'b'], endDate = ['a', 'b'] } = tripData || {}

  const containerRef = useRef(null)
  const [height, setHeight] = useState(0)

  useLayoutEffect(() => {
    if (!containerRef.current) return
    const parent = containerRef.current.parentElement
    if (!parent) return

    const updateHeight = () => {
      setHeight(parent.clientHeight * 0.85)
    }

    updateHeight()

    const ro = new ResizeObserver(updateHeight)
    ro.observe(parent)
    return () => ro.disconnect()
  }, [])

  return (
    <Container ref={containerRef} $height={height} margin={margin}>
      <DayTitle>{tripData?.dayTitle}</DayTitle>
      <Content>
        <List>
          {startDate?.map((text, idx) => (
            <ListItem key={idx}>{text}</ListItem>
          ))}
        </List>
      </Content>
    </Container>
  )
}

TripDetailPreview.displayName = 'TripDetailPreview'

export default TripDetailPreview

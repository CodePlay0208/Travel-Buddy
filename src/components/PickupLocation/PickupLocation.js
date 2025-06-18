import React, { useRef, useEffect, useState } from 'react'
import {
  ICON_SIZE,
  DEFAULT_GAP,
  Container,
  Title,
  ScrollWrapper,
  RowWrapper,
  BackgroundLine,
  ItemsRow,
  Item,
  IconWrapper,
  Name,
  Subtitle,
} from './PickupLocation.styled'
import CustomLocationIcon from './CustomLocationIcon'

const PickupLocation = ({ title, locationsClubbed = [] }) => {
  let locations = locationsClubbed
    .map((loc) => loc.split(',').map((part) => part.trim()))
    .map((parts) => ({
      name: parts[0] || '',
      subtitle: parts[1] || '',
    }))

    // locations = [...locations,...locations]
    // locations = [...locations,...locations]

  const rowRef = useRef(null)
  const iconRefs = useRef([])
  const [lineParams, setLineParams] = useState({ left: 0, width: 0 })
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const measureLine = () => {
    if (!rowRef.current || !iconRefs.current || iconRefs.current.length === 0) {
      setLineParams((prev) => {
        if (prev.left === 0 && prev.width === 0) return prev
        return { left: 0, width: 0 }
      })
      return
    }
    const wrapperRect = rowRef.current.getBoundingClientRect()
    const firstIcon = iconRefs.current[0]
    const lastIcon = iconRefs.current[iconRefs.current.length - 1]
    if (firstIcon && lastIcon) {
      const firstRect = firstIcon.getBoundingClientRect()
      const lastRect = lastIcon.getBoundingClientRect()
      const firstCenter = firstRect.left - wrapperRect.left + ICON_SIZE / 2
      const lastCenter = lastRect.left - wrapperRect.left + ICON_SIZE / 2
      const newLeft = firstCenter
      const newWidth = Math.max(0, lastCenter - firstCenter)
      setLineParams((prev) => {
        if (prev.left === newLeft && prev.width === newWidth) {
          return prev
        }
        return { left: newLeft, width: newWidth }
      })
    }
  }

  useEffect(() => {
    measureLine()
    window.addEventListener('resize', measureLine)

    let resizeObserver = null
    const observedNode = rowRef.current
    if (observedNode && window.ResizeObserver) {
      resizeObserver = new ResizeObserver(() => {
        measureLine()
      })
      resizeObserver.observe(observedNode)
    }
    return () => {
      window.removeEventListener('resize', measureLine)
      if (resizeObserver && observedNode) {
        resizeObserver.unobserve(observedNode)
      }
    }
  }, [locationsClubbed])

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!Array.isArray(locations) || locations.length === 0) {
    return null
  }
  const count = locations.length

  // Determine threshold based on window width
  const threshold = windowWidth < 440 ? 3 : 5

  iconRefs.current = []
  const items = locations.map((loc, idx) => {
    const isLast = idx === locations.length - 1
    let gap = 0
    if (count > threshold && !isLast) {
       gap = DEFAULT_GAP
      
    }
    return (
      <Item key={idx} count={count} gap={gap} mobGap={(gap*1.5)} aria-label={`Location ${loc.name}${loc.subtitle ? `, ${loc.subtitle}` : ''}`}>
        <IconWrapper
          ref={(el) => {
            iconRefs.current[idx] = el
          }}
          aria-hidden="true"
        >
          <CustomLocationIcon width={ICON_SIZE} height={ICON_SIZE} />
        </IconWrapper>
        <Name>{loc.name}</Name>
        <Subtitle>{loc.subtitle}</Subtitle>
      </Item>
    )
  })

  if (count > threshold) {
    return (
      <Container>
        <Title>{title}</Title>
        <ScrollWrapper>
          <RowWrapper ref={rowRef} count={count}>
            {count >= 2 && <BackgroundLine left={lineParams.left} width={lineParams.width} />}
            <ItemsRow count={count}>{items}</ItemsRow>
          </RowWrapper>
        </ScrollWrapper>
      </Container>
    )
  }

  return (
    <Container>
      <Title>{title}</Title>
      <RowWrapper ref={rowRef} count={count}>
        {count >= 2 && <BackgroundLine left={lineParams.left} width={lineParams.width} />}
        <ItemsRow count={count}>{items}</ItemsRow>
      </RowWrapper>
    </Container>
  )
}

export default PickupLocation

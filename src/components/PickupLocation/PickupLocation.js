// PickupLocation.jsx
import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import CustomLocationIcon from './CustomLocationIcon' // your custom icon component

/** Constants **/
const ICON_SIZE = 28 // px
const DEFAULT_GAP = 40 // px gap between items when scrollable

/** Styled-components **/

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 24px;
  background: #ffffff;
  box-shadow: 0px 1px 11px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  width: 100%;
`

const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  color: #009965;
  margin: 0;
  white-space: nowrap;
`

const ScrollWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  /* Optional scrollbar styling */
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }
`

const RowWrapper = styled.div`
  position: relative;
  /* width 100% if <=5 so items spread evenly; auto if >5 to allow overflow */
  width: ${({ count }) => (count <= 5 ? '100%' : 'auto')};
  /* Use padding-top to give room above the line for the icon */
  padding-top: ${ICON_SIZE}px;
  padding-bottom: 32px; /* room for name/subtitle */
`

const BackgroundLine = styled.div`
  position: absolute;
  top: ${ICON_SIZE / 2}px; /* line runs through the vertical center of icon */
  left: ${({ left }) => `${left}px`};
  width: ${({ width }) => `${width}px`};
  height: 1px;
  background-color: rgba(5, 5, 5, 0.4);
  z-index: 1;
`

const ItemsRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: ${({ count }) => (count <= 5 ? 'space-between' : 'flex-start')};
  width: ${({ count }) => (count <= 5 ? '100%' : 'auto')};
  position: relative;
  z-index: 2; /* above the BackgroundLine */
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: ${({ count }) => (count <= 5 ? '1 1 0' : '0 0 auto')};
  white-space: nowrap;
`

const IconWrapper = styled.div`
  width: ${ICON_SIZE}px;
  height: ${ICON_SIZE}px;
  background: #ffffff; /* covers the line behind if overlapping */
  color: #8dd3bb;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Name = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #050505;
  text-align: center;
  margin-top: 8px;
`

const Subtitle = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #050505;
  text-align: center;
  margin-top: 4px;
`

/**
 * PickupLocation component
 * Props:
 *  - title: string
 *  - locationsClubbed: array of strings like "Name, Subtitle"
 *    (you map these into { name, subtitle } internally).
 */
const PickupLocation = ({ title, locationsClubbed = [] }) => {
  // Parse locationsClubbed into objects { name, subtitle }
  const locations = locationsClubbed
    .map((loc) => loc.split(',').map((part) => part.trim()))
    .map((parts) => ({
      name: parts[0] || '',
      subtitle: parts[1] || '',
    }))

  // Hooks at top (unconditional)
  const rowRef = useRef(null)
  const iconRefs = useRef([])
  const [lineParams, setLineParams] = useState({ left: 0, width: 0 })

  // Measure function: only update state if values actually change
  const measureLine = () => {
    if (!rowRef.current || !iconRefs.current || iconRefs.current.length === 0) {
      // No icons: clear line if needed
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
          return prev // no change
        }
        return { left: newLeft, width: newWidth }
      })
    }
  }

  // useEffect: measure on mount, when locations change, and on resize/ResizeObserver
  useEffect(() => {
    measureLine()
    window.addEventListener('resize', measureLine)
    // Optional: ResizeObserver for rowRef
    let resizeObserver = null
    if (rowRef.current && window.ResizeObserver) {
      resizeObserver = new ResizeObserver(() => {
        measureLine()
      })
      resizeObserver.observe(rowRef.current)
    }
    return () => {
      window.removeEventListener('resize', measureLine)
      if (resizeObserver && rowRef.current) {
        resizeObserver.unobserve(rowRef.current)
      }
    }
  }, [locationsClubbed]) // re-run when locations array changes

  // Early return if no locations
  if (!Array.isArray(locations) || locations.length === 0) {
    return null
  }
  const count = locations.length

  // Build items, resetting iconRefs
  iconRefs.current = []
  const items = locations.map((loc, idx) => {
    const isLast = idx === locations.length - 1
    let style = undefined
    if (count > 5 && !isLast) {
      // If you had connectorWidth in loc, use it; otherwise DEFAULT_GAP
      const gap = typeof loc.connectorWidth === 'number' ? loc.connectorWidth : DEFAULT_GAP
      style = { marginRight: `${gap}px` }
    }
    return (
      <Item key={idx} count={count} style={style} aria-label={`Location ${loc.name}${loc.subtitle ? `, ${loc.subtitle}` : ''}`}>
        <IconWrapper
          ref={(el) => {
            iconRefs.current[idx] = el
          }}
          aria-hidden="true"
        >
          {/* Use your custom icon; pass correct width/height if needed */}
          <CustomLocationIcon width={ICON_SIZE} height={ICON_SIZE} />
        </IconWrapper>
        <Name>{loc.name}</Name>
        <Subtitle>{loc.subtitle}</Subtitle>
      </Item>
    )
  })

  // Render scrollable or non-scrollable
  if (count > 5) {
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
  // <=5: spread evenly
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

import React, { useRef, useState, useLayoutEffect } from 'react'
import IncludeIcon from './IncludeIcon.js'
import ExcludeIcon from './ExcludeIcon.js'
import { Container, PreviewTitle, DayTitle, Content, List, ListItem } from './IncExcPreview.styled.js'

const IncExcPreview = ({ tripData, margin }) => {
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

  const isExclude = tripData?.inc_excTitle?.toLowerCase().includes('exclusions')

  return (
    <Container ref={containerRef} $height={height} margin={margin}>
      <DayTitle isExclude = {isExclude}>{tripData?.inc_excTitle}</DayTitle>
      <Content>
        <List>
          {tripData?.inc_excDescription?.map((text, idx) => (
            <ListItem key={idx} className="flex items-start">
              {isExclude ? <ExcludeIcon className="mr-2 mt-1 flex-shrink-0" /> : <IncludeIcon className="mr-2 mt-1 flex-shrink-0" />}
              <span>{text}</span>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  )
}

IncExcPreview.displayName = 'ItineraryPreview'
export default IncExcPreview

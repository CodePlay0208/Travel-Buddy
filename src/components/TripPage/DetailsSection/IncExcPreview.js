import React, { useRef, useState, useLayoutEffect, memo } from 'react'
import { Container, PreviewTitle, DayTitle, Content, List, ListItem, ContainerWrapper } from './IncExcPreview.styled.js'
import ExcludeIcon from '../../../screens/PublishTrip/ExcludeIcon.js'
import IncludeIcon from '../../../screens/PublishTrip/IncludeIcon.js'
import { connect } from 'react-redux'
const mapStateToProps = (state) => ({
  trip: state.tripReducer.trip,
})
const IncExcPreview = ({ trip, margin }) => {
  const containerRef = useRef(null)
  const [height, setHeight] = useState(0)
  const tripData = trip?.inc_exc || []

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
    <>
      {Array.isArray(tripData) && tripData.length > 0 ? (
        <ContainerWrapper>
          {tripData.map((section, idx) => {
            const isExclude = section?.inc_excTitle?.toLowerCase().includes('exclusion')
            return (
              <Container key={idx} ref={idx === 0 ? containerRef : null} $height={height} margin={margin}>
                <DayTitle isExclude={isExclude}>{section?.inc_excTitle} :</DayTitle>
                <Content>
                  <List>
                    {section?.inc_excDescription?.map((text, i) => (
                      <ListItem key={i} className="flex items-start">
                        {isExclude ? (
                          <ExcludeIcon className="mr-2 mt-1 flex-shrink-0" />
                        ) : (
                          <IncludeIcon className="mr-2 mt-1 flex-shrink-0" />
                        )}
                        <span>{text}</span>
                      </ListItem>
                    ))}
                  </List>
                </Content>
              </Container>
            )
          })}
        </ContainerWrapper>
      ) : (
        <div style={{ fontSize: '1.5rem', padding: '2rem', textAlign: 'center', color: '#888' }}>No Inclusions and Exclusions Added</div>
      )}
    </>
  )
}

IncExcPreview.displayName = 'IncExcPreview'
export default connect(mapStateToProps, null)(memo(IncExcPreview))

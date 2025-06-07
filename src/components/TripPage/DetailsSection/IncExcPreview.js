import React, { useRef, useState, useLayoutEffect, useEffect, memo } from 'react'
import {
  Container,
  DayTitle,
  Content,
  List,
  ListItem,
  ContainerWrapper,
  OuterWrapper,
  TabButtonRow,
  TabButton,
} from './IncExcPreview.styled.js'
import ExcludeIcon from '../../../screens/PublishTrip/ExcludeIcon.js'
import IncludeIcon from '../../../screens/PublishTrip/IncludeIcon.js'
import { connect } from 'react-redux'
import { Title } from './DetailsSection.styled.js'
import { IncDayTab } from '../../../screens/PublishTrip/PublishTrip.styled.js'
const mapStateToProps = (state) => ({
  trip: state.tripReducer.trip,
})
const MOBILE_WIDTH = 440

const IncExcPreview = ({ trip, margin }) => {
  const containerRef = useRef(null)
  const [height, setHeight] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_WIDTH)
  const [selectedTab, setSelectedTab] = useState('inclusion')
  const tripData = trip?.inc_exc || []
  const [curIncExcIdx, setCurIncExcIdx] = useState(0)

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_WIDTH)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Find inclusion and exclusion sections
  const inclusionSection = tripData.find((section) => !section?.inc_excTitle?.toLowerCase().includes('exclusion'))
  const exclusionSection = tripData.find((section) => section?.inc_excTitle?.toLowerCase().includes('exclusion'))

  return (
    <OuterWrapper>
      {isMobile ? (
        <TabButtonRow>
          <IncDayTab
            fontSize="0.8rem"
            onClick={() => {
              setCurIncExcIdx(0)
            }}
            key={0}
            className={0 === curIncExcIdx ? 'active' : ''}
          >
            Inclusions
          </IncDayTab>

          <IncDayTab
            fontSize="0.8rem"
            onClick={() => {
              setCurIncExcIdx(1)
            }}
            key={1}
            className={1 === curIncExcIdx ? 'active' : ''}
          >
            Exclusions
          </IncDayTab>
        </TabButtonRow>
      ) : (
        <Title>Inclusions & Exclusions</Title>
      )}
      {Array.isArray(tripData) && tripData.length > 0 ? (
        isMobile ? (
          <ContainerWrapper>
            {selectedTab === 0 && inclusionSection && (
              <Container ref={containerRef} $height={height} margin={margin}>
                <DayTitle isExclude={false}>{inclusionSection?.inc_excTitle} :</DayTitle>
                <Content>
                  <List>
                    {inclusionSection?.inc_excDescription?.map((text, i) => (
                      <ListItem key={i} className="flex items-start">
                        <IncludeIcon className="mr-2 mt-1 flex-shrink-0" />
                        <span>{text}</span>
                      </ListItem>
                    ))}
                  </List>
                </Content>
              </Container>
            )}
            {selectedTab === 1 && exclusionSection && (
              <Container ref={containerRef} $height={height} margin={margin}>
                <DayTitle isExclude={true}>{exclusionSection?.inc_excTitle} :</DayTitle>
                <Content>
                  <List>
                    {exclusionSection?.inc_excDescription?.map((text, i) => (
                      <ListItem key={i} className="flex items-start">
                        <ExcludeIcon className="mr-2 mt-1 flex-shrink-0" />
                        <span>{text}</span>
                      </ListItem>
                    ))}
                  </List>
                </Content>
              </Container>
            )}
          </ContainerWrapper>
        ) : (
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
        )
      ) : (
        <div style={{ fontSize: '1.5rem', padding: '2rem', textAlign: 'center', color: '#888' }}>No Inclusions and Exclusions Added</div>
      )}
    </OuterWrapper>
  )
}

IncExcPreview.displayName = 'IncExcPreview'
export default connect(mapStateToProps, null)(memo(IncExcPreview))

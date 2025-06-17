import React, { useRef, useState, useLayoutEffect } from 'react'
import {
  Container,
  SectionTitle,
  Timeline,
  TimelineItem,
  BulletWrapper,
  BulletSvg,
  LocationBox,
  LocationName,
  LocationSub,
  CloseButton,
} from './TripDetailPreview.styled'
import ClearIcon from '../../assets/svg/clear'

const TripDetailPreview = ({ tripData = {}, margin }) => {
  const { startLocation = [], destination = [] } = tripData

  const containerRef = useRef(null)
  const [height, setHeight] = useState(0)

  useLayoutEffect(() => {
    if (!containerRef.current) return
    const parent = containerRef.current.parentElement
    if (!parent) return

    const updateHeight = () => {
      setHeight(parent.clientHeight * 1)
    }

    updateHeight()
    const ro = new ResizeObserver(updateHeight)
    ro.observe(parent)
    return () => ro.disconnect()
  }, [])

  const handleRemove = (section, idx) => {
    if (section === 'start') {
      startLocation.splice(idx, 1)
    } else if (section === 'end') {
      destination.splice(idx, 1)
    }
    setHeight(height + 1)
  }

  return (
    <Container ref={containerRef} $height={height} margin={margin}>
      {!startLocation.length && !destination.length ? (
        <>
          <Timeline>
            <TimelineItem className='start'>
              <BulletWrapper>
                <BulletSvg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="0.629561"
                    y="0.629561"
                    width="16.7409"
                    height="16.7409"
                    rx="8.37044"
                    stroke="#8DD3BB"
                    strokeOpacity="0.7"
                    strokeWidth="1.25912"
                  />
                  <rect x="3.7793" y="3.7793" width="10.4433" height="10.4433" rx="5.22167" fill="#8DD3BB" />
                </BulletSvg>
                {<div className="connectorLenthy" />}
              </BulletWrapper>
                
              <SectionTitle>Pick up Locations</SectionTitle>
              </TimelineItem>
              <TimelineItem className='start'>
              <BulletWrapper>
                <BulletSvg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="0.629561"
                    y="0.629561"
                    width="16.7409"
                    height="16.7409"
                    rx="8.37044"
                    stroke="#8DD3BB"
                    strokeOpacity="0.7"
                    strokeWidth="1.25912"
                  />
                  <rect x="3.7793" y="3.7793" width="10.4433" height="10.4433" rx="5.22167" fill="#8DD3BB" />
                </BulletSvg>
              </BulletWrapper>
              <SectionTitle>Destinations</SectionTitle>
            </TimelineItem>
          </Timeline>
        </>
      ) : (
        <>
          <SectionTitle>Pick up Locations</SectionTitle>

          <Timeline>
            {startLocation?.map((loc, idx) => {
              const isLast = idx === startLocation.length - 1
              return (
                <TimelineItem key={idx}>
                  <BulletWrapper>
                    <BulletSvg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect
                        x="0.629561"
                        y="0.629561"
                        width="16.7409"
                        height="16.7409"
                        rx="8.37044"
                        stroke="#8DD3BB"
                        strokeOpacity="0.7"
                        strokeWidth="1.25912"
                      />
                      <rect x="3.7793" y="3.7793" width="10.4433" height="10.4433" rx="5.22167" fill="#8DD3BB" />
                    </BulletSvg>
                    {!isLast && <div className="connector" />}
                  </BulletWrapper>
                  <LocationBox>
                    <div>
                      <LocationName>{loc.city}</LocationName>
                      <LocationSub>{loc.state}</LocationSub>
                    </div>
                    <ClearIcon onClick={() => handleRemove('start', idx)}>✕</ClearIcon>
                  </LocationBox>
                </TimelineItem>
              )
            })}
          </Timeline>
          <SectionTitle>Destinations</SectionTitle>
          <Timeline>
            {destination.map((loc, idx) => {
              const isLast = idx === destination.length - 1
              return (
                <TimelineItem key={idx}>
                  <BulletWrapper>
                    <BulletSvg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect
                        x="0.629561"
                        y="0.629561"
                        width="16.7409"
                        height="16.7409"
                        rx="8.37044"
                        stroke="#8DD3BB"
                        strokeOpacity="0.7"
                        strokeWidth="1.25912"
                      />
                      <rect x="3.7793" y="3.7793" width="10.4433" height="10.4433" rx="5.22167" fill="#8DD3BB" />
                    </BulletSvg>
                    {!isLast && <div className="connector" />}
                  </BulletWrapper>
                  <LocationBox>
                    <div>
                      <LocationName>{loc.city}</LocationName>
                      <LocationSub>{loc.state}</LocationSub>
                    </div>
                    <ClearIcon onClick={() => handleRemove('end', idx)}>✕</ClearIcon>
                  </LocationBox>
                </TimelineItem>
              )
            })}
          </Timeline>
        </>
      )}
    </Container>
  )
}

TripDetailPreview.displayName = 'TripDetailPreview'
export default TripDetailPreview

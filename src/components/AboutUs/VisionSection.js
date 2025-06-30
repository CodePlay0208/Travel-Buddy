import React, { useRef } from 'react'
import styled, { keyframes } from 'styled-components'

// Keyframes for expand and collapse animations
const expandAnim = keyframes`
  from { max-height: 0; opacity: 0; }
  to { max-height: 1000px; opacity: 1; }
`

const collapseAnim = keyframes`
  from { max-height: 1000px; opacity: 1; }
  to { max-height: 0; opacity: 0; }
`

const Frame = styled.div`
  width: 100%;
  display: flex;
  gap: 60px;
  flex-direction: column;

  @media (max-width: 440px) {
    gap: 40px;
    padding: 0;
    height: 100%;
    margin: 40px 0;
  }
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background: black;
  overflow: hidden;

  @media (max-width: 440px) {
    height: 110px;
    gap: 8px;
  }
`

const SideFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
  justify-content: center;

  @media (max-width: 440px) {
    gap: 16px;
    padding: 0 16px;
  }
`

const WaitingMessageBig = styled.h1`
  z-index: 2;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 4.25rem;
  color: #8dd3bb;
  margin: 0;
  line-height: 120%;

  @media (max-width: 440px) {
    font-size: 30px;
  }
`

const WaitingMessageSmall = styled.h2`
  font-family: Montserrat;
  font-weight: 700;
  font-size: 2rem;
  color: white;
  margin: 0;

  @media (max-width: 440px) {
    font-size: 12px;
  }
`

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: ${(props) => props.width || '100%'};
  cursor: pointer;

  @media (max-width: 440px) {
    width: 100%;
    text-align:justify;
    gap: 16px;
  }
`

const Question = styled.h1`
  font-family: Montserrat;
  font-size: 3.25rem;
  font-weight: 700;
  line-height: 120%;
  text-align: center;
  margin: 0;
  padding: 8px 24px;
  border-bottom: ${(props) => (props.expanded ? 'none' : '2px solid #8dd3bb')};
  background-color: ${(props) => (props.expanded ? 'black' : 'white')};
  color: ${(props) => (props.expanded ? '#8dd3bb' : 'black')};

  @media (max-width: 440px) {
    font-size: 20px;
    padding: 4px 10px;
  }
`

const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  overflow: hidden;
  animation: ${(props) => (props.expanded ? expandAnim : collapseAnim)} 3s ease forwards;

  @media (max-width: 440px) {
    gap: 3px;
  }
`

const Description = styled.p`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 1.4rem;
  margin: 0;
  line-height: 150%;
  text-align: center;

  @media (max-width: 440px) {
    font-size: 16px;
    text-align: justify;
  }
`

const VerticalDivider = styled.div`
  height: 60px;
  border-right: 2px solid #000;

  @media (max-width: 440px) {
    height: 24px;
    border-right: 1px solid #000;
  }
`

const VisionSection = () => {
  const [expanded, setExpanded] = React.useState({
    values: false,
    purpose: false,
    vision: false,
    mission: false,
    position: false,
  })
  const hoverTimeouts = useRef({})

  const handleMouseEnter = (section) => {
    if (window.innerWidth <= 440) return;
    clearTimeout(hoverTimeouts.current[section])
    setExpanded((prev) => ({ ...prev, [section]: true }))
  }

  const handleMouseLeave = (section) => {
    if (window.innerWidth <= 440) return;
    hoverTimeouts.current[section] = setTimeout(() => {
      setExpanded((prev) => ({ ...prev, [section]: false }))
    }, 200)
  }

  const handleToggle = (section) => {
    clearTimeout(hoverTimeouts.current[section])
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  return (
    <Frame>
      <ImageWrapper>
        <WaitingMessageBig>“What We Believe”</WaitingMessageBig>
        <WaitingMessageSmall>Discover the principles that shape every Travmigoz journey.</WaitingMessageSmall>
      </ImageWrapper>
      <SideFrame>
        {/* Values */}
        <TextBlock onMouseEnter={() => handleMouseEnter('values')} onMouseLeave={() => handleMouseLeave('values')}>
          <Question expanded={expanded.values} onClick={() => handleToggle('values')}>
            Our Values
          </Question>
          <DescContainer expanded={expanded.values} onClick={() => handleToggle('values')}>
            <Description>Courage</Description>
            <Description>Creativity</Description>
            <Description>Ownership</Description>
            <Description>Leadership</Description>
            <Description>Customer Commitment</Description>
          </DescContainer>
          <VerticalDivider onClick={() => handleToggle('values')} />
        </TextBlock>

        {/* Purpose */}
        <TextBlock width="30%" onMouseEnter={() => handleMouseEnter('purpose')} onMouseLeave={() => handleMouseLeave('purpose')}>
          <Question expanded={expanded.purpose} onClick={() => handleToggle('purpose')}>
            Our Purpose
          </Question>
          <DescContainer expanded={expanded.purpose} onClick={() => handleToggle('purpose')}>
            <Description>
              We're all about building genuine human connections through the joy of shared travel experiences, all while making a positive
              difference for both people and our planet.
            </Description>
          </DescContainer>
          <VerticalDivider onClick={() => handleToggle('purpose')} />
        </TextBlock>

        {/* Vision */}
        <TextBlock width="48%" onMouseEnter={() => handleMouseEnter('vision')} onMouseLeave={() => handleMouseLeave('vision')}>
          <Question expanded={expanded.vision} onClick={() => handleToggle('vision')}>
            Our Vision
          </Question>
          <DescContainer expanded={expanded.vision} onClick={() => handleToggle('vision')}>
            <Description>
              Our goal is to become the most trusted platform for community travel, where solo adventurers, groups, and travel agents come
              together to create and share unforgettable experiences that nourish the soul and respect our planet.
            </Description>
          </DescContainer>
          <VerticalDivider onClick={() => handleToggle('vision')} />
        </TextBlock>

        {/* Mission */}
        <TextBlock width="65%" onMouseEnter={() => handleMouseEnter('mission')} onMouseLeave={() => handleMouseLeave('mission')}>
          <Question expanded={expanded.mission} onClick={() => handleToggle('mission')}>
            Our Mission
          </Question>
          <DescContainer expanded={expanded.mission} onClick={() => handleToggle('mission')}>
            <Description>
              We’re all about empowering travelers and travel agents to share, explore, and embark on trips that resonate with their
              interests, favorite destinations, and unique itineraries. By creating communities centered around travel, we nurture a sense
              of belonging. With our ‘Routes & Roots’ initiative, we’re also doing our part for the planet by planting trees and supporting
              mental well-being projects — ensuring that every journey is not just a trip, but a meaningful stride toward sustainability and
              deeper human connections.
            </Description>
          </DescContainer>
          <VerticalDivider onClick={() => handleToggle('mission')} />
        </TextBlock>

        {/* Positioning */}
        <TextBlock width="82%" onMouseEnter={() => handleMouseEnter('position')} onMouseLeave={() => handleMouseLeave('position')}>
          <Question expanded={expanded.position} onClick={() => handleToggle('position')}>
            Our Positioning
          </Question>
          <DescContainer expanded={expanded.position} onClick={() => handleToggle('position')}>
            <Description>
              Travmigoz is all about community and connection in the travel world. It’s a platform designed to help you find and link up
              with fellow travelers and trip creators, whether you’re a solo adventurer or a travel agent. Together, we can share
              unforgettable experiences. We believe that travel should be more than just a checklist of sights; it should be a journey
              filled with genuine connections. That’s why we offer personalized itineraries and give back through our Routes & Roots
              initiative, which focuses on planting trees and supporting mental well-being in communities that need it most.
            </Description>
            <Description>
              <strong>
                In a travel landscape often dominated by transactions, Travmigoz champions meaningful journeys—where every trip not only
                connects hearts but also leaves a positive mark on the world.
              </strong>
            </Description>
          </DescContainer>
        </TextBlock>
      </SideFrame>
    </Frame>
  )
}

export default VisionSection

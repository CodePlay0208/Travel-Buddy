import React from 'react'
import styled from 'styled-components'

const Frame = styled.div`
  width: 100%;
  display: flex;
  gap: 60px;
  flex-direction: column;

  @media (max-width: 440px) {
    flex-direction: column;
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
  object-fit: contain;
  object-position: center;
  overflow: hidden;

  @media (max-width: 440px) {
    width: 100%;
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
  height: 100%;
  flex: none;
  justify-content: center;

  @media (max-width: 440px) {
    gap: 16px;
    width: 100%;
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
  letter-spacing: 0%;

  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 30px;
    line-height: 120%;
    letter-spacing: 0%;
  }
`

const WaitingMessageSmall = styled.h2`
  font-family: Montserrat;
  font-weight: 700;
  font-size: 2rem;
  z-index: 2;
  line-height: 120%;
  letter-spacing: 0%;

  color: white;

  margin: 0;

  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 12px;
    line-height: 120%;
    letter-spacing: 0%;
  }
`

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: ${(props) => props?.width ?? '100%'};
  flex: none;

  @media (max-width: 440px) {
    width: 100%;
    align-items: center;
    gap: 16px;
  }
`
const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  transition:
    max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  max-height: ${({ expanded }) => (expanded ? '500px' : '0')};
  opacity: ${({ expanded }) => (expanded ? 1 : 0)};

  @media (max-width: 440px) {
    gap: 3px;
  }
`

const Question = styled.h1`
  font-family: Montserrat;
  font-size: 3.25rem;
  font-weight: 700;
  line-height: 120%;
  text-align: center;

  cursor: pointer;
  padding-top: 8px;
  padding-right: 24px;
  padding-bottom: 8px;
  padding-left: 24px;

  letter-spacing: 0%;
  margin: 0;
  background-color: ${({ expanded }) => (expanded ? 'black' : 'white')};
  color: ${({ expanded }) => (expanded ? '#8dd3bb' : 'black')};

  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: 0%;
    text-align: center;
    border-bottom: 2px solid #8dd3bb;

    padding: 4px 10px;
  }
`

const Description = styled.p`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 1.4rem;
  margin: 0;
  line-height: 150%;
  letter-spacing: 0%;
  text-align: center;

  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: justify;
  }
`

const VerticalDivider = styled.div`
  height: 60px;
  border-right: 2px solid #000000;

  @media (max-width: 440px) {
    height: 24px;
    border-right: 1px solid #000000;
  }
`
const VisionSection = () => {
  const [expanded, setExpanded] = React.useState({
    values: false,
    vision: false,
    mission: false,
    purpose: false,
    position: false,
  })

  const handleToggle = (section) => {
    setExpanded((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <Frame>
      <ImageWrapper>
        <WaitingMessageBig>“What We Believe”</WaitingMessageBig>
        <WaitingMessageSmall>Discover the principles that shape every Travmigoz journey.</WaitingMessageSmall>
      </ImageWrapper>
      <SideFrame>
        <TextBlock>
          <Question
            onClick={() => handleToggle('values')}
            // onMouseEnter={() => setExpanded((prev) => ({ ...prev, values: true }))}
            // onMouseLeave={() => setExpanded((prev) => ({ ...prev, values: false }))}
            expanded={expanded.values}
          >
            Our Values
          </Question>
          {expanded.values && (
            <DescContainer expanded={expanded.values} onClick={() => handleToggle('values')}>
              <Description>Courage</Description>
              <Description>Creativity</Description>
              <Description>Ownership</Description>
              <Description>Leadership</Description>
              <Description>Customer Commitment</Description>
            </DescContainer>
          )}
          <VerticalDivider onClick={() => handleToggle('values')} />
        </TextBlock>
        <TextBlock width="30%">
          <Question
            onClick={() => handleToggle('purpose')}
            // onMouseEnter={() => setExpanded((prev) => ({ ...prev, purpose: true }))}
            // onMouseLeave={() => setExpanded((prev) => ({ ...prev, purpose: false }))}
            expanded={expanded.purpose}
          >
            Our Purpose
          </Question>
          {expanded.purpose && (
            <DescContainer expanded={expanded.purpose} onClick={() => handleToggle('purpose')}>
              <Description>
                We're all about building genuine human connections through the joy of shared travel experiences, all while making a positive
                difference for both people and our planet.
              </Description>
            </DescContainer>
          )}
          <VerticalDivider onClick={() => handleToggle('purpose')} />
        </TextBlock>
        <TextBlock width="48%">
          <Question
            onClick={() => handleToggle('vision')}
            // onMouseEnter={() => setExpanded((prev) => ({ ...prev, vision: true }))}
            // onMouseLeave={() => setExpanded((prev) => ({ ...prev, vision: false }))}
            expanded={expanded.vision}
          >
            Our Vision
          </Question>
          {expanded.vision && (
            <DescContainer expanded={expanded.vision} onClick={() => handleToggle('vision')}>
              <Description>
                Our goal is to become the most trusted platform for community travel, where solo adventurers, groups, and travel agents come
                together to create and share unforgettable experiences that nourish the soul and respect our planet.
              </Description>
            </DescContainer>
          )}
          <VerticalDivider onClick={() => handleToggle('vision')} />
        </TextBlock>
        <TextBlock width="65%">
          <Question
            onClick={() => handleToggle('mission')}
            // onMouseEnter={() => setExpanded((prev) => ({ ...prev, mission: true }))}
            // onMouseLeave={() => setExpanded((prev) => ({ ...prev, mission: false }))}
            expanded={expanded.mission}
          >
            Our Mission
          </Question>
          {expanded.mission && (
            <DescContainer expanded={expanded.mission} onClick={() => handleToggle('mission')}>
              <Description>
                We’re all about empowering travelers and travel agents to share, explore, and embark on trips that resonate with their
                interests, favorite destinations, and unique itineraries. By creating communities centered around travel, we nurture a sense
                of belonging. With our ‘Routes & Roots’ initiative, we’re also doing our part for the planet by planting trees and
                supporting mental well-being projects — ensuring that every journey is not just a trip, but a meaningful stride toward
                sustainability and deeper human connections.
              </Description>
            </DescContainer>
          )}
          <VerticalDivider onClick={() => handleToggle('mission')} />
        </TextBlock>
        <TextBlock width="82%">
          <Question
            onClick={() => handleToggle('position')}
            // onMouseEnter={() => setExpanded((prev) => ({ ...prev, position: true }))}
            // onMouseLeave={() => setExpanded((prev) => ({ ...prev, position: false }))}
            expanded={expanded.position}
          >
            Our Positioning
          </Question>
          {expanded.position && (
            <DescContainer expanded={expanded.position} onClick={() => handleToggle('position')}>
              <Description>
                Travmigoz is all about community and connection in the travel world. It’s a platform designed to help you find and link up
                with fellow travelers and trip creators, whether you’re a solo adventurer or a travel agent. Together, we can share
                unforgettable experiences. We believe that travel should be more than just a checklist of sights; it should be a journey
                filled with genuine connections. That’s why we offer personalized itineraries and give back through our Routes & Roots
                initiative, which focuses on planting trees and supporting mental well-being in communities that need it most. 
                <br />
                <br />
                <strong>
                  In a travel landscape often dominated by transactions, Travmigoz champions meaningful journeys—where every trip not only
                  connects hearts but also leaves a positive mark on the world.
                </strong>
              </Description>
            </DescContainer>
          )}
        </TextBlock>
      </SideFrame>
    </Frame>
  )
}

export default VisionSection

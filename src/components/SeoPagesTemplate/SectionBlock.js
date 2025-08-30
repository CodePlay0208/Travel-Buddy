import React from 'react'
import styled from 'styled-components'
import CheckIcon from './CheckIcon'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  width: 100%;
  margin-bottom: 60px;

  @media (max-width: 440px) {
    margin-bottom: 32px;
  }
`
const SectionHeadingContainer = styled.div`
  width: 100%;
`
const SectionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  width: 100%;

  @media (max-width: 440px) {
    gap: 24px;
  }
`
const SectionParagraphContainer = styled.div`
  width: 100%;
`
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  @media (max-width: 440px) {
    gap: 12px;
  }
`
const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  width: 100%;
  min-height: 48px;

  @media (max-width: 440px) {
    gap: 6px;
  }
`
const IconWrapper = styled.div`
  width: 40px;
  height: 48px;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 440px) {
    width: 16px;
    height: 22px;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`
const ListItemContent = styled.div`
  flex: 1;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 500;
  font-size: 1.85rem;
  line-height: 150%;
  text-align: justify;
  color: #000000;
  display: flex;
  align-items: center;

  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 600;
    font-style: SemiBold;
    font-size: 16px;
    leading-trim: NONE;
    line-height: 22px;
    letter-spacing: 0%;
    text-align: justify;
  }
`

const H1Item = styled.h1`
  display: flex;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  font-size: 3.25rem;
  line-height: 120%;
  color: #252525;
  margin: 0;

  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 700;
    font-style: Bold;
    font-size: 32px;
    leading-trim: NONE;
    line-height: 120%;
    letter-spacing: 0%;
    text-align: center;
  }
`
const H2Item = styled.h2`
  display: flex;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  font-size: 3.25rem;
  line-height: 120%;
  color: #252525;
  margin: 0;
  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 700;
    font-style: Bold;
    font-size: 32px;
    leading-trim: NONE;
    line-height: 120%;
    letter-spacing: 0%;
    text-align: center;
  }
`
const H3Item = styled.h3`
  display: flex;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  font-size: 3.25rem;
  line-height: 120%;
  color: #252525;
  margin: 0;
  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 700;
    font-style: Bold;
    font-size: 32px;
    leading-trim: NONE;
    line-height: 120%;
    letter-spacing: 0%;
    text-align: center;
  }
`
const H4Item = styled.h4`
  display: flex;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  font-size: 3.25rem;
  line-height: 120%;
  color: #252525;
  margin: 0;
  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 700;
    font-style: Bold;
    font-size: 32px;
    leading-trim: NONE;
    line-height: 120%;
    letter-spacing: 0%;
    text-align: center;
  }
`
const PItem = styled.p`
  display: flex;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 400;
  font-size: 1.85rem;
  line-height: 150%;
  text-align: justify;
  color: #000000;
  margin: 0;
  width: 100%;

  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 400;
    font-style: Regular;
    font-size: 16px;
    leading-trim: NONE;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: justify;
  }
`
const DivItem = styled.div`
  display: flex;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 400;
  font-size: 32px;
  line-height: 150%;
  text-align: justify;
  color: #000000;
  margin: 0;
  width: 100%;

  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 400;
    font-style: Regular;
    font-size: 16px;
    leading-trim: NONE;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: justify;
  }
`

const renderContent = (content, isHeading = false) => {
  if (typeof content === 'string') {
    return isHeading ? <H2Item>{content}</H2Item> : <PItem>{content}</PItem>
  }
  const tag = Object?.keys(content??{})?.[0]
  const text = content?.[tag]??''
  switch (tag) {
    case 'h1':
      return <H1Item>{text}</H1Item>
    case 'h2':
      return <H2Item>{text}</H2Item>
    case 'h3':
      return <H3Item>{text}</H3Item>
    case 'h4':
      return <H4Item>{text}</H4Item>
    case 'p':
      return <PItem>{text}</PItem>
    case 'div':
      return <DivItem>{text}</DivItem>
    default:
      return <PItem>{text}</PItem>
  }
}

const SectionBlock = ({ section }) => (
  <Section>
    <SectionHeadingContainer>{renderContent(section.heading, true)}</SectionHeadingContainer>
    <SectionContentContainer>
      <SectionParagraphContainer>{renderContent(section.paragraph, false)}</SectionParagraphContainer>
      {section.list && (
        <List>
          {section.list.map((item, itemIndex) => (
            <ListItem key={itemIndex}>
              <IconWrapper>
                <CheckIcon />
              </IconWrapper>
              <ListItemContent>{typeof item === 'string' ? item : renderContent(item)}</ListItemContent>
            </ListItem>
          ))}
        </List>
      )}
    </SectionContentContainer>
  </Section>
)

export default SectionBlock

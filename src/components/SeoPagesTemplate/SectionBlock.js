import React from 'react';
import styled from 'styled-components';
import CheckIcon from './CheckIcon';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  width: 100%;
  margin-bottom: 60px;
`;
const SectionHeadingContainer = styled.div`
  width: 100%;
`;
const SectionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  width: 100%;
`;
const SectionParagraphContainer = styled.div`
  width: 100%;
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;
const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  width: 100%;
  min-height: 48px;
`;
const IconWrapper = styled.div`
  width: 40px;
  height: 48px;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
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
`;

const H1Item = styled.h1`
  display: flex;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  font-size: 3.25rem;
  line-height: 120%;
  color: #252525;
  margin: 0;
`;
const H2Item = styled.h2`
 display: flex;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  font-size: 3.25rem;
  line-height: 120%;
  color: #252525;
  margin: 0;
`;
const H3Item = styled.h3`
 display: flex;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  font-size: 3.25rem;
  line-height: 120%;
  color: #252525;
  margin: 0;
`;
const H4Item = styled.h4`
 display: flex;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  font-size: 3.25rem;
  line-height: 120%;
  color: #252525;
  margin: 0;
`;
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
`;
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
`;

const renderContent = (content, isHeading = false) => {
  if (typeof content === 'string') {
    return isHeading ? <H2Item>{content}</H2Item> : <PItem>{content}</PItem>;
  }
  const tag = Object.keys(content)[0];
  const text = content[tag];
  switch (tag) {
    case 'h1': return <H1Item>{text}</H1Item>;
    case 'h2': return <H2Item>{text}</H2Item>;
    case 'h3': return <H3Item>{text}</H3Item>;
    case 'h4': return <H4Item>{text}</H4Item>;
    case 'p': return <PItem>{text}</PItem>;
    case 'div': return <DivItem>{text}</DivItem>;
    default: return <PItem>{text}</PItem>;
  }
};

const SectionBlock = ({ section }) => (
  <Section>
    <SectionHeadingContainer>
      {renderContent(section.heading, true)}
    </SectionHeadingContainer>
    <SectionContentContainer>
      <SectionParagraphContainer>
        {renderContent(section.paragraph, false)}
      </SectionParagraphContainer>
      {section.list && (
        <List>
          {section.list.map((item, itemIndex) => (
            <ListItem key={itemIndex}>
              <IconWrapper>
                <CheckIcon />
              </IconWrapper>
              <ListItemContent>
                {typeof item === 'string' ? item : renderContent(item)}
              </ListItemContent>
            </ListItem>
          ))}
        </List>
      )}
    </SectionContentContainer>
  </Section>
);

export default SectionBlock;

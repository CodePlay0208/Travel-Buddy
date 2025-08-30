import React from 'react';
import styled from 'styled-components';

const BackgroundSection = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 60px;
  gap: 12px;
  isolation: isolate;
  width: 100%;
  max-width: 1419px;
  height: 342px;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid #000000;
  border-radius: 20px;
  position: relative;
  margin-bottom: 40px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    z-index: 0;
  }
`;
const BackgroundSectionContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  max-width: 1299px;
`;
const BackgroundSectionHeading = styled.h1`
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  font-size: 62px;
  line-height: 120%;
  text-align: center;
  color: #8DD3BB;
  margin: 0;
  width: 100%;
  max-width: 1297px;
  min-height: 74px;
  z-index: 1;
`;
const BackgroundSectionParagraph = styled.p`
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 150%;
  text-align: center;
  color: #FFFFFF;
  margin: 0;
  width: 100%;
  max-width: 1299px;
  min-height: 96px;
  z-index: 2;
`;

const BackgroundSectionBlock = ({ section }) => (
    <BackgroundSection backgroundImage={section.backgroundImage}>
        <BackgroundSectionContent>
            <BackgroundSectionHeading>
                {typeof section.heading === 'string' ? section.heading : section.heading[Object.keys(section.heading)[0]]}
            </BackgroundSectionHeading>
            <BackgroundSectionParagraph>
                {typeof section.paragraph === 'string' ? section.paragraph : section.paragraph[Object.keys(section.paragraph)[0]]}
            </BackgroundSectionParagraph>
        </BackgroundSectionContent>
    </BackgroundSection>
);

export default BackgroundSectionBlock;

import React from 'react';
import styled from 'styled-components';

// Calendar SVG Icon
const CalendarIcon: React.FC<{ width?: number; height?: number }>
  = ({ width = 28, height = 29 }) => (
  <svg width={width} height={height} viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M22.1667 5.16536H21V2.83203H18.6667V5.16536H9.33333V2.83203H7V5.16536H5.83333C4.53833 5.16536 3.5 6.21536 3.5 7.4987V23.832C3.5 25.1154 4.53833 26.1654 5.83333 26.1654H22.1667C23.45 26.1654 24.5 25.1154 24.5 23.832V7.4987C24.5 6.21536 23.45 5.16536 22.1667 5.16536ZM22.1667 23.832H5.83333V10.9987H22.1667V23.832ZM7.58333 15.6654C7.58333 14.0554 8.89 12.7487 10.5 12.7487C12.11 12.7487 13.4167 14.0554 13.4167 15.6654C13.4167 17.2754 12.11 18.582 10.5 18.582C8.89 18.582 7.58333 17.2754 7.58333 15.6654Z" fill="#1C1B1F"/>
  </svg>
);

// Arrow SVG Icon
const ArrowIcon: React.FC<{ width?: number; height?: number }> = ({ width = 25, height = 24 }) => (
  <svg width={width} height={height} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.25 4L10.84 5.41L16.42 11H4.25V13H16.42L10.84 18.59L12.25 20L20.25 12L12.25 4Z" fill="#8DD3BB"/>
  </svg>
);

const Card = styled.div`
  position: absolute;
  width: 500px;
  height: 430px;
  left: 614px;
  top: 387px;
  background: #FFFFFF;
  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 0;
  isolation: isolate;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 37px;
  padding: 0 16px 8px;
  gap: 10px;
  background: #FFFFFF;
`;

const IconWrapper = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #18191A;
  margin: 0;
`;

const Content = styled.div`
  flex: 1;
  width: 100%;
  padding: 8px 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  overflow-y: auto;
`;

const DateRow = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 452px;
  height: 54px;
  padding: 8px 16px;
  gap: 24px;
  background: #FFFFFF;
  border: 1px solid #D9D9D9;
  border-radius: 8px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
`;

const Label = styled.span`
  font-family: 'Overpass', sans-serif;
  font-weight: 300;
  font-size: 12px;
  line-height: 17px;
  color: #4B4B4B;
`;

const ValueWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const Value = styled.span`
  font-family: 'Overpass', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 17px;
  color: #000000;
`;

const Arrow = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Mock data for demonstration
const mockRanges = [
  { start: '1 Jun', end: '6 Jun' },
  { start: '10 Jun', end: '16 Jun' },
  { start: '20 Jun', end: '26 Jun' },
  { start: '1 Jul', end: '6 Jul' },
  { start: '10 Jul', end: '16 Jul' },
];

export const AlternateDatesCard: React.FC = () => (
  <Card>
    <Header>
      <IconWrapper>
        <CalendarIcon width={28} height={28} />
      </IconWrapper>
      <Title>Alternate Trip Dates</Title>
    </Header>
    <Content>
      {mockRanges.map((range, idx) => (
        <DateRow key={idx}>
          <Column>
            <Label>Start date</Label>
            <ValueWrapper>
              <Value>{range.start}</Value>
            </ValueWrapper>
          </Column>
          <Arrow>
            <ArrowIcon width={25} height={24} />
          </Arrow>
          <Column>
            <Label>End date</Label>
            <ValueWrapper>
              <Value>{range.end}</Value>
            </ValueWrapper>
          </Column>
        </DateRow>
      ))}
    </Content>
  </Card>
);

export default AlternateDatesCard;

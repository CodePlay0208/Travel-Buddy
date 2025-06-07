import React from 'react';
import {
  Card,
  Header,
  IconWrapper,
  Title,
  Content,
  DateRow,
  Column,
  Label,
  ValueWrapper,
  Value,
  Arrow
} from './AlternateDatesCard.styled';
import { CalendarIcon, ArrowIcon } from './Icons';

// Mock data for demonstration
const mockRanges = [
  { start: '1 Jun', end: '6 Jun' },
  { start: '10 Jun', end: '16 Jun' },
  { start: '20 Jun', end: '26 Jun' },
  { start: '1 Jul', end: '6 Jul' },
  { start: '10 Jul', end: '16 Jul' },
];

const AlternateDatesCard = () => (
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

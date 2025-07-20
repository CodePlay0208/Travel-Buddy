import React from 'react';
import styled from 'styled-components';

const DurationOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 8px;
`;

const DurationOption = styled.button`
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #dddddd;
  background: ${props => props.selected ? '#009965' : '#ffffff'};
  color: ${props => props.selected ? '#ffffff' : '#222222'};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;

  &:hover {
    border-color: ${props => props.selected ? '#009965' : '#b0b0b0'};
  }
`;

const durations = [
    { id: 'weekend', label: 'Weekend (2-3 days)' },
    { id: 'week', label: 'Week (4-7 days)' },
    { id: 'extended', label: 'Extended (8+ days)' },
    { id: 'flexible', label: 'Flexible dates' }
];

const DurationFilter = ({ value, onChange }) => {
    return (
        <DurationOptions>
            {durations.map(duration => (
                <DurationOption
                    key={duration.id}
                    selected={value === duration.id}
                    onClick={() => onChange(value === duration.id ? '' : duration.id)}
                >
                    {duration.label}
                </DurationOption>
            ))}
        </DurationOptions>
    );
};

export default DurationFilter;

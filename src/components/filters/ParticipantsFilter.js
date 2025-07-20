import React from 'react';
import styled from 'styled-components';

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 8px;
`;

const OptionButton = styled.button`
  padding: 16px 12px;
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
    transform: translateY(-1px);
  }
`;

const participantOptions = [
    { id: 'solo', label: 'Solo (1)', min: 1, max: 1 },
    { id: 'couple', label: 'Couple (2)', min: 2, max: 2 },
    { id: 'small', label: 'Small (3-5)', min: 3, max: 5 },
    { id: 'medium', label: 'Medium (6-10)', min: 6, max: 10 },
    { id: 'large', label: 'Large (11-15)', min: 11, max: 15 },
    { id: 'xl', label: 'Extra Large (16+)', min: 16, max: 20 }
];

const ParticipantsFilter = ({ value, onChange }) => {
    const isSelected = (option) => {
        return value.min === option.min && value.max === option.max;
    };

    const handleSelect = (option) => {
        onChange({ min: option.min, max: option.max });
    };

    return (
        <OptionsGrid>
            {participantOptions.map(option => (
                <OptionButton
                    key={option.id}
                    selected={isSelected(option)}
                    onClick={() => handleSelect(option)}
                >
                    {option.label}
                </OptionButton>
            ))}
        </OptionsGrid>
    );
};

export default ParticipantsFilter;

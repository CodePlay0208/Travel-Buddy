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
    { id: 'Traveller', label: 'Traveller'},
    { id: 'Agent', label: 'Agent'},
];

const PersonaFilter = ({ value, onChange }) => {
    const isSelected = (option) => {
        return option?.id === value?.id;
    };

    const handleSelect = (option) => {
        onChange({ id: option.id, label: option.label });
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

export default PersonaFilter;

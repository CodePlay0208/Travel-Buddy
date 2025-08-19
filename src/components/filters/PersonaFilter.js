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
  background: ${(props) => (props.selected ? '#009965' : '#ffffff')};
  color: ${(props) => (props.selected ? '#ffffff' : '#222222')};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;

  &:hover {
    border-color: ${(props) => (props.selected ? '#009965' : '#b0b0b0')};
    transform: translateY(-1px);
  }
`;

const participantOptions = [
    { id: 'traveller', label: 'Traveller' },
    { id: 'agent', label: 'Agent' },
];

const PersonaFilter = ({ value = [], onChange }) => {

    const effectiveValue =
        value.length === 0 ? participantOptions.map((opt) => opt.id) : value;

    const isSelected = (optionId) => {
        return effectiveValue.includes(optionId);
    };

    const handleToggle = (optionId) => {
        let newValue;
        if (effectiveValue.includes(optionId)) {

            newValue = effectiveValue.filter((id) => id !== optionId);
        } else {

            newValue = [...effectiveValue, optionId];
        }


        if (newValue.length === 0) {
            newValue = participantOptions.map((opt) => opt.id);
        }


        if (newValue.length === participantOptions.length) {
            onChange([]);
        } else {
            onChange(newValue);
        }
    };

    return (
        <OptionsGrid>
            {participantOptions.map((option) => (
                <OptionButton
                    key={option.id}
                    selected={isSelected(option.id)}
                    onClick={() => handleToggle(option.id)}
                >
                    {option.label}
                </OptionButton>
            ))}
        </OptionsGrid>
    );
};

export default PersonaFilter;

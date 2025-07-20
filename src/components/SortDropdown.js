import React, { useState } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  min-width: 200px;
`;

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 16px;
  border: 1px solid #dddddd;
  border-radius: 32px;
  background: white;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  gap: 8px;

  &:hover {
    border-color: #b0b0b0;
  }

  svg {
    width: 16px;
    height: 16px;
    transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0)'};
    transition: transform 0.2s ease;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #dddddd;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
  margin-top: 4px;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: translateY(${props => props.isOpen ? '0' : '-8px'});
  transition: all 0.2s ease;
`;

const DropdownItem = styled.button`
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: none;
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  color: ${props => props.selected ? '#009965' : '#222222'};
  font-weight: ${props => props.selected ? 500 : 400};

  &:hover {
    background: #f7f7f7;
  }

  &:first-child {
    border-radius: 8px 8px 0 0;
  }

  &:last-child {
    border-radius: 0 0 8px 8px;
  }
`;

const sortOptions = [
    { id: 'recommended', label: 'Recommended for you' },
    { id: 'budget-low', label: 'Budget: Low to High' },
    { id: 'budget-high', label: 'Budget: High to Low' },
    { id: 'duration-short', label: 'Duration: Shortest first' },
    { id: 'duration-long', label: 'Duration: Longest first' },
    { id: 'group-small', label: 'Group size: Smallest first' },
    { id: 'group-large', label: 'Group size: Largest first' },
    { id: 'dates-soon', label: 'Trip dates: Soonest first' }
];

const SortDropdown = ({ value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const selectedOption = sortOptions.find(option => option.id === value);

    const handleSelect = (optionId) => {
        onChange(optionId);
        setIsOpen(false);
    };

    return (
        <DropdownContainer>
            <DropdownButton
                isOpen={isOpen}
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedOption?.label || 'Sort by'}
                <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </DropdownButton>

            <DropdownMenu isOpen={isOpen}>
                {sortOptions.map(option => (
                    <DropdownItem
                        key={option.id}
                        selected={value === option.id}
                        onClick={() => handleSelect(option.id)}
                    >
                        {option.label}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </DropdownContainer>
    );
};

export default SortDropdown;

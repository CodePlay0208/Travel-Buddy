import React from 'react';
import styled from 'styled-components';

const ChipBarContainer = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const FilterChip = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 32px;
  border: 1px solid #dddddd;
  background: ${props => props.selected ? '#009965' : '#ffffff'};
  color: ${props => props.selected ? '#ffffff' : '#222222'};
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease;
  
  @media (max-width: 440px) {
    display: none;
}

  &:hover {
    border-color: ${props => props.selected ? '#009965' : '#b0b0b0'};
    transform: scale(0.98);
  }

  &:active {
    transform: scale(0.95);
  }

`;

const FiltersButton = styled(FilterChip)`
  background: #ffffff;
  color: #222222;
  min-width: 80px;
  justify-content: center;

  svg {
    width: 16px;
    height: 16px;
  }
  
  @media (max-width: 440px) {
    display: block;
}
`;

const FilterChipBar = ({ filters, onFilterChange, onOpenModal }) => {
  const quickFilters = [
    { id: 'persona', label: filters?.persona?.label || 'Both Persona', selected: !!filters.persona },
    { id: 'participants', label: `${filters.participants.min}-${filters.participants.max} people`, selected: filters.participants.min > 1 || filters.participants.max < 20 },
    { id: 'duration', label: filters.duration || 'Any duration', selected: !!filters.duration },
    { id: 'budget', label: `₹${filters.budget.min.toLocaleString()}-${filters.budget.max.toLocaleString()}`, selected: filters.budget.min > 1000 || filters.budget.max < 100000 },
    { id: 'categories', label: filters.categories.length ? `${filters.categories.length} categories` : 'All categories', selected: filters.categories.length > 0 }
  ];

  return (
    <ChipBarContainer>
      {quickFilters.map(filter => (
        <FilterChip
          key={filter.id}
          selected={filter.selected}
          onClick={onOpenModal}
        >
          {filter.label}
        </FilterChip>
      ))}

      <FiltersButton onClick={onOpenModal}>
        {/* <svg viewBox="0 0 16 16" fill="currentColor">
                    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM8 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM13 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg> */}
        Filters
      </FiltersButton>
    </ChipBarContainer>
  );
};

export default FilterChipBar;

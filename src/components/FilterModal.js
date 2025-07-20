import React from 'react';
import styled from 'styled-components';
import ParticipantsFilter from './filters/ParticipantsFilter';
import DurationFilter from './filters/DurationFilter';
import BudgetFilter from './filters/BudgetFilter';
import CategoriesFilter from './filters/CategoriesFilter';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
`;

const ModalContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-radius: 16px 16px 0 0;
  max-height: 90vh;
  transform: translateY(${props => props.isOpen ? '0' : '100%'});
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    left: 50%;
    right: auto;
    width: 500px;
    transform: translate(-50%, ${props => props.isOpen ? '0' : '100%'});
    bottom: 20px;
    max-height: 80vh;
    border-radius: 16px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 1px solid #ebebeb;
  position: sticky;
  top: 0;
  background: white;
  border-radius: 16px 16px 0 0;
`;

const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #222222;
  margin: 0;
`;

const CloseButton = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #f7f7f7;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const ModalContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 24px;
`;

const FilterSection = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid #ebebeb;

  &:last-child {
    border-bottom: none;
  }
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #222222;
  margin: 0 0 16px 0;
`;

const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  border-top: 1px solid #ebebeb;
  background: white;
`;

const ClearButton = styled.button`
  background: none;
  border: none;
  color: #222222;
  font-size: 16px;
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
  
  &:hover {
    color: #717171;
  }
`;

const ApplyButton = styled.button`
  background: #222222;
  color: white;
  border: none;
  padding: 14px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background: #1a1a1a;
  }
`;

const FilterModal = ({ isOpen, onClose, filters, onFiltersChange, resultCount }) => {
    const handleClearAll = () => {
        onFiltersChange({
            participants: { min: 1, max: 20 },
            duration: '',
            budget: { min: 1000, max: 100000 },
            categories: [],
        });
    };

    const handleApply = () => {
        onClose();
    };

    if (!isOpen) return null;

    return (
        <ModalOverlay isOpen={isOpen} onClick={onClose}>
            <ModalContainer isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
                <ModalHeader>
                    <ModalTitle>Filters</ModalTitle>
                    <CloseButton onClick={onClose}>
                        <svg viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </CloseButton>
                </ModalHeader>

                <ModalContent>
                    <FilterSection>
                        <SectionTitle>Trip Participants</SectionTitle>
                        <ParticipantsFilter
                            value={filters.participants}
                            onChange={(participants) => onFiltersChange({ ...filters, participants })}
                        />
                    </FilterSection>

                    <FilterSection>
                        <SectionTitle>Duration</SectionTitle>
                        <DurationFilter
                            value={filters.duration}
                            onChange={(duration) => onFiltersChange({ ...filters, duration })}
                        />
                    </FilterSection>

                    <FilterSection>
                        <SectionTitle>Budget Range</SectionTitle>
                        <BudgetFilter
                            value={filters.budget}
                            onChange={(budget) => onFiltersChange({ ...filters, budget })}
                        />
                    </FilterSection>

                    <FilterSection>
                        <SectionTitle>Trip Categories</SectionTitle>
                        <CategoriesFilter
                            value={filters.categories}
                            onChange={(categories) => onFiltersChange({ ...filters, categories })}
                        />
                    </FilterSection>
                </ModalContent>

                <ModalFooter>
                    <ClearButton onClick={handleClearAll}>
                        Clear all
                    </ClearButton>
                    <ApplyButton onClick={handleApply}>
                        Show {resultCount.toLocaleString()} trips
                    </ApplyButton>
                </ModalFooter>
            </ModalContainer>
        </ModalOverlay>
    );
};

export default FilterModal;

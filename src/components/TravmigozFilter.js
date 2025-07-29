import React, { useState } from 'react';
import styled from 'styled-components';
import FilterChipBar from './FilterChipBar';
import FilterModal from './FilterModal';
import SortDropdown from './SortDropdown';

const FilterContainer = styled.div`
  width: 100%;
  background: #ffffff;
  /* border-bottom: 1px solid #ebebeb; */
  /* position: sticky; */
  top: 0;
  z-index: 2;
`;

const FilterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  gap: 12px;
`;

const ResultsCount = styled.span`
  font-size: 14px;
  color: #717171;
  font-weight: 400;
`;

const TravmigozFilter = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filters, setFilters] = useState({
        persona:'',
        participants: { min: 1, max: 20 },
        duration: '',
        budget: { min: 1000, max: 100000 },
        categories: [],
    });
    const [sortBy, setSortBy] = useState('recommended');
    const [resultCount, setResultCount] = useState(1247);

    return (
        <FilterContainer>
            <FilterHeader>
                <FilterChipBar
                    filters={filters}
                    onFilterChange={setFilters}
                    onOpenModal={() => setIsModalOpen(true)}
                />
                <SortDropdown
                    value={sortBy}
                    onChange={setSortBy}
                />
            </FilterHeader>


            <FilterModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                filters={filters}
                onFiltersChange={setFilters}
            />
        </FilterContainer>
    );
};

export default TravmigozFilter;

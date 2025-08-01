import React, { useState } from 'react';
import styled from 'styled-components';
import FilterChipBar from './FilterChipBar';
import FilterModal from './FilterModal';
import SortDropdown from './SortDropdown';
import { connect } from 'react-redux';
import { setFilters, setSortBy } from '../actions/filters.action';

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

const TravmigozFilter = ({ filters, sortBy, setFilters, setSortBy }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
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

const mapStateToProps = (state) => ({
    filters: state.filtersReducer.filters,
    sortBy: state.filtersReducer.sortBy,
});

export default connect(mapStateToProps, { setFilters, setSortBy })(TravmigozFilter);

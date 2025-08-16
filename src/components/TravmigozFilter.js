import React, { useState } from 'react'
import styled from 'styled-components'
import FilterChipBar from './FilterChipBar'
import FilterModal from './FilterModal'
import SortDropdown from './SortDropdown'
import { useSelector, useDispatch } from 'react-redux'
import { setFilters, setSortBy } from '../store/slices/filters-slice'

const FilterContainer = styled.div`
  width: 100%;
  background: #ffffff;
  /* border-bottom: 1px solid #ebebeb; */
  /* position: sticky; */
  top: 0;
  z-index: 5;
`

const FilterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  gap: 12px;
`

const TravmigozFilter = () => {
    const { filters, sortBy } = useSelector((state) => state.filtersReducer)
    const dispatch = useDispatch()
  const [currentFilters, setCurrentFilters] = useState(filters)
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <FilterContainer>
      <FilterHeader>
        <FilterChipBar filters={filters} dispatch={dispatch} onFilterChange={setFilters} onOpenModal={() => setIsModalOpen(true)} />
        <SortDropdown value={sortBy} onChange={setSortBy} dispatch={dispatch} />
      </FilterHeader>
      <FilterModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          dispatch(setFilters(currentFilters))
        }}
        filters={currentFilters}
        onFiltersChange={setCurrentFilters}
      />
    </FilterContainer>
  )
}

export default TravmigozFilter

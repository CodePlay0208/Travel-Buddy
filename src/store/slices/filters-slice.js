import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filters: {
    persona: '',
    participants: {},
    duration: '',
    budget: { min: 0, max: 100000 },
    categories: [],
  },
  sortBy: '',
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload }
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload
    },
  },
})

export const { setFilters, setSortBy } = filtersSlice.actions

export default filtersSlice.reducer

import { SET_FILTERS, SET_SORT_BY } from '../constants/filters.constants';

export const setFilters = (filters) => ({
    type: SET_FILTERS,
    payload: filters,
});

export const setSortBy = (sortBy) => ({
    type: SET_SORT_BY,
    payload: sortBy,
});

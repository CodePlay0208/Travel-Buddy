import { SET_FILTERS, SET_SORT_BY } from '../constants/filters.constants';

const initialState = {
    filters: {
        persona: '',
        participants: {  },
        duration: '',
        budget: { min: 0, max: 100000 },
        categories: [],
    },
    sortBy: '',
};

export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case SET_FILTERS:
            return { ...state, filters: { ...state.filters, ...action.payload } };
        case SET_SORT_BY:
            return { ...state, sortBy: action.payload };
        default:
            return state;
    }
}

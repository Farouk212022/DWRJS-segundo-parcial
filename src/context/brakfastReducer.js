export const actions = {
    SET_BREAKFAST_LIST: 'SET_BREAKFAST_LIST',
    SET_LOADING: 'SET_LOADING',
    SET_BREAKFAST: 'SET_BREAKFAST',
    SET_ERROR: 'SET_ERROR',
    SET_SEARCH: 'SET_SEARCH',
};

export const initialState = {
    breakfastList: [],
    loading: false,
    breakfast: null,
    error: null,
};

export const breakfastReducer = (state, action) => {
    switch (action.type) {
        case actions.SET_BREAKFAST_LIST:
            return {
                ...state,
                breakfastList: action.payload,
            };
        case actions.SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        case actions.SET_BREAKFAST:
            return {
                ...state,
                breakfast: action.payload,
            };
        case actions.SET_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case actions.SET_SEARCH:
            return {
                ...state,
                search: action.payload,
            };
        default:
            return state;
    }
};
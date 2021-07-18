/* eslint-disable import/prefer-default-export */
export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                initialData: action.payload,
            };
        case 'FETCH_ERROR':
            return {
                ...state,
                error: action.payload,
            };

        case 'SEARCH_DATA':
            return {
                ...state,
                data: action.payload,
            };

        case 'CLEAR_DATA':
            return {
                ...state,
                data: [],
            };

        default:
            return state;
    }
};

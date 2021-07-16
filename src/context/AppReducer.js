/* eslint-disable import/prefer-default-export */
export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                data: action.payload,
            };
        case 'FETCH_ERROR':
            return {
                ...state,
                error: action.payload,
            };

        default:
            return state;
    }
};

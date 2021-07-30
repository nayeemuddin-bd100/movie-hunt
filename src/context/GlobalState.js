import axios from 'axios';
import React, { createContext, useEffect, useReducer } from 'react';
import { POPULAR_MOVIES } from '../Api_Config';
import { AppReducer } from './AppReducer';

const initState = {
    data: [],
    initialData: [],
    error: '',
};

export const GlobalContext = createContext();
function GlobalState({ children }) {
    const [state, dispatch] = useReducer(AppReducer, initState);

    useEffect(() => {
        (async () => {
            try {
                await axios.get(POPULAR_MOVIES).then((response) => {
                    dispatch({
                        type: 'FETCH_SUCCESS',
                        payload: response.data.results,
                    });
                });
            } catch (error) {
                console.log(error.message);
                dispatch({
                    type: 'FETCH_ERROR',
                    payload: error.message,
                });
            }
        })();
    }, []);

    const handleError = (errorMessage) => {
        dispatch({
            type: 'FETCH_ERROR',
            payload: errorMessage,
        });
    };
    const handleSearch = (value) => {
        dispatch({
            type: 'SEARCH_DATA',
            payload: value,
        });
    };

    const clearData = () => {
        dispatch({
            type: 'CLEAR_DATA',
        });
    };

    // const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=61a8b343fdd9fab973082cb4288fb534&language=en-US&query=forrest%20gump&page=1&include_adult=false`;

    const { error, data, initialData } = state;

    return (
        <GlobalContext.Provider
            value={{ data, initialData, error, handleError, handleSearch, clearData }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalState;

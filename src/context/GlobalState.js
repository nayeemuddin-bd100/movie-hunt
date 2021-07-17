import axios from 'axios';
import React, { createContext, useEffect, useReducer } from 'react';
import { AppReducer } from './AppReducer';

const initState = {
    data: [],
    error: '',
};

export const GlobalContext = createContext();
function GlobalState({ children }) {
    const [state, dispatch] = useReducer(AppReducer, initState);

    useEffect(() => {
        (async () => {
            try {
                await axios
                    .get(
                        'https://api.themoviedb.org/3/movie/popular?api_key=61a8b343fdd9fab973082cb4288fb534&language=en-US&page=1'
                    )
                    .then((response) => {
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

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             axios.get('')

    //        }catch(error){ console.log(error.message)}
    //     })()
    // }, [])

    // const getMovieDetails (id) => {
    //     dispatch({
    //         type: 'GET_MOVIE_DETAILS',
    //         payload:
    //     })
    // }

    const { error, data } = state;

    return <GlobalContext.Provider value={{ data, error }}>{children}</GlobalContext.Provider>;
}

export default GlobalState;

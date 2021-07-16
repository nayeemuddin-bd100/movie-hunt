import React, { createContext } from 'react';

// const initState = {
//     data: [],
// };

export const GlobalContext = createContext();
function GlobalState({ children }) {
    // const [state, dispatch] = useReducer(AppReducer, initState);

    return (
        <GlobalContext.Provider value={{ text: 'test context' }}>{children}</GlobalContext.Provider>
    );
}

export default GlobalState;

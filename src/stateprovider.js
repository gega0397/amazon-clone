import React, { createContext, useContext, useReducer} from "react";

// Prep Datalayer
export const StateContext = createContext();

// Wrapper
export const StateProvider =  ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull info
export const useStateValue = () => useContext(StateContext)
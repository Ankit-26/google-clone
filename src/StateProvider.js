import React, { createContext, useContext, useReducer } from "react";

//store
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//hook which allows us to pull information from store
export const useStateValue = () => useContext(StateContext);

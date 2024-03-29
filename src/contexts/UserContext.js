import React, {createContext, useReducer} from 'react';
import {initialState, UserReducer} from '../reducers/UserReducer';

export const userContext = createContext();

export default ({children}) => {
  const [state, dispatch] = useReducer(initialState, UserReducer);

  return (
    <userContext.Provider value={{state, dispatch}}>
      {children}
    </userContext.Provider>
  );
};

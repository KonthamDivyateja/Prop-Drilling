import React, { createContext } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const values = {
    a: "Apple",
    b: "Banana",
    c: "Cherry",
    d: "Date",
    e: "Elderberry",
    f: "Fig"
  };

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  );
};

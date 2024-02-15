import React, { createContext, useContext, useState } from "react";

const InfoContext = createContext();

export const InfoProvider = ({ children }) => {
  const [unclear, setUnclear] = useState(false);
  
  const values = {
    unclear,
    setUnclear,
  };

  return <InfoContext.Provider value={values}>{children}</InfoContext.Provider>;
};

export const useInfo = () => {
  return useContext(InfoContext);
};

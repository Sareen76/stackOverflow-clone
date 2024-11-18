import React, { createContext, useContext, useState } from "react";

// Create the context
const ToggleContext = createContext();

// Provider Component
export const ToggleProvider = ({ children }) => {
  const [toggleMode, setToggleMode] = useState(false);

  const toggle = () => {
    setToggleMode((prevMode) => !prevMode);
  };

  return (
    <ToggleContext.Provider value={{ toggleMode, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

// Custom hook to consume the context
export const useToggle = () => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error("useToggle must be used within a ToggleProvider");
  }
  return context;
};

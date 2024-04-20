// NavbarContext.js
import React, { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <NavbarContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => useContext(NavbarContext);

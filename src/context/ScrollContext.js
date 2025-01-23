import React, { createContext, useState, useContext } from "react";

// Create the context
const ScrollContext = createContext();

// Custom hook for accessing the context
export const useScrollContext = () => useContext(ScrollContext);

// Provider component
export const ScrollProvider = ({ children }) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    return (
        <ScrollContext.Provider value={{ scrollPosition, setScrollPosition }}>
            {children}
        </ScrollContext.Provider>
    );
};

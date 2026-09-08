'use client';

import { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext({
  isLightMode: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const savedTheme = window.localStorage.getItem('theme');
        if (savedTheme === 'light') {
          setIsLightMode(true);
          document.body.classList.add('light-mode');
        } else {
          setIsLightMode(false);
          document.body.classList.remove('light-mode');
        }
      }
    } catch (_) {}
  }, []);

  const toggleTheme = () => {
    setIsLightMode((prev) => {
      const next = !prev;
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          if (next) {
            document.body.classList.add('light-mode');
            window.localStorage.setItem('theme', 'light');
          } else {
            document.body.classList.remove('light-mode');
            window.localStorage.setItem('theme', 'dark');
          }
        }
      } catch (_) {}
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
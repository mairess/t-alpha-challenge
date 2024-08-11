import { useEffect, useState } from 'react';
import ThemeContext from './ThemeContext';

type ThemeProviderProps = {
  children: React.ReactNode,
};

function ThemeProvider({ children }: ThemeProviderProps) {
  const [refresh, setRefresh] = useState(false);
  const [productsQuantity, setProductsQuantity] = useState<number | undefined>(0);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('isDarkMode');
    return savedTheme !== null ? JSON.parse(savedTheme) : true;
  });

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider
      value={ {
        isDarkMode,
        toggleTheme,
        refresh,
        setRefresh,
        productsQuantity,
        setProductsQuantity,
      } }
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

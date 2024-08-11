import { createContext } from 'react';

type ContextType = {
  isDarkMode: boolean,
  toggleTheme: () => void,
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>,
  refresh: boolean,
  productsQuantity: number | undefined,
  setProductsQuantity: React.Dispatch<React.SetStateAction<number | undefined>>,
};

const ThemeContext = createContext({} as ContextType);

export default ThemeContext;

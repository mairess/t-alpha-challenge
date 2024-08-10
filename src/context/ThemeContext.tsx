import { createContext } from 'react';

type ContextType = {
  isDarkMode: boolean,
  toggleTheme: () => void,
};

const ThemeContext = createContext({} as ContextType);

export default ThemeContext;

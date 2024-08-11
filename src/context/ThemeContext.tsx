import { createContext } from 'react';

type ContextType = {
  isDarkMode: boolean,
  toggleTheme: () => void,
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>,
  refresh: boolean,
};

const ThemeContext = createContext({} as ContextType);

export default ThemeContext;

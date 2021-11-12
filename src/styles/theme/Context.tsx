import { useContext, createContext, useState, useEffect } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';
import lodash from 'lodash';

import { Theme, defaultTheme, themes } from './theme';

const LOCAL_STORAGE_KEY = '@CB/theme';

const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [colorTheme, setColorTheme] = useState('default');
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const changeTheme = (newTheme: string) => {
    setColorTheme(newTheme);
  };

  const getStoragedTheme = () => {
    const storagedTheme = localStorage.getItem(LOCAL_STORAGE_KEY) ?? 'cute';

    setColorTheme(storagedTheme);
  };

  const getNewTheme = () => {
    const newTheme = lodash.merge({}, defaultTheme, themes[colorTheme]);

    setTheme(newTheme);
  };

  useEffect(() => {
    getNewTheme();
  }, [colorTheme]);

  useEffect(() => {
    getStoragedTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ changeTheme }}>
      <StyledProvider theme={theme}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within an AdoptionProvider.');
  }

  return context;
};

export { ThemeContext, ThemeProvider, useTheme };

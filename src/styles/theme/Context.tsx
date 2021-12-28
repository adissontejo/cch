import { useContext, createContext, useState, useEffect, FC } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';
import lodash from 'lodash';

import { ThemeSelection } from '~/components';

import { Theme, defaultTheme, themes } from './theme';

export type ThemeContextProps = {
  changeTheme: (newTheme: string) => void;
  colorTheme: string;
  showThemeSelection: () => void;
};

const LOCAL_STORAGE_KEY = '@CB/theme';

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

const ThemeProvider: FC = ({ children }) => {
  const [colorTheme, setColorTheme] = useState('default');
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [showSelection, setShowSelection] = useState(false);

  const changeTheme = (newTheme: string) => {
    setColorTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_KEY, newTheme);
  };

  const getStoragedTheme = () => {
    const storagedTheme = localStorage.getItem(LOCAL_STORAGE_KEY) ?? 'cute';

    setColorTheme(storagedTheme);
  };

  const getNewTheme = () => {
    const newTheme = lodash.merge({}, defaultTheme, themes[colorTheme]);

    setTheme(newTheme);
  };

  const showThemeSelection = () => {
    setShowSelection(true);
  };

  const dismissThemeSelection = () => {
    setShowSelection(false);
  };

  useEffect(() => {
    getNewTheme();
  }, [colorTheme]);

  useEffect(() => {
    getStoragedTheme();
  }, []);

  return (
    <ThemeContext.Provider
      value={{ changeTheme, colorTheme, showThemeSelection }}
    >
      <StyledProvider theme={theme}>
        {showSelection && <ThemeSelection dismiss={dismissThemeSelection} />}
        {children}
      </StyledProvider>
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

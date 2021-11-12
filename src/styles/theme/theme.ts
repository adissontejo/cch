import { DefaultTheme } from 'styled-components';

export type Theme = {
  colors: {
    primary: string;
    secondary: string;
    background: string;
  };
};

const themes = {
  hot: {
    colors: {
      primary: '#F4364D',
      secondary: '#C00045',
    },
  },
  cute: {
    colors: {
      primary: '#5136F4',
      secondary: '#9518A9',
    },
  },
  brazil: {
    colors: {
      primary: '#F4BF36',
      secondary: '#188FA9',
    },
  },
  lighthouse: {
    colors: {
      primary: '#368DF4',
      secondary: '#DB2A2A',
    },
  },
  default: {
    colors: {
      primary: '#F46036',
      secondary: '#18A999',
    },
  },
};

const defaultTheme: DefaultTheme = {
  colors: {
    background: '#2F2D2E',
    ...themes.default.colors,
  },
};

export { themes, defaultTheme };

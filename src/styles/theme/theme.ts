import { DefaultTheme } from 'styled-components';

export type Theme = {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    overlay: string;
    white: string;
  };
  font: {
    primary: string;
    secondary: string;
  };
  breakpoints: {
    sm: number;
    md: number;
    lg: number;
  };
};

const themes = {
  hot: {
    colors: {
      primary: '#F4364D',
      secondary: '#C00045',
    },
    name: 'Quente',
  },
  cute: {
    colors: {
      primary: '#5136F4',
      secondary: '#9518A9',
    },
    name: 'Fofo',
  },
  brazil: {
    colors: {
      primary: '#F4BF36',
      secondary: '#188FA9',
    },
    name: 'Brasil',
  },
  lighthouse: {
    colors: {
      primary: '#368DF4',
      secondary: '#DB2A2A',
    },
    name: 'Farol',
  },
  tumblr: {
    colors: {
      primary: '#f72585',
      secondary: '#480ca8',
    },
    name: 'Tumblr',
  },
  default: {
    colors: {
      primary: '#F46036',
      secondary: '#18A999',
    },
    name: 'Padrão',
  },
};

const defaultTheme: DefaultTheme = {
  colors: {
    background: '#2F2D2E',
    text: '#2F2D2E',
    white: '#fff',
    overlay: 'rgba(0, 0, 0, 0.5)',
    ...themes.default.colors,
  },
  font: {
    primary: 'Bebas Neue',
    secondary: 'Bungee',
  },
  breakpoints: {
    sm: 768,
    md: 1024,
    lg: 1400,
  },
};

export { themes, defaultTheme };

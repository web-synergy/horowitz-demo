import { PaletteOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    gray: {
      main: string;
      dark: string;
      light: string;
    };
  }
  interface PaletteOptions {
    gray: {
      main: string;
      dark: string;
      light: string;
    };
  }
}

export const palette: PaletteOptions = {
  common: {
    black: '#131333',
    white: '#F2F2F2',
  },
  primary: {
    main: '#E19C2A',
    contrastText: '#131333',
  },

  secondary: {
    main: '#F2F2F2',
    contrastText: '#131333',
  },
  text: {
    primary: '#131333',
    secondary: '#F2F2F2',
  },
  background: {
    default: '#F2F2F2',
    paper: '#F2F2F2',
  },
  divider: '#F2F2F2',
  gray: {
    light: '#898989',
    main: '#010217',
    dark: '',
  },
};

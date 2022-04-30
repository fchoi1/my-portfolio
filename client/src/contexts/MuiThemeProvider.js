import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85'
    },
    yaleBlue: {
      main: '#044389',
      light: '#3668a0',
      dark: '#022e5f',
      contrastText: '#FFFFFF'
    },
    darkSkyBlue: {
      main: '#86BBD8',
      light: '#9ec8df',
      dark: '#5d8297',
      contrastText: '#000000'
    },
    mediumChampagne: {
      main: '#EDDEA4',
      light: '#f0e4b6',
      dark: '#a59b72',
      contrastText: '#000000'
    },
    atomicTangerine: {
      main: '#F7A072',
      light: '#f8b38e',
      dark: '#ac704f',
      contrastText: '#000000'
    },
    liverChestnut: {
      main: '#957964',
      light: '#aa9383',
      dark: '#685446',
      contrastText: '#FFFFFF'
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {}
      }
    }
  },
  mixins: {
    toolbar: {
      minHeight: '64px',
      '@media (max-width:600px) ': {
        minHeight: '48px'
      }
    }
  }
});

export default function MuiThemeProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

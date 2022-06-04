import React, { useEffect, useState, useLayoutEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#023e8a',
      contrastText: '#90e0ef'
    },
    secondary: { main: '#00b4d8' },
    tertiary: { main: '#caf0f8' },
    quaternary: { main: '#0077b6' },
    quinary: { main: '#03045e' },
    senary: { main: '#90e0ef' },

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
    },
    MidnightBlue: { main: '#03045e' },
    DarkCornflowerBlue: { main: '#023e8a' },
    StarCommandBlue: { main: '#0077b6' },
    BlueGreen: { main: '#0096c7' },
    PacificBlue: { main: '#00b4d8' },
    SkyBlue: { main: '#48cae4' },
    MiddleBlue: { main: '#90e0ef' },
    BlizzardBlue: { main: '#ade8f4' },
    LightCyan: { main: '#caf0f8' }
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

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    if (typeof window === `undefined`) return;

    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function getBreakPoint(width) {
  if (getWindowDimensions().width <= theme.breakpoints.values.sm) {
    return 'sm';
  } else if (getWindowDimensions().width <= theme.breakpoints.values.md) {
    return 'md';
  } else if (getWindowDimensions().width <= theme.breakpoints.values.lg) {
    return 'lg';
  } else {
    return 'xl';
  }
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    if (typeof window === `undefined`) return;

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export function useBreakPoint() {
  const [breakpoint, setBreakpoint] = useState(
    getBreakPoint(getWindowDimensions().width)
  );

  useEffect(() => {
    function handleResize() {
      setBreakpoint(getBreakPoint(getWindowDimensions().width));
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
}

export default function MuiThemeProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

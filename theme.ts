import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3c91e6',
      light: '#4a9bed',
      dark: '#1b67b3',
      contrastText: '#ecf0f1',
    },
    secondary: {
      main: '#f79256',
      light: '#f0a478',
      dark: '#c95814',
      contrastText: '#ecf0f1',
    },
    text: {
      primary: '#424651',
      secondary: '#545454',
    },
    background: { default: '#ecf0f1' },
  },
  typography: {
    fontFamily: [
      'Inter',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h4: {
      fontWeight: 'bold',
    },
    h5: {
      fontWeight: 'bold',
    },
    subtitle1: {
      fontSize: '2rem',
      textAlign: 'justify',
      fontWeight: 'normal',
      color: 'secondary',
    },
    body1: { fontSize: '1rem' },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          fontSize: '1.5rem',
          textTransform: 'none',
          borderRadius: 10,
          boxShadow: 'none',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderBottomWidth: '0.2rem',
        },
      },
    },
  },
});

export default theme;

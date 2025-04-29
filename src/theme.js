import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFBF3F',
    },
    secondary: {
      main: '#1A1A1A',
    },
    background: {
      default: '#2B2428',
      paper: '#333333',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#BBBBBB',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: '2.5rem',
      color: '#FFBF3F',
    },
    h2: {
      fontWeight: 500,
      fontSize: '2rem',
      color: '#FFBF3F',
    },
    body1: {
      fontSize: '1rem',
      color: '#FFFFFF',
      lineHeight: 1.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '12px 24px',
          textTransform: 'none',
          backgroundColor: '#FFBF3F',
          color: '#000000',
          '&:hover': {
            backgroundColor: '#FFC107',
            color: '#000000',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: '10px 0',
          '& .MuiInputBase-root': {
            borderRadius: '8px',
            backgroundColor: '#444444',
            color: '#FFFFFF',
            '&:hover': {
              borderColor: '#FFBF3F',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#FFD700',
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: '#FFBF3F',
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#333333',
          padding: '20px',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#FFD700',
          '&:hover': {
            backgroundColor: '#555555',
            color: '#FFFFFF',
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,   // Móviles
      sm: 600, // Tablet
      md: 960, // Laptop
      lg: 1280, // Escritorio
      xl: 1920, // Pantallas grandes
    },
  },
});

export default theme;

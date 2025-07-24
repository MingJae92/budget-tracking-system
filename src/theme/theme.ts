import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    spacing: (factor: number) => number;  // spacing returns number now
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(79, 172, 181, 0.9)',
      dark: 'rgba(79, 172, 181, 1)',
      light: 'rgba(79, 172, 181, 0.7)',
    },
    secondary: {
      main: '#333333',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
    grey: {
      100: '#f5f5f5',
      200: '#e8e8e8',
      300: '#ddd',
      400: '#bbb',
      500: '#999',
      600: '#666',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 400,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '3.5rem',
      fontWeight: 400,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 400,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.9rem',
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: (factor: number) => factor * 8,  // returns number here!
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '12px 24px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: 'none',
            },
            '&:hover fieldset': {
              border: 'none',
            },
            '&.Mui-focused fieldset': {
              border: '2px solid rgba(79, 172, 181, 0.8)',
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  },
});

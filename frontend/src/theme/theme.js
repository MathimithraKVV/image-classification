import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: 'rgb(15, 23, 34)', // Darker background for contrast
      paper: 'rgb(28, 40, 58)', // Slightly lighter paper background
    },
    primary: {
      main: 'rgb(255, 87, 34)', // Bright and bold primary color
    },
    secondary: {
      main: 'rgb(0, 188, 212)', // Vibrant cyan for secondary actions
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.87)', // Soft white for primary text
      secondary: 'rgba(255, 255, 255, 0.6)', // Softer white for secondary text
    },
    success: {
      main: 'rgb(76, 175, 80)', // Lush green for success messages
    },
    info: {
      main: 'rgb(33, 150, 243)', // Bright blue for informational messages
    },
    warning: {
      main: 'rgb(255, 193, 7)', // Vivid amber for warnings
    },
    error: {
      main: 'rgb(244, 67, 54)', // Intense red for errors
    },
    divider: 'rgb(60, 65, 80)', // Darker divider for subtle separation
  },
  typography: {
    button: {
      fontWeight: 700, // Heavier button text for emphasis
      textTransform: 'uppercase', // Capitalize button text for impact
    },
    fontFamily: '"Poppins", "Roboto", sans-serif', // Modern font family
    fontSize: 14, // Slightly larger base font size
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: '2.5rem', // Larger and bolder headings
      fontWeight: 700,
      lineHeight: 1.2,
      color: 'rgb(255, 87, 34)', // Match primary color
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.3,
      color: 'rgb(0, 188, 212)', // Match secondary color
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.35,
      color: 'rgba(255, 255, 255, 0.87)',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: 'rgba(255, 255, 255, 0.87)',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.45,
      color: 'rgba(255, 255, 255, 0.87)',
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: 1.5,
      color: 'rgba(255, 255, 255, 0.87)',
    },
    overline: {
      fontWeight: 700,
      letterSpacing: '0.1em', // Slightly more letter spacing for style
      textTransform: 'uppercase', // Capitalize overline text
      color: 'rgba(255, 255, 255, 0.6)',
    },
  },
});

export default theme;

'use client';
import { Theme, createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const styleOverrides = (themeParam: Omit<Theme, "components">) => {
  return `
    hh1, hh2, hh3, hh4, hh5, hh6 {
      color: ${themeParam.palette.primary.main};
    }
    hh1 {
      font-size: 89px;
    }
    hh2 {
      font-size: 67px;
    }
    hh3 {
      font-size: 50px;
    }
    hh4 {
      font-size: 38px;
    }
    hh5 {
      font-size: 28px;
    }
    hh6 {
      font-size: 21px;
    }`;
}

const theme = createTheme({
  typography: {
      allVariants: {
          // color: '#1A1A1A'
      },
      fontFamily: 'Libre Baskerville',
      h1: {
          fontSize: 89
      },
      h2: {
          fontSize: 67
      },
      h3: {
          fontSize: 50
      },
      h4: {
          fontSize: 38
      },
      h5: {
          fontSize: 28
      },
      h6: {
          fontSize: 21
      },
      subtitle1: {
          fontSize: 20
      },
      button: {
          textTransform: 'none',
          fontWeight: 700
      }
  },
  palette: {
      primary: { main: purple[500] },
      secondary: { main: green[500] },
      text: { primary: '#1A1A1A' }
  },
  components: {
      MuiCssBaseline: {
          styleOverrides: (themeParam) => styleOverrides(themeParam),
      },
  }
});

export default theme;

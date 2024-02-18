"use client";
import { createTheme } from "@mui/material/styles";
import { darken } from "@mui/material";
import "@fontsource/libre-baskerville";

export const GradientA = "#14376A";
export const GradientB = "#4899A8";
export const themeGradient = `linear-gradient(90deg, ${GradientA} 0%, ${GradientB} 100%)`;

const theme = createTheme({
  typography: {
    fontFamily: "Libre Baskerville",
    h1: {
      fontSize: 89.76,
      fontWeight: 700,
    },
    h2: {
      fontSize: 67.34,
      fontWeight: 700,
    },
    h3: {
      fontSize: 50.52,
      fontWeight: 700,
    },
    h4: {
      fontSize: 37.9,
      fontWeight: 700,
    },
    h5: {
      fontSize: 28.43,
      fontWeight: 700,
    },
    h6: {
      fontSize: 21.33,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: 18,
      fontWeight: 400,
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
    },
    body2: {
      fontSize: 12,
      fontWeight: 400,
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },
  palette: {
    primary: { main: GradientA },
    secondary: { main: GradientB },
    text: { primary: "#1A1A1A" },
    background: { default: "#E6E6E6" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 16,
          borderRadius: 22,
          minWidth: 200,
        },
        contained: {
          background: themeGradient,
        },
        text: ({ theme }) => ({
          ...{
            color: theme.palette.text.primary,
            fontWeight: 400,
            "&:hover": {
              backgroundColor: darken(theme.palette.background.default, 0.05),
            },
          },
        }),
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...{
            color: theme.palette.text.primary,
            fontSize: 16,
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: darken(theme.palette.background.default, 0.05),
            },
          },
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...{
            padding: theme.spacing(3),
            backgroundColor: "transparent",
            borderRadius: theme.spacing(3),
            borderWidth: 4,
          },
        }),
      },
    },
  },
});

export default theme;

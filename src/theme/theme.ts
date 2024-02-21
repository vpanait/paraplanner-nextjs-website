"use client";
import { createTheme } from "@mui/material/styles";
import { PaletteMode, alpha, darken } from "@mui/material";
import "@fontsource/libre-baskerville";

interface IColorScheme {
  text: string;
  background: string;
  primary: string;
  secondary: string;
  textAccent: string;
  btnBackground: string;
  btnBackgroundHover: string;
  btnText: string;
}

interface IColors {
  light: IColorScheme;
  dark: IColorScheme;
}

export const themeColors: IColors = {
  light: {
    text: "#12222F",
    background: "#FEFEFE",
    primary: "#14376A",
    secondary: "#4899A8",
    textAccent: "#2849C2",
    btnBackground:
      "linear-gradient(90deg, #12222F 0%, #2849C2 50%, #449FE7 100%)",
    btnBackgroundHover: "linear-gradient(90deg, #449FE7 0%, #449FE7 100%)",
    btnText: "#FEFEFE",
  },
  dark: {
    text: "#FEFEFE",
    background: "#12222F",
    primary: "#14376A",
    secondary: "#4899A8",
    textAccent: "#2849C2",
    btnBackground: "#FEFEFE",
    btnBackgroundHover: darken("#FEFEFE", 0.1),
    btnText: "#12222F",
  },
};

interface IGradients {
  heroGradient: string;
  problemsGradients: string[];
  poweredByGradient: string;
  supportGradient: string;
  contactGradient: string;
  footerGradient: string;
}

export const themeGradients: IGradients = {
  heroGradient:
    "linear-gradient(72.44deg, #12222F 16%, #2849C2 58.92%, #449FE7 100%)",
  problemsGradients: [
    "linear-gradient(85.33deg, #449FE7 0%, #2849C2 8.93%, #12222F 43%, #2849C2 79.32%, #449FE7 100%)",
    "linear-gradient(88.13deg, #12222F 1.58%, #2849C2 51.77%, #449FE7 100%)",
    "linear-gradient(88.14deg, #2849C2 0%, #12222F 12.87%, #2849C2 65.71%, #449FE7 100%)",
  ],
  poweredByGradient:
    "linear-gradient(83.57deg, #12222F 5.06%, #2849C2 59.34%, #449FE7 100%)",
  supportGradient:
    "linear-gradient(89.88deg, #12222F 0%, #2849C2 68.79%, #449FE7 100%)",
    contactGradient:"linear-gradient(72.47deg, #12222F 23.55%, #2849C2 68.59%, #449FE7 100%)",
    footerGradient:"linear-gradient(73.08deg, #12222F 46.47%, #2849C2 78.01%, #449FE7 100%)"
};


const getTheme = (mode: PaletteMode) => {
  const colorScheme = themeColors[mode];

  return createTheme({
    typography: {
      allVariants: {
        color: colorScheme.text,
      },
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
        fontSize: 16,
        fontWeight: 700,
        color: colorScheme.textAccent,
      },
      subtitle2: {
        fontSize: 16,
        fontWeight: 700,
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
      primary: { main: colorScheme.primary },
      secondary: { main: colorScheme.secondary },
      text: { primary: colorScheme.text },
      background: { default: colorScheme.background },
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
            background: colorScheme.btnBackground,
            color: colorScheme.btnText,
            "&:hover": {
              background: colorScheme.btnBackgroundHover,
            },
          },
          outlined: {
            background: "transparent",
            borderColor: colorScheme.text,
            color: colorScheme.text,
            "&:hover": {
              borderColor: darken(colorScheme.text, 0.3),
              backgroundColor:
                mode === "light"
                  ? alpha(colorScheme.textAccent, 0.1)
                  : alpha(colorScheme.background, 0.2),
            },
          },
          text: {
            ...{
              color: colorScheme.text,
              fontWeight: 400,
              "&:hover": {
                backgroundColor: alpha(colorScheme.background, 0.5),
              },
            },
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            color: colorScheme.text
          },
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
          root: ({ theme }) => ({
            ...{
              color: theme.palette.text.primary,
              fontSize: 16,
              backgroundColor: "transparent",
              borderBottom: "1px solid transparent",
              "&:hover": {
                backgroundColor: "transparent",
                borderBottom: `1px solid ${colorScheme.text}`,
              },
            },
          }),
        },
      },
      MuiCard: {
        styleOverrides: {
          root: ({ theme }) => ({
            ...{
              padding: theme.spacing(4.5),
              backgroundColor: colorScheme.background,
              borderRadius: theme.spacing(3),
            },
          }),
        },
      },
    },
  });
};

export const themeLight = getTheme("light");
export const themeDark = getTheme("dark");

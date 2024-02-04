"use client";
import { Theme, createTheme } from "@mui/material/styles";
import {
  amber,
  common,
  deepOrange,
  green,
  grey,
  purple,
  red,
} from "@mui/material/colors";
import { PaletteMode, ThemeOptions } from "@mui/material";
import "@fontsource/libre-baskerville";

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
};

const theme = createTheme({
  typography: {
    fontFamily: "Libre Baskerville",
    h1: {
      fontSize: 60,
      fontWeight: 700,
      marginBottom: 16
    },
    h2: {
      fontSize: 67,
    },
    h3: {
      fontSize: 50,
    },
    h4: {
      fontSize: 38,
    },
    h5: {
      fontSize: 28,
    },
    h6: {
      fontSize: 21,
    },
    subtitle1: {
      fontSize: 18,
      fontWeight: 400,
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },
  palette: {
    // primary: { main: purple[500] },
    // secondary: { main: green[500] },
    // text: { primary: "#1A1A1A" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => styleOverrides(themeParam),
    },
  },
});

interface IThemeColors {
  DARK: string;
  LIGHT: string;
}

export type TThemeMode = "DARK" | "LIGHT";

interface IThemeProps {
  TEXT: IThemeColors;
  SUBTITLE: IThemeColors;
  TEXT_ACCENT: IThemeColors;
}

export const THEME: IThemeProps = {
  TEXT: {
    DARK: common.white,
    LIGHT: '#171717',
  },
  SUBTITLE: {
    DARK: grey[300],
    LIGHT: grey[700],
  },
  TEXT_ACCENT: {
    DARK: '#cc0ad6',
    LIGHT: '#cc0ad6',
  },
};

export const getThemeOptions = (mode: PaletteMode) => {
  const themeMode: TThemeMode = mode.toUpperCase() as TThemeMode;
  const themeOptions: ThemeOptions = {
    typography: theme.typography,
    palette: {
      // ...theme.palette,
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: { main: THEME.TEXT.LIGHT },
            divider: amber[200],
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
            info: {
              main: THEME.TEXT_ACCENT.LIGHT,
            },
          }
        : {
            // palette values for dark mode
            primary: { main: THEME.TEXT.DARK },
            secondary: { main: grey[800] },
            divider: deepOrange[700],
            success: { main: deepOrange[700] },
            background: {
              default: grey[900],
              paper: deepOrange[900],
            },
            // text: {
            //   primary: purple[500],
            //   secondary: grey[500],
            // },
            info: {
              main: THEME.TEXT_ACCENT.DARK,
            },
          }),
    },
    components: {
      ...theme.components,
      MuiTypography: {
        styleOverrides: {
          root: {
            color: THEME.TEXT[themeMode],
          },
          subtitle1: {
            color: THEME.SUBTITLE[themeMode],
          }
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: () => ({
            ...(true && {
              background: mode === "light" ? green[100] : grey[900],
              color: mode === "light" ? green[100] : "#fff",
            }),
          }),
        },
      },
      MuiButtonBase: {
        styleOverrides: {
          root: {
            background: mode === "light" ? green[100] : grey[900],
            color: mode === "light" ? green[100] : "#fff",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            // background: mode === "light" ? green[100] : grey[900],
            color: mode === "light" ? green[100] : "#fff",
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            border: "1px solid transparent",
            "&:hover": {
              backgroundColor: mode === "light" ? green[200] : grey[800],
              borderColor: "#9e9e9e",
            },
          },
        },
      },
    },
  };

  return themeOptions;
};

export const defaultTheme = createTheme(getThemeOptions("light"));

export default theme;

import { getThemeOptions } from "@/theme/theme";
import { PaletteMode, ThemeProvider, createTheme } from "@mui/material";
import { useMemo } from "react";

interface IProps {
  children: React.ReactNode;
  mode?: PaletteMode;
}

const ThemeModeWrapper = ({
  children,
  mode = 'light',
}: IProps) => {
  const theTheme = useMemo(() => createTheme(getThemeOptions(mode)), [mode]);

  return (
    <ThemeProvider theme={theTheme}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeModeWrapper;
import { Grid, PaletteMode, SxProps, Theme } from "@mui/material";
import ThemeModeWrapper from "@/theme/ThemeModeWrapper";
import { RefObject } from "react";

interface IProps {
  children: React.ReactNode;
  mode?: PaletteMode;
  sx?: SxProps<Theme>;
  sectionRef?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined
}

const SectionContainer = ({
  children,
  mode = 'light',
  sx,
  sectionRef
}: IProps) => {

  return (
    <ThemeModeWrapper mode={mode}>
      <Grid container sx={sx} ref={sectionRef}>
        <Grid item lg={1.5} md={0.5} sm={0.5} xs={0.25} />
        <Grid item lg={9} md={11} sm={11} xs={11.5}>
          {children}
        </Grid>
        <Grid item lg={1.5} md={0.5} sm={0.5} xs={0.25} />
      </Grid>
    </ThemeModeWrapper>
  );
};

export default SectionContainer;
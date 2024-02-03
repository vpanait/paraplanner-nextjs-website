import { Grid, PaletteMode } from "@mui/material";
import ThemeModeWrapper from "@/theme/ThemeModeWrapper";

interface IProps {
  children: React.ReactNode;
  mode?: PaletteMode;
}

const SectionContainer = ({
  children,
  mode = 'light',
}: IProps) => {

  return (
    <ThemeModeWrapper mode={mode}>
      <Grid container>
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
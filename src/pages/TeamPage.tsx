"use client"
import * as React from 'react';
import Typography from '@mui/material/Typography';
import SectionContainer from '@/components/SectionContainer';
import {
  Box,
  Grid, useTheme
} from '@mui/material';
import t from '@/dictionaries/en.json';


export default function TeamPage() {
  const theme = useTheme();

  return (
    <SectionContainer withoutAnimation>
      <Grid container sx={{ justifyContent: 'space-between', rowGap: 2 }}>
        <Grid item container md={6} sm={12} sx={{ flexDirection: 'column', justifyContent: 'center', gap: 3 }}>
          <Typography variant="h1">
            Team page
          </Typography>
          <Typography variant="subtitle1">

            {t.homePage.hero.subtitle}
          </Typography>
        </Grid>

        <Grid item container md={5} sm={12} sx={{ flexDirection: 'column', justifyContent: 'center' }}>
          <Box
            component="img"
            sx={{ maxWidth: { xs: 1 } }}
            src="/img/undraw_project_team_lc5a.svg"
          />
        </Grid>
      </Grid>
    </SectionContainer>
  );
}

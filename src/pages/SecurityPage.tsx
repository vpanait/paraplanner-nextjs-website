"use client"
import * as React from 'react';
import Typography from '@mui/material/Typography';
import SectionContainer from '@/components/SectionContainer';
import {
  Box,
  Grid, useTheme
} from '@mui/material';
import t from '@/dictionaries/en.json';


export default function SecurityPage() {
  const theme = useTheme();

  return (
    <>
      <SectionContainer withoutAnimation>
        <Grid container >
          <Grid item container xs={12} sm={12} sx={{ justifyContent: 'center' }}>
            <Typography variant="h1">
              <span style={{ color: theme.palette.info.main }}>{t.securityPage.title}</span>
            </Typography>
          </Grid>

          <Grid container sx={{ justifyContent: 'space-between', rowGap: 2 }} >
            <Grid item container xs={12} sm={7} sx={{ justifyContent: 'center' }}>
              <Typography variant='h1' sx={{ fontSize: 20 }}>
                We do have!
              </Typography>
            </Grid>

            <Grid item container xs={12} sm={4} sx={{ justifyContent: 'center', alignItems: 'flex-start' }}>
              <Box
                component="img"
                sx={{ maxWidth: { xs: 1 } }}
                src="/img/undraw_secure_login_pdn4.svg"
              />
            </Grid>
          </Grid>
        </Grid>
      </SectionContainer>
    </>
  );
}

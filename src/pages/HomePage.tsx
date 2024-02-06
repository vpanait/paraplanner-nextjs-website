"use client"
import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import SectionContainer from '@/components/SectionContainer';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button, Card, Divider, Grid, Stack, useTheme
} from '@mui/material';
import t from '@/app/dictionaries/en.json';
import { APP_SIGN_UP_URL, ROUTE } from '@/utils/constants';
import ExpandMore from "@mui/icons-material/ExpandMore";
import ThemeModeWrapper from '@/theme/ThemeModeWrapper';


export default function HomePage() {
  const theme = useTheme();

  return (
    <>
      <SectionContainer withoutAnimation>
        <Grid container>
          <Grid item container md={6} sm={12} sx={{ flexDirection: 'column', justifyContent: 'center', gap: 3 }}>
            <Typography variant="h1">
              {t.homePage.hero.titleA} <span style={{ color: theme.palette.info.main }}>{t.homePage.hero.titleB}</span> {t.homePage.hero.titleC}
            </Typography>
            <Typography variant="subtitle1">

              {t.homePage.hero.subtitle}
            </Typography>
            <Button variant='contained' href={APP_SIGN_UP_URL} target="_blank">{t.homePage.hero.button}</Button>
          </Grid>

          <Grid item container md={6} sm={12} sx={{ flexDirection: 'column', justifyContent: 'center' }}>
            <Box
              component="img"
              sx={{ maxWidth: { xs: 1 } }}
              src="https://illustrations.popsy.co/yellow/man-riding-a-rocket.svg"
            />
          </Grid>
        </Grid>
      </SectionContainer>

      <SectionContainer mode='dark'>
        <Grid container>
          <Grid item container xs={12} sm={12} sx={{ justifyContent: 'center' }}>
            <Typography variant="h1">
              {t.homePage.howWeSupport.titleA} <span style={{ color: theme.palette.info.main }}>{t.homePage.howWeSupport.titleB}</span>
            </Typography>
          </Grid>

          <Grid item container xs={12} sm={12} sx={{ justifyContent: 'center' }}>
            {['planning', 'acquisition', 'delegation'].map(item => {
              const key = item as 'planning';

              return (
                <Grid key={key} item container md={4} sm={12} sx={{ flexDirection: 'column', justifyContent: 'center' }}>
                  <Card variant="outlined" sx={{ height: '100%', marginX: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 1, p: 2, height: '100%' }}>
                      <Box>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                          <Typography gutterBottom variant="h5" component="div">
                            {t.homePage.howWeSupport[key]?.title}
                          </Typography>
                        </Stack>
                        <Typography color="text.secondary" variant="body1">
                          {t.homePage.howWeSupport[key]?.bodyA}
                        </Typography>
                        <Typography color="text.secondary" variant="body1" sx={{ fontStyle: 'italic' }}>
                          {t.homePage.howWeSupport[key]?.bodyB}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <Divider />
                        <Button variant='outlined' href={APP_SIGN_UP_URL} target="_blank">{t.homePage.howWeSupport.button}</Button>
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </SectionContainer>

      <SectionContainer>
        <Grid container>
          <Grid item container md={6} sm={12} sx={{ flexDirection: 'column', justifyContent: 'center' }}>
            <Box
              component="img"
              sx={{ maxWidth: { xs: 1 } }}
              src="https://illustrations.popsy.co/yellow/superhero.svg"
            />
          </Grid>

          <Grid item container md={6} sm={12} sx={{ flexDirection: 'column', justifyContent: 'center', gap: 3 }}>
            <Typography variant="h1">
              {t.homePage.security.titleA} <span style={{ color: theme.palette.info.main }}>{t.homePage.security.titleB}</span>
            </Typography>
            <Typography variant="subtitle1">

              {t.homePage.security.subtitle}
            </Typography>
            <Button variant='contained' href={ROUTE.SECURITY}>{t.homePage.security.button}</Button>
          </Grid>
        </Grid>
      </SectionContainer>


      <SectionContainer mode='dark'>
        <Grid container>
          <Grid item container xs={12} sm={12} sx={{ justifyContent: 'center' }}>
            <Typography variant="h1">
              <span style={{ color: theme.palette.info.main }}>{t.faqPage.title}</span>
            </Typography>
          </Grid>

          <Grid item container xs={12} sm={8} sx={{ justifyContent: 'center' }}>
            {['q1', 'q2', 'q3'].map((item, index) => {
              const key = item as 'q1';

              return (
                <Box key={key} sx={{ marginBottom: 1 }}>
                  <Accordion defaultExpanded={index === 0}>
                    <AccordionSummary
                      expandIcon={<ExpandMore />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography variant='h5' sx={{ fontSize: 16 }}>
                        {t.faqPage[key]?.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant='body1'>
                        {t.faqPage[key]?.body}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              )
            })}
          </Grid>

          <Grid item container xs={12} sm={4} sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <Box>
              <ThemeModeWrapper mode='light'>
                <Button variant='contained' href={ROUTE.FAQ}>{t.faqPage.button}</Button>
              </ThemeModeWrapper>
            </Box>
          </Grid>
        </Grid>
      </SectionContainer>
    </>
  );
}

"use client"
import * as React from 'react';
import Typography from '@mui/material/Typography';
import SectionContainer from '@/components/SectionContainer';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button, Card, Grid, Stack, useTheme
} from '@mui/material';
import t from '@/dictionaries/en.json';
import { APP_SIGN_UP_URL, KITCES_URL, ROUTE } from '@/utils/constants';
import ExpandMore from "@mui/icons-material/ExpandMore";
import InfoBanner from '@/components/InfoBanner';
import { themeGradient } from '@/theme/theme';


export default function HomePage() {
  const theme = useTheme();

  return (
    <>
      <SectionContainer
        withoutAnimation
        sx={{ minHeight: 'calc(100vh - 2 * 56px - 80px)' }}
      >
        <Grid container sx={{ justifyContent: 'space-between', rowGap: 2, height: '100%' }}>
          <Grid item container md={12} sm={12} sx={{ flexDirection: 'column', justifyContent: 'center', gap: 1.5 }}>
            <Typography variant="h2">
              {t.homePage.hero.titleA}
            </Typography>
            <Typography variant="h6">
              {t.homePage.hero.subtitle}
            </Typography>

            <Grid item container sx={{ gap: 1.5, marginTop: 4.5 }}>
              <Button variant='contained' href={APP_SIGN_UP_URL} target="_blank">{t.common.createPlan}</Button>
              <Button variant='outlined' href={APP_SIGN_UP_URL} target="_blank">{t.common.bookCall}</Button>
            </Grid>

            <Button variant="text" href={KITCES_URL} target="_blank" sx={{ width: 'fit-content', marginTop: 4.5 }}>
              <Stack direction="column" alignItems="center" spacing={1}>
                <Box
                  component="img"
                  sx={{ maxWidth: { xs: 1 } }}
                  src="/img/kitces.png"
                />
                <Typography variant='body2'>
                  {t.homePage.hero.asSeenOn}
                </Typography>
              </Stack>
            </Button>
          </Grid>
        </Grid>
      </SectionContainer>

      <InfoBanner>
        <Typography variant="body1">
          {t.homePage.usedBy}
        </Typography>
      </InfoBanner>


      {/* <Carousel /> */}

      <SectionContainer>
        <Grid container sx={{ flexDirection: 'column', justifyContent: 'space-between', rowGap: 2 }}>
          <Typography variant="body1">
            {t.homePage.theProblem.title}
          </Typography>
          <Typography variant="h4">
            {t.homePage.theProblem.subtitleA} <br />
            {t.homePage.theProblem.subtitleB}
          </Typography>

          <Grid item container xs={12} sm={12} sx={{ marginTop: 7, justifyContent: 'space-between', gap: 6 }}>
            {t.homePage.theProblem.box.map((box, index) => {
              const nrBoxes = t.homePage.theProblem.box.length;
              const gap = 6;
              const actualGap = theme.spacing(gap);

              return (
                <Card
                  variant="outlined"
                  sx={{
                    width: `calc((100% - ${nrBoxes - 1} * ${actualGap} ) / ${nrBoxes})`,
                    display: 'flex',
                    alignItems: 'center',
                    background: `linear-gradient(${theme.palette.background.default} 0 0) padding-box,  ${themeGradient} border-box`
                  }}
                >
                  <Typography variant="h6">
                    {box}
                  </Typography>
                </Card>
              )
            })}
          </Grid>
        </Grid >
      </SectionContainer >

      {/* <SectionContainer>
        <Grid container sx={{ justifyContent: 'space-between', rowGap: 2 }}>
          <Grid item container md={5} sm={12} sx={{ flexDirection: 'column', justifyContent: 'center' }}>
            <Box
              component="img"
              sx={{ maxWidth: { xs: 1 } }}
              src="/img/undraw_secure_login_pdn4.svg"
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


      <SectionContainer>
        <Grid container sx={{ justifyContent: 'space-between', rowGap: 2 }}>
          <Grid item container sx={{ justifyContent: 'center' }}>
            <Typography variant="h1">
              <span style={{ color: theme.palette.info.main }}>{t.faqPage.title}</span>
            </Typography>
          </Grid>

          <Grid container sx={{ justifyContent: 'space-between', rowGap: 2 }}>
            <Grid item container xs={12} sm={7} sx={{ justifyContent: 'center' }}>
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

            <Grid item container xs={12} sm={4} sx={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column', rowGap: 2 }}>
              <Box
                component="img"
                sx={{ maxWidth: { xs: 1 } }}
                src="/img/undraw_questions_re_1fy7.svg"
              />

              <Box>
                <Button variant='contained' href={ROUTE.FAQ}>{t.faqPage.button}</Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </SectionContainer> */}
    </>
  );
}

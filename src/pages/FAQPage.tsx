"use client"
import * as React from 'react';
import Typography from '@mui/material/Typography';
import SectionContainer from '@/components/SectionContainer';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid, useTheme
} from '@mui/material';
import t from '@/dictionaries/en.json';
import ExpandMore from "@mui/icons-material/ExpandMore";


export default function FAQPage() {
  const theme = useTheme();

  return (
    <>
      <SectionContainer withoutAnimation>
        <Grid container >
          <Grid item container xs={12} sm={12} sx={{ justifyContent: 'center' }}>
            <Typography variant="h1">
              <span style={{ color: theme.palette.info.main }}>{t.faqPage.title}</span>
            </Typography>
          </Grid>

          {/* <Grid container sx={{ justifyContent: 'space-between', rowGap: 2 }} >
            <Grid item container xs={12} sm={7} sx={{ justifyContent: 'center' }}>
              {new Array(8).fill(undefined).map((item, index) => {
                const key = `q${index + 1}` as 'q1';
                return (
                  <Box key={index} sx={{ marginBottom: 1 }}>
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

            <Grid item container xs={12} sm={4} sx={{ justifyContent: 'center', alignItems: 'flex-start' }}>
              <Box
                component="img"
                sx={{ maxWidth: { xs: 1 } }}
                src="/img/undraw_home_run_acyh.svg"
              />
            </Grid>
          </Grid> */}
        </Grid>
      </SectionContainer>
    </>
  );
}

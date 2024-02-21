"use client"
import * as React from 'react';
import Typography from '@mui/material/Typography';
import SectionContainer from '@/components/SectionContainer';
import {
  Box, Button, Card, Grid, Stack, Tab, Tabs, ThemeProvider, alpha, useMediaQuery, useTheme
} from '@mui/material';
import t from '@/dictionaries/en.json';
import { APP_SIGN_UP_URL, CONTACT, KITCES_URL } from '@/utils/constants';
import InfoBanner from '@/components/InfoBanner';
import { themeLight, themeDark, themeColors, themeGradients } from '@/theme/theme';
import Navbar from '@/components/Navbar';
import { useState } from 'react';
import Slider from 'react-slick';


export default function HomePage() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [solutionTabValue, setSolutionTabValue] = useState(0);
  const sliderRef = React.useRef<Slider>(null);

  React.useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(solutionTabValue);
    }
  }, [solutionTabValue]);

  return (
    <>
      <ThemeProvider theme={themeDark}>
        <Stack
          sx={{
            background: themeGradients.heroGradient,
            minHeight: '100vh',
            justifyContent: 'space-between'
          }}>
          <Navbar />

          <SectionContainer
            withoutAnimation
            sx={{
              marginBottom: '43px'
            }}
          >
            <Stack>
              <Typography
                variant="h3"
                sx={{
                  maxWidth: { xl: "1010px", xs: "540px" },
                  marginBottom: 1.5
                }}
              >
                {t.homePage.hero.title}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  maxWidth: { xl: "1010px", xs: "525px" },
                }}
              >
                {t.homePage.hero.subtitle}
              </Typography>

              <Stack sx={{
                flexDirection: { sm: "row", xs: "column" },
                gap: 1.5,
                marginTop: 4.5
              }}>
                <Button variant='contained' href={CONTACT.GET_STARTED} target="_blank">{t.common.getStarted}</Button>
                <Button variant='outlined' href={CONTACT.BOOK_INTRO_CALL} target="_blank">{t.common.bookIntroCall}</Button>
              </Stack>

              <Button
                variant="text"
                href={KITCES_URL}
                target="_blank"
                sx={{
                  width: 'fit-content',
                  marginTop: '42px',
                  border: '1px solid transparent',
                  "&:hover": {
                    borderColor: alpha(themeColors.dark.text, 0.2),
                  }
                }}
              >
                <Stack alignItems="flex-start" spacing={1}>
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
            </Stack>
          </SectionContainer>

          <ThemeProvider theme={themeLight}>
            <InfoBanner sx={{
              minHeight: { xs: "68px", sm: '88px' }
            }}>
              <Typography variant="h6" sx={{
                textAlign: 'center',
                paddingY: 1,
                maxWidth: { xs: '320px', sm: 'none' }
              }}>
                {t.homePage.usedBy}
              </Typography>
            </InfoBanner>
          </ThemeProvider>
        </Stack>
      </ThemeProvider>

      {/* <Divider
        sx={{
          background: themeGradients.heroGradient,
          height: '5px',
        }}
      /> */}

      <SectionContainer sx={{ paddingTop: { xs: 6.5, sm: 13.5 } }}>
        <Stack>
          <Typography variant="subtitle1" sx={{ marginBottom: 1.5 }}>
            {t.homePage.theProblem.title}
          </Typography>
          <Typography variant="h4" sx={{ marginBottom: 6, maxWidth: { xs: "1120px" }, }}>
            {t.homePage.theProblem.subtitle}
          </Typography>

          <Grid item container
            sx={{
              justifyContent: 'space-between',
              gap: { xs: 3, sm: 6 },
              flexDirection: { xs: "column", md: 'row' }
            }}
          >
            {t.homePage.theProblem.box.map((box, index) => {
              return (
                <ThemeProvider theme={themeDark} key={index}>
                  <Card
                    sx={{
                      display: 'flex',
                      background: themeGradients.problemsGradients?.[index],
                      flex: 1,
                    }}
                  >
                    <Stack alignItems="flex-start" spacing={1.5}>
                      <Box
                        component="img"
                        sx={{ maxWidth: { xs: 1 } }}
                        src={`/img/box${index}.png`}
                      />
                      <Typography variant="h6">
                        {box}
                      </Typography>
                    </Stack>
                  </Card>
                </ThemeProvider>
              )
            })}
          </Grid>
        </Stack >
      </SectionContainer >

      <ThemeProvider theme={themeDark}>
        <InfoBanner centered={false} withoutAnimation={false} sx={{
          background: themeGradients.poweredByGradient,
          paddingY: 6
        }}>
          <Typography variant="h3" sx={{
            maxWidth: { xl: "none", xs: "725px" }
          }}>
            {t.homePage.poweredBy.title}
          </Typography>
          <Typography variant="h6" sx={{
            marginTop: 1.5,
            maxWidth: { xl: "none", xs: "725px" }
          }}>
            {t.homePage.poweredBy.subtitle}
          </Typography>
        </InfoBanner>
      </ThemeProvider>

      <SectionContainer>
        <Stack>
          <Typography variant="subtitle1" sx={{ marginBottom: 1.5 }}>
            {t.homePage.ourSolution.title}
          </Typography>
          <Typography variant="h4" sx={{ marginBottom: 9, maxWidth: { xs: "1350px" }, }}>
            {t.homePage.ourSolution.subtitle}
          </Typography>

          <Grid item container
            sx={{
              justifyContent: 'space-between',
              gap: 6,
              flexDirection: { xs: "column", md: 'row' }
            }}
          >
            <Box sx={{ width: '100%' }}>
              <Tabs
                variant="scrollable"
                scrollButtons="auto"
                value={solutionTabValue}
                onChange={
                  (event: React.SyntheticEvent, newValue: number) => {
                    setSolutionTabValue(newValue);
                  }}
                sx={{
                  "& .MuiTabs-flexContainer": {
                    gap: 7.5
                  },
                  "& .MuiTab-root": {
                    padding: 0
                  },
                  "& .MuiTabs-indicator": {
                    background: "linear-gradient(89.88deg, #12222F 0%, #2849C2 68.79%, #449FE7 100%)"
                  }
                }}
              >
                {
                  t.homePage.ourSolution.tabs.map((tab, index) =>
                    <Tab
                      key={`tab${index}`}
                      disableRipple
                      value={index}
                      label={
                        <Typography variant='h6'>
                          {tab.heading}
                        </Typography>
                      }
                      wrapped
                    />
                  )
                }
              </Tabs>

              <Slider
                dots={false}
                swipe={isSmallScreen}
                ref={sliderRef}
                arrows={false}
                infinite={false}
                afterChange={(slideIndex) => {
                  setSolutionTabValue(slideIndex)
                }}
              >
                {t.homePage.ourSolution.tabs.map((tab, index) => {
                  const maxWidth = [600, 535, 510]
                  const maxWidthSubtitle = [500, 490, 510]

                  return (
                    <Stack
                      key={`solution-${index}`}
                      sx={{
                        alignItems: "flex-start",
                        marginTop: 6,
                        maxWidth: { xs: "none", md: `${maxWidth[index]}px` },
                      }} >
                      <Typography variant="h5">
                        {tab.title}
                      </Typography>

                      <Typography variant="body1" sx={{
                        marginTop: 3,
                        maxWidth: { xs: "none", md: `${maxWidthSubtitle[index]}px` },
                      }}>
                        {tab.subtitle}
                      </Typography>
                    </Stack>
                  )
                })}
              </Slider>
            </Box>
          </Grid>
        </Stack >
      </SectionContainer>

      <ThemeProvider theme={themeDark}>
        <InfoBanner centered={false} withoutAnimation={false} sx={{
          background: themeGradients.supportGradient,
          paddingY: 3
        }}>
          <Grid
            item container
            sx={{
              justifyContent: 'space-between',
              gap: 6,
              flexDirection: { xs: "column", md: 'row' }
            }}
          >
            {t.homePage.support.box.map((box, index) => {
              return (
                <Stack
                  key={`support-${index}`}
                  sx={{
                    alignItems: "flex-start",
                    maxWidth: { xs: "none", md: '400px' },
                    flex: 1,
                  }} >
                  <Typography variant="subtitle2">
                    {box.title}
                  </Typography>

                  <Typography variant="body1">
                    {box.subtitle}
                  </Typography>
                </Stack>
              )
            })}
          </Grid>
        </InfoBanner>
      </ThemeProvider>

      <SectionContainer>

        <Grid item container
          sx={{
            justifyContent: 'space-between',
            gap: { xs: 6, lg: 12.5 },
            flexDirection: { xs: "column", md: 'row' },
            flexWrap: 'nowrap'
          }}
        >
          {['our', 'your'].map((who, index) => {
            const texts = who === 'our' ? t.homePage.plans.our : t.homePage.plans.your
            const title = t.homePage.plans.title.split('${placeholder}')
            const subtitle = texts.subtitle.split('${placeholder}')

            return (
              <Box
                key={`featureBox-${index}`}
                sx={{
                  display: 'flex',
                  flex: 1,
                }}
              >
                <Stack
                  sx={{
                    justifyContent: 'space-between'
                  }}
                >
                  <Box>
                    <Typography variant="h4" sx={{ marginBottom: 1.5 }}>
                      {title[0]} <span style={{ color: themeColors.light.textAccent, textDecoration: 'underline' }}>{texts.titlePlaceholder}</span> {title[1]}
                    </Typography>

                    <Typography variant="h6" sx={{ marginBottom: 4.5 }}>
                      {subtitle[0]} <span style={{ color: themeColors.light.textAccent, textDecoration: 'underline' }}>{texts.subtitlePlaceholder}</span> {subtitle[1]}
                    </Typography>

                    {texts.features.map((feature, featureIndex) => (
                      <Stack
                        key={`feature-${featureIndex}`}
                        sx={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginBottom: 1.5,
                          gap: 3
                        }}>
                        <Box
                          component="img"
                          sx={{
                            width: '16px',
                            height: '16px'
                          }}
                          src="/img/checkbox.png"
                        />
                        <Typography key={`feature-${featureIndex}`} variant="subtitle2">
                          {feature}
                        </Typography>
                      </Stack>
                    ))}
                  </Box>

                  <Box>
                    <Stack sx={{
                      gap: 4.5,
                      marginTop: 6.5
                    }}>
                      <Typography variant="h6">
                        {texts.price} <span style={{ fontWeight: 400 }}>{texts.period} </span>
                      </Typography>

                      <Stack sx={{
                        flexDirection: { sm: "row", xs: "column" },
                        gap: 1.5,
                      }}>
                        <Button variant='contained' href={CONTACT.GET_STARTED} target="_blank">{t.common.getStarted}</Button>
                        <Button variant='outlined' href={CONTACT.BOOK_INTRO_CALL} target="_blank">{t.common.bookIntroCall}</Button>
                      </Stack>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            )
          })}
        </Grid>
      </SectionContainer>

      <ThemeProvider theme={themeDark}>
        <InfoBanner withoutAnimation={false} sx={{
          background: themeGradients.contactGradient,
          paddingY: 6.5,
        }}>
          <Stack sx={{
            gap: 3,
          }}>
            <Typography variant="h6" sx={{ textAlign: 'center' }} >
              {t.homePage.contact.title}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 1.5,
                justifyContent: 'center'
              }}
            >
              <Button variant='contained' href={`tel:${CONTACT.PHONE}`} rel="noopener noreferrer">{t.homePage.contact.callUsNow}</Button>
              <Button variant='outlined' href={CONTACT.BOOK_A_CALL} target="_blank">{t.homePage.contact.bookCall}</Button>
              <Button variant='outlined' href={`mailto:${CONTACT.EMAIL}?subject=${t.homePage.contact.emailSubject}`} rel="noopener noreferrer">{t.homePage.contact.contactViaEmail}</Button>
            </Box>
          </Stack>
        </InfoBanner>
      </ThemeProvider>

      <SectionContainer>
        <Typography variant="h4" sx={{ marginBottom: 6 }}>
          {t.faqPage.title}
        </Typography>

        <Grid item container
          sx={{
            justifyContent: 'space-between',
            gap: { xs: 6, md: 4.5 },
          }}
        >
          {t.faqPage.questions.map((question, index) => (
            <Stack
              key={`faq-${index}`}
              sx={{
                width: { xs: '100%', md: `calc(50% - ${theme.spacing(4.5 / 2)})` }
              }}
            >
              <Typography variant="h6" sx={{ marginBottom: 1.5 }}>
                {question.title}
              </Typography>

              <Typography variant="body1">
                {question.body}
              </Typography>
            </Stack>
          ))}
        </Grid>
      </SectionContainer >
    </>
  );
}

"use client"
import * as React from 'react';
import Typography from '@mui/material/Typography';
import SectionContainer from '@/components/SectionContainer';
import {
  Box,
  Button,
  Grid, Link, PaletteMode, Stack, ThemeProvider
} from '@mui/material';
import t from '@/dictionaries/en.json';
import { CONTACT } from '@/utils/constants';
import { themeDark, themeGradients } from '@/theme/theme';
import InfoBanner from './InfoBanner';

interface IFooterContainer {
  title: React.ReactNode,
  children?: React.ReactNode,
}

const FooterContainer = ({ children, title }: IFooterContainer) => {
  return (
    <Grid item container lg={2.4} sm={6} sx={{ flexDirection: 'row', justifyContent: { xs: 'center', md: 'flex-start' } }}>
      <Stack spacing={1.5} alignItems={{ xs: 'center', md: 'flex-start' }}>
        <Typography variant="subtitle2">
          {title}
        </Typography>

        {children}
      </Stack>
    </Grid>
  )
}

const Footer = () => {
  return (
    <ThemeProvider theme={themeDark}>
      <InfoBanner withoutAnimation={false} sx={{
        background: themeGradients.footerGradient,
        paddingTop: 10,
        paddingBottom: 30,
      }}>
        <Grid
          container
          sx={{ rowGap: 6 }}
        >
          <FooterContainer title={t.common.contactUs}>
            <Link href={`mailto:${CONTACT.EMAIL}`} rel="noopener noreferrer" variant='body1'>
              {CONTACT.EMAIL}
            </Link>

            <Link href={`tel:${CONTACT.PHONE}`} rel="noopener noreferrer" variant='body1'>
              {CONTACT.PHONE_DISPLAY}
            </Link>
          </FooterContainer>

          <FooterContainer title={t.common.followUs}>
            <Link href={CONTACT.LINKEDIN} rel="noopener noreferrer" variant='body1' target="_blank">
              {t.common.linkedin}
            </Link>

            <Link href={CONTACT.TWITTER} rel="noopener noreferrer" variant='body1' target="_blank">
              {t.common.twitter}
            </Link>
          </FooterContainer>

          <FooterContainer title={t.common.company}>
            <Link href={'/'} rel="noopener noreferrer" variant='body1' target="_blank">
              {t.common.team}
            </Link>

            <Link href={'/'} rel="noopener noreferrer" variant='body1' target="_blank">
              {t.common.about}
            </Link>

            <Link href={'/'} rel="noopener noreferrer" variant='body1' target="_blank">
              {t.common.faq}
            </Link>
          </FooterContainer>

          <FooterContainer title={t.common.legal}>
            <Link href={CONTACT.TERMS} rel="noopener noreferrer" variant='body1' target="_blank">
              {t.common.terms}
            </Link>

            <Link href={CONTACT.PRIVACY} rel="noopener noreferrer" variant='body1' target="_blank">
              {t.common.privacy}
            </Link>
          </FooterContainer>
        </Grid>
      </InfoBanner>
    </ThemeProvider>
  );
}

export default Footer;
"use client"
import * as React from 'react';
import Typography from '@mui/material/Typography';
import {
  Grid, Link, Stack, ThemeProvider
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
        paddingY: { xs: 5, sm: 10 }
      }}>
        <Grid
          container
          sx={{ rowGap: 6 }}
        >
          <FooterContainer title={t.footer.contactUs}>
            <Link href={`mailto:${CONTACT.EMAIL}?subject=${t.footer.emailSubject}`} rel="noopener noreferrer" variant='body1'>
              {CONTACT.EMAIL}
            </Link>

            <Link href={`tel:${CONTACT.PHONE}`} rel="noopener noreferrer" variant='body1'>
              {CONTACT.PHONE_DISPLAY}
            </Link>
          </FooterContainer>

          <FooterContainer title={t.footer.followUs}>
            <Link href={CONTACT.LINKEDIN} rel="noopener noreferrer" variant='body1' target="_blank">
              {t.footer.linkedin}
            </Link>

            <Link href={CONTACT.TWITTER} rel="noopener noreferrer" variant='body1' target="_blank">
              {t.footer.twitter}
            </Link>
          </FooterContainer>

          <FooterContainer title={t.footer.company}>
            <Link href={'/'} rel="noopener noreferrer" variant='body1' target="_blank">
              {t.footer.team}
            </Link>

            <Link href={'/'} rel="noopener noreferrer" variant='body1' target="_blank">
              {t.footer.about}
            </Link>

            <Link href={'/'} rel="noopener noreferrer" variant='body1' target="_blank">
              {t.footer.faq}
            </Link>
          </FooterContainer>

          <FooterContainer title={t.footer.legal}>
            <Link href={CONTACT.TERMS} rel="noopener noreferrer" variant='body1' target="_blank">
              {t.footer.terms}
            </Link>

            <Link href={CONTACT.PRIVACY} rel="noopener noreferrer" variant='body1' target="_blank">
              {t.footer.privacy}
            </Link>
          </FooterContainer>

          <Stack
            sx={{
              marginTop: { xs: 5, sm: 11.5 },
              flexDirection: { xs: 'column', sm: 'row' },
              width: '100%',
              justifyContent: { xs: 'center', md: 'flex-start' },
              alignItems: { xs: 'center', md: 'flex-start' },
              gap: 1
            }}
          >
            {/* <Typography variant='subtitle2'>
              {t.footer.freedomFighters}
            </Typography>
            <Typography variant='body1'>
              {t.footer.allRightsReserved}
            </Typography> */}
          </Stack>
        </Grid>
      </InfoBanner>
    </ThemeProvider>
  );
}

export default Footer;
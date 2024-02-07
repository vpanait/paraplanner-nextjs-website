"use client"
import * as React from 'react';
import Typography from '@mui/material/Typography';
import SectionContainer from '@/components/SectionContainer';
import {
  Grid, Link, PaletteMode, Stack} from '@mui/material';
import t from '@/dictionaries/en.json';
import { FOOTER } from '@/utils/constants';


interface IProps {
  mode?: PaletteMode;
}

const Footer = ({ mode = 'dark' }: IProps) => {
  return (
    <SectionContainer withoutAnimation mode={mode}>
      <Grid container sx={{ justifyContent: 'space-between', rowGap: 2 }}>
        <Grid item container md={4} sm={12} sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: { xs: 'center', md: 'flex-start' } }}>
          <Typography variant="h6" sx={{ marginBottom: 1 }}>
            {t.common.contactUs}
          </Typography>

          <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }}>
          <Link href={`mailto:${FOOTER.EMAIL}`} rel="noopener noreferrer">
            {FOOTER.EMAIL}
          </Link>

          <Link href={`tel:${FOOTER.PHONE}`} rel="noopener noreferrer">
            {FOOTER.PHONE}
          </Link>
        </Stack>
      </Grid>

      <Grid item container md={4} sm={12} sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: { xs: 'center', md: 'flex-start' } }}>
        <Typography variant="h6" sx={{ marginBottom: 1 }}>
          {t.common.socials}
        </Typography>

        <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }}>
          <Link href={FOOTER.LINKEDIN} rel="noopener noreferrer" target="_blank">
            {t.common.linkedin}
          </Link>

          <Link href={FOOTER.TWITTER} rel="noopener noreferrer" target="_blank">
            {t.common.twitter}
          </Link>
        </Stack>
      </Grid>

      <Grid item container md={4} sm={12} sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: { xs: 'center', md: 'flex-start' } }}>
        <Typography variant="h6" sx={{ marginBottom: 1 }}>
          {t.common.other}
        </Typography>

        <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }}>
          <Link href={FOOTER.TERMS} rel="noopener noreferrer" target="_blank">
            {t.common.terms}
          </Link>

          <Link href={FOOTER.PRIVACY} rel="noopener noreferrer" target="_blank">
            {t.common.privacy}
          </Link>
        </Stack>
      </Grid>

    </Grid>
    </SectionContainer >
  );
}

export default Footer;

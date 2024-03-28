"use client"
import * as React from 'react';
import SectionContainer from '@/components/SectionContainer';
import { Stack, ThemeProvider } from '@mui/material';
import { themeDark, themeGradients } from '@/theme/theme';
import Navbar from '@/components/Navbar';
import DocHeader from '@/components/DocHeader';
import DocItem from '@/components/DocItem';
import DocList from '@/components/DocList';
import { CONTACT } from '@/utils/constants';

export default function SupportPage() {
  return (
    <>
      <ThemeProvider theme={themeDark}>
        <Stack
          sx={{
            background: themeGradients.heroGradient,
            justifyContent: 'space-between'
          }}>
          <Navbar />
        </Stack>
      </ThemeProvider>

      <SectionContainer withoutAnimation={true}>
        <Stack>
          <DocHeader sx={{ fontSize: 38, marginBottom: 4, textAlign: 'center' }}>
            Contact Our Support Team
          </DocHeader>

          <DocItem>
            We understand that timely and efficient support is crucial for maintaining smooth operations. Our support team is dedicated to providing you with the assistance you need.
          </DocItem>



          <DocHeader>
            How to Reach Us
          </DocHeader>

          <DocItem sx={{ marginBottom: 0 }}>
            Email Support:
          </DocItem>
          <DocList><li>
            For any support-related inquiries, please email us at: supportme@paraplanner.ai
          </li></DocList>

          <DocItem sx={{ marginBottom: 0 }}>
            Submit a Support Case:
          </DocItem>
          <DocList><li>
            If you're experiencing an issue with MuninAI, you can submit a support case using our <a href="https://forms.gle/pgTgf6K3z1USDRyq7" target='_blank'>Support Case Form</a>.
          </li></DocList>

          <DocItem sx={{ marginBottom: 0 }}>
            Support Phone Number:
          </DocItem>
          <DocList><li>
            If you need to speak with a support representative, call us at: <a href={`tel:${CONTACT.PHONE}`} rel="noopener noreferrer">{CONTACT.PHONE_DISPLAY}</a> (available 9 AM - 5 PM CST, Monday through Friday).
          </li></DocList>


          <DocHeader>
            Support Expectations
          </DocHeader>

          <DocItem sx={{ marginBottom: 0 }}>
            Support Hours:
          </DocItem>
          <DocList>
            <li>
              Our support team is available from 9 AM to 5 PM Central Standard Time (CST), Monday through Friday.
            </li>
          </DocList>

          <DocItem sx={{ marginBottom: 0 }}>
            First Response SLA:
          </DocItem>
          <DocList><li>
            When you reach out to us, you can expect to receive your first human response within 24 hours. Our goal is to provide you with quick, actionable support to resolve any issues you might be facing with MuninAI.
          </li></DocList>

          <DocItem>
            We value your experience with MuninAI and are here to support you every step of the way.
          </DocItem>

        </Stack >
      </SectionContainer >
    </>
  );
}

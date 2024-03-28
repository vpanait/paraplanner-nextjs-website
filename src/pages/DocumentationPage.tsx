"use client"
import * as React from 'react';
import SectionContainer from '@/components/SectionContainer';
import { Stack, ThemeProvider } from '@mui/material';
import { themeDark, themeGradients } from '@/theme/theme';
import Navbar from '@/components/Navbar';
import DocHeader from '@/components/DocHeader';
import DocItem from '@/components/DocItem';
import DocList from '@/components/DocList';

export default function DocumentationPage() {
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
            MuninAI for Zoom: Documentation
          </DocHeader>

          <DocHeader>
            Usage
          </DocHeader>

          <DocItem>
            MuninAI enhances virtual meetings on Zoom by providing the following features: Real-Time Transcription, Data Points Collection, Intelligent Question Prompting, and Talk-to-Transcript Feature.
          </DocItem>
          <DocItem sx={{ marginBottom: 0 }}>
            To use MuninAI:
          </DocItem>
          <DocList>
            <li>You can log in at the following URL with your email and password: https://app.paraplanner.ai/login-munin</li>
            <li>You can input additional details about the meeting in the form, along with the URL of the Zoom conference that you want to record.</li>
            <li>Start or join a Zoom meeting.</li>
            <li>Permit the bot to add to the call and you will be able to use all real-time features.</li>
          </DocList>

          <DocHeader>
            Installation
          </DocHeader>

          <DocItem>
            No installation is required for MuninAI. Simply start or join a Zoom meeting and launch MuninAI directly within Zoom.
          </DocItem>

          <DocHeader>
            Uninstallation
          </DocHeader>

          <DocItem>
            Since MuninAI is not integrated via OAuth and does not require installation, no uninstallation procedure is necessary. If you wish to stop using MuninAI, discontinue its use in your Zoom meetings.
          </DocItem>

          <DocHeader>
            Troubleshooting
          </DocHeader>

          <DocItem sx={{ marginBottom: 0 }}>
            Transcription Not Displaying:
          </DocItem>
          <DocList>
            <li>Ensure that you have launched MuninAI within your Zoom meeting. Check that a meeting bot is added to the call and recording started.</li>
          </DocList>

          <DocItem sx={{ marginBottom: 0 }}>Data Points Not Collected:</DocItem>
          <DocList>
            <li>Verify that the audio is clear for MuninAI to capture the conversation effectively.</li>
          </DocList>

          <DocItem sx={{ marginBottom: 0 }}>Questions Not Appearing:</DocItem>
          <DocList>
            <li>If MuninAI is not displaying questions, ensure there is active participation in the meeting for the feature to work properly.</li>
          </DocList>
          <DocItem sx={{ marginBottom: 0 }}>Unable to Interact with transcript:</DocItem>
          <DocList>
            <li>If interaction with the transcription is not functioning, refresh the MuninAI.</li>
          </DocList>

        </Stack >
      </SectionContainer >
    </>
  );
}

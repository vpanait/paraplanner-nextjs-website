import "./globals.css";
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from '@/theme/theme';
import Navbar from '../components/Navbar';
import t from '@/app/dictionaries/en.json';
import { ROUTE } from "@/utils/constants"

export const metadata = {
  title: 'paraplanner.ai',
  openGraph: {
    title: 'paraplanner.ai',
    description: 'Delegate admin and planning tasks and focus on more important things',
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const routes = [
    {
      label: t.route.security,
      path: ROUTE.SECURITY,
    },
    {
      label: t.route.about,
      path: ROUTE.ABOUT.BASE,
      subItems: [
        { label: t.route.company, path: ROUTE.ABOUT.COMPANY },
        { label: t.route.team, path: ROUTE.ABOUT.TEAM },
      ],
    },
  ];


  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={defaultTheme}>
            <ThemeProvider theme={defaultTheme}>
              <CssBaseline />
              <Navbar routes={routes} mode="dark" />
              {props.children}
            </ThemeProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

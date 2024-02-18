import "./globals.css";
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme/theme';
import Navbar from '../components/Navbar';
import t from '@/dictionaries/en.json';
import { ROUTE } from "@/utils/constants"
import Footer from "@/components/Footer";

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
      label: t.route.company,
      path: ROUTE.COMPANY,
    },
    // {
    //   label: t.route.about,
    //   path: ROUTE.ABOUT.BASE,
    //   subItems: [
    //     { label: t.route.company, path: ROUTE.ABOUT.COMPANY },
    //     { label: t.route.team, path: ROUTE.ABOUT.TEAM },
    //   ],
    // },
  ];


  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar routes={routes} />
            {props.children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

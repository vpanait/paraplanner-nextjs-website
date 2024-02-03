import "./globals.css";
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme, { defaultTheme, getThemeOptions } from '@/theme/theme';
import ExpandMore from "@mui/icons-material/ExpandMore";
import MenuIcon from '@mui/icons-material/Menu';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'paraplanner.ai',
  openGraph: {
    title: 'paraplanner.ai',
    description: 'Delegate admin and planning tasks and focus on more important things',
  },
}

export default function RootLayout(props: { children: React.ReactNode }) {
  const routes = [
    { label: 'Home', path: '/' },
    {
      label: 'Parent Route',
      path: '/parent',
      subItems: [
        { label: 'Subroute 1', path: '/parent/subroute1' },
        { label: 'Subroute 2', path: '/parent/subroute2' },
      ],
    },
    { label: 'About', path: '/about' },
  ];


  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Navbar routes={routes} />
            {props.children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

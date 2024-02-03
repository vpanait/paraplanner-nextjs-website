import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme/theme';
import "./globals.css";
import Menu from '../components/Menu';
import ExpandLess from "@mui/icons-material/ExpandLess";
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
    { label: 'Home', path: '/', icon: <MenuIcon /> },
    {
      label: 'Parent Route',
      path: '/parent',
      icon: <ExpandMore />,
      subItems: [
        { label: 'Subroute 1', path: '/parent/subroute1', icon: <ExpandMore /> },
        { label: 'Subroute 2', path: '/parent/subroute2', icon: <ExpandMore /> },
      ],
    },
    { label: 'About', path: '/about', icon: <ExpandMore /> },
  ];


  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar routes={routes}/>
            {props.children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

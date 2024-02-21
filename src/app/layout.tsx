import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { themeLight } from '@/theme/theme';
import Footer from "@/components/Footer";
import t from '@/dictionaries/en.json';
import type { Viewport } from 'next'

export const viewport: Viewport = {
  themeColor: "#12222F"
}

export const metadata = {
  title: t.app.title,
  openGraph: {
    title: t.app.title,
    description: t.app.description,
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={themeLight}>
            <CssBaseline />

            {props.children}

            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

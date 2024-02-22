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
import { GoogleAnalytics } from '@next/third-parties/google'
import { GA4 } from "@/utils/ga4";


export const viewport: Viewport = {
  themeColor: "#12222F"
}

export const metadata = {
  title: t.app.title,
  description: t.app.description,
  generator: t.app.title,
  applicationName: t.app.title,
  referrer: 'origin-when-cross-origin',
  keywords: ['financial', 'advisor', 'paraplanner'],
  openGraph: {
    title: t.app.title,
    description: t.app.description,
    url: t.app.website,
    siteName: t.app.title,
    // images: [
    //   {
    //     url: t.app.ogImage,
    //     width: 800,
    //     height: 600,
    //   }
    // ],
    type: 'website',
  },
  metadataBase: new URL(t.app.website),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        <GoogleAnalytics gaId={GA4} />
      </body>
    </html>
  );
}

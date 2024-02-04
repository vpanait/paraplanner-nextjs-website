import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import ProTip from '@/components/ProTip';
import Copyright from '@/components/Copyright';
import * as React from 'react';
import "./globals.css";
import SectionContainer from '@/components/SectionContainer';
import HomePage from '@/pages/HomePage';
import { getDictionary } from 'get-dictionary';

export default async function Home() {
  const dic = await getDictionary();
  return (
    <>
      <HomePage />
      ========
      <SectionContainer >
        <Typography sx={{ mt: 6, mb: 3, color: 'text.secondary' }}>
          HomePageHomePageHomePageHomePageHomePageHomePageHomePageHomePage
          <Link href="https://mui.com/material-ui/getting-started/templates/">templates</Link>
          {' in the Material UI documentation.'}
        </Typography>
      </SectionContainer>
      <SectionContainer mode="dark">
        <Typography sx={{ mt: 6, mb: 3, color: 'text.secondary' }}>
          HomePageHomePageHomePageHomePageHomePageHomePageHomePageHomePage
          <Link href="https://mui.com/material-ui/getting-started/templates/">templates</Link>
          {' in the Material UI documentation.'}
        </Typography>
      </SectionContainer>

      <HomePage />
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h1" sx={{ mb: 2 }}>
          Workflow automation platform for independent financial advisors
        </Typography>
        <Typography variant="h4">
          :) Material UI - Next.js App Router example in TypeScript
        </Typography>

        <Link href="/about" color="secondary" component={NextLink}>
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />


        <Typography variant="h1" sx={{ mb: 2 }}>
          H! Material UI - Next.js App Router example in TypeScript
        </Typography>
        <Typography variant="h4" sx={{ mb: 2 }}>
          :) Material UI - Next.js App Router example in TypeScript
        </Typography>

        <Link href="/about" color="secondary" component={NextLink}>
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>

      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
         N Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div> */}
    </>
  );
}

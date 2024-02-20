"use client"
import React, { } from "react";
import SectionContainer from "@/components/SectionContainer";
import { Stack, SxProps, Theme } from "@mui/material";

interface IProps {
  children?: React.ReactNode;
  centered?: boolean;
  withoutAnimation?: boolean;
  sx?: SxProps<Theme>;
}

const InfoBanner = ({ children, centered = true, withoutAnimation = true, sx }: IProps) => {
  return (
    <SectionContainer
      withoutAnimation={withoutAnimation}
      disablePaddingY
      sx={{
        color: (theme) => theme.palette.primary.main,
        backgroundColor: (theme) => theme.palette.background.default,
        minHeight: '48px',
        ...sx
      }}
    >
      <Stack
        sx={{
          alignItems: centered ? 'center' : 'flex-start',
          justifyContent: 'center',
          height: '100%'
        }}
      >
        {children}
      </Stack>
    </SectionContainer>
  );
}

export default InfoBanner;
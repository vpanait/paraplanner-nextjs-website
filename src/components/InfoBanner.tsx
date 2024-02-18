"use client"
import React, { } from "react";
import SectionContainer from "@/components/SectionContainer";
import { themeGradient } from "@/theme/theme";
import { Box, Grid, Typography } from "@mui/material";
import t from '@/dictionaries/en.json';


interface IProps {
  children?: React.ReactNode;
}

const InfoBanner = ({ children }: IProps) => {


  return (
    <SectionContainer
      withoutAnimation
      disablePaddingY
      sx={{
        backgroundImage: themeGradient,
        color: "white"
      }}
      innerSx={{
        justifyContent: "center",
        alignItems: 'center'
      }}
    >
      <Grid container item sx={{
        justifyContent: "center",
        alignItems: 'center',
        paddingY: 2
      }}>
        {children}
      </Grid>
    </SectionContainer>
  );
}

export default InfoBanner;
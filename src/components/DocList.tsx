"use client"
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box, SxProps, Theme } from '@mui/material';

interface IProps {
  children?: React.ReactNode,
  sx?: SxProps<Theme>;
}

const DocList = ({ children, sx }: IProps) => {
  return (
    <Box component="ul" sx={{ fontSize: 14, marginTop: 0.5, ...sx }}>
      {children}
    </Box>
  );
}

export default DocList;
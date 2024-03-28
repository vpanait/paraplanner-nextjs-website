"use client"
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box, SxProps, Theme } from '@mui/material';

interface IProps {
  children?: React.ReactNode,
  sx?: SxProps<Theme>;
}

const DocItem = ({ children, sx }: IProps) => {
  return (
    <Box component="p" sx={{ fontSize: 14, ...sx }}>
      {children}
    </Box>
  );
}

export default DocItem;
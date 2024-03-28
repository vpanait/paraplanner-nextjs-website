"use client"
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { SxProps, Theme } from '@mui/material';

interface IProps {
  children?: React.ReactNode,
  sx?: SxProps<Theme>;
}

const DocHeader = ({ children, sx }: IProps) => {
  return (
    <Typography variant="body1" sx={{ fontSize: 18, fontWeight: 600, marginTop: 4, marginBottom: 0, lineHeight: 1, ...sx }}>
      {children}
    </Typography>
  );
}

export default DocHeader;
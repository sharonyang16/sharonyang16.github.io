import React, { ReactNode } from 'react';
import { Box, Divider, Typography } from '@mui/material';

interface PageHeadingProps {
  title: string;
  rightComponent?: ReactNode;
  divider?: boolean;
}

export default function PageHeading(props: PageHeadingProps) {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography
          variant='h1'
          align='left'
          fontWeight='bold'
          color='text.primary'
        >
          {props.title}
        </Typography>
        {props.rightComponent}
      </Box>
      {props.divider && <Divider />}
    </Box>
  );
}

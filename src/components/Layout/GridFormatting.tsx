import * as React from 'react';
import { Grid } from '@mui/material';

export const GridMainContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Grid container spacing={2} sx={{ py: 5 }}>
      {children}
    </Grid>
  );
};

export const GridRow = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid container item spacing={8}>
      {children}
    </Grid>
  );
};

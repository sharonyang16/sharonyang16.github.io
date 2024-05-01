import * as React from 'react';
import { Grid, Typography } from '@mui/material';

interface GridBreakpoints {
  xs: number;
  md: number;
}

interface ResumeGridProps {
  children: React.ReactNode;
  breakpoints?: GridBreakpoints;
}

export const ResumeCompanyHeading = ({
  children,
  breakpoints,
}: ResumeGridProps) => {
  return (
    <Grid
      item
      xs={breakpoints ? breakpoints.xs : 12}
      md={breakpoints ? breakpoints.md : 8}
    >
      <Typography variant='h4'> {children} </Typography>
    </Grid>
  );
};
export const ResumeLeftGridBody = ({
  children,
  breakpoints,
}: ResumeGridProps) => {
  return (
    <Grid
      item
      xs={breakpoints ? breakpoints.xs : 12}
      md={breakpoints ? breakpoints.md : 4}
    >
      <Typography variant='body1' align='right'>
        {children}
      </Typography>
    </Grid>
  );
};

export const ResumeRightGridBody = ({
  children,
  breakpoints,
}: ResumeGridProps) => {
  return (
    <Grid
      item
      xs={breakpoints ? breakpoints.xs : 12}
      md={breakpoints ? breakpoints.md : 8}
    >
      <Typography variant='body1' align='left'>
        {children}
      </Typography>
    </Grid>
  );
};

import * as React from 'react';
import { Grid, Typography } from '@mui/material';

export const ResumeSectionHeading = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Grid item xs={6}>
      <Typography variant='h4'> {children} </Typography>
    </Grid>
  );
};
export const ResumeCompanyHeading = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Grid item xs={6}>
      <Typography variant='h5'> {children} </Typography>
    </Grid>
  );
};
export const ResumeLeftGridBody = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Grid item xs={6}>
      <Typography variant='body1' align='right'>
        {children}
      </Typography>
    </Grid>
  );
};

export const ResumeRightGridBody = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Grid item xs={6}>
      <Typography variant='body1' align='left'>
        {children}
      </Typography>
    </Grid>
  );
};

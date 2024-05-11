import * as React from 'react';
import { Grid, Divider, Typography } from '@mui/material';

interface PageHeadingProps {
  title: string;
  rightComponent?: React.ReactNode;
  divider?: boolean;
}
const PageHeading = (props: PageHeadingProps) => {
  return (
    <Grid container>
      <Grid
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pb: 2,
        }}
        container
        item
        xs={12}
        rowGap={2}
      >
        {!props.rightComponent ? (
          <Typography
            variant='h1'
            align='left'
            fontWeight='bold'
            color='text.primary'
          >
            {props.title}
          </Typography>
        ) : (
          <>
            <Grid item xs={12} md={9}>
              <Typography
                variant='h1'
                align='left'
                fontWeight='bold'
                color='text.primary'
              >
                {props.title}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-end' },
              }}
            >
              {props.rightComponent}
            </Grid>
          </>
        )}
      </Grid>
      <Grid item xs={12}>
        {props.divider && <Divider />}
      </Grid>
    </Grid>
  );
};

export default PageHeading;

import * as React from 'react';
import Typography from '@mui/material/Typography';

const Copyright = () => {
  return (
    <Typography variant='body2' color='text.secondary' align='right'>
      Copyright © Sharon Yang {new Date().getFullYear()}.
    </Typography>
  );
};

export default Copyright;

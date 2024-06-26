import * as React from 'react';
import { motion } from 'framer-motion';
import Grid from '@mui/material/Grid';

const Main = ({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
}) => {
  return (
    <motion.main
      key={path}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.5,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} />
        <Grid item xs={12} md={9}>
          {children}
        </Grid>
      </Grid>
    </motion.main>
  );
};

export default Main;

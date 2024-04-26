import * as React from 'react';
import {
  Grid,
  Typography,
  Box,
  useTheme,
  Link,
  TextField,
  FormControl,
} from '@mui/material';
import { Mail, LinkedIn } from '@mui/icons-material';

export default function ContactSection() {
  const theme = useTheme();

  return (
    <Grid container xs={12} spacing={2}>
      <Grid item xs={12}>
        <Typography variant='h4' color={theme.palette.text.primary}>
          Contact
        </Typography>
      </Grid>
      <Grid
        item
        xs={6}
        sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
      >
        <Typography variant='body1'>
          If you'd like to chat, please email me or message me on LinkedIn!
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            width: 'fit-content',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Link
              href='mailto:yang.shar@northeastern.edu'
              target='_blank'
              rel='noreferrer'
              underline='none'
              color={theme.palette.text.primary}
            >
              <Mail fontSize='large' />
            </Link>

            <Link
              href='mailto:yang.shar@northeastern.edu'
              target='_blank'
              rel='noreferrer'
              underline='none'
              color={theme.palette.text.primary}
            >
              <Typography>yang.shar@northeastern.edu</Typography>
            </Link>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Link
              href='https://www.linkedin.com/in/sharonyang16/'
              target='_blank'
              rel='noreferrer'
              underline='none'
              color={theme.palette.text.primary}
            >
              <LinkedIn fontSize='large' />
            </Link>
            <Link
              href='https://www.linkedin.com/in/sharonyang16/'
              target='_blank'
              rel='noreferrer'
              underline='none'
              color={theme.palette.text.primary}
            >
              <Typography>sharonyang16</Typography>
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <FormControl>
          <TextField
            id='name'
            hiddenLabel
            label='Name'
            variant='filled'
            size='small'
          />
          <TextField
            id='email'
            hiddenLabel
            label='Email'
            variant='filled'
            size='small'
          />
        </FormControl>
      </Grid>
    </Grid>
  );
}

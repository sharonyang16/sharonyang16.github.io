import * as React from 'react';
import { Grid, Box, Link } from '@mui/material';
import { LinkedIn, GitHub } from '@mui/icons-material';
import Copyright from './Copyright';

interface FooterLink {
  icon: React.ReactNode;
  url: string;
}

const links: FooterLink[] = [
  {
    icon: <LinkedIn />,
    url: 'https://www.linkedin.com/in/sharonyang16/',
  },
  {
    icon: <GitHub />,
    url: 'https://github.com/sharonyang16',
  },
];

const Footer = () => {
  return (
    <footer>
      <Grid container sx={{ pb: 2 }}>
        <Grid item xs={3} />
        <Grid item xs={9}>
          <Box sx={{ display: 'flex', justifyContent: 'end' }}>
            {links.map((link) => (
              <Link
                href={link.url}
                color='text.secondary'
                target='_blank'
                rel='noreferrer'
                sx={{ ml: 2 }}
                key={link.url}
              >
                {link.icon}
              </Link>
            ))}
          </Box>
          <Copyright />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;

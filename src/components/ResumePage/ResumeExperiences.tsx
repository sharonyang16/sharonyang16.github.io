import * as React from 'react';
import { List, ListItemText, Typography, Grid } from '@mui/material';
import { format } from 'date-fns';
import { experiences } from '../../data/Resume/ResumeData';

const ToolsList = (items: string[]) => {
  return (
    <List>
      <Typography variant='body1' fontWeight='bold' display='inline'>
        Associated Tools/Skills:{' '}
      </Typography>
      <Typography variant='body1' display='inline'>
        {items.join(', ')}
      </Typography>
    </List>
  );
};

const BulletedList = (items: string[]) => {
  return (
    <List sx={{ display: 'inline' }}>
      {items.map((bullet: string) => (
        <ListItemText
          primaryTypographyProps={{ variant: 'body1' }}
          sx={{
            display: 'list-item',
            py: 1,
          }}
        >
          {bullet}
        </ListItemText>
      ))}
    </List>
  );
};

const ResumeExperiencesSection = () => {
  return (
    <Grid container sx={{ pt: 2 }}>
      {experiences.map((experience) => {
        return (
          <>
            <Grid item xs={12} md={8} spacing={0}>
              <Typography variant='h4'>{experience.organization}</Typography>
            </Grid>
            {experience.roles.map((role) => {
              return (
                <Grid container item xs={12} sx={{ pb: 2 }}>
                  <Grid item xs={12}>
                    <Typography variant='h6' align='left' fontStyle='italic'>
                      {role.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant='body1'>
                      {format(role.startDate, 'MMMM yyyy')} -{' '}
                      {role.endDate
                        ? format(role.endDate, 'MMMM yyyy')
                        : 'Present'}
                    </Typography>
                  </Grid>
                  <Grid item xs={9}>
                    {ToolsList(role.toolsAndSkills)}
                  </Grid>
                  <Grid item xs={9}>
                    {BulletedList(role.descriptionBullets)}
                  </Grid>
                </Grid>
              );
            })}
          </>
        );
      })}
    </Grid>
  );
};

export default ResumeExperiencesSection;

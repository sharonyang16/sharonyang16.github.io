import * as React from 'react';
import { List, ListItemText, Typography } from '@mui/material';
import { format } from 'date-fns';
import { GridMainContainer, GridRow } from '../Layout/GridFormatting';
import {
  ResumeCompanyHeading,
  ResumeLeftGridBody,
  ResumeRightGridBody,
} from './ResumeGridFormatting';
import { experiences } from '../../data/Resume/ResumeData';

const ToolsList = (items: string[]) => {
  return (
    <List>
      <Typography variant='body1' fontWeight='bold'>
        Associated Tools/Skills
      </Typography>

      {items.map((bullet: string) => (
        <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
          {bullet}
        </ListItemText>
      ))}
    </List>
  );
};

const BulletedList = (items: string[]) => {
  return (
    <List sx={{ listStyleType: 'disc' }}>
      {items.map((bullet: string) => (
        <ListItemText
          primaryTypographyProps={{ variant: 'body1' }}
          sx={{ display: 'list-item' }}
        >
          {bullet}
        </ListItemText>
      ))}
    </List>
  );
};

const ResumeExperiencesSection = () => {
  return (
    <GridMainContainer>
      {experiences.map((experience) => {
        return (
          <>
            <GridRow>
              <ResumeLeftGridBody>{experience.location}</ResumeLeftGridBody>
              <ResumeCompanyHeading>
                {experience.organization}
              </ResumeCompanyHeading>
            </GridRow>
            {experience.roles.map((role) => {
              return (
                <>
                  <GridRow>
                    <ResumeLeftGridBody>
                      {format(role.startDate, 'MMMM yyyy')} -{' '}
                      {role.endDate
                        ? format(role.endDate, 'MMMM yyyy')
                        : 'Present'}
                    </ResumeLeftGridBody>
                    <ResumeRightGridBody>
                      <em>{role.title}</em>
                    </ResumeRightGridBody>
                  </GridRow>
                  <GridRow>
                    <ResumeLeftGridBody>
                      {ToolsList(role.toolsAndSkills)}
                    </ResumeLeftGridBody>
                    <ResumeRightGridBody>
                      {BulletedList(role.descriptionBullets)}
                    </ResumeRightGridBody>
                  </GridRow>
                </>
              );
            })}
          </>
        );
      })}
    </GridMainContainer>
  );
};

export default ResumeExperiencesSection;

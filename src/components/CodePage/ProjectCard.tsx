import * as React from 'react';
import {
  Grid,
  Typography,
  Box,
  Button,
  Tooltip,
  useTheme,
  alpha,
} from '@mui/material';
import { format } from 'date-fns';
import { GitHub, Web } from '@mui/icons-material';
import { ProgrammingProjectInformation } from '../../data/ProgrammingProjects/ProjectsData';

const ProjectCard = (project: ProgrammingProjectInformation) => {
  const theme = useTheme();

  // left side on larger view, top on smaller view
  const ProjectImage = (project: ProgrammingProjectInformation) => {
    return (
      <Grid item xs={12} md={4}>
        <Box
          sx={{
            minHeight: { xs: '15rem', md: '100%' },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: alpha(theme.palette.secondary.light, 0.75),
          }}
        >
          {project.googleDriveImageID ? (
            <img
              src={`https://drive.google.com/thumbnail?id=${project.googleDriveImageID}&sz=h200`}
              alt={`Screenshot of ${project.projectName}`}
            />
          ) : (
            <div></div>
          )}
        </Box>
      </Grid>
    );
  };

  // right side on larger view, bottom on smaller view
  const ProjectDescription = (project: ProgrammingProjectInformation) => {
    /**
     * date is either...
     * "Month Year" - project completed in the same month as it was started
     * "Month Year - Month Year" - project completed in different month than it was started
     * "Month Year - Present" - project hasn't been completed/still currently contributing to it
     */
    const date = project.endDate
      ? project.endDate.getTime() === project.startDate.getTime()
        ? format(project.startDate, 'MMMM yyyy')
        : `${format(project.startDate, 'MMMM yyyy')} - ${format(
            project.endDate,
            'MMMM yyyy'
          )}`
      : `${format(project.startDate, 'MMMM yyyy')} - Present`;
    const buttonStyle = {
      fontSize: '1rem',
      '&.Mui-disabled': {
        pointerEvents: 'all',
      },
    };

    return (
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Box>
          <Typography variant='h5' align='left'>
            {project.projectName}
          </Typography>
          <Typography variant='h6' align='left'>
            {project.mainTools.join(' | ')}
          </Typography>
          <Typography variant='body1' align='left'>
            {date}
          </Typography>
          <Typography variant='body2' align='left'>
            {project.description}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            paddingY: 1,
            gap: 1,
          }}
        >
          <Tooltip
            title={project.githubLink ? '' : 'Available upon request'}
            arrow
            PopperProps={{ style: { pointerEvents: 'all' } }}
          >
            <Button
              variant='contained'
              startIcon={<GitHub />}
              href={
                project.githubLink
                  ? project.githubLink
                  : 'Available upon request'
              }
              target='_blank'
              rel='noreferrer'
              sx={{ ...buttonStyle }}
              disabled={project.githubLink ? false : true}
            >
              {'Code'}
            </Button>
          </Tooltip>

          {project.link && (
            <Button
              variant='contained'
              startIcon={<Web />}
              href={project.link}
              target='_blank'
              rel='noreferrer'
              sx={{
                ...buttonStyle,
                backgroundColor: theme.palette.secondary.main,
              }}
            >
              Link
            </Button>
          )}
        </Box>
      </Grid>
    );
  };
  return (
    <Grid container item spacing={{ xs: 2, md: 8 }}>
      {ProjectImage(project)} {ProjectDescription(project)}
    </Grid>
  );
};

export default ProjectCard;

import * as React from 'react';
import { Button } from '@mui/material';
import { Download } from '@mui/icons-material';
import PageHeading from '../components/PageHeading';
import ExperiencesSection from '../components/ExperiencesPage/Experiences';
import { RESUME_GOOGLE_DRIVE_ID } from '../data/Experiences/ExperiencesData';

const ExperiencePage = () => {
  return (
    <>
      <PageHeading
        title='Experience'
        rightComponent={
          <Button
            href={`https://drive.google.com/uc?export=download&id=${RESUME_GOOGLE_DRIVE_ID}`}
            variant='contained'
            size='large'
            endIcon={<Download />}
          >
            resume
          </Button>
        }
        divider={true}
      />
      <ExperiencesSection />
    </>
  );
};

export default ExperiencePage;

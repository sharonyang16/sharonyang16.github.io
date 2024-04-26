import * as React from 'react';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import PageHeading from '../components/PageHeading';
import ResumeExperiencesSection from '../components/ResumePage/ResumeExperiencesSection';
import { RESUME_GOOGLE_DRIVE_ID } from '../data/Pages/ResumePageData';

const ExperiencePage = () => {
  return (
    <>
      <PageHeading
        title='Experiences'
        rightComponent={
          <Button
            href={`https://drive.google.com/uc?export=download&id=${RESUME_GOOGLE_DRIVE_ID}`}
            variant='contained'
            size='large'
            endIcon={<DownloadIcon />}
          >
            resume
          </Button>
        }
        divider={true}
      />
      <ResumeExperiencesSection />
    </>
  );
};

export default ExperiencePage;

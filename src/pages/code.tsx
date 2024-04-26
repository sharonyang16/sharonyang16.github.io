import * as React from 'react';
import PageHeading from '../components/PageHeading';
import ProjectCard from '../components/CodePage/ProjectCard';
import { projects } from '../data/ProgrammingProjects/ProjectsData';
import { GridMainContainer } from '../components/Layout/GridFormatting';

const CodePage = () => {
  return (
    <>
      <PageHeading title='Code' divider={true} />
      <GridMainContainer>
        {projects.map((project) => ProjectCard(project))}
      </GridMainContainer>
    </>
  );
};

export default CodePage;

import * as React from 'react';
import { GridMainContainer, GridRow } from '../Layout/GridFormatting';
import {
  ResumeLeftGridBody,
  ResumeRightGridBody,
  ResumeSectionHeading,
} from './ResumeGridFormatting';
import { skills } from '../../data/Resume/ResumeData';

const ResumeSkillsSection = () => {
  return (
    <GridMainContainer>
      <GridRow>
        <ResumeLeftGridBody children={<></>} />
        <ResumeSectionHeading>SKILLS</ResumeSectionHeading>
      </GridRow>

      {skills.map((skillSection) => {
        return (
          <GridRow>
            <ResumeLeftGridBody>{skillSection.category}</ResumeLeftGridBody>
            <ResumeRightGridBody>
              {skillSection.tools.join(' | ')}
            </ResumeRightGridBody>
          </GridRow>
        );
      })}
    </GridMainContainer>
  );
};

export default ResumeSkillsSection;

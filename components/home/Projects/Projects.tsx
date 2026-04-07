"use client";
import { codeData, designData } from "./data";
import ProjectSection from "./ProjectSection";

const Projects = () => {
  return (
    <>
      <ProjectSection title="Code" projects={codeData} />
      <ProjectSection title="Design" projects={designData} />
    </>
  );
};

export default Projects;

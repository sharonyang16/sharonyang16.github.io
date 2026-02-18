"use client";
import { ProjectCardProps } from "@/types/data";
import Button from "@/components/base/Button/Button";
import Typography from "@/components/base/Typography/Typography";
import ProjectCard from "./ProjectCard";
import useExpand from "@/hooks/useExpand";

const Projects = ({
  title,
  projects,
}: {
  title: string;
  projects: ProjectCardProps[];
}) => {
  const { isExpanded, setIsExpanded } = useExpand();

  return (
    <>
      <Typography
        id={title.toLowerCase()}
        intent="subheadding1"
        className="py-8"
      >
        {title}
      </Typography>
      <div className="flex flex-col gap-16 col-span-2 py-8">
        {projects.slice(0, isExpanded ? projects.length : 3).map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          variant="secondary"
          className="self-center"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </Button>
      </div>
    </>
  );
};

export default Projects;

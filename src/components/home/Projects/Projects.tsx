import { ProjectCardProps } from "@/types/data";
import Typography from "@/components/base/Typography/Typography";
import ProjectCard from "./ProjectCard";

const Projects = ({
  title,
  projects,
}: {
  title: string;
  projects: ProjectCardProps[];
}) => {
  return (
    <>
      <Typography id={title.toLowerCase()} intent="subheadding1">
        {title}
      </Typography>
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 col-span-2 ">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </>
  );
};

export default Projects;

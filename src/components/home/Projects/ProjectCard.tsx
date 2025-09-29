import { ProjectCardProps } from "@/types/data";
import Typography from "@/components/base/Typography/Typography";
import Chip from "@/components/base/Chip/Chip";

const ProjectCard = ({
  title,
  url,
  description,
  technologies,
}: ProjectCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`border-1 border-black dark:border-white rounded-lg ${
        url ? "hover:shadow-xl dark:hover:bg-gray-950" : ""
      }`}
    >
      <div className="flex flex-col p-4 gap-2">
        <Typography intent="subheadding2">{title}</Typography>
        <Typography intent="paragraph2">{description}</Typography>
        <div className="flex flex-wrap gap-2">
          {technologies.map((name) => (
            <Chip key={name}>
              <Typography intent="label2">{name}</Typography>
            </Chip>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;

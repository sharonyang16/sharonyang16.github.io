import Image from "next/image";
import { ProjectCardProps } from "@/types/data";
import Typography from "@/components/base/Typography/Typography";
import Chip from "@/components/base/Chip/Chip";

const ProjectCard = ({
  title,
  url,
  thumbnail,
  description,
  technologies,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="flex justify-center items-center w-full aspect-video relative rounded-sm overflow-hidden bg-gray-200 dark:bg-gray-800 ">
        <div className="relative w-4/5 h-4/5 rounded-2xl">
          {thumbnail && (
            <Image
              src={thumbnail}
              alt={`${title} thumbnail`}
              fill
              className="object-contain"
            />
          )}
        </div>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={` ${
          url ? "hover:text-gray-700 dark:hover:text-gray-300" : ""
        }`}
      >
        <Typography intent="subheadding2">{title}</Typography>
      </a>

      <Typography intent="paragraph2">{description}</Typography>
      <div className="flex flex-wrap gap-2">
        {technologies.map((name) => (
          <Chip key={name}>
            <Typography intent="label2">{name}</Typography>
          </Chip>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;

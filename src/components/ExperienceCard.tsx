import { ExperienceCardProps } from "@/types/data";
import Typography from "./base/Typography";
import Chip from "./base/Chip";
import { format } from "date-fns";

const ExperienceCard = ({
  company,
  position,
  start,
  end,
  description,
  technologies,
}: ExperienceCardProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Typography intent="subheadding2">{`${position} @ ${company}`}</Typography>
      <Typography intent="label2" className="text-gray-600">{`${format(start, "MMM yyyy").toUpperCase()} - ${format(end, "MMM yyyy").toUpperCase()}`}</Typography>
      <Typography intent="paragraph2">{description}</Typography>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <Chip key={tech}>
            <Typography intent="label2">{tech}</Typography>
          </Chip>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;

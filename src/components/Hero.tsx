import { HeroProps } from "@/types/data";
import Typography from "./base/Typography";
import Button from "./base/Button";
import { linkNameToIcon } from "@/utils/data.utils";

const Hero = ({ name, role, links, summary }: HeroProps) => {
  return (
    <div className="flex flex-col w-full gap-6">
      <Typography intent="heading">{name}</Typography>
      <Typography intent="subheadding1">{role}</Typography>
      <div className="flex gap-6">
        {links.map((link) => (
          <Button
            key={link.name}
            variant="secondary"
            as="a"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full"
          >
            {linkNameToIcon(link.name)}
          </Button>
        ))}
      </div>
      <Typography intent="paragraph1">{summary}</Typography>
    </div>
  );
};

export default Hero;

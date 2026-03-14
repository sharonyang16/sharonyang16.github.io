import { HeroProps } from "@/types/data";
import Typography from "@/components//base/Typography/Typography";
import Link from "@/components/base/Link/Link";
import { HeroLinkIcon } from "@/utils/data.utils";

const Hero = ({ name, role, links, summary }: HeroProps) => {
  return (
    <div className="flex flex-col w-full gap-6">
      <Typography intent="heading">{name}</Typography>
      <Typography intent="paragraph1">{summary}</Typography>
      <div className="flex gap-6">
        {links.map((link) => (
          <Link
            key={link.type}
            variant="buttonSecondary"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full"
          >
            <HeroLinkIcon name={link.type} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hero;

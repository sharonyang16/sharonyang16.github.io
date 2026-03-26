import { HeroProps } from "@/types/data";
import Typography from "@/components//base/Typography/Typography";
import Link from "@/components/base/Link/Link";
import { HeroLinkIcon } from "@/utils/data.utils";

const Hero = ({ headline, links, summary }: HeroProps) => {
  return (
    <div className="flex flex-col w-full gap-8 py-16">
      <div className="flex flex-col gap-2">
        <Typography intent="heading">{headline}</Typography>
        <Typography intent="paragraph1">{summary}</Typography>
      </div>
      <div className="flex gap-4">
        {links.map((link) => (
          <Link
            key={link.type}
            variant="buttonSecondary"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full"
            aria-label={
              link.type === "Email"
                ? `Send an email to Sharon Yang`
                : `${link.type} profile`
            }
          >
            <HeroLinkIcon name={link.type} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hero;

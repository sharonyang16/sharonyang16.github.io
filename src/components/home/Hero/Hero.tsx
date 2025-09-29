import { HeroProps } from "@/types/data";
import Typography from "@/components//base/Typography/Typography";
import Link from "@/components/base/Link/Link";
import { linkNameToIcon } from "@/utils/data.utils";
import { useState } from "react";

const Hero = ({ name, role, links, summary }: HeroProps) => {
  return (
    <div className="flex flex-col w-full gap-6">
      <Typography intent="heading">{name}</Typography>
      <Typography intent="subheadding1">{role}</Typography>
      <div className="flex gap-6">
        {links.map((link) => (
          <Link
            key={link.name}
            variant="buttonSecondary"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full"
          >
            {linkNameToIcon(link.name)}
          </Link>
        ))}
      </div>
      <Typography intent="paragraph1">{summary}</Typography>
    </div>
  );
};

export default Hero;

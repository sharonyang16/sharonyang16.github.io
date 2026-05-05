"use client";
import Link from "@/components/base/Link/Link";
import Typography from "@/components/base/Typography/Typography";
import { links } from "./data";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="flex items-center justify-between pt-4 pb-16">
        <Typography intent="paragraph2" className="col-span-2">
          © {new Date().getFullYear()} Sharon Yang. All rights reserved.
        </Typography>
        <div className="flex gap-4">
          {links.map((link) => (
            <Link
              key={link.type}
              variant="primary"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
            >
              <link.icon className="text-xl" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

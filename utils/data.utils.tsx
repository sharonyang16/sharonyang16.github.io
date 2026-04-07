import { FaFigma, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { MdArrowOutward, MdEmail } from "react-icons/md";
import { LinkIconProps } from "../types/data";

export const HeroLinkIcon = ({ name }: LinkIconProps) => {
  switch (name) {
    case "GitHub":
      return <FaGithub className="text-3xl" />;
    case "LinkedIn":
      return <FaLinkedin className="text-3xl" />;
    case "Email":
      return <MdEmail className="text-3xl" />;
    default:
      return <div></div>;
  }
};

export const ProjectLinkIcon = ({ name }: LinkIconProps) => {
  switch (name) {
    case "github":
      return <FaCode className="text-xl" />;
    case "live":
      return <MdArrowOutward className="text-xl" />;
    case "figma":
      return <FaFigma className="text-xl" />;
    default:
      return <div></div>;
  }
};

export const toAriaLabel = (projectName: string, linkType: string) => {
  switch (linkType) {
    case "github":
      return `Visit ${projectName} Github repository`;
    case "live":
      return `Visit ${projectName} live site`;
    case "figma":
      return `View Figma prototype for ${projectName}`;
    default:
      return `${projectName} ${linkType}`;
  }
};

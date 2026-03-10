import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { MdArrowOutward, MdEmail } from "react-icons/md";

export const HeroLinkIcon = ({ name }: { name: string }) => {
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

export const ProjectLinkIcon = ({ name }: { name: string }) => {
  switch (name) {
    case "github":
      return <FaCode className="text-xl" />;
    case "live":
      return <MdArrowOutward className="text-xl" />;
    default:
      return <div></div>;
  }
};

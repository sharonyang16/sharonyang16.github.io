import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const linkNameToIcon = (name: string) => {
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

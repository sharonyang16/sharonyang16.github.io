import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "@/types/data";

export const headline = "Hi, I'm Sharon.";

export const summary =
  "I am a software engineer with a B.S. in Computer Science and Design from Northeastern University. I'm passionate about creating accessible, user-friendly applications.";

export const links: Link[] = [
  {
    type: "GitHub",
    url: "https://github.com/sharonyang16",
    ariaLabel: "GitHub profile",
    icon: FaGithub,
  },
  {
    type: "LinkedIn",
    url: "https://www.linkedin.com/in/sharonyyang/",
    ariaLabel: "LinkedIn profile",
    icon: FaLinkedin,
  },
  {
    type: "Email",
    url: "mailto:sharonyyang0@gmail.com",
    ariaLabel: "Send an email to Sharon",
    icon: MdEmail,
  },
];

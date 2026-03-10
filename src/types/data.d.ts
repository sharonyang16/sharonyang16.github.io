export type ExperienceCardProps = {
  id: number;
  company: string;
  position: string;
  start: string;
  end: string;
  description: string;
  technologies: string[];
};

export type ExperiencesProps = {
  resumeDownloadUrl: string;
  experiences: ExperienceCardProps[];
};

export type ProjectCardProps = {
  id: number;
  title: string;
  links?: Link[];
  thumbnail?: string;
  description: string;
  technologies: string[];
};

export type Link = {
  type: string;
  url: string;
};

export type HeroProps = {
  name: string;
  role: string;
  links: Link[];
  summary: string;
};

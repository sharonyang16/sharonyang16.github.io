export type ExperienceCardProps = {
  id: number;
  company: string;
  position: string;
  start: string;
  end: string;
  description: string;
  technologies: string[];
};

export type CodeProjectCardProps = {
  id: number;
  title: string;
  url: string;
  description: string;
  technologies: string[];
};

export type DesignProjectCardProps = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
};

export type HeroProps = {
  name: string;
  role: string;
  links: {
    name: string;
    url: string;
  }[];
  summary: string;
};
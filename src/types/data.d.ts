export type Experience = {
  id: number;
  company: string;
  position: string;
  start: string;
  end: string;
  description: string;
  technologies: string[];
};

export type CodeProject = {
  id: number;
  title: string;
  url: string;
  description: string;
  technologies: string[];
};

export type DesignProject = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
};

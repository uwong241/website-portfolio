export interface Project {
  title: string;
  description: string;
  problem?: string;
  solution?: string;
  technologies: string[];
  role: string;
  year: number;
  metrics?: string[];
  link: string;
  github: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  startDate?: string;
}

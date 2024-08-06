import { Models } from "appwrite";

export type Project = {
  title: string;
  description: string[];
  img: string[];
  link: string;
  isBest: boolean;
  githubLink: string;
} & Models.Document;
export type ProjectsData = Project[];
export type Skill = {
  title: string;
  img: string;
} & Models.Document;
export type SkillsData = Skill[];
export type DarkModeContextType = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};
export type DarkModeProviderProps = {
  children: React.ReactNode;
};

export type FooterLink = {
  name: string;
  url: string;
};
export type FooterData = {
  links: FooterLink[];
  elseWhare: FooterLink[];
};

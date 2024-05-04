export type DarkModeContextType = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};
export type DarkModeProviderProps = {
  children: React.ReactNode;
};
export type Project = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};
export type ProjectsData = {
  All: Project[];
  Best: Project[];
};
export type FooterLink = {
  name: string;
  url: string;
};
export type FooterData = {
  links: FooterLink[];
  elseWhare: FooterLink[];
};
export type Skill = {
  text: string;
  url: string;
};
export type SkillsData = Skill[];

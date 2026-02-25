
export type SectionConfig =
  | ContactSection
  | SkillsSection
  | TimelineSection
  | AboutSection
  | ProjectsSection;

export interface ContactSection {
  type: "contact";
  name: string;
  title: string;
  location?: string;
  links: {
    label: string;
    url: string;
  }[];
}

export interface SkillsSection {
  type: "skills";
  title?: string;
  groups: {
    label: string;
    items: string[];
  }[];
}

export interface TimelineSection {
  type: "timeline";
  title: string;
  variant?: "education" | "experience";
  items: TimelineItem[];
}

export interface TextWithLink {
  text: string;
  link?: {
    label: string;
    url: string;
  };
}

export interface TimelineBulletItem {
  text: string;
  link?: {
    label: string;
    url: string;
  };
}

export type TimelineBullet =
  | TimelineBulletItem
  | TimelineBulletItem[];

export interface TimelineItem {
  id: string;
  title: string;
  subtitle?: TextWithLink | TextWithLink[];
  date: string;
  bullets?: TimelineBullet[];
}

export interface AboutSection {
  type: "about";
  content: string[];
}

export interface ProjectsSection {
  type: "projects";
  title?: string;
  projects: ProjectItem[];
}

export interface ProjectDescriptionItem {
  text: string;
  link?: {
    label: string;
    url: string;
  };
}

export type ProjectDescription = ProjectDescriptionItem | ProjectDescriptionItem[]

export interface ProjectItem {
  id: string;
  title: string;
  image: string;
  description: ProjectDescription[];
}

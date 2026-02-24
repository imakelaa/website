
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

export interface TimelineItem {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  bullets?: string[];
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

export interface ProjectItem {
  id: string;
  title: string;
  image: string;
  description: ProjectDescriptionItem[];
}

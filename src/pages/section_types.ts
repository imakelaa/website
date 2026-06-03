export type SectionConfig =
  | ContactSection
  | SkillsSection
  | TimelineSection
  | AboutSection
  | ProjectsSection
  | HomeSection
  | RolesSection
  | WorkSection
  | CultureSection
  | StyleSection
  | FooterSection;

// ── New homepage sections ─────────────────────────────────────

export interface HomeSection {
  type: "home";
  greeting: string;
  name: string;
  photos: string[];
}

export type RoleBullet = string | { text: string; href: string; linkText?: string };

export interface RoleCard {
  id: string;
  label: string;
  bullets: RoleBullet[];
}

export interface RolesSection {
  type: "roles";
  roles: RoleCard[];
  loadingLabel?: string;
  backgroundPhoto?: string;
}

export interface WorkCard {
  id: string;
  title: string;
  bullets: string[];
  blogUrl?: string;
  blogLabel?: string;
  featureUrl?: string;
  featureLabel?: string;
  postUrl?: string;
  postLabel?: string;
}

export interface WorkSection {
  type: "work";
  headline: string;
  highlightedWord: string;
  cards: WorkCard[];
}

export interface CultureSection {
  type: "culture";
  backgroundPhoto: string;
  desktopFiles: { label: string; type: "image" | "folder" | "globe"; thumb?: string }[];
  quoteHeading: string;
  quoteItalic: string;
  quoteBody: string;
}

export interface ChecklistItem {
  text: string;
  checked: boolean;
}

export interface StyleSection {
  type: "style";
  headline: string;
  highlightedWord: string;
  body: string[];
  photo: string;
  fakeFiles: string[];
  stickyNoteTitle: string;
  checklist: ChecklistItem[];
  backgroundPhoto?: string;
}

export interface FooterSection {
  type: "footer";
  linkedinUrl: string;
  sections: string[];
  tagline: string;
  name: string;
}

// ── Legacy sections (resume page) ────────────────────────────

export interface ContactSection {
  type: "contact";
  name: string;
  title: string;
  location?: string;
  links: { label: string; url: string }[];
}

export interface SkillsSection {
  type: "skills";
  title?: string;
  groups: { label: string; items: string[] }[];
}

export interface TimelineSection {
  type: "timeline";
  title: string;
  variant?: "education" | "experience";
  items: TimelineItem[];
}

export interface TextWithLink {
  text: string;
  link?: { label: string; url: string };
}

export interface TimelineBulletItem {
  text: string;
  link?: { label: string; url: string };
}

export type TimelineBullet = TimelineBulletItem | TimelineBulletItem[];

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
  link?: { label: string; url: string };
}

export type ProjectDescription = ProjectDescriptionItem | ProjectDescriptionItem[];

export interface ProjectItem {
  id: string;
  title: string;
  image: string;
  description: ProjectDescription[];
}

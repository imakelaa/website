export type SectionConfig =
  | ContactSection
  | SkillsSection
  | TimelineSection
  | AboutSection
  | ProjectsSection
  | HomeSection
  | RolesSection
  | WorkSection
  | PortfolioSection
  | CultureSection
  | StyleSection
  | FooterSection;

// ── New homepage sections ─────────────────────────────────────

export interface HomeSection {
  type: "home";
  greeting: string;
  name: string;
  photos: string[];
  // Hover sticky notes keyed by spot: "intro" (under the name), "life1", "life2", … (photos, 1-based)
  stickyNotes?: Record<string, string>;
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

// ── Portfolio: "I am a ___" role picker + grid of work blocks ─────

export interface PortfolioRole {
  id: string;     // referenced by PortfolioBlock.roles
  label: string;  // chip text + the word typed into the headline
}

export interface PortfolioLink {
  label: string;
  href: string;               // starts with "/" → in-site route, otherwise opens a new tab
  kind?: "feature" | "blog";  // buttons always render [feature] [blog], whatever order they're listed in
  style?: "primary" | "dark"; // yellow vs black button (default: primary for the first button shown)
}

// The illustration at the top of a block. Add a new `kind` here + a case in
// PortfolioVisual to support a new kind of illustration.
export type PortfolioVisual =
  | { kind: "image"; src: string; alt: string }
  | { kind: "logo"; src: string; alt: string }                                  // whole logo, centered on a light panel (never cropped)
  | { kind: "placeholder"; label: string }
  | { kind: "badge"; title: string; caption?: string; src?: string }            // viewfinder; `src` shows a preview image instead of the title ring
  | { kind: "bars"; series: { label: string; values: number[]; color?: "dark" | "purple" | "yellow" }[] }
  | { kind: "meter";                                                            // horizontal bars; width = value / max
      caption?: string; max?: number; unit?: string; showValues?: boolean;
      rows: { label: string; value: number; color?: "dark" | "purple" | "yellow" }[] }
  | { kind: "clusters"; groups: { label: string; count: number; color?: "dark" | "purple" | "yellow" }[] }
  | { kind: "gallery"; items: { label: string; src?: string }[] }
  | { kind: "writings"; limit?: number };                                       // list pulled from writings.data

export interface PortfolioBlock {
  id: string;
  title: string;
  roles: string[];        // role ids → used to highlight the block when its role is picked
  date?: string;          // year shown in the card header, e.g. "2025"
  size?: "lg" | "half" | "md" | "sm"; // desktop width: 7 / 6 / 5 / 4 of 12 columns (default "sm")
  compact?: boolean;      // only as tall as its content, instead of stretching to the row's height
  visual?: PortfolioVisual | PortfolioVisual[]; // pass an array to stack several visuals
  description?: string | { label: string; text: string }[]; // plain text, or labeled lines like "Problem: …"
  links?: PortfolioLink[];
  href?: string;          // makes the whole block clickable (buttons still work on their own)
}

export interface PortfolioSection {
  type: "portfolio";
  headline?: string;      // defaults to "Work"
  prompt?: string;        // line under the chips
  roles: PortfolioRole[];
  blocks: PortfolioBlock[];
}

export interface CultureSection {
  type: "culture";
  backgroundPhoto?: string;
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

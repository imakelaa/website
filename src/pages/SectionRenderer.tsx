import type { SectionConfig } from "./section_types";
import { ContactSection } from "./page_sections/ContactSection";
import { SkillsSection } from "./page_sections/SkillSection";
import { TimelineSection } from "./page_sections/Timeline";
import { AboutSection } from "./page_sections/HomeAboutSection";
import { ProjectsSection } from "./page_sections/HomeProjectsSection";

export function SectionRenderer({ section }: { section: SectionConfig }) {
  switch (section.type) {
    case "contact":
      return <ContactSection {...section} />;
    case "skills":
      return <SkillsSection {...section} />;
    case "timeline":
      return <TimelineSection {...section} />;
    case "about":
      return <AboutSection {...section} />;
    case "projects":
      return <ProjectsSection {...section} />;
    default:
      return null;
  }
}
import { useEffect, useRef, type ReactNode } from "react";
import type { SectionConfig } from "./section_types";
import { ContactSection } from "./page_sections/ContactSection";
import { SkillsSection } from "./page_sections/SkillSection";
import { TimelineSection } from "./page_sections/Timeline";
import { AboutSection } from "./page_sections/HomeAboutSection";
import { ProjectsSection } from "./page_sections/HomeProjectsSection";
import { HomeSection } from "./page_sections/HomeSection";
import { RolesSection } from "./page_sections/RolesSection";
import { WorkSection } from "./page_sections/WorkSection";
import { CultureSection } from "./page_sections/CultureSection";
import { StyleSection } from "./page_sections/StyleSection";
import { FooterSection } from "./page_sections/FooterSection";

function renderSection(section: SectionConfig) {
  switch (section.type) {
    case "home":    return <HomeSection {...section} />;
    case "roles":   return <RolesSection {...section} />;
    case "work":    return <WorkSection {...section} />;
    case "culture": return <CultureSection {...section} />;
    case "style":   return <StyleSection {...section} />;
    case "footer":  return <FooterSection {...section} />;
    case "contact": return <ContactSection {...section} />;
    case "skills":  return <SkillsSection {...section} />;
    case "timeline":return <TimelineSection {...section} />;
    case "about":   return <AboutSection {...section} />;
    case "projects":return <ProjectsSection {...section} />;
    default:        return null;
  }
}

// A stacked "card". If the section is taller than the window, it sticks by its
// bottom edge (negative top) so its content scrolls fully into view first.
function StackedSlide({ index, children }: { index: number; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const top = Math.min(0, window.innerHeight - el.offsetHeight);
      el.style.setProperty("--stick-top", `${top}px`);
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener("resize", update); // also fires on browser zoom
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div ref={ref} className="section-slide" style={{ zIndex: index + 1 }}>
      {children}
    </div>
  );
}

export function SectionRenderer({ section, index }: { section: SectionConfig; index: number }) {
  const rendered = renderSection(section);
  if (!rendered) return null;
  if (section.type === "footer") return rendered;
  return <StackedSlide index={index}>{rendered}</StackedSlide>;
}

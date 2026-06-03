import { useEffect } from "react";
import type { PageConfig } from "./page_types";
import type { SectionConfig } from "./section_types";
import { SectionRenderer } from "./SectionRenderer";

// Dominant background color per section type, matching each section's CSS
const SECTION_BG: Partial<Record<SectionConfig["type"], string>> = {
  home:    "#0d1f3c",
  roles:   "#f5f0e8",
  work:    "#e8c9a0",
  style:   "#b8c9d9",
  footer:  "#0d1f3c",
};

export function PageRenderer({ page }: { page: PageConfig }) {
  const { sections } = page;
  const slides = sections.filter(s => s.type !== "footer");

  useEffect(() => {
    const update = () => {
      const idx = Math.floor(window.scrollY / window.innerHeight);
      const section = idx >= slides.length ? sections.find(s => s.type === "footer") : slides[idx];
      document.body.style.background = SECTION_BG[section?.type ?? "home"] ?? "#f5f0e8";
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      document.body.style.background = "";
    };
  }, [slides, sections]);

  return (
    <>
      {sections.map((section, index) => (
        <SectionRenderer key={index} section={section} index={index} />
      ))}
    </>
  );
}

import type { PageConfig } from "./page_types";
import { SectionRenderer } from "./SectionRenderer";

export function PageRenderer({ page }: { page: PageConfig }) {
  const { sections } = page;

  return (
    <main>
      {sections.map((section, index) => (
        <SectionRenderer key={index} section={section} />
      ))}
    </main>
  );
}
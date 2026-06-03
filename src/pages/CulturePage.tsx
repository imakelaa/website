import { CultureSection } from "./page_sections/CultureSection";
import bgCulture from "../assets/bg2.webp";

const cultureData = {
  type: "culture" as const,
  backgroundPhoto: bgCulture,
  desktopFiles: [
    { label: "Culture.jpg", type: "image" as const },
    { label: "Culture.jpg", type: "image" as const },
    { label: "coffee dump", type: "image" as const },
    { label: "Culture.jpg", type: "image" as const },
    { label: "explore", type: "globe" as const },
    { label: "downloads", type: "folder" as const },
  ],
  quoteHeading: "find your",
  quoteItalic: "formula",
  quoteBody: "it's not about trends. it's about curation. figure out what makes you feel tall, expensive, and slightly feared.",
};

export default function CulturePage() {
  return <CultureSection {...cultureData} />;
}

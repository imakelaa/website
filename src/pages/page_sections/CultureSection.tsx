import { Link } from "react-router-dom";
import type { CultureSection } from "../section_types";
import "./CultureSection.scss";

const ICON_MAP = {
  globe: "🌐",
  folder: "📁",
  image: "🖼",
};

export function CultureSection({ backgroundPhoto, desktopFiles, quoteHeading, quoteItalic, quoteBody }: CultureSection) {
  return (
    <section className="culture-section" style={backgroundPhoto ? { '--bg-url': `url(${backgroundPhoto})` } as React.CSSProperties : undefined}>
      <div className="culture-section__overlay" />
      <div className="culture-section__desktop">
        {desktopFiles.map((f, i) => (
          f.type === "globe" ? (
            <Link key={i} to="/contents" className="desktop-file desktop-file--link" style={{ '--i': i } as React.CSSProperties}>
              <span className="desktop-file__icon">{ICON_MAP[f.type]}</span>
              <span className="desktop-file__label">{f.label}</span>
            </Link>
          ) : (
            <div key={i} className="desktop-file" style={{ '--i': i } as React.CSSProperties}>
              <span className="desktop-file__icon">{ICON_MAP[f.type]}</span>
              <span className="desktop-file__label">{f.label}</span>
            </div>
          )
        ))}
      </div>
      <div className="culture-section__note sticky-note">
        <div className="sticky-note__header">Notes</div>
        <h3 className="culture-section__note-heading">
          {quoteHeading} <em>{quoteItalic}</em>
        </h3>
        <p>{quoteBody}</p>
      </div>
    </section>
  );
}

import type { FooterSection } from "../section_types";
import "./FooterSection.scss";

export function FooterSection({ linkedinUrl, sections, tagline, name }: FooterSection) {
  return (
    <footer className="footer-section">
      <div className="footer-section__inner">
        <div className="footer-section__left">
          <a href={linkedinUrl} target="_blank" rel="noreferrer" className="footer-section__linkedin">
            {linkedinUrl}
          </a>
        </div>
        <div className="footer-section__right">
          <span className="footer-section__sections-label">Sections</span>
          <ul>
            {sections.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
      </div>
      <div className="footer-section__bottom">
        <span className="footer-section__tagline">{tagline}</span>
        <span className="footer-section__name">{name}</span>
      </div>
    </footer>
  );
}

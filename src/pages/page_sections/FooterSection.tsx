import { Link, useLocation } from "react-router-dom";
import type { FooterSection } from "../section_types";
import "./FooterSection.scss";

export function FooterSection({ linkedinUrl, sections, tagline, name }: FooterSection) {
  const { pathname } = useLocation();
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
            {sections.map(s => (
              <li key={s.label}>
                {s.href && !s.href.startsWith("/") ? (
                  // External (e.g. the Google Drive resume) → new tab
                  <a href={s.href} target="_blank" rel="noreferrer" className="footer-section__link">
                    {s.label}
                  </a>
                ) : s.href ? (
                  <Link
                    to={s.href}
                    className="footer-section__link"
                    // Linking to the page you're already on doesn't navigate, so scroll up instead
                    onClick={() => { if (s.href === pathname) window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  >
                    {s.label}
                  </Link>
                ) : s.label}
              </li>
            ))}
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

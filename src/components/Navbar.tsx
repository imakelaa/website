import { NavLink } from "react-router-dom";
import "../styles/components/_navbar.scss";
import type { Theme } from "./useTheme";

interface NavBarProps {
  dark?: boolean;
  /** When provided, shows a light/dark toggle in the top-right */
  theme?: Theme;
  onToggleTheme?: () => void;
}

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

export function NavBar({ dark = false, theme, onToggleTheme }: NavBarProps) {
  return (
    <nav className={`navbar${dark ? " navbar--dark" : ""}`}>
      <NavLink to="/" className="navbar__brand">Pakhi Sinha</NavLink>
      <ul className="navbar__links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><a href="https://drive.google.com/file/d/1ml3ep4_F_veIqSVG771ucRiHMBmTcKoY/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
        <li><a href="https://www.linkedin.com/in/pakhi-sinha-/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com/imakelaa" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      </ul>
      {theme && onToggleTheme && (
        <button
          type="button"
          className="navbar__theme-toggle"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {/* show the mode you'd switch TO */}
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
      )}
    </nav>
  );
}

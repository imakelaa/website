import { NavLink } from "react-router-dom";
import "../styles/components/_navbar.scss";

export function NavBar({ dark = false }: { dark?: boolean }) {
  return (
    <nav className={`navbar${dark ? " navbar--dark" : ""}`}>
      <NavLink to="/" className="navbar__brand">Pakhi Sinha</NavLink>
      <ul className="navbar__links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><a href="https://drive.google.com/file/d/1ml3ep4_F_veIqSVG771ucRiHMBmTcKoY/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
        <li><a href="https://www.linkedin.com/in/pakhi-sinha-/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com/imakelaa" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      </ul>
    </nav>
  );
}

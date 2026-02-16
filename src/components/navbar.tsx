import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/components/_navbar.scss"

export function NavBar() {
  const [showLogo, setShowLogo] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isDefault = isHome && !showLogo;
  
  useEffect(() => {
    const handleScroll = () => setShowLogo(window.scrollY > 100);

    if (isHome) {
      setShowLogo(window.scrollY > 100);
    } else {
      setShowLogo(true);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <nav className={`navbar ${isDefault ? "navbar--default" : "navbar--sidequests"}`}>
      <div className="navbar__container">
        {showLogo && <div className="navbar__logo">Pakhi Sinha</div>}
        <ul className="navbar__links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/sidequests">Sidequests</Link></li>
        </ul>
      </div>
    </nav>
  );
}
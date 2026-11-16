import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import { NavBar } from "./components/Navbar";
import CulturePage from "./pages/CulturePage";
import WritingsPage from "./pages/WritingsPage";
import WritingPostPage from "./pages/WritingPostPage";
import PhotographyPage from "./pages/PhotographyPage";
import "./styles/base/_layout.scss";
import { useEffect } from "react";
import { useTheme } from "./components/useTheme";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppWrapper() {
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "";
  const isWritings = location.pathname.startsWith("/writings");
  const { theme, toggle } = useTheme(isWritings);
  useEffect(() => {
    // /writings index and posts share a light/dark theme (see useTheme)
    if (isWritings) {
      document.body.className = "page-writings";
    } else if (location.pathname.startsWith("/contents")) {
      document.body.className = "page-contents";
    } else if (location.pathname.startsWith("/photography")) {
      document.body.className = "page-photography";
    } else {
      document.body.className = "page-default";
    }
  }, [location.pathname, isWritings]);

  return (
    <>
      <ScrollToTop />
      <div style={{ position: isHome ? "relative" : "static" }}>
        <NavBar
          // light mode needs dark navbar text; dark mode keeps it white
          dark={isWritings && theme === "light"}
          {...(isWritings && { theme, onToggleTheme: toggle })}
        />
      </div>
      <main className={isHome ? "" : "content-wrapper"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contents" element={<CulturePage />} />
          <Route path="/writings" element={<WritingsPage />} />
          <Route path="/writings/:slug" element={<WritingPostPage />} />
          <Route path="/photography" element={<PhotographyPage />} />
        </Routes>
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/">
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;

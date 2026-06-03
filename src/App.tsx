import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import { NavBar } from "./components/Navbar";
import Resume from "./pages/ResumePage";
import CulturePage from "./pages/CulturePage";
import WritingsPage from "./pages/WritingsPage";
import WritingPostPage from "./pages/WritingPostPage";
import PhotographyPage from "./pages/PhotographyPage";
import "./styles/base/_layout.scss";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppWrapper() {
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "";
  const isLightPage = location.pathname.startsWith("/writings");

  useEffect(() => {
    if (location.pathname === "/writings") {
      document.body.className = "page-writings";
    } else if (location.pathname.startsWith("/contents")) {
      document.body.className = "page-contents";
    } else if (location.pathname.startsWith("/photography")) {
      document.body.className = "page-photography";
    } else {
      document.body.className = "page-default";
    }
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <div style={{ position: isHome ? "relative" : "static" }}>
        <NavBar dark={isLightPage} />
      </div>
      <main className={isHome ? "" : "content-wrapper"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
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

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home"
import { NavBar } from "./components/Navbar";
import Resume from "../src/pages/ResumePage";
import Sidequests from "./pages/Sidequests";
import '../src/styles/base/_layout.scss'
import { useEffect } from "react";

function AppWrapper() {
  const location = useLocation();

  useEffect(() => {
    const pageClass = location.pathname === "/sidequests" ? "page-sidequests" : "page-default";
    
    document.body.className = pageClass;
  }, [location]);
  
  return (
    <>
      <NavBar />
      <main className="content-wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/sidequests" element={<Sidequests />} />
      </Routes>
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/website/">
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App

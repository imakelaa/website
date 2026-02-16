import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home"
import { NavBar } from "./components/Navbar";
import Resume from "../src/pages/Resume";
import Sidequests from "./pages/Sidequests";
// import './App.css';
import '../src/styles/base/_layout.scss'

function AppWrapper() {
  const location = useLocation();

  // Set class based on route
  const pageClass = location.pathname === "/sidequests" ? "page-sidequests" : "page-default";

  return (
    <div className={pageClass}>
      <NavBar />
      <main className="content-wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/sidequests" element={<Sidequests />} />
      </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App

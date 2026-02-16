import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import { NavBar } from "./components/Navbar";
import Resume from "../src/pages/Resume";
import Sidequests from "./pages/Sidequests";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/sidequests" element={<Sidequests />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import Missions from "./pages/Missions";
import InnovationLabs from "./pages/InnovationLabs";
import Allies from "./pages/Allies";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/innovation-labs" element={<InnovationLabs />} />
        <Route path="/allies" element={<Allies />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Missions from './pages/Missions'
import InnovationLabs from './pages/InnovationLabs'
import Allies from './pages/Allies'
import About from './pages/About'
import Contact from './pages/Contact'

// ScrollToTop component to reset scroll on route transition
function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  return null
}

function App() {
  // Global superhero selected profile
  const [selectedHero, setSelectedHero] = useState({
    name: 'Iron Man',
    avatar: 'https://images.unsplash.com/photo-1620336655055-088d06e36bf0?w=150&auto=format&fit=crop&q=80', // iron man theme placeholder/artwork
    color: '#E23636'
  })

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative bg-space-black">
        {/* Particle/Grid background overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0"></div>
        
        <Navbar selectedHero={selectedHero} setSelectedHero={setSelectedHero} />
        
        <main className="flex-grow z-10 pt-20">
          <Routes>
            <Route path="/" element={<Home selectedHero={selectedHero} />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/innovation-labs" element={<InnovationLabs />} />
            <Route path="/allies" element={<Allies />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App

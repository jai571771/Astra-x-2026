import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Event from './pages/Event'
import Workshop from './pages/Workshop'
import Sponsors from './pages/Sponsors'
import AboutUs from './pages/AboutUs'
import Gallery from './pages/Gallery'

// ScrollToTop component to reset scroll on route transition
function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  return null
}

function App() {
  const eventTheme = {
    name: 'ASTRA X',
    color: '#00D2FF'
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative bg-space-black">
        {/* Particle/Grid background overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0"></div>
        
        <Navbar />
        
        <main className="flex-grow z-10 pt-20">
          <Routes>
            <Route path="/" element={<Home selectedHero={eventTheme} />} />
            <Route path="/event" element={<Event />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/workshop" element={<Workshop />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/missions" element={<Navigate to="/event" replace />} />
            <Route path="/innovation-labs" element={<Navigate to="/workshop" replace />} />
            <Route path="/allies" element={<Navigate to="/sponsors" replace />} />
            <Route path="/about" element={<Navigate to="/about-us" replace />} />
            <Route path="/contact" element={<Navigate to="/about-us" replace />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App

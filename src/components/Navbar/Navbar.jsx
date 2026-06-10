import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaSatelliteDish } from 'react-icons/fa'
import './Navbar.css'

const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'EVENT', path: '/event' },
  { name: 'ABOUT US', path: '/about-us' },
  { name: 'WORKSHOP', path: '/workshop' },
  { name: 'GALLERY', path: '/gallery' },
  { name: 'SPONSORS', path: '/sponsors' }
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="fixed top-0 left-0 w-full z-50 premium-nav border-b border-white/10 px-4 md:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Event Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 flex items-center justify-center bg-reactor-blue/15 rounded-md border border-reactor-blue/40 group-hover:scale-105 transition-transform duration-300 shadow-blue-glow">
            <FaSatelliteDish className="text-reactor-blue text-lg animate-pulse" />
          </div>
          <span className="font-orbitron font-black text-xl tracking-tighter text-white group-hover:text-marvel-red transition-colors duration-300">
            ASTRA <span className="text-reactor-blue">X</span> <span className="text-marvel-red">2026</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-4 py-2 text-xs font-orbitron tracking-wider rounded-md font-medium transition-all duration-300 ${
                isActive(link.path)
                  ? 'text-white bg-white/10 border border-reactor-blue/30 shadow-[0_0_14px_rgba(0,210,255,0.16)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              {link.name}
              {isActive(link.path) && (
                <span 
                  className="absolute bottom-0 left-1/4 right-1/4 h-[2px] blur-[1px]" 
                  style={{ backgroundColor: '#00D2FF' }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Right Section: Registration CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            to="/event"
            className="hidden sm:inline-flex px-4 py-2 rounded-md bg-marvel-red hover:bg-marvel-red/80 border border-marvel-red text-white font-orbitron font-bold text-[10px] tracking-widest transition-all duration-300 hover:scale-105 shadow-red-glow"
          >
            REGISTER
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-400 hover:text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="lg:hidden mt-3 p-4 glass-panel rounded-lg border border-white/10 animate-fade-in">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2 text-sm font-orbitron tracking-wider rounded-md font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-white bg-white/10 border border-reactor-blue/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/event"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-4 py-2 rounded-md bg-marvel-red border border-marvel-red text-white font-orbitron font-bold text-xs tracking-widest text-center"
            >
              REGISTER
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

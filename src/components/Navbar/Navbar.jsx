import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaShieldAlt } from 'react-icons/fa'
import './Navbar.css'

const HEROES = [
  {
    name: 'Iron Man',
    avatar: 'https://images.unsplash.com/photo-1620336655055-088d06e36bf0?w=150&auto=format&fit=crop&q=80',
    color: '#E23636',
    glow: 'shadow-red-glow',
    stone: 'Reality Stone'
  },
  {
    name: 'Spider-Man',
    avatar: 'https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?w=150&auto=format&fit=crop&q=80',
    color: '#00D2FF',
    glow: 'shadow-blue-glow',
    stone: 'Space Stone'
  },
  {
    name: 'Dr. Strange',
    avatar: 'https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=150&auto=format&fit=crop&q=80',
    color: '#FFD700',
    glow: 'shadow-gold-glow',
    stone: 'Mind Stone'
  },
  {
    name: 'Thanos',
    avatar: 'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?w=150&auto=format&fit=crop&q=80',
    color: '#8A2BE2',
    glow: 'shadow-purple-glow',
    stone: 'Power Stone'
  }
]

function Navbar({ selectedHero, setSelectedHero }) {
  const [isOpen, setIsOpen] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { name: 'HEAD QUARTERS', path: '/' },
    { name: 'MISSIONS', path: '/missions' },
    { name: 'INNOVATION LABS', path: '/innovation-labs' },
    { name: 'ALLIES', path: '/allies' },
    { name: 'CONTACT', path: '/contact' },
    { name: 'ABOUT', path: '/about' }
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-panel border-b border-white/10 px-4 md:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Glowing Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 flex items-center justify-center bg-marvel-red/20 rounded-md border border-marvel-red/40 group-hover:scale-105 transition-transform duration-300">
            <FaShieldAlt className="text-marvel-red text-xl animate-pulse" />
          </div>
          <span className="font-orbitron font-black text-xl tracking-tighter text-white group-hover:text-marvel-red transition-colors duration-300">
            ASTRA <span className="text-marvel-red">X 2026</span>
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
                  ? 'text-white bg-white/5 border border-white/10'
                  : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              {link.name}
              {isActive(link.path) && (
                <span 
                  className="absolute bottom-0 left-1/4 right-1/4 h-[2px] blur-[1px]" 
                  style={{ backgroundColor: selectedHero.color }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Right Section: Superhero Profile Selector & Mobile Toggle */}
        <div className="flex items-center gap-4">
          
          {/* Avatar Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className={`relative w-10 h-10 rounded-full overflow-hidden border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${selectedHero.glow}`}
              style={{ borderColor: selectedHero.color }}
              title="Select Avenger Profile"
            >
              <img
                src={selectedHero.avatar}
                alt={selectedHero.name}
                className="w-full h-full object-cover"
              />
            </button>

            {/* Profile Dropdown Menu */}
            {showDropdown && (
              <div className="absolute right-0 mt-3 w-56 glass-panel rounded-lg border border-white/10 p-2 shadow-2xl z-50 animate-float-medium">
                <div className="px-3 py-2 border-b border-white/5 text-center">
                  <p className="text-[10px] text-gray-500 font-orbitron">CURRENT IDENTITY</p>
                  <p className="text-sm font-bold tracking-wider font-orbitron" style={{ color: selectedHero.color }}>
                    {selectedHero.name.toUpperCase()}
                  </p>
                  <span className="inline-block mt-1 text-[9px] px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/5 font-mono">
                    {selectedHero.stone}
                  </span>
                </div>
                <div className="mt-1 space-y-1">
                  {HEROES.map((hero) => (
                    <button
                      key={hero.name}
                      onClick={() => {
                        setSelectedHero(hero)
                        setShowDropdown(false)
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-left text-xs font-orbitron text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                    >
                      <img
                        src={hero.avatar}
                        alt={hero.name}
                        className="w-6 h-6 rounded-full object-cover border"
                        style={{ borderColor: hero.color }}
                      />
                      <span className="flex-grow">{hero.name}</span>
                      {selectedHero.name === hero.name && (
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: hero.color }} />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

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
                    ? 'text-white bg-white/5 border border-white/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

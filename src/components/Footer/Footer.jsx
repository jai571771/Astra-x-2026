import React from 'react'
import { Link } from 'react-router-dom'
import { FaSatelliteDish, FaGithub, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="relative z-10 bg-[#040405] border-t border-white/5 pt-12 pb-8 px-4 md:px-8 overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-24 bg-marvel-red/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        
        {/* Left Column: Brand */}
        <div className="space-y-4 text-center md:text-left">
          <Link to="/" className="flex items-center justify-center md:justify-start gap-2">
            <FaSatelliteDish className="text-reactor-blue text-xl" />
            <span className="font-orbitron font-black text-lg tracking-tighter text-white">
              ASTRA <span className="text-reactor-blue">X</span> <span className="text-marvel-red">2026</span>
            </span>
          </Link>
          <p className="text-xs text-gray-500 font-outfit max-w-xs leading-relaxed">
            Demo flagship event website for a premium inter-college technology festival.
          </p>
        </div>

        {/* Middle Column: Links */}
        <div className="flex flex-col items-center justify-center md:items-start md:justify-start space-y-3">
          <h4 className="font-orbitron font-bold text-xs text-gray-300 tracking-widest">NAVIGATION</h4>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-xs font-orbitron">
            <Link to="/" className="text-gray-500 hover:text-white transition-colors duration-200">HOME</Link>
            <Link to="/event" className="text-gray-500 hover:text-white transition-colors duration-200">EVENT</Link>
            <Link to="/about-us" className="text-gray-500 hover:text-white transition-colors duration-200">ABOUT US</Link>
            <Link to="/workshop" className="text-gray-500 hover:text-white transition-colors duration-200">WORKSHOP</Link>
            <Link to="/gallery" className="text-gray-500 hover:text-white transition-colors duration-200">GALLERY</Link>
            <Link to="/sponsors" className="text-gray-500 hover:text-white transition-colors duration-200">SPONSORS</Link>
          </div>
        </div>

        {/* Right Column: Social Connection */}
        <div className="space-y-4 flex flex-col items-center md:items-end">
          <h4 className="font-orbitron font-bold text-xs text-gray-300 tracking-widest">CONNECT WITH ASTRA X</h4>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-marvel-red transition-all duration-300 bg-white/5 hover:scale-110">
              <FaGithub size={14} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-marvel-red transition-all duration-300 bg-white/5 hover:scale-110">
              <FaInstagram size={14} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-marvel-red transition-all duration-300 bg-white/5 hover:scale-110">
              <FaLinkedinIn size={14} />
            </a>
            <a href="mailto:info@astrax.com" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-marvel-red transition-all duration-300 bg-white/5 hover:scale-110">
              <FaEnvelope size={14} />
            </a>
          </div>
          <p className="text-[10px] text-gray-600 font-mono">
            DEMO SOCIAL LINKS // UPDATE BEFORE LAUNCH
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
        <p className="text-[10px] text-gray-600 font-mono">
          &copy; 2026 ASTRA X. ALL RIGHTS RESERVED.
        </p>
        <p className="text-[10px] text-gray-600 font-mono italic">
          Demo build ready for final content.
        </p>
      </div>
    </footer>
  )
}

export default Footer

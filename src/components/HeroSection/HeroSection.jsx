import React from 'react'
import { Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa'
import Countdown from '../Countdown/Countdown'

const STAGE_IMG = 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&auto=format&fit=crop&q=80'
const TECH_IMG = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=80'
const COSMIC_BG = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&auto=format&fit=crop&q=80'


function HeroSection({ selectedHero }) {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden py-16 px-4">
      
      {/* Background space artwork */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen animate-cosmic"
        style={{ backgroundImage: `url(${COSMIC_BG})` }}
      ></div>

      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-space-black via-transparent to-space-black/50 z-10"></div>

      {/* Floating event visuals - Desktop Layout (Side Columns) */}
      
      <div className="hidden lg:block absolute left-4 xl:left-12 bottom-12 w-[320px] xl:w-[400px] z-20 pointer-events-none animate-float">
        <img 
          src={STAGE_IMG}
          alt="ASTRA X stage lighting" 
          className="w-full h-72 object-cover rounded-lg opacity-45 drop-shadow-[0_0_20px_rgba(226,54,54,0.25)]"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>

      <div className="hidden lg:block absolute right-4 xl:right-12 bottom-12 w-[320px] xl:w-[400px] z-20 pointer-events-none animate-float-delayed">
        <img 
          src={TECH_IMG} 
          alt="ASTRA X participants collaborating" 
          className="w-full h-72 object-cover rounded-lg opacity-45 drop-shadow-[0_0_20px_rgba(0,210,255,0.25)]"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>

      {/* Center Cinematic Content */}
      <div className="relative z-30 max-w-4xl mx-auto flex flex-col items-center gap-6 mt-6">
        
        {/* Presenter tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] md:text-xs tracking-[0.2em] font-orbitron text-gray-400 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-marvel-red animate-ping"></span>
          Flagship College Event
        </div>

        {/* Title */}
        <div className="relative mt-2">
          {/* Backlit glow matching the selected character */}
          <div 
            className="absolute -inset-10 blur-[60px] rounded-full opacity-35 pointer-events-none"
            style={{ backgroundColor: selectedHero.color }}
          ></div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase relative select-none leading-none">
            <span className="bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-sm font-orbitron">
              ASTRA
            </span>
            <span className="block mt-2 bg-gradient-to-r from-infinity-gold via-yellow-400 to-amber-500 bg-clip-text text-transparent font-black tracking-widest text-glow-gold filter drop-shadow-[0_4px_10px_rgba(255,215,0,0.3)]">
              X 2026
            </span>
          </h1>
        </div>

        {/* Cinematic description */}
        <p className="text-gray-400 text-sm md:text-base font-outfit max-w-lg md:max-w-xl mx-auto leading-relaxed mt-2">
          A premium inter-college technology festival for builders, designers, coders, creators, and campus communities.
        </p>

        {/* Action Button */}
        <div className="mt-4 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link 
            to="/event" 
            className="group relative px-8 py-3.5 rounded-md font-orbitron font-bold text-xs tracking-widest overflow-hidden transition-all duration-300 hover:scale-105 shadow-md flex items-center gap-2"
            style={{ 
              background: `linear-gradient(135deg, ${selectedHero.color}, #060608)`,
              boxShadow: `0 0 15px ${selectedHero.color}40`,
              borderColor: `${selectedHero.color}60`,
              borderWidth: '1px'
            }}
          >
            <span className="absolute inset-0 w-full h-full bg-white/10 transform -skew-x-12 translate-x-full group-hover:translate-x-[-150%] transition-transform duration-1000"></span>
            VIEW EVENTS
            <FaChevronRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Countdown Timer */}
        <div className="mt-10">
          <p className="text-[10px] md:text-xs font-orbitron tracking-[0.25em] text-gray-500 font-bold mb-4">
            COUNTDOWN TO ASTRA X
          </p>
          <Countdown accentColor={selectedHero.color} />
        </div>
      </div>

      {/* Floating characters on Mobile View (Subtle overlay below the content) */}
      <div className="lg:hidden absolute bottom-4 left-0 w-full flex justify-between px-6 opacity-20 pointer-events-none z-10">
        <img src={STAGE_IMG} alt="" className="w-24 h-20 object-cover rounded animate-float" />
        <img src={TECH_IMG} alt="" className="w-24 h-20 object-cover rounded animate-float-delayed" />
      </div>

    </section>
  )
}

export default HeroSection

import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import { Link } from 'react-router-dom'
import { FaCalendarAlt, FaRadiation, FaUserFriends, FaCameraRetro, FaInfoCircle, FaHandshake } from 'react-icons/fa'

const HOME_SECTIONS = [
  {
    name: 'Event',
    color: '#E23636',
    border: 'border-marvel-red/20 hover:border-marvel-red/60',
    icon: FaCalendarAlt,
    title: 'EVENT',
    desc: 'Explore demo competitions, showcases, schedules, categories, venues, and prize pools for ASTRA X 2026.',
    link: '/event'
  },
  {
    name: 'About Us',
    color: '#00D2FF',
    border: 'border-reactor-blue/20 hover:border-reactor-blue/60',
    icon: FaInfoCircle,
    title: 'ABOUT US',
    desc: 'Read the demo identity, scale, purpose, and participant-focused direction for the flagship event.',
    link: '/about-us'
  },
  {
    name: 'Workshop',
    color: '#FFD700',
    border: 'border-infinity-gold/20 hover:border-infinity-gold/60',
    icon: FaRadiation,
    title: 'WORKSHOP',
    desc: 'Browse demo learning tracks for AI, robotics, immersive web, and applied technology sessions.',
    link: '/workshop'
  },
  {
    name: 'Gallery',
    color: '#8A2BE2',
    border: 'border-cosmic-purple/20 hover:border-cosmic-purple/60',
    icon: FaCameraRetro,
    title: 'GALLERY',
    desc: 'Preview demo image placeholders for stage moments, campus energy, workshops, and award night.',
    link: '/gallery'
  },
  {
    name: 'Sponsors',
    color: '#00D2FF',
    border: 'border-reactor-blue/20 hover:border-reactor-blue/60',
    icon: FaHandshake,
    title: 'SPONSORS',
    desc: 'View demo sponsor tiers, partner cards, logos, and short descriptions for layout testing.',
    link: '/sponsors'
  },
  {
    name: 'Participants',
    color: '#FFD700',
    border: 'border-infinity-gold/20 hover:border-infinity-gold/60',
    icon: FaUserFriends,
    title: 'PARTICIPANTS',
    desc: 'A demo participant-facing module for future registration, college teams, passes, and check-in flow.',
    link: '/event'
  }
]

function Home({ selectedHero }) {
  return (
    <div className="w-full">
      {/* Hero Header */}
      <HeroSection selectedHero={selectedHero} />

      {/* Event Module Grid */}
      <section className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto z-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black tracking-wider text-glow-red text-white">
            EXPLORE ASTRA X
          </h2>
          <p className="text-xs md:text-sm font-orbitron tracking-widest text-gray-500 mt-2 font-bold uppercase">
            Demo page modules ready for final event data
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {HOME_SECTIONS.map((section, i) => {
            const Icon = section.icon
            return (
              <div 
                key={i} 
                className={`glass-panel border rounded-lg p-6 flex flex-col justify-between hover:scale-[1.03] transition-all duration-300 relative group overflow-hidden ${section.border}`}
              >
                <div 
                  className="absolute -top-12 -right-12 w-24 h-24 rounded-full blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundColor: section.color }}
                ></div>

                <div>
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center border bg-white/5 mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ borderColor: `${section.color}30` }}
                  >
                    <Icon className="text-xl" style={{ color: section.color }} />
                  </div>

                  <h3 className="font-orbitron font-bold text-sm tracking-wider text-white mb-2">
                    {section.title}
                  </h3>
                  
                  <p className="text-xs text-gray-400 font-outfit leading-relaxed">
                    {section.desc}
                  </p>
                </div>

                <div className="mt-6">
                  <Link 
                    to={section.link} 
                    className="font-orbitron text-[10px] tracking-widest font-bold group-hover:underline flex items-center gap-1"
                    style={{ color: section.color }}
                  >
                    ACCESS CONSOLE &rarr;
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Assemble Section CTA */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-transparent to-[#040405] text-center overflow-hidden z-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(226,54,54,0.05),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <h2 className="text-3xl md:text-5xl font-black font-orbitron tracking-tight text-white leading-none">
            THE FLAGSHIP EXPERIENCE <br />
            <span className="text-marvel-red text-glow-red">TAKING SHAPE</span>
          </h2>
          <p className="text-xs md:text-sm text-gray-500 font-outfit max-w-lg mx-auto leading-relaxed">
            This demo now has the requested navigation and page structure. Final event data can be dropped into the same data modules later.
          </p>
          <div>
            <Link 
              to="/about-us" 
              className="inline-block px-8 py-3 rounded-md bg-white/5 border border-white/10 hover:border-marvel-red font-orbitron text-xs font-bold tracking-widest text-white transition-all duration-300 hover:scale-105"
            >
              LEARN ABOUT ASTRA X
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

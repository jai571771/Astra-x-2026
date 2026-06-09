import React from 'react'
import { FaRocket, FaUsers, FaUniversity, FaLayerGroup } from 'react-icons/fa'

const stats = [
  { label: 'Expected participants', value: '1500+' },
  { label: 'Partner colleges', value: '40+' },
  { label: 'Events and tracks', value: '12+' },
  { label: 'Volunteer crew', value: '80+' }
]

const highlights = [
  {
    icon: FaRocket,
    title: 'Flagship Tech Festival',
    text: 'ASTRA X 2026 is planned as a large-format inter-college event built around innovation, competition, workshops, and community.'
  },
  {
    icon: FaUsers,
    title: 'Multi-college Participation',
    text: 'The event experience is designed for participants, mentors, guests, volunteers, and sponsor partners from multiple institutions.'
  },
  {
    icon: FaLayerGroup,
    title: 'Scalable Event System',
    text: 'The website structure supports event listings, demo data, galleries, sponsor tiers, and future registration flows.'
  },
  {
    icon: FaUniversity,
    title: 'Campus Showcase',
    text: 'The final version can include college details, department information, chairman message, principal message, and organizing committee data.'
  }
]

function AboutUs() {
  return (
    <div className="w-full min-h-screen py-16 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      <div className="text-center relative z-10">
        <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] tracking-[0.2em] font-orbitron text-gray-400 mb-2 uppercase">
          Event identity
        </span>
        <h1 className="text-4xl md:text-6xl font-black font-orbitron tracking-tight text-white uppercase text-glow-gold leading-none">
          ABOUT US
        </h1>
        <p className="text-xs md:text-sm font-orbitron tracking-widest text-gray-500 mt-3 font-bold uppercase">
          Demo overview for the ASTRA X 2026 flagship website
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
        <div className="lg:col-span-5">
          <div className="glass-panel border border-white/10 hover:border-reactor-blue/40 rounded-lg overflow-hidden h-full">
            <div className="h-72 lg:h-full min-h-[420px] relative">
              <img
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=900&auto=format&fit=crop&q=80"
                alt="Students at a technology event"
                className="w-full h-full object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-space-black via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-[10px] font-mono text-reactor-blue tracking-widest uppercase">Demo visual placeholder</p>
                <h2 className="text-2xl font-orbitron font-black text-white mt-1">Built for scale, energy, and campus pride.</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="glass-panel border border-white/10 rounded-lg p-6 md:p-8 shadow-lg space-y-5">
            <h2 className="font-orbitron font-black text-lg text-marvel-red tracking-wider uppercase">
              ASTRA X 2026
            </h2>
            <p className="text-xs md:text-sm text-gray-300 font-outfit leading-relaxed">
              ASTRA X 2026 is the demo structure for a premium flagship event website. The final content can be swapped with verified college, department, schedule, speaker, sponsor, and registration information once available.
            </p>
            <p className="text-xs md:text-sm text-gray-300 font-outfit leading-relaxed">
              The current direction focuses on a modern dark interface, strong event branding, quick navigation, and scalable sections for participants from multiple colleges.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((item) => (
              <div key={item.label} className="glass-panel border border-white/10 rounded-lg p-4 text-center">
                <p className="text-2xl font-orbitron font-black text-white text-glow-blue">{item.value}</p>
                <p className="text-[9px] text-gray-500 font-mono uppercase tracking-widest mt-1">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="glass-panel border border-white/10 rounded-lg p-5 hover:border-reactor-blue/30 transition-colors">
                  <Icon className="text-reactor-blue mb-3" />
                  <h3 className="font-orbitron font-bold text-xs text-white uppercase tracking-wider">{item.title}</h3>
                  <p className="text-[11px] text-gray-400 font-outfit leading-relaxed mt-2">{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs

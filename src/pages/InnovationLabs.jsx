import React from 'react'
import { workshopsData } from '../data/workshops'
import WorkshopCard from '../components/WorkshopCard/WorkshopCard'
import { FaTerminal } from 'react-icons/fa'

function InnovationLabs() {
  return (
    <div className="w-full min-h-screen py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header section */}
      <div className="text-center mb-16 relative">
        {/* Subtle background element */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-reactor-blue/5 blur-[80px] rounded-full pointer-events-none"></div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-reactor-blue/10 border border-reactor-blue/30 text-[10px] tracking-widest font-mono text-reactor-blue mb-4 uppercase">
          <FaTerminal className="animate-pulse" />
          SYSTEM CONTROL: STARK LABS
        </div>
        <h1 className="text-4xl md:text-6xl font-black font-orbitron tracking-tight text-white uppercase text-glow-blue leading-none">
          INNOVATION LABS
        </h1>
        <p className="text-xs md:text-sm font-orbitron tracking-widest text-gray-500 mt-2 font-bold uppercase">
          Tactical Upgrade Workshops // Master Stark Industries Tech Systems
        </p>
      </div>

      {/* Lab Blueprint Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {workshopsData.map((workshop) => (
          <WorkshopCard key={workshop.id} workshop={workshop} />
        ))}
      </div>

      {/* Info notice footer */}
      <div className="mt-16 glass-panel border border-white/5 p-6 rounded-lg max-w-3xl mx-auto text-center font-mono text-[10px] text-gray-500 leading-relaxed">
        WARNING: Security clearances are required for lab entrance. Registrations are limited to 40 cadets per quantum timeline. Certificate authentication will be issued post lab completion.
      </div>
    </div>
  )
}

export default InnovationLabs

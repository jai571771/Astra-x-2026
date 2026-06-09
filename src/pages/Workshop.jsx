import React from 'react'
import { workshopsData } from '../data/workshops'
import WorkshopCard from '../components/WorkshopCard/WorkshopCard'
import { FaTerminal } from 'react-icons/fa'

function Workshop() {
  return (
    <div className="w-full min-h-screen py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16 relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-reactor-blue/5 blur-[80px] rounded-full pointer-events-none"></div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-reactor-blue/10 border border-reactor-blue/30 text-[10px] tracking-widest font-mono text-reactor-blue mb-4 uppercase">
          <FaTerminal className="animate-pulse" />
          Hands-on learning tracks
        </div>
        <h1 className="text-4xl md:text-6xl font-black font-orbitron tracking-tight text-white uppercase text-glow-blue leading-none">
          WORKSHOP
        </h1>
        <p className="text-xs md:text-sm font-orbitron tracking-widest text-gray-500 mt-2 font-bold uppercase">
          Demo workshops for AI, robotics, immersive web, and applied technology
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {workshopsData.map((workshop) => (
          <WorkshopCard key={workshop.id} workshop={workshop} />
        ))}
      </div>

      <div className="mt-16 glass-panel border border-white/5 p-6 rounded-lg max-w-3xl mx-auto text-center font-mono text-[10px] text-gray-500 leading-relaxed">
        Demo notice: workshop seats, mentors, fees, and kit details are temporary placeholders and can be replaced once final event data is confirmed.
      </div>
    </div>
  )
}

export default Workshop

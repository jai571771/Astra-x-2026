import React from 'react'
import { FaClock, FaCalendarAlt, FaUserTie, FaCheckCircle, FaMicrochip } from 'react-icons/fa'

function WorkshopCard({ workshop }) {
  return (
    <div className="glass-panel border border-reactor-blue/20 hover:border-reactor-blue/50 hover:shadow-blue-glow rounded-lg overflow-hidden flex flex-col justify-between transition-all duration-300 relative group p-6">
      
      {/* Blueprint background lines pattern decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,210,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,210,255,0.015)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none z-0"></div>

      {/* Decorative Blueprint corner crosshairs */}
      <span className="absolute top-2 left-2 text-[8px] font-mono text-reactor-blue/30 select-none font-bold">+ AR-2026</span>
      <span className="absolute bottom-2 right-2 text-[8px] font-mono text-reactor-blue/30 select-none font-bold">SECURE // JARVIS</span>

      <div className="relative z-10 space-y-4">
        {/* Banner info */}
        <div>
          <div className="flex items-center gap-1.5 text-[9px] font-mono text-reactor-blue font-bold tracking-widest uppercase">
            <FaMicrochip size={10} className="animate-pulse" />
            {workshop.codename}
          </div>
          <h3 className="font-orbitron font-black text-xl tracking-tight text-white mt-1 group-hover:text-reactor-blue transition-colors duration-300">
            {workshop.title}
          </h3>
          <p className="text-xs font-semibold text-gray-500 font-orbitron mt-0.5 tracking-wider uppercase">
            {workshop.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-400 font-outfit leading-relaxed">
          {workshop.description}
        </p>

        {/* Specifications HUD */}
        <div className="grid grid-cols-2 gap-3 py-3 border-y border-white/5 font-mono text-[10px] text-gray-400 bg-space-black/50 px-3 rounded">
          <div className="flex items-center gap-2">
            <FaUserTie className="text-reactor-blue" />
            <span className="truncate" title={workshop.speaker}>{workshop.speaker.split('(')[0]}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-reactor-blue" />
            <span>{workshop.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-reactor-blue" />
            <span>{workshop.date} // {workshop.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-infinity-gold font-bold">FEE:</span>
            <span className="text-white font-bold">{workshop.fee}</span>
          </div>
        </div>

        {/* Perks list */}
        <div className="space-y-1.5">
          <p className="text-[10px] font-orbitron tracking-wider text-gray-500 font-bold uppercase">DEPLOYMENT PERKS</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {workshop.perks.map((perk, i) => (
              <div key={i} className="flex items-center gap-1.5 text-[10px] text-gray-300 font-outfit">
                <FaCheckCircle className="text-reactor-blue text-[9px] flex-shrink-0" />
                <span className="truncate">{perk}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Button footer */}
      <div className="relative z-10 mt-6 pt-4 border-t border-white/5">
        <button
          onClick={() => {
            alert(`Initiating registration console for ${workshop.title}. Cost: ${workshop.fee}. Contact the lab coordinators to secure your slot!`)
          }}
          className="w-full py-2.5 rounded font-orbitron font-bold text-xs tracking-widest bg-reactor-blue/10 hover:bg-reactor-blue/25 border border-reactor-blue/30 hover:border-reactor-blue text-reactor-blue text-center transition-all duration-300 shadow-[0_0_10px_rgba(0,210,255,0.05)]"
        >
          SECURE LAB ACCESS
        </button>
      </div>

    </div>
  )
}

export default WorkshopCard

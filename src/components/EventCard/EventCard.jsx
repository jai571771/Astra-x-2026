import React, { useState } from 'react'
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaTrophy, FaUserAlt, FaTimes } from 'react-icons/fa'

function EventCard({ event }) {
  const [showModal, setShowModal] = useState(false)

  // Accent colors based on event categories
  const categoryConfig = {
    mega: {
      color: '#FFD700', // Gold
      bg: 'bg-infinity-gold/10',
      border: 'border-infinity-gold/20 hover:border-infinity-gold/50',
      shadow: 'hover:shadow-gold-glow',
      text: 'text-infinity-gold'
    },
    technical: {
      color: '#00D2FF', // Blue
      bg: 'bg-reactor-blue/10',
      border: 'border-reactor-blue/20 hover:border-reactor-blue/50',
      shadow: 'hover:shadow-blue-glow',
      text: 'text-reactor-blue'
    },
    'non-technical': {
      color: '#8A2BE2', // Purple
      bg: 'bg-cosmic-purple/10',
      border: 'border-cosmic-purple/20 hover:border-cosmic-purple/50',
      shadow: 'hover:shadow-purple-glow',
      text: 'text-cosmic-purple'
    }
  }

  const config = categoryConfig[event.category] || categoryConfig.technical

  return (
    <>
      <div 
        className={`glass-panel border rounded-lg overflow-hidden flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 relative group shadow-md ${config.border} ${config.shadow}`}
      >
        {/* Banner image with overlay */}
        <div className="h-40 relative overflow-hidden bg-space-black/50">
          <div className="absolute inset-0 bg-gradient-to-t from-space-black to-transparent z-10"></div>
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-80"
          />
          {/* Category Tag */}
          <span 
            className={`absolute top-3 right-3 z-20 text-[9px] font-orbitron font-bold tracking-widest px-2 py-0.5 rounded border uppercase bg-space-black/90 ${config.text}`}
            style={{ borderColor: `${config.color}40` }}
          >
            {event.category}
          </span>
        </div>

        {/* Card Body */}
        <div className="p-5 flex-grow flex flex-col justify-between gap-4">
          <div className="space-y-1">
            <p className="text-[10px] font-mono tracking-wider text-gray-500 font-bold uppercase">
              {event.codename}
            </p>
            <h3 className="font-orbitron font-extrabold text-lg tracking-wide text-white group-hover:text-marvel-red transition-colors duration-300">
              {event.title}
            </h3>
            <p className="text-xs text-gray-400 font-outfit leading-relaxed mt-2 line-clamp-3">
              {event.description}
            </p>
          </div>

          <div className="space-y-2 border-t border-white/5 pt-3">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <FaTrophy className="text-gray-600 w-3" />
              <span>Pool: <strong className="text-white font-mono">{event.prize}</strong></span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <FaMapMarkerAlt className="text-gray-600 w-3" />
              <span>{event.venue}</span>
            </div>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="w-full mt-2 py-2 rounded font-orbitron font-bold text-[10px] tracking-widest bg-white/5 hover:bg-white/10 border border-white/10 text-center transition-colors duration-200 text-white"
          >
            VIEW EVENT DETAILS
          </button>
        </div>
      </div>

      {/* Modal Dialog */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-space-black/95 backdrop-blur-sm animate-fade-in">
          <div 
            className="w-full max-w-lg glass-panel rounded-lg border p-6 md:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]"
            style={{ borderColor: `${config.color}40` }}
          >
            {/* Close Button */}
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <FaTimes size={16} />
            </button>

            {/* Header */}
            <div className="space-y-1 pb-4 border-b border-white/10">
              <span className={`text-[9px] font-orbitron font-bold tracking-widest uppercase px-2 py-0.5 rounded border bg-white/5 ${config.text}`} style={{ borderColor: `${config.color}30` }}>
                {event.category.toUpperCase()} EVENT
              </span>
              <h2 className="text-2xl md:text-3xl font-black font-orbitron tracking-wide text-white mt-2">
                {event.title}
              </h2>
              <p className="text-xs text-gray-500 font-mono italic">{event.codename}</p>
            </div>

            {/* Content Details */}
            <div className="py-5 space-y-4 text-xs font-outfit leading-relaxed text-gray-300">
              <p>{event.description}</p>
              
              <div className="grid grid-cols-2 gap-4 bg-white/5 border border-white/5 rounded-md p-4 mt-2">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-marvel-red w-4" />
                  <div>
                    <p className="text-[9px] text-gray-500 font-mono uppercase">DATE</p>
                    <p className="font-bold text-white">{event.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="text-reactor-blue w-4" />
                  <div>
                    <p className="text-[9px] text-gray-500 font-mono uppercase">TIMING</p>
                    <p className="font-bold text-white">{event.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FaTrophy className="text-infinity-gold w-4" />
                  <div>
                    <p className="text-[9px] text-gray-500 font-mono uppercase">PRIZE POOL</p>
                    <p className="font-bold text-glow-gold text-infinity-gold font-mono">{event.prize}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-cosmic-purple w-4" />
                  <div>
                    <p className="text-[9px] text-gray-500 font-mono uppercase">VENUE</p>
                    <p className="font-bold text-white">{event.venue}</p>
                  </div>
                </div>
              </div>

              {/* Coordinators */}
              <div className="space-y-2 pt-2">
                <h4 className="font-orbitron font-bold text-xs text-white flex items-center gap-1.5">
                  <FaUserAlt size={10} className="text-marvel-red" />
                  EVENT COORDINATORS
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-1">
                  {event.coordinators.map((coordinator, idx) => (
                    <li key={idx} className="bg-white/5 border border-white/5 p-2.5 rounded font-mono text-[11px] text-gray-300 flex justify-between items-center">
                      <span>{coordinator.split('(')[0].trim()}</span>
                      <span className="text-marvel-red text-[10px]">{coordinator.match(/\(([^)]+)\)/)?.[1] || ''}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Secure directive */}
              <div className="bg-marvel-red/10 border border-marvel-red/20 rounded p-3 text-[10px] text-gray-400 font-mono">
                DEMO NOTE // Registration flow is a placeholder. Replace this with the final participant registration process before launch.
              </div>
            </div>

            {/* Footer buttons */}
            <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded bg-white/5 border border-white/10 text-xs font-orbitron hover:bg-white/10 transition-colors text-white cursor-pointer"
              >
                CLOSE
              </button>
              <a
                href="#register"
                onClick={() => {
                  alert(`Demo registration query opened for ${event.title}. Replace this with the final registration flow.`)
                  setShowModal(false)
                }}
                className="px-4 py-2 rounded bg-marvel-red border border-marvel-red hover:bg-marvel-red/80 transition-colors text-xs font-orbitron text-white text-center font-bold"
              >
                REGISTER INTEREST
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default EventCard

import React, { useState } from 'react'
import { FaClock, FaCalendarAlt, FaUserTie, FaCheckCircle, FaMicrochip } from 'react-icons/fa'

function WorkshopCard({ workshop, activeStoneFilter }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  // Map workshop to its respective Infinity Stone
  const stoneKey = workshop.stoneKey || (
    workshop.id === 1 ? 'mind' :
    workshop.id === 2 ? 'time' :
    workshop.id === 3 ? 'reality' :
    workshop.id === 4 ? 'space' :
    workshop.id === 5 ? 'power' : 'space'
  )

  const stoneInfo = {
    space: { name: "Space Stone", dot: "🔵", color: "#00D2FF", cta: "HARNESS PORTAL" },
    reality: { name: "Reality Stone", dot: "🔴", color: "#FF0055", cta: "ALTER REALITY" },
    power: { name: "Power Stone", dot: "🟣", color: "#B000FF", cta: "UNLEASH POWER" },
    mind: { name: "Mind Stone", dot: "🟡", color: "#FFD700", cta: "ACTIVATE SYNAPSE" },
    time: { name: "Time Stone", dot: "🟢", color: "#00FF66", cta: "CHRONOS CONTROL" }
  }

  const currentStone = stoneInfo[stoneKey]

  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    // Smooth magnetic attraction scaling: max 8px translation
    const pullX = (x / (rect.width / 2)) * 7
    const pullY = (y / (rect.height / 2)) * 7
    
    setCoords({ x: pullX, y: pullY })
  }

  const handleCardMouseEnter = () => {
    setIsHovered(true)
  }

  const handleCardMouseLeave = () => {
    setIsHovered(false)
    setCoords({ x: 0, y: 0 })
  }

  const handleActivate = (e) => {
    // Interactive click ripple visual feedback
    const btn = e.currentTarget
    const ripple = document.createElement('span')
    ripple.className = 'absolute rounded-full bg-white/20 pointer-events-none'
    const size = Math.max(btn.clientWidth, btn.clientHeight)
    ripple.style.width = ripple.style.height = `${size}px`
    ripple.style.left = '50%'
    ripple.style.top = '50%'
    ripple.style.transform = 'translate(-50%, -50%) scale(0)'
    ripple.style.animation = 'ripple-effect 0.5s ease-out'
    
    const styleSheet = document.styleSheets[0]
    const keyframes = `@keyframes ripple-effect { to { transform: translate(-50%, -50%) scale(2); opacity: 0; } }`
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length)
    
    btn.appendChild(ripple)
    setTimeout(() => ripple.remove(), 500)

    setTimeout(() => {
      alert(`[AstraX Core Sanctum] Channeling the ${currentStone.name} power matrix...\nEngaging Module: "${workshop.title}"\nFee: ${workshop.fee}\nMentor: ${workshop.speaker}`)
    }, 150)
  }

  const isDimmed = activeStoneFilter !== 'all' && activeStoneFilter !== stoneKey
  const isHighlighted = activeStoneFilter === stoneKey

  return (
    <div 
      onMouseMove={handleCardMouseMove}
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
      className={`stone-card stone-${stoneKey} flex flex-col justify-between p-6 select-none ${
        isDimmed ? 'stone-card-dimmed' : ''
      } ${
        isHighlighted ? 'active-highlight' : ''
      }`}
      style={{
        transform: isHovered 
          ? `translateY(-10px) translate3d(${coords.x}px, ${coords.y}px, 15px) scale(1.03)` 
          : 'translateY(0px) translate3d(0px, 0px, 0px) scale(1)',
        transition: isHovered ? 'transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* Decorative cosmic glow behind cards */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 rounded-[20px]"
        style={{
          background: `radial-gradient(circle at center, ${currentStone.color} 0%, transparent 70%)`
        }}
      />
      
      {/* Stone indicator dot and title */}
      <div className="absolute top-3 left-4 flex items-center gap-1.5 z-20">
        <span 
          className="text-[9px] font-mono tracking-widest uppercase font-bold"
          style={{ color: currentStone.color }}
        >
          {currentStone.dot} {currentStone.name}
        </span>
      </div>

      <div className="absolute top-3 right-4 z-20">
        <span className="text-[8px] font-mono text-white/20 select-none font-bold">
          AX-2026 // {workshop.codename.toUpperCase()}
        </span>
      </div>

      <div className="relative z-10 space-y-4 pt-4">
        {/* Title and subtitle */}
        <div>
          <div 
            className="flex items-center gap-1.5 text-[9px] font-mono tracking-widest uppercase font-bold"
            style={{ color: currentStone.color }}
          >
            <FaMicrochip size={9} className="animate-pulse" />
            SECURED TRANS-LINK
          </div>
          
          <h3 className="font-orbitron font-black text-xl tracking-tight text-white mt-1">
            {workshop.title}
          </h3>
          <p className="text-[10px] font-bold text-gray-500 font-orbitron mt-0.5 tracking-wider uppercase">
            {workshop.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-400 font-outfit leading-relaxed min-h-[48px]">
          {workshop.description}
        </p>

        {/* Specifications HUD */}
        <div 
          className="grid grid-cols-2 gap-3 py-3 border-y border-white/5 font-mono text-[9px] text-gray-400 bg-black/30 px-3 rounded-lg"
        >
          <div className="flex items-center gap-2">
            <FaUserTie style={{ color: currentStone.color }} />
            <span className="truncate text-white/95" title={workshop.speaker}>
              {workshop.speaker.split('(')[0].trim()}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock style={{ color: currentStone.color }} />
            <span className="text-white/95">{workshop.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarAlt style={{ color: currentStone.color }} />
            <span className="text-white/95 truncate">{workshop.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#D4AF37] font-bold">FEES:</span>
            <span className="text-white font-bold">{workshop.fee.replace('INR ', '₹')}</span>
          </div>
        </div>

        {/* Perks list */}
        <div className="space-y-1.5">
          <p className="text-[9px] font-orbitron tracking-wider text-gray-500 font-bold uppercase">MODULE REWARDS</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {workshop.perks.map((perk, i) => (
              <div key={i} className="flex items-center gap-1.5 text-[10px] text-gray-300 font-outfit">
                <FaCheckCircle className="text-[9px] flex-shrink-0" style={{ color: currentStone.color }} />
                <span className="truncate">{perk}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Button footer */}
      <div className="relative z-10 mt-6 pt-4 border-t border-white/5">
        <button
          onClick={handleActivate}
          className="w-full py-2.5 rounded-xl font-orbitron font-bold text-[10px] tracking-widest text-white/80 text-center uppercase stone-cta-btn"
          style={{
            borderColor: `${currentStone.color}20`
          }}
        >
          {currentStone.cta}
        </button>
      </div>
    </div>
  )
}

export default WorkshopCard

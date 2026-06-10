import React from 'react'

function SponsorTier({ tierName, sponsors }) {
  // Tier color configuration
  const tierConfig = {
    vibranium: {
      title: "TITLE SPONSORS",
      sub: "PRIMARY PARTNER TIER",
      color: "#FFD700", // Gold Glow
      glowClass: "hover:shadow-gold-glow border-yellow-500/20 hover:border-yellow-400",
      textColor: "text-infinity-gold text-glow-gold"
    },
    adamantium: {
      title: "GOLD SPONSORS",
      sub: "STRATEGIC PARTNER TIER",
      color: "#00D2FF", // Blue Glow
      glowClass: "hover:shadow-blue-glow border-reactor-blue/20 hover:border-reactor-blue",
      textColor: "text-reactor-blue text-glow-blue"
    },
    uru: {
      title: "SUPPORT PARTNERS",
      sub: "EVENT SUPPORT TIER",
      color: "#8A2BE2", // Purple Glow
      glowClass: "hover:shadow-purple-glow border-cosmic-purple/20 hover:border-cosmic-purple",
      textColor: "text-cosmic-purple text-glow-purple"
    }
  }

  const currentTier = tierConfig[tierName.toLowerCase()] || tierConfig.uru

  if (!sponsors || sponsors.length === 0) return null

  return (
    <div className="space-y-6">
      {/* Tier Label */}
      <div className="text-center md:text-left border-l-4 pl-4 py-1" style={{ borderColor: currentTier.color }}>
        <h3 className={`font-orbitron font-black text-lg md:text-xl tracking-wider ${currentTier.textColor}`}>
          {currentTier.title}
        </h3>
        <p className="text-[9px] font-mono tracking-widest text-gray-500 font-bold uppercase mt-0.5">
          {currentTier.sub}
        </p>
      </div>

      {/* Sponsor Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sponsors.map((sponsor) => (
          <a
            key={sponsor.id}
            href={sponsor.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`glass-panel border rounded-lg p-6 flex flex-col items-center justify-between text-center transition-all duration-300 hover:scale-[1.03] group ${currentTier.glowClass}`}
          >
            {/* Logo */}
            <div className="w-20 h-20 rounded-full overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center p-2 mb-4 group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300 relative">
              {/* Radial gradient background to blend logo */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_75%)]"></div>
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-300 relative z-10"
                onError={(e) => {
                  // If image fails, replace with first letter
                  e.target.style.display = 'none';
                }}
              />
              {/* Fallback initials */}
              <span className="font-orbitron font-bold text-gray-600 text-lg absolute z-0 select-none">
                {sponsor.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>

            {/* Content info */}
            <div className="space-y-1">
              <h4 className="font-orbitron font-bold text-xs text-white tracking-wider group-hover:text-white transition-colors">
                {sponsor.name}
              </h4>
              <p className="text-[10px] text-gray-500 font-outfit leading-relaxed max-w-xs mt-1">
                {sponsor.desc}
              </p>
            </div>

            {/* Portal Link helper */}
            <span 
              className="mt-4 font-mono text-[9px] tracking-wider uppercase font-semibold transition-all duration-300 group-hover:underline opacity-60 group-hover:opacity-100"
              style={{ color: currentTier.color }}
            >
              Partner Link &rarr;
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default SponsorTier

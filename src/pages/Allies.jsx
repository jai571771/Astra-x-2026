import React from 'react'
import { sponsorsData } from '../data/sponsors'
import SponsorTier from '../components/SponsorTier/SponsorTier'
import { FaShieldAlt } from 'react-icons/fa'

function Allies() {
  // Group sponsors by tier
  const vibraniumAllies = sponsorsData.filter(s => s.tier === 'vibranium')
  const adamantiumAllies = sponsorsData.filter(s => s.tier === 'adamantium')
  const uruAllies = sponsorsData.filter(s => s.tier === 'uru')

  return (
    <div className="w-full min-h-screen py-16 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-cosmic-purple/5 blur-[80px] rounded-full pointer-events-none"></div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-cosmic-purple/10 border border-cosmic-purple/30 text-[10px] tracking-widest font-mono text-cosmic-purple mb-4 uppercase">
          <FaShieldAlt className="animate-pulse" />
          Secure Coalition Roster
        </div>
        <h1 className="text-4xl md:text-6xl font-black font-orbitron tracking-tight text-white uppercase text-glow-purple leading-none">
          COSMIC ALLIES
        </h1>
        <p className="text-xs md:text-sm font-orbitron tracking-widest text-gray-500 mt-2 font-bold uppercase">
          Sponsors & Strategic Partners of Astra X 2026
        </p>
      </div>

      {/* Tiers List */}
      <div className="space-y-12">
        {vibraniumAllies.length > 0 && (
          <SponsorTier tierName="Vibranium" sponsors={vibraniumAllies} />
        )}
        
        {adamantiumAllies.length > 0 && (
          <SponsorTier tierName="Adamantium" sponsors={adamantiumAllies} />
        )}

        {uruAllies.length > 0 && (
          <SponsorTier tierName="Uru" sponsors={uruAllies} />
        )}
      </div>

      {/* Footer Info */}
      <div className="glass-panel border border-white/5 p-6 rounded-lg text-center max-w-3xl mx-auto font-mono text-[9px] text-gray-500 leading-relaxed">
        Secure handshake protocol active. To form an alliance with S.H.I.E.L.D. and represent your syndicate at ASTRA X, please initiate contact via our communication console.
      </div>

    </div>
  )
}

export default Allies

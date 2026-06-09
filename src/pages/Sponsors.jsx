import React from 'react'
import { sponsorsData } from '../data/sponsors'
import SponsorTier from '../components/SponsorTier/SponsorTier'
import { FaHandshake } from 'react-icons/fa'

function Sponsors() {
  const titleSponsors = sponsorsData.filter(s => s.tier === 'vibranium')
  const goldSponsors = sponsorsData.filter(s => s.tier === 'adamantium')
  const supportSponsors = sponsorsData.filter(s => s.tier === 'uru')

  return (
    <div className="w-full min-h-screen py-16 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      <div className="text-center relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-cosmic-purple/5 blur-[80px] rounded-full pointer-events-none"></div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-cosmic-purple/10 border border-cosmic-purple/30 text-[10px] tracking-widest font-mono text-cosmic-purple mb-4 uppercase">
          <FaHandshake className="animate-pulse" />
          Brand and industry partners
        </div>
        <h1 className="text-4xl md:text-6xl font-black font-orbitron tracking-tight text-white uppercase text-glow-purple leading-none">
          SPONSORS
        </h1>
        <p className="text-xs md:text-sm font-orbitron tracking-widest text-gray-500 mt-2 font-bold uppercase">
          Demo sponsor roster for ASTRA X 2026
        </p>
      </div>

      <div className="space-y-12">
        {titleSponsors.length > 0 && (
          <SponsorTier tierName="Vibranium" sponsors={titleSponsors} />
        )}

        {goldSponsors.length > 0 && (
          <SponsorTier tierName="Adamantium" sponsors={goldSponsors} />
        )}

        {supportSponsors.length > 0 && (
          <SponsorTier tierName="Uru" sponsors={supportSponsors} />
        )}
      </div>

      <div className="glass-panel border border-white/5 p-6 rounded-lg text-center max-w-3xl mx-auto font-mono text-[9px] text-gray-500 leading-relaxed">
        Demo notice: sponsor names, tiers, logos, links, and descriptions are sample entries for layout testing.
      </div>
    </div>
  )
}

export default Sponsors

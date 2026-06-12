import React from 'react'
import { workshopsData } from '../data/workshops'
import WorkshopCard from '../components/WorkshopCard/WorkshopCard'
import { FaTerminal } from 'react-icons/fa'

function Workshop() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#02020b]">
      {/* Full-page animated background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.16),transparent_24%)]" />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-8 h-72 w-72 rounded-full bg-cyan-400/8 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_35%,rgba(255,255,255,0.02))]" />
      </div>

      {/* Blueprint/grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.10) 1px, transparent 1px)',
          backgroundSize: '88px 88px',
        }}
      />

      {/* Floating particle lights */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span
          className="absolute top-16 left-8 h-2 w-2 rounded-full bg-cyan-300/90 opacity-80 animate-[drift_16s_ease-in-out_infinite]"
          style={{ animationDelay: '0s' }}
        />
        <span
          className="absolute top-24 right-20 h-2.5 w-2.5 rounded-full bg-violet-400/90 opacity-80 animate-[driftAlt_18s_ease-in-out_infinite]"
          style={{ animationDelay: '1.5s' }}
        />
        <span
          className="absolute bottom-24 left-24 h-1.5 w-1.5 rounded-full bg-cyan-300/80 opacity-70 animate-[driftUp_14s_ease-in-out_infinite]"
          style={{ animationDelay: '0.8s' }}
        />
        <span
          className="absolute bottom-32 right-16 h-2 w-2 rounded-full bg-fuchsia-500/75 opacity-85 animate-[drift_20s_ease-in-out_infinite]"
          style={{ animationDelay: '2s' }}
        />
        <span
          className="absolute top-1/2 left-1/3 h-1.5 w-1.5 rounded-full bg-sky-300/80 opacity-70 animate-[driftAlt_22s_ease-in-out_infinite]"
          style={{ animationDelay: '3s' }}
        />
      </div>

      <style>{`
        @keyframes drift {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(14px, -10px, 0); }
        }
        @keyframes driftAlt {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(-14px, 12px, 0); }
        }
        @keyframes driftUp {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
      `}</style>

      <div className="relative z-10 w-full min-h-screen py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          {/* Glowing hero backdrop behind the heading */}
          <div className="pointer-events-none absolute inset-x-1/2 -top-6 h-36 w-[30rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-0 top-24 h-44 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_65%)]" />
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[10px] tracking-widest font-mono text-cyan-300 mb-4 uppercase backdrop-blur-sm">
            <FaTerminal className="animate-pulse text-cyan-300" />
            Hands-on learning tracks
          </div>
          <h1
            className="relative text-4xl md:text-6xl font-black font-orbitron tracking-tight text-white uppercase leading-none"
            style={{ textShadow: '0 0 30px rgba(124, 58, 237, 0.25)' }}
          >
            WORKSHOP
          </h1>
          <p className="text-xs md:text-sm font-orbitron tracking-widest text-slate-400 mt-2 font-bold uppercase">
            Demo workshops for AI, robotics, immersive web, and applied technology
          </p>

          {/* Animated divider below subtitle */}
          <div className="mx-auto mt-6 h-0.5 w-28 rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400 opacity-90 animate-pulse" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshopsData.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}
        </div>

        <div className="mt-16 glass-panel border border-white/5 p-6 rounded-3xl max-w-3xl mx-auto text-center font-mono text-[10px] text-slate-400 leading-relaxed">
          Demo notice: workshop seats, mentors, fees, and kit details are temporary placeholders and can be replaced once final event data is confirmed.
        </div>
      </div>
    </div>
  )
}

export default Workshop

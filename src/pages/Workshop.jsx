import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { workshopsData } from '../data/workshops'
import WorkshopCard from '../components/WorkshopCard/WorkshopCard'
import { FaTerminal } from 'react-icons/fa'
import '../components/WorkshopCard/WorkshopCard.css'

function Workshop() {
  const [activeStoneFilter, setActiveStoneFilter] = useState('all')
  const [commandInput, setCommandInput] = useState('')
  const [terminalFeedback, setTerminalFeedback] = useState('')
  const [scrollY, setScrollY] = useState(0)
  const containerRef = useRef(null)

  // Map original workshops and enrich them with stone configurations
  const baseWorkshops = workshopsData.map((workshop) => {
    let stoneKey = 'space'
    if (workshop.id === 1) stoneKey = 'mind'
    else if (workshop.id === 2) stoneKey = 'time'
    else if (workshop.id === 3) stoneKey = 'reality'
    return { ...workshop, stoneKey }
  })

  // Add 2 extra modules to complete the 5 Infinity Stones system
  const extraWorkshops = [
    {
      id: 4,
      title: "Cosmic Telemetry Hub",
      subtitle: "Orchestration & Core Space Navigation Systems",
      codename: "Workshop Track 04",
      description: "Deep dive into real-time astronomical telemetry stream processing, core dashboard components, and spatial data visualization.",
      duration: "4 Hours",
      fee: "INR 350 per head",
      date: "Aug 17, 2026",
      time: "11:00 AM",
      speaker: "Demo Mentor D (Cosmic Data Lead)",
      coordinators: ["Workshop Coordinator G (3322112233)"],
      perks: ["Data CLI Tools", "API Access Keys", "Certificate"],
      stoneKey: "space"
    },
    {
      id: 5,
      title: "Quantum Neural Engines",
      subtitle: "Heavy Computation, GPU Clusters & Large Models",
      codename: "Workshop Track 05",
      description: "Harness the absolute computational power of neural clusters. Deploy distributed AI models and optimize GPU kernels for heavy matrix math.",
      duration: "8 Hours",
      fee: "INR 600 per head",
      date: "Aug 17, 2026",
      time: "02:00 PM",
      speaker: "Demo Mentor E (GPU Architect)",
      coordinators: ["Workshop Coordinator H (2211112233)"],
      perks: ["GPU Cloud Credits", "Pre-trained models", "Certificate"],
      stoneKey: "power"
    }
  ]

  const workshops = [...baseWorkshops, ...extraWorkshops]

  // Track window scroll coordinates for parallax systems
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cursor-Based interaction trackers (sets custom CSS variables on parent container)
  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    
    // Normalize percentage relative to container bounds
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    containerRef.current.style.setProperty('--mouse-pct-x', `${x}%`)
    containerRef.current.style.setProperty('--mouse-pct-y', `${y}%`)

    // Parallax tracking offset variables
    const shiftX = ((e.clientX / window.innerWidth) - 0.5) * 12
    const shiftY = ((e.clientY / window.innerHeight) - 0.5) * 12
    containerRef.current.style.setProperty('--cursor-parallax-x', `${shiftX}px`)
    containerRef.current.style.setProperty('--cursor-parallax-y', `${shiftY}px`)
  }

  const handleCommandSubmit = (e) => {
    e.preventDefault()
    const cmd = commandInput.trim().toLowerCase()
    if (!cmd) return

    if (cmd === 'help') {
      setTerminalFeedback("> Active commands: space, reality, power, mind, time, reset, activate all")
      setCommandInput('')
      return
    }

    if (cmd === 'reset') {
      setActiveStoneFilter('all')
      setTerminalFeedback("> Resetting control console. All Infinity Stones connected.")
      setCommandInput('')
      return
    }

    if (cmd === 'activate all') {
      setActiveStoneFilter('all')
      setTerminalFeedback("> HARNESSING THE POWER OF ALL FIVE INFINITY STONES. SANCTUM CAPACITY MAXIMIZED.")
      setCommandInput('')
      return
    }

    if (['space', 'reality', 'power', 'mind', 'time'].includes(cmd)) {
      setActiveStoneFilter(cmd)
      const msgs = {
        space: "> SPACE STONE CHANNELS ACTIVE. FOCUSED ON CORE MODULES & NAVIGATION HUB...",
        reality: "> REALITY STONE CHANNELS ACTIVE. PREPARING SPATIAL WEBXR ASSETS...",
        power: "> POWER STONE CHANNELS ACTIVE. SPINNING UP NEURAL CLUSTER GRAPH COMPUTATIONS...",
        mind: "> MIND STONE CHANNELS ACTIVE. INITIALIZING AI PRODUCT AND PROMPT ROUTERS...",
        time: "> TIME STONE CHANNELS ACTIVE. ALIGNING AUTOMATED SENSORS & SYSTEM TICK LOOPS..."
      }
      setTerminalFeedback(msgs[cmd])
      setCommandInput('')
      return
    }

    setTerminalFeedback(`> COMMAND '${cmd.toUpperCase()}' RECOGNIZED. DISPATCHING AMPLIFICATION SIGNAL...`)
    setCommandInput('')
  }

  // Framer Motion staggered card configuration
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.9, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  }

  // Calculate scrolling animations for Hero section
  const heroOpacity = Math.max(1 - scrollY / 400, 0)
  const heroScale = Math.max(1 - scrollY / 2000, 0.92)
  const heroY = scrollY * 0.28 // Parallax scroll translation

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen marble-surface relative select-none"
    >
      {/* Dynamic Cursor Haze Tracker */}
      <div className="cursor-glow-haze" />

      {/* Parallax layer: Ambient reflections */}
      <div 
        className="marble-reflection parallax-layer"
        style={{
          transform: `translate3d(var(--cursor-parallax-x, 0px), calc(var(--cursor-parallax-y, 0px) + ${scrollY * 0.08}px), 0)`
        }}
      />

      {/* Parallax layer: Cosmic particles */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 overflow-hidden"
        style={{
          transform: `translateY(${scrollY * -0.05}px)`
        }}
      >
        <span className="particle-element p-animate-1 w-2.5 h-2.5 top-[20%] left-[10%]" />
        <span className="particle-element p-animate-2 w-1.5 h-1.5 top-[35%] right-[15%]" />
        <span className="particle-element p-animate-3 w-2 h-2 top-[65%] left-[25%]" />
        <span className="particle-element p-animate-1 w-1.5 h-1.5 top-[80%] right-[30%]" />
        <span className="particle-element p-animate-2 w-2 h-2 top-[50%] left-[80%]" />
      </div>
      
      <div className="relative z-10 w-full py-16 px-4 md:px-8 max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div 
          className="text-center mb-16 relative py-12 select-none overflow-hidden"
          style={{
            opacity: heroOpacity,
            transform: `translate3d(0, ${heroY}px, 0) scale(${heroScale})`,
            transition: 'transform 0.05s ease-out, opacity 0.05s ease-out'
          }}
        >
          {/* Light rays blur background */}
          <div className="pointer-events-none absolute inset-x-1/2 -top-12 h-64 w-[35rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(229,186,90,0.06)_0%,rgba(0,210,255,0.02)_60%,transparent_100%)] blur-3xl" />
          
          {/* Orbiting Stones Animation */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] md:w-[460px] md:h-[460px] pointer-events-none z-0 orbit-track-container">
            <div className="absolute inset-0 rounded-full border border-dashed border-[#D4AF37]/5 animate-[spin_80s_linear_infinite]" />
            
            {/* Space Stone (Blue) */}
            <div className="absolute inset-0 animate-[orbit_30s_linear_infinite]" style={{ '--rot-offset': '0deg' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#00D2FF]" />
            </div>
            
            {/* Reality Stone (Red) */}
            <div className="absolute inset-0 animate-[orbit_30s_linear_infinite]" style={{ '--rot-offset': '72deg' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-rose-500 shadow-[0_0_12px_#FF0055]" />
            </div>
            
            {/* Power Stone (Purple) */}
            <div className="absolute inset-0 animate-[orbit_30s_linear_infinite]" style={{ '--rot-offset': '144deg' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-purple-500 shadow-[0_0_12px_#B000FF]" />
            </div>
            
            {/* Mind Stone (Yellow) */}
            <div className="absolute inset-0 animate-[orbit_30s_linear_infinite]" style={{ '--rot-offset': '216deg' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-yellow-400 shadow-[0_0_12px_#FFD700]" />
            </div>
            
            {/* Time Stone (Green) */}
            <div className="absolute inset-0 animate-[orbit_30s_linear_infinite]" style={{ '--rot-offset': '288deg' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-[0_0_12px_#00FF66]" />
            </div>
          </div>

          <div className="relative z-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#06060c]/85 border border-[#D4AF37]/20 text-[9px] tracking-[0.25em] font-mono text-[#D4AF37] mb-4 uppercase backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.05)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />
              Sanctum Artifact Interface
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black font-orbitron tracking-tight uppercase leading-none gold-embossed">
              WORKSHOP OF ASTRAX
            </h1>
            
            <p className="max-w-2xl mx-auto text-xs md:text-sm font-outfit tracking-wider text-gray-400 mt-4 leading-relaxed px-4">
              Step into the intelligence control room. Command the high-fidelity tools of the cosmos and master modern software modules.
            </p>

            <div className="mx-auto mt-6 h-[1px] w-40 bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-transparent" />
          </div>
        </div>

        {/* Command / Input Bar Section */}
        <div className="max-w-2xl mx-auto px-4 z-20 mb-16 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          <div className="text-center mb-4">
            <span className="text-[10px] tracking-widest font-mono text-[#D4AF37] uppercase font-bold">
              // SANCTUM CONTROL BAR
            </span>
          </div>
          
          <form onSubmit={handleCommandSubmit} className="relative group">
            {/* Control bar glow haze */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-[#D4AF37]/5 rounded-full blur-md opacity-40 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <div className="relative flex items-center carved-console rounded-full p-1.5">
              
              {/* LED Stone indicator based on active filter */}
              <div className="flex items-center gap-2 pl-4 pr-1">
                <span className={`w-2 h-2 rounded-full transition-all duration-500 animate-pulse ${
                  activeStoneFilter === 'all' ? 'bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]' :
                  activeStoneFilter === 'space' ? 'bg-[#00D2FF] shadow-[0_0_8px_#00D2FF]' :
                  activeStoneFilter === 'reality' ? 'bg-[#FF0055] shadow-[0_0_8px_#FF0055]' :
                  activeStoneFilter === 'power' ? 'bg-[#B000FF] shadow-[0_0_8px_#B000FF]' :
                  activeStoneFilter === 'mind' ? 'bg-[#FFD700] shadow-[0_0_8px_#FFD700]' :
                  'bg-[#00FF66] shadow-[0_0_8px_#00FF66]'
                }`} />
                <span className="font-mono text-[9px] text-gray-500 uppercase select-none font-bold">
                  {activeStoneFilter}
                </span>
              </div>

              <input
                type="text"
                value={commandInput}
                onChange={(e) => setCommandInput(e.target.value)}
                placeholder="Enter Workshop Command (e.g., space, power, time, help)..."
                className="flex-grow bg-transparent text-gray-200 font-mono text-xs md:text-sm pl-2 py-2 outline-none caret-[#D4AF37] placeholder-gray-700"
              />

              <button
                type="submit"
                className="px-6 py-2 rounded-full font-orbitron font-bold text-[9px] md:text-xs tracking-widest text-[#0c0b05] bg-gradient-to-r from-[#DFBA73] via-[#F5D77F] to-[#B8860B] hover:shadow-[0_0_15px_rgba(229,186,90,0.35)] transition-all duration-300 uppercase shrink-0 border border-white/5"
              >
                ACTIVATE
              </button>
            </div>
          </form>

          {/* Console feed output feedback */}
          <div className="mt-3 min-h-[35px] text-center font-mono text-[9px] md:text-[10px] uppercase tracking-wider text-gray-600">
            {terminalFeedback ? (
              <div className={`py-1.5 px-3 rounded bg-black/40 border border-white/5 inline-block animate-[fade-in-up_0.3s_ease] ${
                activeStoneFilter === 'space' ? 'text-[#00D2FF] drop-shadow-[0_0_5px_rgba(0,210,255,0.25)]' :
                activeStoneFilter === 'reality' ? 'text-[#FF0055] drop-shadow-[0_0_5px_rgba(255,0,85,0.25)]' :
                activeStoneFilter === 'power' ? 'text-[#B000FF] drop-shadow-[0_0_5px_rgba(176,0,255,0.25)]' :
                activeStoneFilter === 'mind' ? 'text-[#FFD700] drop-shadow-[0_0_5px_rgba(255,215,0,0.25)]' :
                activeStoneFilter === 'time' ? 'text-[#00FF66] drop-shadow-[0_0_5px_rgba(0,255,102,0.25)]' :
                'text-[#D4AF37]'
              }`}>
                {terminalFeedback}
              </div>
            ) : (
              <span className="opacity-40 select-none">&gt; Console standing by. Input access keys to coordinate grid.</span>
            )}
          </div>
        </div>

        {/* Workshop Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {workshops.map((workshop) => (
            <motion.div key={workshop.id} variants={itemVariants}>
              <WorkshopCard 
                workshop={workshop} 
                activeStoneFilter={activeStoneFilter} 
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <div className="mt-20 border-t border-white/5 pt-8 max-w-3xl mx-auto text-center font-mono text-[9px] text-gray-500 leading-relaxed">
          <span className="text-[#D4AF37] font-bold">AX-2026 REGULATION:</span> All parameters, fees, and telemetry specifications are verified by the Core Sanctum. Alteration or activation requests must proceed through approved terminals.
        </div>
      </div>
    </div>
  )
}

export default Workshop

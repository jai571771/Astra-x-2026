import React from 'react'

function About() {
  return (
    <div className="w-full min-h-screen py-16 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Background space overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-screen"
        style={{ backgroundImage: "url('/src/assets/images/backgrounds/cosmic-bg.jpg')" }}
      ></div>

      {/* Header */}
      <div className="text-center relative z-10">
        <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] tracking-[0.2em] font-orbitron text-gray-400 mb-2 uppercase">
          Command intel
        </span>
        <h1 className="text-3xl md:text-5xl font-black font-orbitron tracking-tight text-white uppercase text-glow-gold leading-none">
          ABOUT CHAIRMAN
        </h1>
      </div>

      {/* Layout Split: Left (Photo) - Right (Content) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
        
        {/* Left Column: Chairman Photo Container (lg:col-span-4) */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          <div className="glass-panel border border-white/10 hover:border-marvel-red/40 rounded-lg p-4 flex flex-col items-center justify-center text-center aspect-[3/4] relative group overflow-hidden shadow-lg">
            
            {/* Holographic scanner laser line decoration */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-marvel-red/60 animate-bounce z-20"></div>

            {/* Avatar Frame */}
            <div className="w-full h-full bg-white/5 border border-white/5 rounded overflow-hidden flex items-center justify-center relative">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80" 
                alt="Chairman" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span className="font-orbitron font-black text-gray-600 text-sm absolute z-0 select-none uppercase tracking-widest">
                CHAIRMAN IMAGE
              </span>
            </div>

            {/* Caption */}
            <div className="mt-4 space-y-1">
              <h3 className="font-orbitron font-extrabold text-sm text-white tracking-wide uppercase">
                Dr. G. Jai Kishore
              </h3>
              <p className="text-[10px] font-mono text-gray-500 font-bold uppercase">
                CHAIRMAN & FOUNDING TRUSTEE
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: CONTENT Container (lg:col-span-8) */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <div className="glass-panel border border-white/10 rounded-lg p-6 md:p-8 flex flex-col justify-between gap-6 h-full shadow-lg">
            
            <div className="space-y-4">
              <h3 className="font-orbitron font-black text-lg text-marvel-red tracking-wider border-b border-white/5 pb-2 uppercase">
                Chairman's Message
              </h3>
              <p className="text-xs md:text-sm text-gray-300 font-outfit leading-relaxed">
                "Welcome to the 2026 edition of ASTRA, our flagship technology symposium. Just as the Avengers assemble to face cosmic challenges, this platform unites the brightest student minds to engineer solutions that redefine our reality."
              </p>
              <p className="text-xs md:text-sm text-gray-300 font-outfit leading-relaxed">
                "Innovation is not just about writing code; it is about establishing a vision. We believe in providing our engineering cadets with cutting-edge laboratories, resources, and platforms to design systems that are secure, stable, and ready to deploy globally. Prepare to push your limits, explore new quantum dimensions, and build the future today."
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/5">
              <h3 className="font-orbitron font-black text-xs text-reactor-blue tracking-widest uppercase">
                COSMIC SYMPOSIUM INTEL
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-outfit text-gray-400">
                <div className="bg-white/5 p-3 rounded border border-white/5">
                  <h4 className="font-orbitron font-bold text-white text-[10px] tracking-wider mb-1 uppercase">THE SYMPOSIUM MISSION</h4>
                  <p className="leading-relaxed">To nurture a community of tech leaders, developers, and engineers capable of handling complex multithreaded systems and advanced robotics projects.</p>
                </div>
                <div className="bg-white/5 p-3 rounded border border-white/5">
                  <h4 className="font-orbitron font-bold text-white text-[10px] tracking-wider mb-1 uppercase">THE INSTITUTION CREDENTIALS</h4>
                  <p className="leading-relaxed">A leading technology college specializing in state-of-the-art labs, quantum AI study nodes, and industry-sponsored incubators.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default About

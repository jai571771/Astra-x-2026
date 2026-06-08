import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./HeroSection.css";

export default function HeroSection() {
  const scrollToCountdown = () => {
    document.getElementById("countdown-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background with cosmic nebula and rocky Titan/Vormir ground */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed scale-105"
        style={{ backgroundImage: "url('/cosmic_bg.png')" }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />

      {/* Content Container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 z-10 flex items-center justify-center">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-160px)] relative">
          
          {/* Left: Iron Man Character (Positioned on the left side) */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-40 sm:w-56 lg:w-72 aspect-[3/4] flex items-center justify-center lg:absolute lg:left-4 z-20 order-2 lg:order-1 mt-8 lg:mt-0"
          >
            <img
              src="/iron_man.png"
              alt="Iron Man"
              className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(226,75,74,0.4)] animate-float-slow select-none pointer-events-none"
            />
          </motion.div>

          {/* Center: Vertical Stack of Texts and CTA Buttons */}
          <div className="flex-1 flex flex-col items-center justify-center text-center z-30 order-1 lg:order-2 space-y-5 sm:space-y-6 max-w-2xl mx-auto">
            
            {/* 1. ATHERA PRESENTS Button/Box */}
            <motion.div
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#999999]/90 text-black px-10 py-3.5 rounded-xl font-bold tracking-widest text-lg sm:text-xl font-display uppercase shadow-lg shadow-black/40 border border-neutral-400 select-none"
            >
              ATHERA PRESENTS
            </motion.div>

            {/* 2. Gold Title ASTRA X 2026 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="flex flex-col items-center justify-center py-2"
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase font-display leading-none gold-metallic-text select-none">
                ASTRA X
              </h1>
              
              {/* Gold Lines centering the 2026 Text */}
              <div className="flex items-center justify-center space-x-6 w-full mt-2">
                <div className="h-[2px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#EF9F27] to-[#EF9F27]"></div>
                <span className="text-2xl sm:text-3xl font-black tracking-widest text-[#EF9F27] font-display filter drop-shadow-[0_0_8px_rgba(239,159,39,0.5)]">
                  2026
                </span>
                <div className="h-[2px] w-16 sm:w-24 bg-gradient-to-l from-transparent via-[#EF9F27] to-[#EF9F27]"></div>
              </div>
            </motion.div>

            {/* 3. ASSEMBLE NOW button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full max-w-md px-4 sm:px-0"
            >
              <Link
                to="/contact"
                className="w-full py-hero-btn bg-[#999999]/90 text-black rounded-xl font-bold tracking-wider text-xl sm:text-2xl uppercase font-display flex items-center justify-center shadow-lg shadow-black/50 border border-neutral-400 hover:bg-[#b0b0b0] hover:scale-103 active:scale-97 transition-all duration-200"
              >
                ASSEMBLE NOW
              </Link>
            </motion.div>
            
            {/* 4. COUNT DOWN button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full max-w-md px-4 sm:px-0"
            >
              <button
                onClick={scrollToCountdown}
                className="w-full py-hero-btn bg-[#999999]/90 text-black rounded-xl font-bold tracking-wider text-xl sm:text-2xl uppercase font-display flex items-center justify-center shadow-lg shadow-black/50 border border-neutral-400 hover:bg-[#b0b0b0] hover:scale-103 active:scale-97 transition-all duration-200"
              >
                COUNT DOWN
              </button>
            </motion.div>

          </div>

          {/* Right: Thanos Character (Positioned on the right side) */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-40 sm:w-56 lg:w-72 aspect-[3/4] flex items-center justify-center lg:absolute lg:right-4 z-20 order-3 mt-8 lg:mt-0"
          >
            <img
              src="/thanos.png"
              alt="Thanos"
              className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(127,119,221,0.4)] animate-float-slower select-none pointer-events-none"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

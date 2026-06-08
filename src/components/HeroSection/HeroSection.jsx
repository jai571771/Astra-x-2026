import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Compass, Flame } from "lucide-react";
import "./HeroSection.css";

export default function HeroSection() {
  const scrollToCountdown = () => {
    document.getElementById("countdown-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with cosmic nebula and dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed scale-105"
        style={{ backgroundImage: "url('/cosmic_bg.png')" }}
      />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />

      {/* Content Container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-160px)]">
          
          {/* Left: Iron Man Character */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-3 flex justify-center order-2 lg:order-1"
          >
            <div className="relative w-48 sm:w-64 lg:w-full max-w-[280px] aspect-[3/4] flex items-center justify-center group">
              {/* Glow backdrops */}
              <div className="absolute inset-0 bg-red/10 rounded-full blur-3xl group-hover:bg-red/20 transition-colors duration-500" />
              <img
                src="/iron_man.png"
                alt="Iron Man"
                className="w-full h-auto object-contain drop-shadow-[0_10px_30px_rgba(226,75,74,0.4)] animate-float-slow select-none pointer-events-none"
              />
            </div>
          </motion.div>

          {/* Center: Main Details & Buttons */}
          <div className="lg:col-span-6 text-center flex flex-col items-center justify-center order-1 lg:order-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="px-4 py-1.5 rounded-full border border-purple/30 bg-purple/10 backdrop-blur-md flex items-center space-x-2"
            >
              <Compass size={14} className="text-purple animate-spin-slow" />
              <span className="text-[10px] sm:text-xs font-bold tracking-widest text-purple uppercase font-display">
                Athera Presents
              </span>
            </motion.div>

            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white uppercase font-display leading-none"
              >
                ASTRA <span className="text-red filter drop-shadow-[0_0_15px_rgba(226,75,74,0.5)]">X</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue via-purple to-gold font-display"
              >
                2 0 2 6
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-md text-sm sm:text-base text-gray-300 font-medium leading-relaxed"
            >
              Unite forces to shape the cosmos. Experience the ultimate clash of technology, space exploration, and innovation. 
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 sm:px-0"
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold tracking-wider text-sm uppercase text-white bg-red hover:bg-red/90 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-red/20 border border-red/40 hover:shadow-red/40 hover:scale-105 active:scale-95"
              >
                <Flame size={16} />
                <span>Assemble Now</span>
              </Link>
              
              <button
                onClick={scrollToCountdown}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold tracking-wider text-sm uppercase text-white bg-transparent hover:bg-blue/10 transition-all duration-300 flex items-center justify-center space-x-2 border border-blue hover:border-blue hover:shadow-lg hover:shadow-blue/20 hover:scale-105 active:scale-95"
              >
                <span>Count Down</span>
              </button>
            </motion.div>
          </div>

          {/* Right: Thanos Character */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-3 flex justify-center order-3"
          >
            <div className="relative w-48 sm:w-64 lg:w-full max-w-[280px] aspect-[3/4] flex items-center justify-center group">
              {/* Glow backdrops */}
              <div className="absolute inset-0 bg-purple/10 rounded-full blur-3xl group-hover:bg-purple/20 transition-colors duration-500" />
              <img
                src="/thanos.png"
                alt="Thanos"
                className="w-full h-auto object-contain drop-shadow-[0_10px_30px_rgba(127,119,221,0.4)] animate-float-slower select-none pointer-events-none"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

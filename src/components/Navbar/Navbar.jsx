import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

// Marvel characters for profile toggle
const marvelProfiles = [
  { name: "Iron Man", img: "/avatar_ironman.png" },
  { name: "Thanos", img: "/thanos.png" },
  { name: "Iron Man Full", img: "/iron_man.png" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [profileIndex, setProfileIndex] = useState(0);

  const cycleProfile = () => {
    setProfileIndex((prev) => (prev + 1) % marvelProfiles.length);
  };

  const navLinks = [
    { name: "HEAD QUARTERS", path: "/" },
    { name: "MISSIONS", path: "/missions" },
    { name: "INNOVATION LABS", path: "/innovation-labs" },
    { name: "ALLIES", path: "/allies" },
    { name: "CONTACT", path: "/contact" },
    { name: "ABOUT", path: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#333333] border-b border-black py-3 px-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Logo Box exactly like Marvel logo */}
        <Link to="/" className="flex items-center">
          <div className="border-[3px] border-black bg-[#E24B4A] px-3 py-1 flex items-center justify-center shadow-inner">
            <span className="text-white font-black text-2xl tracking-tighter leading-none font-display uppercase">
              ASTRA <span className="font-bold text-lg select-none">2026</span>
            </span>
          </div>
        </Link>

        {/* Center: Desktop Links (Black rectangular buttons) */}
        <div className="hidden lg:flex items-center space-x-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-xs font-bold tracking-wider px-5 py-2.5 bg-black border border-neutral-800 transition-all duration-200 block text-center ${
                  isActive 
                    ? "text-[#E24B4A] border-[#E24B4A] shadow-[0_0_8px_rgba(226,75,74,0.3)]" 
                    : "text-neutral-400 hover:text-white hover:border-neutral-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right: Circular Profile Avatar (Toggles Marvel characters) */}
        <div className="hidden lg:flex items-center space-x-3">
          <div className="text-right flex flex-col justify-center">
            <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-widest leading-none">
              PROFILE ACTIVE
            </span>
            <span className="text-[10px] text-white font-black uppercase tracking-wider leading-none mt-1">
              {marvelProfiles[profileIndex].name}
            </span>
          </div>
          <button
            onClick={cycleProfile}
            className="w-10 h-10 rounded-full bg-black border-2 border-black overflow-hidden flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-md shadow-black/60 relative group"
            title="Click to cycle Marvel profile character"
          >
            <img
              src={marvelProfiles[profileIndex].img}
              alt="Marvel Profile"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 select-none pointer-events-none"
            />
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden flex items-center space-x-3">
          <button
            onClick={cycleProfile}
            className="w-8 h-8 rounded-full bg-black border border-black overflow-hidden flex items-center justify-center cursor-pointer"
          >
            <img
              src={marvelProfiles[profileIndex].img}
              alt="Marvel Profile"
              className="w-full h-full object-cover select-none pointer-events-none"
            />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-neutral-300 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown (Matches style) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed left-0 top-[60px] w-full bg-[#333333] border-b-2 border-black z-40 lg:hidden overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-1 p-4 bg-[#262626]">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-sm font-bold tracking-widest text-center py-3 bg-black border border-neutral-900 ${
                      isActive 
                        ? "text-[#E24B4A] border-[#E24B4A]" 
                        : "text-neutral-400 hover:text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

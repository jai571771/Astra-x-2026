import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Headquarters", path: "/" },
    { name: "Missions", path: "/missions" },
    { name: "Innovation Labs", path: "/innovation-labs" },
    { name: "Allies", path: "/allies" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 py-4 shadow-lg shadow-black/50"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-black tracking-wider text-white group-hover:text-blue transition-colors duration-300 font-display">
              ASTRA <span className="text-red">X</span> <span className="text-purple text-sm font-semibold tracking-widest align-super">2026</span>
            </span>
          </Link>

          {/* Center: Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-all duration-300 relative py-1 hover:text-white ${
                    isActive ? "text-blue font-semibold" : "text-gray-400"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue to-purple"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right: Profile Button */}
          <div className="hidden lg:flex items-center">
            <button className="flex items-center justify-center p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple/50 text-gray-300 hover:text-purple transition-all duration-300 shadow-inner group">
              <User size={18} className="group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Hamburg menu */}
          <div className="lg:hidden flex items-center space-x-4">
            {/* Profile for mobile next to hamburger */}
            <button className="flex items-center justify-center p-2 rounded-full border border-white/10 bg-white/5 text-gray-300">
              <User size={16} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 top-[70px] w-full bg-[#0a0a0a]/95 backdrop-blur-lg z-40 lg:hidden overflow-hidden border-t border-white/5"
          >
            <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)] space-y-8 px-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `text-2xl font-bold tracking-widest uppercase py-2 block ${
                        isActive
                          ? "text-blue bg-clip-text bg-gradient-to-r from-blue to-purple font-black"
                          : "text-gray-400 hover:text-white"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

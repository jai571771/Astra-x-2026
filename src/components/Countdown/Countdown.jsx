import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Countdown.css";

export default function Countdown() {
  // Target date: October 15, 2026 10:00:00 AM
  const targetDate = new Date("October 15, 2026 10:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4"
    >
      {timeBlocks.map((block, index) => (
        <motion.div
          key={block.label}
          variants={itemVariants}
          className="countdown-card flex flex-col items-center justify-center w-24 h-28 sm:w-32 sm:h-36 md:w-40 md:h-44 rounded-2xl bg-black/60 border border-gold/40 relative overflow-hidden shadow-2xl backdrop-blur-md"
        >
          {/* Card inner subtle gold glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-gold/5 via-transparent to-transparent pointer-events-none" />
          
          {/* Glowing border top overlay */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-80" />

          {/* Number Display */}
          <span className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-gold tracking-tight filter drop-shadow-[0_0_10px_rgba(239,159,39,0.3)]">
            {String(block.value).padStart(2, "0")}
          </span>

          {/* Label Display */}
          <span className="text-[10px] sm:text-xs tracking-widest text-gray-400 font-medium uppercase mt-2">
            {block.label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}

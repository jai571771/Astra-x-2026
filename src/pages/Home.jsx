import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Countdown from "../components/Countdown/Countdown";

export default function Home() {
  return (
    <main className="bg-black min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Countdown Section */}
      <section id="countdown-section" className="relative py-20 z-10 bg-gradient-to-b from-black via-[#0f0f15] to-black border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(127,119,221,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold tracking-wider text-purple uppercase">Launch Sequence Initiated</h2>
            <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">Assemble In</p>
          </div>
          <Countdown />
        </div>
      </section>
    </main>
  );
}

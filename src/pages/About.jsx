import React from "react";

export default function About() {
  return (
    <div className="pt-24 min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md max-w-lg">
        <h1 className="text-4xl font-bold mb-4 text-purple">About Astra X 2026</h1>
        <p className="text-gray-400">
          This section contains details about our organization, historical timeline, and mission targets. Built by Developer 2.
        </p>
      </div>
    </div>
  );
}

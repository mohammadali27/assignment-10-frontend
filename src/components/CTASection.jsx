import React from "react";

export default function CTASection() {
  return (
    <section className="relative bg-black text-white min-h-[600px] py-24 px-6 overflow-hidden flex flex-col justify-center items-center">
      {/* Curved Grid & Glow Background Container */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        {/* Giant Circle container that crops into a dome */}
        <div className="relative w-[1400px] h-[1400px] -top-[500px] rounded-full overflow-hidden flex items-center justify-center">
          {/* Radial Blue/Indigo Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25)_0%,rgba(99,102,241,0.15)_40%,transparent_70%)]" />

          {/* Polar/Radar Grid Overlay (Pure SVG) */}
          <svg
            className="absolute w-full h-full opacity-40 text-indigo-500/30"
            viewBox="0 0 1000 1000"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          >
            {/* Concentric Circles */}
            <circle cx="500" cy="500" r="150" />
            <circle cx="500" cy="500" r="220" />
            <circle cx="500" cy="500" r="290" />
            <circle cx="500" cy="500" r="360" />
            <circle cx="500" cy="500" r="430" />
            <circle cx="500" cy="500" r="500" />
            <circle cx="500" cy="500" r="570" />
            <circle cx="500" cy="500" r="640" />

            {/* Radiating Lines passing through the center */}
            <line x1="0" y1="500" x2="1000" y2="500" />
            <line x1="500" y1="0" x2="500" y2="1000" />
            <line x1="146.45" y1="146.45" x2="853.55" y2="853.55" />
            <line x1="146.45" y1="853.55" x2="853.55" y2="146.45" />
            <line x1="308.6" y1="50" x2="691.4" y2="950" />
            <line x1="691.4" y1="50" x2="308.6" y2="950" />
            <line x1="50" y1="308.6" x2="950" y2="691.4" />
            <line x1="50" y1="691.4" x2="950" y2="308.6" />
          </svg>

          {/* Bottom Fade Mask to smoothly blend into black background */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 max-w-2xl leading-[1.15]">
          Your next role is <br className="hidden sm:block" /> already looking
          for you
        </h2>

        {/* Subtitle Description */}
        <p className="text-zinc-400 text-sm sm:text-base md:text-lg font-light tracking-wide max-w-xl mb-10 leading-relaxed">
          Build a profile in three minutes. The matches start arriving tomorrow
          morning.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-6 py-3 text-sm font-medium bg-white text-black rounded-xl hover:bg-zinc-200 transition-colors duration-200 shadow-lg">
            Create a free account
          </button>

          <button className="w-full sm:w-auto px-6 py-3 text-sm font-medium bg-transparent text-zinc-300 rounded-xl border border-zinc-800 hover:bg-zinc-900/50 hover:text-white transition-all duration-200">
            View pricing
          </button>
        </div>
      </div>
    </section>
  );
}

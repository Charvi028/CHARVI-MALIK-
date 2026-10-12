import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, X, Play } from 'lucide-react';
import { heroPenImg } from '../data/products';
import { useCart } from '../context/CartContext';

export const CinematicIntro: React.FC = () => {
  const { showIntro, skipIntro } = useCart();
  const [stage, setStage] = useState<number>(0); // 0: streaks, 1: pen reveal, 2: typography, 3: cta button
  const [secondsRemaining, setSecondsRemaining] = useState<number>(5);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);

  useEffect(() => {
    if (!showIntro) return;

    // Reset state when intro starts
    setStage(0);
    setIsFadingOut(false);
    setSecondsRemaining(5);

    // Timeline stages
    const timer1 = setTimeout(() => setStage(1), 700);   // Pen reveal begins
    const timer2 = setTimeout(() => setStage(2), 1800);  // Typography reveals
    const timer3 = setTimeout(() => setStage(3), 2900);  // CTA button emerges

    // Countdown timer for user indicator
    const countdownInterval = setInterval(() => {
      setSecondsRemaining((prev) => Math.max(0, prev - 1));
    }, 1000);

    // Auto transition to homepage after ~4.9 seconds
    const autoExitTimer = setTimeout(() => {
      handleCompleteTransition();
    }, 4900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(autoExitTimer);
      clearInterval(countdownInterval);
    };
  }, [showIntro]);

  const handleCompleteTransition = (targetSectionId?: string) => {
    setIsFadingOut(true);
    setTimeout(() => {
      skipIntro();
      if (targetSectionId) {
        const el = document.getElementById(targetSectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 600);
  };

  if (!showIntro && !isFadingOut) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cinematic Apex-Grip 3000 Intro Animation"
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-y-auto sm:overflow-hidden bg-black text-white transition-opacity duration-700 py-6 px-3 sm:px-4 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* 1. Deep Space Canvas & Subtle Electric-Blue Light Streaks */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        {/* Radial ambient background glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] lg:w-[900px] h-[340px] sm:h-[600px] rounded-full bg-cyan-600/15 blur-[100px] sm:blur-[140px] animate-radial-glow" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[400px] h-[200px] sm:h-[300px] rounded-full bg-blue-600/10 blur-[80px]" />

        {/* Diagonal and horizontal light streaks */}
        <div className="absolute top-[22%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-streak-1" />
        <div className="absolute top-[48%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent animate-streak-2" />
        <div className="absolute top-[75%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent animate-streak-3" />

        {/* Soft cyber grid backdrop */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)',
            backgroundSize: '36px 36px'
          }}
        />
      </div>

      {/* Top Controls: Skip Intro (Minimum 44px Touch Target) */}
      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-30 flex items-center gap-2">
        <button
          onClick={() => handleCompleteTransition()}
          className="group flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950/90 px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs font-semibold text-neutral-200 backdrop-blur-md hover:border-cyan-500/60 hover:text-white active:scale-95 transition-all min-h-[44px]"
          aria-label="Skip cinematic intro"
        >
          <span>Skip</span>
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-850 text-[10px] text-cyan-400 font-mono-numbers group-hover:bg-cyan-500 group-hover:text-black transition-colors">
            {secondsRemaining}s
          </span>
          <X className="h-3.5 w-3.5 text-neutral-400 group-hover:text-white" />
        </button>
      </div>

      {/* Main Cinematic Visual & Presentation Content */}
      <div className="relative z-20 mx-auto max-w-4xl w-full text-center flex flex-col items-center my-auto">
        
        {/* 2. Gradually Revealed Metallic Pen with glowing rim lighting */}
        <div
          className={`relative w-full max-w-[280px] xs:max-w-xs sm:max-w-md lg:max-w-lg transition-all duration-1000 transform ${
            stage >= 1
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-90 translate-y-6'
          }`}
        >
          {/* Subtle Outer Neon Halo around Pen */}
          <div className="pointer-events-none absolute inset-0 -inset-x-4 sm:-inset-x-8 rounded-full bg-cyan-500/20 blur-xl sm:blur-2xl transition-opacity duration-1000" />

          {/* Pen Image Frame */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl sm:rounded-2xl border border-cyan-500/30 bg-neutral-950/90 shadow-[0_0_40px_rgba(6,182,212,0.25)] backdrop-blur-md">
            <img
              src={heroPenImg}
              alt="Apex-Grip 3000 Futuristic Metallic Pen floating with electric blue lighting"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover object-center animate-pen-reveal"
            />

            {/* Light Sweep Shimmer Effect */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -skew-x-12 animate-sweep" />

            {/* Glowing Laser Optical Ring Callout Line */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            
            <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 rounded-full border border-cyan-500/40 bg-black/85 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-[11px] text-cyan-300 backdrop-blur-sm whitespace-nowrap">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>Bio-Anatomical Contour · 0.7mm Swiss Tungsten</span>
            </div>
          </div>
        </div>

        {/* 3 & 4. Futuristic Typography: "APEX-GRIP 3000" & Tagline */}
        <div
          className={`mt-4 sm:mt-6 space-y-1.5 sm:space-y-2.5 transition-all duration-700 transform px-2 ${
            stage >= 2
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-cyan-400">
            <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span>Next-Generation Writing Instrument</span>
            <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight sm:tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400 font-display drop-shadow-[0_0_25px_rgba(6,182,212,0.35)]">
            APEX-GRIP <span className="text-cyan-400 font-mono-numbers">3000</span>
          </h1>

          <p className="text-sm sm:text-lg lg:text-xl font-medium text-neutral-300 tracking-wide max-w-lg mx-auto">
            “Grip the Future. Write Without Limits.”
          </p>

          <div className="text-[11px] sm:text-xs text-neutral-400 font-mono-numbers">
            Classic · Premium · Pro Edition · Starting from <strong className="text-cyan-300">₹20</strong>
          </div>
        </div>

        {/* 5. Animated "Explore the Collection" Button (Touch-Friendly) */}
        <div
          className={`mt-5 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-xs sm:max-w-md transition-all duration-700 transform ${
            stage >= 3
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-4 scale-95'
          }`}
        >
          <button
            onClick={() => handleCompleteTransition('products')}
            className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 px-6 py-3.5 text-xs sm:text-sm font-bold text-neutral-950 shadow-[0_0_30px_rgba(6,182,212,0.45)] hover:scale-105 active:scale-95 transition-all cursor-pointer min-h-[48px]"
          >
            <span>Explore the Collection</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => handleCompleteTransition('home')}
            className="flex items-center justify-center gap-1.5 rounded-xl border border-neutral-800 bg-neutral-900/80 px-4 py-3.5 text-xs font-semibold text-neutral-300 hover:border-neutral-700 hover:text-white transition-all active:scale-95 backdrop-blur-md cursor-pointer min-h-[48px]"
          >
            <span>Enter Experience</span>
          </button>
        </div>

        {/* Auto-transition status indicator */}
        <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2 text-[10px] sm:text-[11px] text-neutral-400 font-mono-numbers">
          <div className="h-1 w-20 sm:w-24 bg-neutral-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-cyan-400 rounded-full transition-all duration-1000"
              style={{ width: `${((5 - secondsRemaining) / 5) * 100}%` }}
            />
          </div>
          <span>Auto-transition in {secondsRemaining}s</span>
        </div>

      </div>

    </div>
  );
};

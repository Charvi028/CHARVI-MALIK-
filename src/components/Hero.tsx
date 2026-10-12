import React, { useState } from 'react';
import { ArrowRight, Sparkles, Shield, Feather, RotateCw, CheckCircle2 } from 'lucide-react';
import { heroPenImg, PRODUCT_VARIANTS } from '../data/products';
import { useCart } from '../context/CartContext';

export const Hero: React.FC = () => {
  const { addItem, setIsCartOpen } = useCart();
  const [activeHighlight, setActiveHighlight] = useState<number>(0);

  const highlights = [
    { label: 'Ergonomic Grip', detail: 'Zero finger pressure across 3+ hrs' },
    { label: 'Swiss Micro-Tip', detail: '0.01s rapid-dry anti-smear' },
    { label: 'Aerospace Build', detail: 'Ultra-lightweight high-tensile core' },
  ];

  const handleQuickAddClassic = () => {
    addItem(PRODUCT_VARIANTS[0], 1);
  };

  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background ambient electric blue glow accents */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 -z-10 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top category label & micro meta */}
        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-medium text-neutral-400">
          <span className="text-cyan-400 tracking-wider uppercase font-semibold">Innovative Ergonomic Pen</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span>Next-Generation Writing Instrument</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span className="text-neutral-300">Starting from <strong className="text-white font-mono-numbers">₹20</strong></span>
        </div>

        {/* 2-column balanced grid */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-balance">
              Meet the Future of Writing.
            </h1>

            <p className="text-lg sm:text-2xl font-medium text-cyan-300 tracking-tight">
              “Grip the Future. Write Without Limits.”
            </p>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl">
              Meet the <strong className="text-white font-semibold">Apex-Grip 3000</strong> — an innovative, biomechanically balanced writing instrument created for students, competitive exam takers, and professionals. Engineered with an anti-fatigue contour grip and ultra-smooth fluid delivery that eliminates hand strain completely.
            </p>

            {/* Price kicker */}
            <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 pt-1">
              <span className="text-xs uppercase tracking-wider text-neutral-400">Pricing from</span>
              <span className="text-3xl font-extrabold text-white font-mono-numbers">₹20</span>
              <span className="text-xs text-neutral-400 line-through font-mono-numbers">₹25</span>
              <span className="text-xs text-emerald-400 font-medium">Accessible student pricing</span>
            </div>

            {/* CTAs with Mobile-Friendly Touch Targets */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3.5 text-sm font-semibold text-neutral-950 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:from-cyan-300 hover:to-blue-400 transition-all active:scale-95 min-h-[44px]"
              >
                <span>Shop Now</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/90 px-5 py-3.5 text-sm font-medium text-neutral-200 hover:border-neutral-700 hover:bg-neutral-800 hover:text-white transition-all active:scale-95 min-h-[44px]"
              >
                <span>Discover Features</span>
              </a>

              <button
                onClick={handleQuickAddClassic}
                className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 underline underline-offset-4 py-2 min-h-[44px]"
              >
                + Quick Add Classic (₹20)
              </button>
            </div>

            {/* Interactive Feature Pills - Stack on mobile, 3-col on tablet/desktop */}
            <div className="pt-4 border-t border-neutral-800/80">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                {highlights.map((item, idx) => (
                  <button
                    key={item.label}
                    onClick={() => setActiveHighlight(idx)}
                    className={`text-left p-3 rounded-xl border transition-all min-h-[44px] ${
                      activeHighlight === idx
                        ? 'border-cyan-500/60 bg-cyan-950/25 text-white ring-1 ring-cyan-500/30'
                        : 'border-neutral-800 bg-neutral-900/40 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <div className="text-xs font-semibold text-neutral-200 truncate">{item.label}</div>
                    <div className="text-[11px] text-neutral-400 line-clamp-1">{item.detail}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset Showcase */}
          <div className="lg:col-span-6 relative">
            
            {/* Visual Frame */}
            <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-900 to-neutral-950 p-2 shadow-2xl">
              
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-neutral-950">
                <img
                  src={heroPenImg}
                  alt="Apex-Grip 3000 Futuristic Ergonomic Writing Pen levitating with electric blue illumination"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />

                {/* Subtle scrim overlay for high legibility */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />

                {/* Floating telemetry callouts */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 rounded-lg bg-neutral-950/90 px-3 py-1.5 border border-neutral-800 text-neutral-300 backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span>Optical Core: Electric Blue</span>
                  </div>

                  <a
                    href="#simulator"
                    className="flex items-center gap-1.5 rounded-lg bg-cyan-500/90 hover:bg-cyan-400 px-3 py-1.5 font-semibold text-neutral-950 backdrop-blur-md transition-colors"
                  >
                    <span>Test Ink Stroke</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Three variant mini-pills below hero image */}
              <div className="mt-3 grid grid-cols-3 gap-2 px-1 text-center">
                <a
                  href="#products"
                  className="flex flex-col justify-center p-2 rounded-xl bg-neutral-900/80 hover:bg-neutral-850 active:bg-neutral-800 border border-neutral-800/80 transition-colors min-h-[44px]"
                >
                  <div className="text-xs font-semibold text-neutral-200">Classic</div>
                  <div className="text-[11px] text-cyan-400 font-mono-numbers">₹20</div>
                </a>
                <a
                  href="#products"
                  className="flex flex-col justify-center p-2 rounded-xl bg-neutral-900/80 hover:bg-neutral-850 active:bg-neutral-800 border border-neutral-800/80 transition-colors min-h-[44px]"
                >
                  <div className="text-xs font-semibold text-neutral-200">Premium</div>
                  <div className="text-[11px] text-cyan-400 font-mono-numbers">₹50</div>
                </a>
                <a
                  href="#products"
                  className="flex flex-col justify-center p-2 rounded-xl bg-neutral-900/80 hover:bg-neutral-850 active:bg-neutral-800 border border-neutral-800/80 transition-colors min-h-[44px]"
                >
                  <div className="text-xs font-semibold text-neutral-200">Pro Edition</div>
                  <div className="text-[11px] text-cyan-400 font-mono-numbers">₹99</div>
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* 4-Column Key Metric Strip */}
        <div className="mt-10 sm:mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 border-y border-neutral-800/80 py-5 sm:py-6">
          <div className="space-y-0.5 sm:space-y-1">
            <div className="text-xl sm:text-2xl font-bold text-white font-mono-numbers">₹20</div>
            <div className="text-[11px] sm:text-xs text-neutral-400">Starting Price for Students</div>
          </div>
          <div className="space-y-0.5 sm:space-y-1">
            <div className="text-xl sm:text-2xl font-bold text-cyan-400 font-mono-numbers">64%</div>
            <div className="text-[11px] sm:text-xs text-neutral-400">Finger Strain Reduction</div>
          </div>
          <div className="space-y-0.5 sm:space-y-1">
            <div className="text-xl sm:text-2xl font-bold text-white font-mono-numbers">0.01s</div>
            <div className="text-[11px] sm:text-xs text-neutral-400">Instant Anti-Smear Ink Dry Time</div>
          </div>
          <div className="space-y-0.5 sm:space-y-1">
            <div className="text-xl sm:text-2xl font-bold text-white font-mono-numbers">100%</div>
            <div className="text-[11px] sm:text-xs text-neutral-400">Recyclable Aerospace Core</div>
          </div>
        </div>

      </div>
    </section>
  );
};

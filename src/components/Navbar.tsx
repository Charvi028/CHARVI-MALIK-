import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, ArrowUpRight, Sparkles, Play, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const { totalItems, totalPrice, setIsCartOpen, setIsPublishGuideOpen, replayIntro } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on escape key or resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'Features', href: '#features' },
    { label: 'Pen Lab', href: '#simulator' },
    { label: 'Compare', href: '#compare' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-neutral-800/80 bg-neutral-950/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 sm:gap-6 px-3 sm:px-6 lg:px-8">
          
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            className="group flex items-center gap-2 text-base sm:text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 min-h-[44px]"
            aria-label="Apex-Grip 3000 Home"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 text-neutral-950 shadow-sm shadow-cyan-500/30 shrink-0">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="font-display tracking-wider">
              APEX<span className="text-cyan-400">-GRIP</span>{' '}
              <span className="text-xs font-semibold text-neutral-400 font-mono-numbers">3000</span>
            </span>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-sm font-medium text-neutral-400">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-white transition-colors py-2 relative hover:after:w-full after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action + Cart & Chromebook presentation trigger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Desktop Intro Replay */}
            <button
              onClick={replayIntro}
              className="hidden xl:flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900/80 px-2.5 py-1.5 text-xs font-medium text-cyan-300 hover:border-cyan-500/50 hover:bg-neutral-850 transition-colors whitespace-nowrap shrink-0 min-h-[36px]"
              title="Watch cinematic intro animation again"
            >
              <Play className="h-3 w-3 fill-cyan-400 text-cyan-400" />
              <span>Intro</span>
            </button>

            {/* Desktop Publish Guide */}
            <button
              onClick={() => setIsPublishGuideOpen(true)}
              className="hidden lg:flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900/80 px-3 py-1.5 text-xs font-medium text-neutral-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0 min-h-[36px]"
              title="How to publish for free on Chromebook"
            >
              <span>Publish Guide</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-cyan-400" />
            </button>

            {/* Touch-Friendly Cart Button (Min 44px tap height) */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-1.5 sm:gap-2 rounded-xl bg-neutral-900 border border-neutral-800 px-3 sm:px-3.5 py-2.5 text-sm font-medium text-white hover:border-cyan-500/60 hover:bg-neutral-800/80 transition-all shadow-sm active:scale-95 whitespace-nowrap shrink-0 min-h-[44px]"
              aria-label={`Shopping Cart with ${totalItems} items`}
            >
              <ShoppingBag className="h-4 w-4 text-cyan-400 shrink-0" />
              <span className="hidden xs:inline text-xs text-neutral-300">Cart</span>
              <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-cyan-500 px-1.5 text-[11px] font-bold text-neutral-950 font-mono-numbers">
                {totalItems}
              </span>
              {totalPrice > 0 && (
                <span className="text-xs font-semibold text-neutral-200 font-mono-numbers pl-0.5">
                  ₹{totalPrice}
                </span>
              )}
            </button>

            {/* Touch-Friendly Mobile Hamburger Button (44px min tap target) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900 text-neutral-300 hover:text-white active:bg-neutral-800 transition-colors shrink-0"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5 text-cyan-400" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu with backdrop and touch-friendly rows */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-neutral-800 bg-neutral-950/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 px-3 py-1">
              Menu Navigation
            </div>

            <nav className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-medium text-neutral-200 hover:bg-neutral-900 active:bg-neutral-800 hover:text-white transition-colors min-h-[44px]"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="h-4 w-4 text-neutral-600" />
                </a>
              ))}
            </nav>

            {/* Mobile presentation shortcuts */}
            <div className="pt-3 border-t border-neutral-800/80 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    replayIntro();
                  }}
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-cyan-500/30 bg-cyan-950/30 px-3 py-2.5 text-xs font-semibold text-cyan-300 hover:bg-cyan-950/60 active:scale-95 transition-all min-h-[44px]"
                >
                  <Play className="h-3.5 w-3.5 fill-cyan-400 text-cyan-400" />
                  <span>Replay Intro</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsPublishGuideOpen(true);
                  }}
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-2.5 text-xs font-semibold text-neutral-200 hover:text-white active:scale-95 transition-all min-h-[44px]"
                >
                  <span>Publish Guide</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-cyan-400" />
                </button>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 py-3 px-4 text-xs font-bold text-neutral-950 shadow-md shadow-cyan-500/20 active:scale-95 min-h-[44px]"
              >
                <ShoppingBag className="h-4 w-4" />
                <span>Open Cart ({totalItems} items · ₹{totalPrice})</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

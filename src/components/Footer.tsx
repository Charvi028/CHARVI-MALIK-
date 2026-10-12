import React from 'react';
import { Sparkles, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Footer: React.FC = () => {
  const { setIsPublishGuideOpen, setIsCartOpen, replayIntro } = useCart();

  return (
    <footer className="border-t border-neutral-900 bg-neutral-950 text-neutral-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-neutral-900">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base font-display">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400 to-blue-600 text-neutral-950">
                <Sparkles className="h-3.5 w-3.5" />
              </span>
              <span>APEX-GRIP 3000</span>
            </div>
            <p className="text-neutral-400 leading-relaxed max-w-sm">
              “Grip the Future. Write Without Limits.” An ergonomic innovation project demonstrating precision engineering, accessible student pricing, and fluid tungsten delivery.
            </p>
            <div className="text-[11px] text-neutral-400 pt-1">
              Fictional Product Concept for College Presentation · Built in AI Studio
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Editions
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="hover:text-cyan-400 transition-colors">
                  Classic Edition (₹20)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-cyan-400 transition-colors">
                  Premium Edition (₹50)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-cyan-400 transition-colors">
                  Pro Flagship (₹99)
                </a>
              </li>
              <li>
                <a href="#compare" className="hover:text-cyan-400 transition-colors">
                  Technical Comparison
                </a>
              </li>
            </ul>
          </div>

          {/* Features & Lab */}
          <div className="space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Navigation
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-cyan-400 transition-colors">
                  Ergonomic Features
                </a>
              </li>
              <li>
                <a href="#simulator" className="hover:text-cyan-400 transition-colors">
                  Pen Ink Stroke Lab
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  Design Mission
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  Presentation Inquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Presentation Tools */}
          <div className="space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Presentation Tools
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={replayIntro}
                  className="hover:text-cyan-400 transition-colors text-left flex items-center gap-1 text-cyan-300"
                >
                  <span>Replay Cinematic Intro</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Open Demo Cart
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsPublishGuideOpen(true)}
                  className="hover:text-cyan-400 transition-colors text-left flex items-center gap-1 text-cyan-300"
                >
                  Publish Free on Chromebook <ArrowUpRight className="h-3 w-3" />
                </button>
              </li>
              <li>
                <span className="text-neutral-400 block pt-1">
                  Currency: Indian Rupee (₹)
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div>
            © {new Date().getFullYear()} Apex-Grip 3000 Project. Academic Demonstration Showcase.
          </div>
          <div className="flex items-center gap-1 text-neutral-400">
            <span>Engineered with React & Tailwind CSS for modern web browsers</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

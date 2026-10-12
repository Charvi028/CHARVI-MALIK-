import React from 'react';
import { Target, Award, Compass, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 border-t border-neutral-900 bg-neutral-950/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <Compass className="h-3.5 w-3.5" />
              <span>The Apex Project Story</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>College Tech & Business Showcase</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
              Why We Reinvented the Humble Pen for the 21st Century.
            </h2>

            <p className="text-sm text-neutral-300 leading-relaxed">
              Every year, millions of students across India and around the globe sit for grueling 3-hour board and entrance examinations with cheap, slippery plastic pens that cause finger calluses, wrist cramps, and erratic ink blotches.
            </p>

            <p className="text-sm text-neutral-300 leading-relaxed">
              We asked a simple engineering question: <strong className="text-white">Why should premium ergonomic comfort cost hundreds of dollars?</strong> The <strong>Apex-Grip 3000</strong> was conceived to prove that aerospace-level industrial design, biomechanical pressure dispersion, and silky micro-roller ink flow can start at just <strong className="text-cyan-400 font-mono-numbers">₹20</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/60">
                <Target className="h-5 w-5 text-cyan-400 mb-2" />
                <div className="text-sm font-bold text-white font-display">Biomechanical Mission</div>
                <div className="text-xs text-neutral-400 mt-1 leading-normal">
                  Reduces localized index and thumb contact stress by 64% through an engineered 12.8mm anatomical taper.
                </div>
              </div>

              <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/60">
                <Award className="h-5 w-5 text-cyan-400 mb-2" />
                <div className="text-sm font-bold text-white font-display">Universal Access</div>
                <div className="text-xs text-neutral-400 mt-1 leading-normal">
                  Three distinct editions designed so every school student, campus researcher, and boardroom executive finds their match.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8 space-y-6">
              <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                Innovation Breakdown
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-bold font-mono-numbers shrink-0">
                    01
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Anatomical Contour Analysis</h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Over 200 hand molds tested across left-handed and right-handed writers to find the universal ergonomic apex.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-bold font-mono-numbers shrink-0">
                    02
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Zero-Gravity Pressurized Flow</h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Our Pro edition features a nitrogen-pressurized refill that maintains consistent capillary feed even upside-down.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-bold font-mono-numbers shrink-0">
                    03
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Sustainable Circular Refill Architecture</h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      The chassis is made to last a lifetime. Standardized modular refill cores cut plastic waste by 88%.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-neutral-800 pt-4 flex items-center justify-between text-xs text-neutral-400">
                <span>College Business Presentation Project</span>
                <span className="text-cyan-400 font-semibold">Demo Ready</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

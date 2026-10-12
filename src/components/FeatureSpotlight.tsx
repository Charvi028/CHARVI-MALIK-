import React, { useState } from 'react';
import { 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Feather, 
  Users, 
  GraduationCap, 
  Briefcase, 
  Palette,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { CORE_FEATURES } from '../data/products';

export const FeatureSpotlight: React.FC = () => {
  const [selectedAudience, setSelectedAudience] = useState<'students' | 'professionals' | 'everyday'>('students');

  const audienceProfiles = {
    students: {
      title: 'For Students & Competitive Exam Aspirants',
      kicker: 'Speed, Endurance & Exam Comfort',
      icon: GraduationCap,
      description: 'Marathon 3-hour tests, timed JEE/NEET/UPSC papers, and rapid lecture notes demand a pen that won’t cramp fingers or slip under sweaty palms.',
      keyAdvantages: [
        'Anatomical rib grip stops finger blisters during 3-hour exam sessions',
        'Smudge-proof quick-dry ink keeps papers neat without palm streaks',
        'Affordable ₹20 pricing makes peak ergonomics accessible to all students',
        'High-capacity reservoir writes over 1,800 meters without running dry'
      ]
    },
    professionals: {
      title: 'For Engineers, Executives & Legal Professionals',
      kicker: 'Executive Presence & Precision Contracts',
      icon: Briefcase,
      description: 'A weighty, authoritative instrument machined from aerospace aluminum and titanium that commands respect in boardrooms and site reviews.',
      keyAdvantages: [
        'Balanced center-of-mass provides unmatched authority during contract signing',
        'Airtight magnetic snap-cap prevents ink dehydration during travel',
        'Micro-knurled grip delivers micron-level accuracy for blueprint markup',
        'Sleek obsidian-silver aesthetic pairs seamlessly with luxury stationery'
      ]
    },
    everyday: {
      title: 'For Journaling, Sketching & Daily Brainstorming',
      kicker: 'Effortless Everyday Flow',
      icon: Palette,
      description: 'Whether jotting down morning thoughts, drafting architectural sketches, or managing daily to-dos, the Apex-Grip 3000 turns writing into pure joy.',
      keyAdvantages: [
        'Featherweight balance prevents repetitive wrist fatigue',
        'Instant-start ink flow never skips or requires scratch-testing',
        'Ultra-durable pocket clip securely anchors to notebooks and pockets',
        'Engineered to write smoothly at all acute angles from 35° to 90°'
      ]
    }
  };

  const activeProfile = audienceProfiles[selectedAudience];
  const ActiveIcon = activeProfile.icon;

  return (
    <section id="features" className="py-16 lg:py-24 border-t border-neutral-900 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <span>Precision Engineering</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Ergonomics Masterclass</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            Designed to Revolutionize the Way You Put Thoughts to Paper.
          </h2>
          <p className="text-base text-neutral-400 leading-relaxed">
            Conventional pens are rigid cylinders that force muscles into constant tension. The Apex-Grip 3000 re-architects every millimeter from the micro-textured grip to the tungsten-carbide ball.
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_FEATURES.map((feature, idx) => (
            <div
              key={feature.id}
              className="group relative rounded-xl border border-neutral-800/80 bg-neutral-900/60 p-6 transition-all hover:border-cyan-500/50 hover:bg-neutral-900/90"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-800 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-neutral-950 transition-colors">
                {idx === 0 && <Sparkles className="h-5 w-5" />}
                {idx === 1 && <Zap className="h-5 w-5" />}
                {idx === 2 && <ShieldCheck className="h-5 w-5" />}
                {idx === 3 && <Feather className="h-5 w-5" />}
              </div>

              <div className="space-y-2">
                <div className="text-xs font-medium text-cyan-400 font-mono-numbers">
                  Pillar 0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-white font-display">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {feature.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800/80">
                <div className="text-sm font-bold text-white font-mono-numbers">
                  {feature.metric}
                </div>
                <div className="text-xs text-neutral-400">
                  {feature.metricLabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Audience Selector Interactive Showcase */}
        <div className="mt-16 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-neutral-800">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                Universal Appeal
              </div>
              <h3 className="text-2xl font-bold text-white font-display mt-1">
                Optimized for Every Writing Demand
              </h3>
              <p className="text-sm text-neutral-400 mt-1">
                Select your primary use case to see how the Apex-Grip 3000 adapts to your daily routine:
              </p>
            </div>

            {/* Segmented Interactive Control */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-1.5 p-1.5 bg-neutral-950 rounded-xl border border-neutral-800 w-full sm:w-auto">
              <button
                onClick={() => setSelectedAudience('students')}
                className={`flex-1 sm:flex-initial px-3 sm:px-4 py-2.5 text-xs font-semibold rounded-lg transition-all text-center min-h-[44px] flex items-center justify-center ${
                  selectedAudience === 'students'
                    ? 'bg-cyan-500 text-neutral-950 shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Students (Exams)
              </button>
              <button
                onClick={() => setSelectedAudience('professionals')}
                className={`flex-1 sm:flex-initial px-3 sm:px-4 py-2.5 text-xs font-semibold rounded-lg transition-all text-center min-h-[44px] flex items-center justify-center ${
                  selectedAudience === 'professionals'
                    ? 'bg-cyan-500 text-neutral-950 shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Professionals (Office)
              </button>
              <button
                onClick={() => setSelectedAudience('everyday')}
                className={`flex-1 sm:flex-initial px-3 sm:px-4 py-2.5 text-xs font-semibold rounded-lg transition-all text-center min-h-[44px] flex items-center justify-center ${
                  selectedAudience === 'everyday'
                    ? 'bg-cyan-500 text-neutral-950 shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Everyday (Journaling)
              </button>
            </div>
          </div>

          {/* Audience Card Content */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-cyan-400">
                  <ActiveIcon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                    {activeProfile.kicker}
                  </div>
                  <h4 className="text-xl font-bold text-white font-display">
                    {activeProfile.title}
                  </h4>
                </div>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed">
                {activeProfile.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {activeProfile.keyAdvantages.map((adv, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{adv}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 rounded-xl border border-neutral-800 bg-neutral-950 p-5 space-y-4">
              <div className="text-xs font-semibold text-neutral-300 flex items-center justify-between">
                <span>Ergonomic Testing Metric</span>
                <span className="text-cyan-400 font-mono-numbers">Tested 2026</span>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-neutral-400">Continuous Writing Comfort</span>
                    <span className="text-white font-mono-numbers">9.8 / 10</span>
                  </div>
                  <div className="h-2 rounded-full bg-neutral-800 overflow-hidden">
                    <div className="h-full bg-cyan-400 rounded-full" style={{ width: '98%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-neutral-400">Ink Smudge Resistance</span>
                    <span className="text-white font-mono-numbers">9.9 / 10</span>
                  </div>
                  <div className="h-2 rounded-full bg-neutral-800 overflow-hidden">
                    <div className="h-full bg-cyan-400 rounded-full" style={{ width: '99%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-neutral-400">Drop & Shock Durability</span>
                    <span className="text-white font-mono-numbers">9.6 / 10</span>
                  </div>
                  <div className="h-2 rounded-full bg-neutral-800 overflow-hidden">
                    <div className="h-full bg-cyan-400 rounded-full" style={{ width: '96%' }} />
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-neutral-400 border-t border-neutral-800 pt-3">
                Certified based on ergonomic lab pressure pad testing comparing standard 10mm cylinders against the Apex 12.8mm anatomical taper.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

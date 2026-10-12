import React from 'react';
import { Star, CheckCircle, Info, Quote } from 'lucide-react';
import { DEMO_REVIEWS } from '../data/products';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 border-t border-neutral-900 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header with demonstration disclosure */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-neutral-800/80">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <span>Field Feedback</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Academic & Professional Testers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display mt-2">
              Tested by Students, Engineers & Creators
            </h2>
            <p className="text-sm text-neutral-400 mt-2 max-w-2xl">
              See what early testers from universities and design studios experienced after hundreds of hours of continuous writing with the Apex-Grip 3000.
            </p>
          </div>

          {/* Demonstration Notice Card */}
          <div className="flex items-center gap-2 rounded-lg bg-neutral-900/90 border border-neutral-800 px-3.5 py-2 text-xs text-neutral-300">
            <Info className="h-4 w-4 text-cyan-400 shrink-0" />
            <span>
              <strong>Presentation Notice:</strong> Reviews shown below are prototype demonstration testimonials curated for this college tech presentation.
            </span>
          </div>
        </div>

        {/* 4 Review Cards in 2x2 Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {DEMO_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="relative flex flex-col justify-between rounded-2xl border border-neutral-800/80 bg-neutral-900/50 p-6 sm:p-7 hover:border-neutral-700 transition-all hover:bg-neutral-900/75"
            >
              <div>
                {/* Top Row: Stars + Date + Verification Tag */}
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-neutral-800/60">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <span className="font-mono-numbers">{review.date}</span>
                    <span aria-hidden="true" className="text-neutral-700">·</span>
                    <span className="text-cyan-400 text-[11px] font-medium flex items-center gap-1">
                      <CheckCircle className="h-3 w-3" /> Demo Verified
                    </span>
                  </div>
                </div>

                {/* Review Title & Body */}
                <div className="mt-4 space-y-2.5">
                  <h3 className="text-base font-bold text-white font-display">
                    “{review.title}”
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {review.content}
                  </p>
                </div>
              </div>

              {/* Reviewer Details */}
              <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-white">
                    {review.author}
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">
                    {review.role}
                  </div>
                </div>
                <div className="text-[10px] uppercase tracking-wider text-neutral-400 bg-neutral-950 px-2 py-1 rounded border border-neutral-800">
                  Demo Review
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

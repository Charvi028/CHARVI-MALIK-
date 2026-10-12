import React, { useState } from 'react';
import { Check, Minus, ShoppingBag, ArrowLeftRight, ChevronRight } from 'lucide-react';
import { PRODUCT_VARIANTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { VariantId } from '../types';

export const ComparisonTable: React.FC = () => {
  const { addItem } = useCart();
  const [mobileActiveTab, setMobileActiveTab] = useState<VariantId>('classic');

  const comparisonRows = [
    { label: 'Retail Price (INR)', classic: '₹20', premium: '₹50', pro: '₹99', highlight: true },
    { label: 'Chassis Material', classic: 'High-Impact Poly-Composite', premium: 'Aerospace 6061 Aluminum', pro: 'Grade-5 Titanium & Carbon Fiber' },
    { label: 'Ergonomic Grip Matrix', classic: 'Thermo-Elastomer Ribbed', premium: 'Diamond-Knurled Tactile', pro: 'Bio-Adaptive Hex Matrix' },
    { label: 'Tip Architecture', classic: '0.7mm Tungsten Ballpoint', premium: '0.5mm Liquid Rollerball', pro: '0.38mm Micron Ceramic Roller' },
    { label: 'Closure Mechanism', classic: 'Friction Snap-Click', premium: 'Neodymium Magnetic Cap', pro: 'Hermetic Magnetic Vacuum Lock' },
    { label: 'Mass / Balance', classic: '11.2g (Ultra-Lightweight)', premium: '21.8g (Substantial Center-G)', pro: '28.4g (Dual Counter-Weighted)' },
    { label: 'Writes Upside Down', classic: 'Up to 45° Angle', premium: 'Up to 75° Angle', pro: '360° Zero-G Pressurized' },
    { label: 'Continuous Flow Rating', classic: '1,800 Meters', premium: '2,400 Meters', pro: '3,200 Meters' },
    { label: 'Illuminated Core Ring', classic: 'Electric Blue Accent Band', premium: 'Cyan Anodized Ring', pro: 'Luminous Core Alignment Ring' },
    { label: 'Best Suited For', classic: 'Students, Exams, Daily Notes', premium: 'Executives, Engineers, Contracts', pro: 'Architects, Artists & Leaders' },
  ];

  const currentMobileVariant = PRODUCT_VARIANTS.find(v => v.id === mobileActiveTab) || PRODUCT_VARIANTS[0];

  return (
    <section id="compare" className="py-12 sm:py-16 lg:py-24 border-t border-neutral-900 bg-neutral-950/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3 mb-8 sm:mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Side-By-Side Technical Audit
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            Compare Apex-Grip 3000 Models
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            Compare materials, tip gauges, weights, and mechanisms across all three editions to find the exact configuration for your hands.
          </p>
        </div>

        {/* Mobile-Only Interactive Card Selector (< 768px) */}
        <div className="block md:hidden mb-8 space-y-4">
          <div className="flex rounded-xl bg-neutral-900 p-1 border border-neutral-800">
            {PRODUCT_VARIANTS.map((v) => (
              <button
                key={v.id}
                onClick={() => setMobileActiveTab(v.id)}
                className={`flex-1 py-2.5 text-xs font-semibold rounded-lg transition-all text-center min-h-[44px] flex flex-col justify-center items-center ${
                  mobileActiveTab === v.id
                    ? 'bg-cyan-500 text-neutral-950 shadow-md font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <span>{v.name.replace('Apex-Grip 3000 ', '')}</span>
                <span className="text-[11px] font-mono-numbers">₹{v.price}</span>
              </button>
            ))}
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div>
                <div className="text-xs font-semibold text-cyan-400 uppercase">{currentMobileVariant.subtitle}</div>
                <div className="text-lg font-bold text-white font-display">{currentMobileVariant.name}</div>
              </div>
              <div className="text-2xl font-extrabold text-white font-mono-numbers">
                ₹{currentMobileVariant.price}
              </div>
            </div>

            <div className="space-y-2 text-xs divide-y divide-neutral-800/60">
              {comparisonRows.map((row) => (
                <div key={row.label} className="pt-2 flex justify-between gap-3">
                  <span className="text-neutral-400">{row.label}</span>
                  <span className="text-neutral-200 font-medium text-right">
                    {mobileActiveTab === 'classic' ? row.classic : mobileActiveTab === 'premium' ? row.premium : row.pro}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => addItem(currentMobileVariant, 1)}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 py-3.5 px-4 text-xs font-bold text-neutral-950 active:scale-95 shadow-md shadow-cyan-500/20 min-h-[44px]"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Add {currentMobileVariant.name} (₹{currentMobileVariant.price})</span>
            </button>
          </div>
        </div>

        {/* Horizontal Swipe Indicator for Tablet/Desktop Table */}
        <div className="flex items-center justify-between text-xs text-neutral-400 mb-3 px-1">
          <span className="hidden sm:inline font-medium">Full Specifications Comparison Matrix</span>
          <span className="flex items-center gap-1.5 text-cyan-400 text-[11px]">
            <ArrowLeftRight className="h-3.5 w-3.5" />
            <span>Scroll horizontally to inspect all details</span>
          </span>
        </div>

        {/* Full Comparison Table Box with Smooth Touch Scrolling */}
        <div className="overflow-x-auto rounded-2xl border border-neutral-800 bg-neutral-900/60 shadow-xl touch-pan-x">
          <table className="w-full min-w-[640px] sm:min-w-[700px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-neutral-800 bg-neutral-950/90">
                <th className="py-4 sm:py-5 px-4 sm:px-6 font-semibold text-neutral-400 w-1/4 text-xs sm:text-sm">
                  Specification
                </th>
                {PRODUCT_VARIANTS.map((v) => (
                  <th key={v.id} className="py-4 sm:py-5 px-4 sm:px-6 w-1/4">
                    <div className="text-[11px] sm:text-xs uppercase tracking-wider text-cyan-400 font-medium">
                      {v.id === 'pro' ? 'Flagship' : v.id === 'premium' ? 'Aerospace' : 'Student Entry'}
                    </div>
                    <div className="text-base sm:text-lg font-bold text-white font-display mt-0.5">
                      {v.name.replace('Apex-Grip 3000 ', '')}
                    </div>
                    <div className="text-lg sm:text-xl font-extrabold text-white font-mono-numbers mt-1">
                      ₹{v.price}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60">
              {comparisonRows.map((row) => (
                <tr 
                  key={row.label}
                  className={`hover:bg-neutral-850/40 transition-colors ${
                    row.highlight ? 'bg-cyan-950/20 font-semibold' : ''
                  }`}
                >
                  <td className="py-3.5 sm:py-4 px-4 sm:px-6 text-xs text-neutral-400 font-medium">
                    {row.label}
                  </td>
                  <td className="py-3.5 sm:py-4 px-4 sm:px-6 text-xs text-neutral-200">
                    {row.classic}
                  </td>
                  <td className="py-3.5 sm:py-4 px-4 sm:px-6 text-xs text-neutral-200">
                    {row.premium}
                  </td>
                  <td className="py-3.5 sm:py-4 px-4 sm:px-6 text-xs text-cyan-300 font-medium">
                    {row.pro}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-neutral-800 bg-neutral-950/80">
                <td className="py-4 sm:py-5 px-4 sm:px-6 text-xs text-neutral-400">
                  Ready to test?
                </td>
                {PRODUCT_VARIANTS.map((v) => (
                  <td key={v.id} className="py-4 sm:py-5 px-4 sm:px-6">
                    <button
                      onClick={() => addItem(v, 1)}
                      className="w-full flex items-center justify-center gap-1.5 rounded-xl border border-neutral-700 bg-neutral-900 hover:border-cyan-500 hover:bg-cyan-500 hover:text-neutral-950 text-neutral-200 text-xs font-semibold py-2.5 px-3 transition-all min-h-[44px] active:scale-95"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      <span>Add ₹{v.price}</span>
                    </button>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>

      </div>
    </section>
  );
};

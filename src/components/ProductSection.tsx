import React, { useState } from 'react';
import { 
  Plus, 
  Minus, 
  ShoppingBag, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Feather, 
  Award,
  ArrowRight,
  Eye
} from 'lucide-react';
import { PRODUCT_VARIANTS } from '../data/products';
import { ProductVariant, VariantId } from '../types';
import { useCart } from '../context/CartContext';

export const ProductSection: React.FC = () => {
  const { addItem, setIsCartOpen } = useCart();
  
  // Selected variant for the deep-dive panel
  const [selectedVariantId, setSelectedVariantId] = useState<VariantId>('classic');
  const [quantities, setQuantities] = useState<Record<VariantId, number>>({
    classic: 1,
    premium: 1,
    pro: 1
  });
  const [addedAnimation, setAddedAnimation] = useState<VariantId | null>(null);

  const selectedVariant = PRODUCT_VARIANTS.find(v => v.id === selectedVariantId) || PRODUCT_VARIANTS[0];

  const handleQuantityChange = (id: VariantId, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta)
    }));
  };

  const handleAddToCart = (variant: ProductVariant) => {
    const qty = quantities[variant.id] || 1;
    addItem(variant, qty);
    setAddedAnimation(variant.id);
    setTimeout(() => {
      setAddedAnimation(null);
    }, 1800);
  };

  return (
    <section id="products" className="py-16 lg:py-24 border-t border-neutral-900 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-neutral-800/80">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <span>Apex-Grip 3000 Lineup</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>3 Selectable Editions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display mt-2">
              Engineered Editions. Transparent Pricing.
            </h2>
            <p className="text-base text-neutral-400 mt-2 max-w-2xl">
              Choose the Apex-Grip 3000 variant tailored to your writing cadence. All variants include our proprietary bio-ergonomic grip contour and frictionless ink delivery.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto text-xs text-neutral-400">
            <span className="flex items-center gap-1">
              <Check className="h-4 w-4 text-emerald-400" /> Free Pan-India Delivery
            </span>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <span className="flex items-center gap-1">
              <Check className="h-4 w-4 text-emerald-400" /> 1-Year Apex Warranty
            </span>
          </div>
        </div>

        {/* 3-Column Product Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {PRODUCT_VARIANTS.map((variant) => {
            const isSelected = selectedVariantId === variant.id;
            const currentQty = quantities[variant.id] || 1;
            const isJustAdded = addedAnimation === variant.id;

            return (
              <div
                key={variant.id}
                onClick={() => setSelectedVariantId(variant.id)}
                className={`group flex flex-col justify-between rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                  isSelected
                    ? 'border-cyan-500/80 bg-neutral-900/90 shadow-xl shadow-cyan-950/30 ring-1 ring-cyan-500/30'
                    : 'border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 hover:bg-neutral-900/70'
                }`}
              >
                <div>
                  {/* Card Visual Header with Real Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950">
                    <img
                      src={variant.image}
                      alt={variant.name}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Gradient scrim */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-transparent to-transparent" />

                    {/* Badge */}
                    {variant.badge && (
                      <div className="absolute top-3 right-3 rounded-full bg-cyan-500/90 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-neutral-950">
                        {variant.badge}
                      </div>
                    )}

                    {/* Edition Pill */}
                    <div className="absolute bottom-3 left-3 text-xs font-semibold text-white bg-neutral-950/80 px-2.5 py-1 rounded-md border border-neutral-800 backdrop-blur-sm">
                      {variant.weightGrams}g Weight · {variant.tipSpecification}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-cyan-400 font-medium">
                        {variant.subtitle}
                      </div>
                      <h3 className="text-xl font-bold text-white font-display mt-0.5">
                        {variant.name}
                      </h3>
                      <p className="text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                        {variant.description}
                      </p>
                    </div>

                    {/* Price Block */}
                    <div className="flex items-baseline gap-2 pt-2 border-t border-neutral-800/80">
                      <span className="text-3xl font-extrabold text-white font-mono-numbers">
                        ₹{variant.price}
                      </span>
                      {variant.originalPrice && (
                        <span className="text-sm text-neutral-500 line-through font-mono-numbers">
                          ₹{variant.originalPrice}
                        </span>
                      )}
                      <span className="text-xs text-emerald-400 font-medium ml-auto">
                        In Stock · Ships in 24h
                      </span>
                    </div>

                    {/* Key features bullets */}
                    <ul className="space-y-2 pt-1">
                      {variant.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                          <Check className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-5 sm:p-6 pt-0 space-y-3">
                  {/* Quantity Stepper */}
                  <div 
                    className="flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 min-h-[48px]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="text-xs text-neutral-400 font-medium">Quantity</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleQuantityChange(variant.id, -1)}
                        disabled={currentQty <= 1}
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white active:bg-neutral-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        aria-label={`Decrease ${variant.name} quantity`}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center text-sm font-bold text-white font-mono-numbers">
                        {currentQty}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(variant.id, 1)}
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white active:bg-neutral-800 transition-colors"
                        aria-label={`Increase ${variant.name} quantity`}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(variant);
                    }}
                    className={`w-full flex items-center justify-center gap-2 rounded-xl py-3.5 px-4 text-sm font-semibold transition-all active:scale-95 min-h-[48px] ${
                      isJustAdded
                        ? 'bg-emerald-500 text-neutral-950 font-bold'
                        : isSelected
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-neutral-950 hover:from-cyan-300 hover:to-blue-400 shadow-md shadow-cyan-500/20'
                        : 'bg-neutral-800 text-white hover:bg-neutral-700'
                    }`}
                  >
                    {isJustAdded ? (
                      <>
                        <Check className="h-4 w-4" />
                        <span>Added to Cart!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="h-4 w-4" />
                        <span>
                          Add to Cart · ₹{(variant.price * currentQty)}
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Spotlight on Selected Variant */}
        <div className="mt-12 sm:mt-14 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800">
              <img
                src={selectedVariant.image}
                alt={selectedVariant.name}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute top-3 left-3 bg-neutral-950/90 border border-neutral-800 px-3 py-1 rounded-md text-xs font-semibold text-cyan-400">
                Selected: {selectedVariant.name}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">
                Engineering Specification Sheet
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                {selectedVariant.name} — Technical Anatomy
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {selectedVariant.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-2">
                <div className="rounded-xl bg-neutral-950 border border-neutral-800 p-3">
                  <div className="text-[11px] text-neutral-400">Grip Zone</div>
                  <div className="text-xs font-semibold text-white mt-0.5 line-clamp-1">{selectedVariant.gripType}</div>
                </div>
                <div className="rounded-xl bg-neutral-950 border border-neutral-800 p-3">
                  <div className="text-[11px] text-neutral-400">Body Chassis</div>
                  <div className="text-xs font-semibold text-white mt-0.5 line-clamp-1">{selectedVariant.bodyMaterial}</div>
                </div>
                <div className="rounded-xl bg-neutral-950 border border-neutral-800 p-3">
                  <div className="text-[11px] text-neutral-400">Writing Tip</div>
                  <div className="text-xs font-semibold text-white mt-0.5 line-clamp-1">{selectedVariant.tipSpecification}</div>
                </div>
                <div className="rounded-xl bg-neutral-950 border border-neutral-800 p-3">
                  <div className="text-[11px] text-neutral-400">Weight Mass</div>
                  <div className="text-xs font-semibold text-white mt-0.5 font-mono-numbers">{selectedVariant.weightGrams} grams</div>
                </div>
                <div className="rounded-xl bg-neutral-950 border border-neutral-800 p-3">
                  <div className="text-[11px] text-neutral-400">Ink Capacity</div>
                  <div className="text-xs font-semibold text-white mt-0.5 line-clamp-1">{selectedVariant.inkCapacity}</div>
                </div>
                <div className="rounded-xl bg-neutral-950 border border-neutral-800 p-3">
                  <div className="text-[11px] text-neutral-400">Recommended User</div>
                  <div className="text-xs font-semibold text-white mt-0.5 line-clamp-1">{selectedVariant.idealFor}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-3">
                <button
                  onClick={() => handleAddToCart(selectedVariant)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-neutral-950 font-semibold px-5 py-3 text-xs transition-colors min-h-[44px] active:scale-95"
                >
                  <ShoppingBag className="h-4 w-4" />
                  <span>Add {selectedVariant.name} (₹{selectedVariant.price}) to Cart</span>
                </button>

                <button
                  onClick={() => setIsCartOpen(true)}
                  className="text-xs text-neutral-400 hover:text-white underline underline-offset-4 py-2 text-center sm:text-left min-h-[44px] flex items-center justify-center sm:justify-start"
                >
                  Open Cart & Review Orders
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

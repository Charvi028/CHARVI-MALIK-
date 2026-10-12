import React from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Sparkles,
  ShieldCheck,
  Check
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCT_VARIANTS } from '../data/products';

export const CartDrawer: React.FC = () => {
  const { 
    items, 
    isCartOpen, 
    setIsCartOpen, 
    updateQuantity, 
    removeItem, 
    clearCart,
    totalItems, 
    totalPrice,
    setIsCheckoutOpen,
    addItem
  } = useCart();

  if (!isCartOpen) return null;

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-neutral-950/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-0 sm:pl-10 w-full sm:w-auto">
        <div className="w-full sm:w-screen sm:max-w-md border-l border-neutral-800 bg-neutral-950 text-neutral-100 shadow-2xl flex flex-col justify-between h-full">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-neutral-800 px-4 sm:px-6 py-4 sm:py-5 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <ShoppingBag className="h-4 w-4" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white font-display">
                  Shopping Cart
                </h2>
                <div className="text-xs text-neutral-400 font-mono-numbers">
                  {totalItems} {totalItems === 1 ? 'instrument' : 'instruments'} selected
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 sm:gap-2">
              {items.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-xs text-neutral-400 hover:text-rose-400 transition-colors px-2.5 py-2 min-h-[44px] flex items-center"
                  title="Clear all items"
                >
                  Clear All
                </button>
              )}
              <button
                onClick={() => setIsCartOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white active:bg-neutral-800 transition-colors"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Cart Item List / Empty State */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-6 space-y-3 sm:space-y-4">
            {items.length === 0 ? (
              <div className="py-8 sm:py-12 text-center space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900/80 text-neutral-500">
                  <ShoppingBag className="h-8 w-8 text-neutral-600" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white font-display">
                    Your cart is currently empty
                  </h3>
                  <p className="text-xs text-neutral-400 max-w-xs mx-auto">
                    Explore the Apex-Grip 3000 collection and experience ergonomic writing starting from ₹20.
                  </p>
                </div>

                {/* Quick Add Buttons for Demo */}
                <div className="pt-4 border-t border-neutral-800/80 space-y-2 text-left">
                  <div className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider">
                    Quick Add to Cart for Presentation:
                  </div>
                  {PRODUCT_VARIANTS.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => addItem(v, 1)}
                      className="w-full flex items-center justify-between p-3 rounded-xl border border-neutral-800 bg-neutral-900 hover:border-cyan-500/50 hover:bg-neutral-850 active:scale-[0.99] transition-all text-left text-xs min-h-[44px]"
                    >
                      <div>
                        <div className="font-semibold text-white">{v.name}</div>
                        <div className="text-[11px] text-neutral-400">{v.subtitle}</div>
                      </div>
                      <div className="flex items-center gap-1.5 font-bold text-cyan-400 font-mono-numbers">
                        + Add ₹{v.price}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.variantId}
                    className="flex gap-3 sm:gap-4 rounded-xl border border-neutral-800 bg-neutral-900/60 p-3.5 sm:p-4 transition-all hover:border-neutral-700"
                  >
                    {/* Item Thumbnail */}
                    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950">
                      <img
                        src={item.variant.image}
                        alt={item.variant.name}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs font-bold text-white leading-tight">
                            {item.variant.name}
                          </h4>
                          <button
                            onClick={() => removeItem(item.variantId)}
                            className="text-neutral-400 hover:text-rose-400 active:text-rose-300 transition-colors p-2 -mr-1 -mt-1 min-h-[36px] min-w-[36px] flex items-center justify-center"
                            title="Remove item"
                            aria-label={`Remove ${item.variant.name}`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="text-[11px] text-cyan-400 mt-0.5">
                          {item.variant.subtitle}
                        </div>
                        <div className="text-[11px] text-neutral-400 font-mono-numbers mt-0.5">
                          Unit: ₹{item.variant.price}
                        </div>
                      </div>

                      {/* Stepper & Line Total */}
                      <div className="flex items-center justify-between pt-2 border-t border-neutral-800/80 mt-2">
                        <div className="flex items-center gap-1 bg-neutral-950 border border-neutral-800 rounded-lg p-0.5">
                          <button
                            onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="flex h-8 w-8 items-center justify-center rounded text-neutral-400 hover:text-white hover:bg-neutral-850 active:bg-neutral-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-7 text-center text-xs font-bold text-white font-mono-numbers">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                            className="flex h-8 w-8 items-center justify-center rounded text-neutral-400 hover:text-white hover:bg-neutral-850 active:bg-neutral-800 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>

                        <div className="text-right">
                          <div className="text-xs font-bold text-white font-mono-numbers">
                            ₹{item.quantity * item.variant.price}
                          </div>
                          <div className="text-[10px] text-neutral-400">
                            Subtotal
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Summary & Checkout Action */}
          {items.length > 0 && (
            <div className="border-t border-neutral-800 bg-neutral-950/95 p-4 sm:p-6 space-y-3 sm:space-y-4 shrink-0">
              
              <div className="space-y-1.5 sm:space-y-2 text-xs">
                <div className="flex justify-between text-neutral-400">
                  <span>Subtotal ({totalItems} items)</span>
                  <span className="text-neutral-200 font-mono-numbers font-medium">₹{totalPrice}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Demo Delivery</span>
                  <span className="text-emerald-400 font-medium">FREE</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Taxes (GST 18% Incl.)</span>
                  <span className="text-neutral-200 font-mono-numbers">₹0 (Demo)</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-neutral-800">
                  <span>Final Total</span>
                  <span className="text-cyan-400 font-mono-numbers text-base">₹{totalPrice}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-neutral-400 bg-neutral-900/60 p-2.5 rounded-lg border border-neutral-800">
                <ShieldCheck className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Presentation Demonstration: Free test checkout with mock order confirmation.</span>
              </div>

              <button
                onClick={handleProceedToCheckout}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 py-3.5 px-4 text-sm font-bold text-neutral-950 hover:from-cyan-300 hover:to-blue-400 active:scale-95 transition-all shadow-lg shadow-cyan-500/20 min-h-[48px]"
              >
                <span>Proceed to Demo Checkout</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full text-center text-xs text-neutral-400 hover:text-white transition-colors py-2 min-h-[38px] flex items-center justify-center"
              >
                Continue Browsing
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { 
  X, 
  ShieldAlert, 
  CheckCircle, 
  ArrowRight, 
  Lock, 
  ShoppingBag,
  Truck,
  Sparkles
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { OrderDetails } from '../types';

export const CheckoutModal: React.FC = () => {
  const { 
    isCheckoutOpen, 
    setIsCheckoutOpen, 
    items, 
    totalPrice, 
    totalItems, 
    clearCart, 
    setCompletedOrder 
  } = useCart();

  const [formData, setFormData] = useState({
    fullName: 'Rahul Sharma',
    email: 'rahul.student@presentation.edu',
    phone: '9876543210',
    address: 'Flat 402, Pinnacle Residency, Tech Park Road',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560100',
    deliveryMethod: 'express'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isCheckoutOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Valid email address is required';
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      newErrors.phone = '10-digit mobile number is required';
    }
    if (!formData.address.trim()) newErrors.address = 'Street delivery address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.pincode.trim() || formData.pincode.length < 6) {
      newErrors.pincode = 'Valid 6-digit PIN code is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate order placement
    setTimeout(() => {
      const generatedOrderId = `APX-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
      
      const newOrder: OrderDetails = {
        orderId: generatedOrderId,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        pincode: formData.pincode,
        items: [...items],
        subtotal: totalPrice,
        shipping: 0,
        total: totalPrice,
        orderDate: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      setCompletedOrder(newOrder);
      clearCart();
      setIsSubmitting(false);
      setIsCheckoutOpen(false);
    }, 850);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={() => setIsCheckoutOpen(false)}
        className="fixed inset-0 bg-neutral-950/85 backdrop-blur-sm transition-opacity"
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
        <div className="relative w-full max-w-2xl rounded-2xl border border-neutral-800 bg-neutral-950 p-6 sm:p-8 shadow-2xl">
          
          {/* Close button */}
          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="absolute top-4 sm:top-5 right-4 sm:right-5 flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white active:bg-neutral-800 transition-colors"
            aria-label="Close checkout modal"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Header */}
          <div className="mb-5 sm:mb-6 pr-10 space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <Lock className="h-3.5 w-3.5" />
              <span>Simulated Demo Checkout</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Zero Actual Payment Required</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
              Complete Your Demo Order
            </h2>
            <p className="text-xs text-neutral-400">
              Provide delivery details to test order submission and generate a mock order receipt.
            </p>
          </div>

          {/* Demonstration Notice Box */}
          <div className="mb-5 sm:mb-6 rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 sm:p-3.5 text-xs text-amber-200 flex items-start gap-3">
            <ShieldAlert className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-300">Presentation Simulation Notice:</strong> This is a demonstration only. No actual payment, banking details, order fulfilment, or personal data transmission occurs. Pre-filled with demo values for convenience.
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            
            {/* Customer Information */}
            <div className="space-y-3.5 sm:space-y-4">
              <h3 className="text-sm font-bold text-neutral-200 border-b border-neutral-800/80 pb-2">
                1. Customer & Contact Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-2.5 text-base sm:text-sm text-white placeholder-neutral-500 focus:border-cyan-400 focus:outline-none min-h-[44px]"
                  />
                  {errors.fullName && <p className="text-xs text-rose-400 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-2.5 text-base sm:text-sm text-white placeholder-neutral-500 focus:border-cyan-400 focus:outline-none min-h-[44px]"
                  />
                  {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  10-Digit Mobile Number *
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-3 text-xs text-neutral-500 font-mono-numbers">
                    +91
                  </span>
                  <input
                    type="tel"
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-12 rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-2.5 text-base sm:text-sm text-white placeholder-neutral-500 focus:border-cyan-400 focus:outline-none font-mono-numbers min-h-[44px]"
                  />
                </div>
                {errors.phone && <p className="text-xs text-rose-400 mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Delivery Address */}
            <div className="space-y-3.5 sm:space-y-4">
              <h3 className="text-sm font-bold text-neutral-200 border-b border-neutral-800/80 pb-2">
                2. Shipping Address (India)
              </h3>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Street Address / Hostel / Campus / Office *
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-2.5 text-base sm:text-sm text-white placeholder-neutral-500 focus:border-cyan-400 focus:outline-none min-h-[44px]"
                />
                {errors.address && <p className="text-xs text-rose-400 mt-1">{errors.address}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-2.5 text-base sm:text-sm text-white focus:border-cyan-400 focus:outline-none min-h-[44px]"
                  />
                  {errors.city && <p className="text-xs text-rose-400 mt-1">{errors.city}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-2.5 text-base sm:text-sm text-white focus:border-cyan-400 focus:outline-none min-h-[44px]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    PIN Code *
                  </label>
                  <input
                    type="text"
                    maxLength={6}
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-2.5 text-base sm:text-sm text-white focus:border-cyan-400 focus:outline-none font-mono-numbers min-h-[44px]"
                  />
                  {errors.pincode && <p className="text-xs text-rose-400 mt-1">{errors.pincode}</p>}
                </div>
              </div>
            </div>

            {/* Order Summary Box */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-4 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-neutral-300 border-b border-neutral-800 pb-2">
                <span>Selected Items ({totalItems})</span>
                <span className="font-mono-numbers">Unit × Qty</span>
              </div>

              <div className="space-y-2 max-h-36 overflow-y-auto pr-1">
                {items.map((item) => (
                  <div key={item.variantId} className="flex justify-between items-center text-xs">
                    <div className="truncate pr-2">
                      <span className="font-medium text-white">{item.variant.name}</span>
                      <span className="text-neutral-500 ml-1.5 font-mono-numbers">₹{item.variant.price}</span>
                    </div>
                    <div className="text-neutral-300 font-mono-numbers shrink-0">
                      {item.quantity}x = <strong className="text-cyan-400">₹{item.quantity * item.variant.price}</strong>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-neutral-800 space-y-1 text-xs">
                <div className="flex justify-between text-neutral-400">
                  <span>Subtotal</span>
                  <span className="font-mono-numbers text-white">₹{totalPrice}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Shipping (Demo Express)</span>
                  <span className="text-emerald-400 font-medium">FREE (₹0)</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-white pt-1 border-t border-neutral-800">
                  <span>Order Total</span>
                  <span className="text-cyan-400 font-mono-numbers text-base">₹{totalPrice}</span>
                </div>
              </div>
            </div>

            {/* Submit Action */}
            <div className="space-y-3">
              <button
                type="submit"
                disabled={isSubmitting || items.length === 0}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 py-3.5 px-6 text-sm font-bold text-neutral-950 hover:from-cyan-300 hover:to-blue-400 transition-all active:scale-95 shadow-lg shadow-cyan-500/25 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Generating Demo Order...</span>
                ) : (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    <span>Place Demo Order (₹{totalPrice})</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400">
                <Truck className="h-3.5 w-3.5 text-cyan-400" />
                <span>Simulated Order Confirmation Screen will display next</span>
              </div>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
};

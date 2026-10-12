import React from 'react';
import { 
  CheckCircle2, 
  PackageCheck, 
  X, 
  Printer, 
  Calendar, 
  MapPin, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export const OrderConfirmationModal: React.FC = () => {
  const { completedOrder, setCompletedOrder } = useCart();

  if (!completedOrder) return null;

  const handleClose = () => {
    setCompletedOrder(null);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={handleClose}
        className="fixed inset-0 bg-neutral-950/85 backdrop-blur-md transition-opacity"
      />

      <div className="flex min-h-full items-center justify-center p-3 sm:p-6">
        <div className="relative w-full max-w-xl rounded-2xl border border-neutral-800 bg-neutral-950 p-4 sm:p-8 shadow-2xl text-left my-auto">
          
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 sm:top-5 right-4 sm:right-5 flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white active:bg-neutral-800 transition-colors"
            aria-label="Close confirmation modal"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Success Banner */}
          <div className="text-center pb-5 sm:pb-6 border-b border-neutral-800/80 space-y-2 pr-8 sm:pr-0">
            <div className="mx-auto flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 mb-2 sm:mb-3">
              <CheckCircle2 className="h-8 w-8 sm:h-9 sm:w-9 text-cyan-400" />
            </div>
            <div className="text-xs uppercase tracking-wider text-cyan-400 font-bold">
              Demo Order Confirmed!
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
              Thank You, {completedOrder.fullName}!
            </h2>
            <p className="text-xs text-neutral-300 max-w-sm mx-auto">
              Your demonstration order has been successfully recorded in this college presentation simulation.
            </p>
          </div>

          {/* Demonstration Notice */}
          <div className="my-5 rounded-xl border border-neutral-800 bg-neutral-900/60 p-3 text-xs text-neutral-300 flex items-center gap-2.5">
            <ShieldCheck className="h-4 w-4 text-cyan-400 shrink-0" />
            <span>
              <strong>Demonstration Notice:</strong> No payment was deducted and no real physical shipment will be dispatched. All values are generated for presentation demonstration purposes.
            </span>
          </div>

          {/* Order Metadata Strip */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 space-y-3 text-xs">
            <div className="flex flex-wrap justify-between items-center gap-2 border-b border-neutral-800/60 pb-2.5">
              <div>
                <span className="text-neutral-400">Demo Order ID: </span>
                <span className="font-bold text-cyan-400 font-mono-numbers text-sm">
                  {completedOrder.orderId}
                </span>
              </div>
              <div className="text-neutral-400">
                <span>Date: </span>
                <span className="text-white font-mono-numbers">{completedOrder.orderDate}</span>
              </div>
            </div>

            <div className="flex items-start gap-2 text-neutral-300 pt-1">
              <MapPin className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white">Shipping To:</div>
                <div className="text-neutral-400">
                  {completedOrder.fullName} · {completedOrder.phone}
                </div>
                <div className="text-neutral-400">
                  {completedOrder.address}, {completedOrder.city}, {completedOrder.state} - {completedOrder.pincode}
                </div>
              </div>
            </div>
          </div>

          {/* Itemized Receipt */}
          <div className="mt-5 space-y-2">
            <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
              Itemized Demonstration Receipt
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 space-y-2 max-h-44 overflow-y-auto">
              {completedOrder.items.map((item) => (
                <div key={item.variantId} className="flex justify-between items-center text-xs">
                  <div>
                    <span className="font-medium text-white">{item.variant.name}</span>
                    <span className="text-neutral-500 ml-2 font-mono-numbers">({item.quantity} × ₹{item.variant.price})</span>
                  </div>
                  <span className="font-bold text-white font-mono-numbers">
                    ₹{item.quantity * item.variant.price}
                  </span>
                </div>
              ))}

              <div className="pt-2 border-t border-neutral-800 flex justify-between items-center text-xs text-neutral-400">
                <span>Shipping:</span>
                <span className="text-emerald-400 font-medium">FREE</span>
              </div>

              <div className="pt-1 flex justify-between items-center text-sm font-bold text-white border-t border-neutral-800">
                <span>Total Amount:</span>
                <span className="text-cyan-400 font-mono-numbers text-base">₹{completedOrder.total}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={handleClose}
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 py-3.5 px-4 text-xs font-bold text-neutral-950 hover:from-cyan-300 hover:to-blue-400 active:scale-95 transition-all min-h-[44px]"
            >
              <span>Continue Exploring Site</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center justify-center gap-1.5 rounded-xl border border-neutral-800 bg-neutral-900 hover:bg-neutral-850 active:bg-neutral-800 px-4 py-3.5 text-xs font-semibold text-neutral-300 hover:text-white transition-colors min-h-[44px]"
            >
              <Printer className="h-4 w-4" />
              <span>Print Receipt</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

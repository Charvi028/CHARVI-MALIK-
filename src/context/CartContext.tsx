import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, ProductVariant, VariantId, OrderDetails } from '../types';
import { PRODUCT_VARIANTS } from '../data/products';

interface CartContextType {
  items: CartItem[];
  addItem: (variant: ProductVariant, quantity?: number) => void;
  updateQuantity: (variantId: VariantId, quantity: number) => void;
  removeItem: (variantId: VariantId) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (isOpen: boolean) => void;
  completedOrder: OrderDetails | null;
  setCompletedOrder: (order: OrderDetails | null) => void;
  isPublishGuideOpen: boolean;
  setIsPublishGuideOpen: (isOpen: boolean) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  showIntro: boolean;
  setShowIntro: (show: boolean) => void;
  skipIntro: () => void;
  replayIntro: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = 'apex_grip_cart_items_v1';
const INTRO_STORAGE_KEY = 'apex_intro_seen_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showIntro, setShowIntro] = useState<boolean>(() => {
    // Respect prefers-reduced-motion
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return false;
      const seen = sessionStorage.getItem(INTRO_STORAGE_KEY);
      return seen !== 'true';
    }
    return true;
  });
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Validate with current product list
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map((item: any) => {
            const foundVariant = PRODUCT_VARIANTS.find(v => v.id === item.variantId) || item.variant;
            return {
              variantId: item.variantId,
              variant: foundVariant,
              quantity: Math.max(1, Number(item.quantity) || 1)
            };
          });
        }
      }
    } catch (e) {
      console.warn('Failed to parse saved cart:', e);
    }
    // Default initial demonstration cart with 1 Classic item so presenter has immediate demo data if desired, or can be empty
    return [
      {
        variantId: 'classic',
        variant: PRODUCT_VARIANTS[0],
        quantity: 1
      }
    ];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<OrderDetails | null>(null);
  const [isPublishGuideOpen, setIsPublishGuideOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync with localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn('LocalStorage save failed:', e);
    }
  }, [items]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3200);
  };

  const addItem = (variant: ProductVariant, quantity: number = 1) => {
    const qtyToAdd = Math.max(1, quantity);
    setItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.variantId === variant.id);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + qtyToAdd
        };
        return next;
      } else {
        return [...prev, { variantId: variant.id, variant, quantity: qtyToAdd }];
      }
    });

    showToast(`Added ${qtyToAdd}x ${variant.name} to cart`);
  };

  const updateQuantity = (variantId: VariantId, quantity: number) => {
    // Requirements: Prevent quantities from going below one
    const safeQty = Math.max(1, quantity);
    setItems((prev) =>
      prev.map((item) =>
        item.variantId === variantId ? { ...item, quantity: safeQty } : item
      )
    );
  };

  const removeItem = (variantId: VariantId) => {
    setItems((prev) => {
      const target = prev.find((i) => i.variantId === variantId);
      if (target) {
        showToast(`Removed ${target.variant.name} from cart`);
      }
      return prev.filter((item) => item.variantId !== variantId);
    });
  };

  const clearCart = () => {
    setItems([]);
  };

  const skipIntro = () => {
    try {
      sessionStorage.setItem(INTRO_STORAGE_KEY, 'true');
    } catch (e) {
      // ignore
    }
    setShowIntro(false);
  };

  const replayIntro = () => {
    setShowIntro(true);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.quantity * item.variant.price, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        totalItems,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        completedOrder,
        setCompletedOrder,
        isPublishGuideOpen,
        setIsPublishGuideOpen,
        toastMessage,
        showToast,
        showIntro,
        setShowIntro,
        skipIntro,
        replayIntro
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

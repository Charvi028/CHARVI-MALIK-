import React from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureSpotlight } from './components/FeatureSpotlight';
import { PenSimulator } from './components/PenSimulator';
import { ProductSection } from './components/ProductSection';
import { ComparisonTable } from './components/ComparisonTable';
import { ReviewsSection } from './components/ReviewsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderConfirmationModal } from './components/OrderConfirmationModal';
import { PublishGuideModal } from './components/PublishGuideModal';
import { CinematicIntro } from './components/CinematicIntro';
import { Sparkles, CheckCircle2, Play } from 'lucide-react';

const ToastNotification: React.FC = () => {
  const { toastMessage } = useCart();
  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 z-50 flex items-center gap-2 rounded-xl border border-cyan-500/50 bg-neutral-900/95 px-4 py-3 text-xs font-semibold text-white shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-3 duration-200 max-w-sm ml-auto">
      <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
      <span className="truncate">{toastMessage}</span>
    </div>
  );
};

const PresentationBanner: React.FC = () => {
  const { setIsPublishGuideOpen, replayIntro } = useCart();

  return (
    <div className="bg-gradient-to-r from-neutral-950 via-cyan-950/60 to-neutral-950 border-b border-cyan-500/20 px-3 sm:px-4 py-2 text-center text-xs text-neutral-300">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
        <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
        <span className="font-medium text-white">Presentation Demo:</span>
        <span className="text-neutral-400">Apex-Grip 3000 (From ₹20)</span>
        <button
          onClick={replayIntro}
          className="inline-flex items-center gap-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 px-2.5 py-1 text-[11px] font-semibold text-cyan-300 hover:bg-cyan-500/20 active:scale-95 transition-all cursor-pointer min-h-[32px]"
          title="Replay cinematic intro animation"
        >
          <Play className="h-3 w-3 fill-cyan-400 text-cyan-400" />
          <span>Replay Intro</span>
        </button>
        <span aria-hidden="true" className="text-neutral-600 hidden xs:inline">·</span>
        <button
          onClick={() => setIsPublishGuideOpen(true)}
          className="text-cyan-400 hover:text-cyan-300 underline font-semibold cursor-pointer py-1"
        >
          Publish Guide →
        </button>
      </div>
    </div>
  );
};

const MainContent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-neutral-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Cinematic Intro Animation */}
      <CinematicIntro />

      <PresentationBanner />
      <Navbar />

      <main className="flex-1">
        <Hero />
        <FeatureSpotlight />
        <ProductSection />
        <PenSimulator />
        <ComparisonTable />
        <ReviewsSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />

      {/* Slide-out & Modals */}
      <CartDrawer />
      <CheckoutModal />
      <OrderConfirmationModal />
      <PublishGuideModal />
      <ToastNotification />
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <MainContent />
    </CartProvider>
  );
}

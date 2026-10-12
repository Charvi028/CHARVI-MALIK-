import React, { useState } from 'react';
import { 
  X, 
  Globe, 
  Share2, 
  Copy, 
  Check, 
  ExternalLink, 
  Laptop, 
  Sparkles,
  Github,
  Cloud
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export const PublishGuideModal: React.FC = () => {
  const { isPublishGuideOpen, setIsPublishGuideOpen } = useCart();
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeTab, setActiveTab] = useState<'instant' | 'vercel' | 'github'>('instant');

  if (!isPublishGuideOpen) return null;

  const sharedPublicUrl = 'https://ais-pre-6bn6a7twyhmzszkbgqfxjo-486799889783.asia-east1.run.app';
  const currentUrl = typeof window !== 'undefined' && window.location.origin.includes('run.app') 
    ? window.location.origin 
    : sharedPublicUrl;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={() => setIsPublishGuideOpen(false)}
        className="fixed inset-0 bg-neutral-950/85 backdrop-blur-md transition-opacity"
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
        <div className="relative w-full max-w-2xl rounded-2xl border border-neutral-800 bg-neutral-950 p-6 sm:p-8 shadow-2xl text-left">
          
          {/* Close button */}
          <button
            onClick={() => setIsPublishGuideOpen(false)}
            className="absolute top-4 sm:top-5 right-4 sm:right-5 flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white active:bg-neutral-800 transition-colors"
            aria-label="Close publish guide"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Header */}
          <div className="mb-5 sm:mb-6 pr-10 space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <Laptop className="h-3.5 w-3.5" />
              <span>Chromebook Friendly Guide</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>100% Free Hosting</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
              How to Publish Apex-Grip 3000 Online for Free
            </h2>
            <p className="text-xs text-neutral-400">
              Step-by-step instructions designed specifically for browser-only Chromebook laptops with zero paid software needed.
            </p>
          </div>

          {/* Method Tabs - Stack on mobile, row on tablet/desktop */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-1.5 p-1.5 bg-neutral-900 rounded-xl border border-neutral-800 mb-6">
            <button
              onClick={() => setActiveTab('instant')}
              className={`flex-1 py-2.5 px-3 text-xs font-semibold rounded-lg transition-all text-center min-h-[44px] flex items-center justify-center ${
                activeTab === 'instant'
                  ? 'bg-cyan-500 text-neutral-950 shadow-sm font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Option 1: Instant AI Studio Link
            </button>
            <button
              onClick={() => setActiveTab('vercel')}
              className={`flex-1 py-2.5 px-3 text-xs font-semibold rounded-lg transition-all text-center min-h-[44px] flex items-center justify-center ${
                activeTab === 'vercel'
                  ? 'bg-cyan-500 text-neutral-950 shadow-sm font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Option 2: Vercel Free Hosting
            </button>
            <button
              onClick={() => setActiveTab('github')}
              className={`flex-1 py-2.5 px-3 text-xs font-semibold rounded-lg transition-all text-center min-h-[44px] flex items-center justify-center ${
                activeTab === 'github'
                  ? 'bg-cyan-500 text-neutral-950 shadow-sm font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Option 3: GitHub Pages
            </button>
          </div>

          {/* Option 1: AI Studio Instant Share */}
          {activeTab === 'instant' && (
            <div className="space-y-4">
              <div className="rounded-xl border border-cyan-500/30 bg-cyan-950/20 p-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-cyan-300">
                  <Sparkles className="h-4 w-4 text-cyan-400" />
                  <span>The Fastest Method for College Presentation:</span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Your Google AI Studio app is already running and hosted on Google Cloud! Anyone with your live link can open, test the shopping cart, and see the presentation demo immediately on their phone, laptop, or projector.
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-semibold text-neutral-300">1. Share Your Live App URL:</div>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={currentUrl}
                    className="flex-1 rounded-xl border border-neutral-800 bg-neutral-900 px-3.5 py-2.5 text-xs text-white font-mono"
                  />
                  <button
                    onClick={handleCopyLink}
                    className="flex items-center gap-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-bold px-4 py-2.5 text-xs transition-colors whitespace-nowrap"
                  >
                    {copiedLink ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    <span>{copiedLink ? 'Copied!' : 'Copy Link'}</span>
                  </button>
                </div>
              </div>

              <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4 space-y-2 text-xs text-neutral-300">
                <div className="font-semibold text-white">2. In Google AI Studio interface:</div>
                <ul className="list-disc list-inside space-y-1 text-neutral-400">
                  <li>Click the <strong>Share</strong> button at the top right of your AI Studio screen.</li>
                  <li>Toggle sharing to <strong>Anyone with the link can view</strong>.</li>
                  <li>Copy the public URL and paste it into your presentation slides or email to your professor.</li>
                </ul>
              </div>
            </div>
          )}

          {/* Option 2: Vercel */}
          {activeTab === 'vercel' && (
            <div className="space-y-4 text-xs">
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 space-y-2 text-neutral-300">
                <div className="font-semibold text-white flex items-center gap-2">
                  <Cloud className="h-4 w-4 text-cyan-400" />
                  <span>Vercel Free Tier (Permanent .vercel.app domain)</span>
                </div>
                <p className="text-neutral-400">
                  Works 100% in your Chromebook Chrome browser without installing anything on your laptop:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-neutral-300 pt-1">
                  <li>Open <strong>github.com</strong> in your Chromebook browser and create a free account.</li>
                  <li>Export or copy this repository code into a new GitHub repository named <code className="text-cyan-300 bg-neutral-950 px-1 py-0.5 rounded">apex-grip-3000</code>.</li>
                  <li>Go to <strong>vercel.com</strong>, click "Sign Up with GitHub".</li>
                  <li>Click "Add New..." &gt; "Project", select <code className="text-cyan-300 bg-neutral-950 px-1 py-0.5 rounded">apex-grip-3000</code>.</li>
                  <li>Click <strong>Deploy</strong>. In 30 seconds, Vercel gives you a live permanent link like: <span className="text-cyan-400 font-mono">https://apex-grip-3000.vercel.app</span>!</li>
                </ol>
              </div>
            </div>
          )}

          {/* Option 3: GitHub Pages */}
          {activeTab === 'github' && (
            <div className="space-y-4 text-xs">
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 space-y-2 text-neutral-300">
                <div className="font-semibold text-white flex items-center gap-2">
                  <Github className="h-4 w-4 text-cyan-400" />
                  <span>GitHub Pages (Free .github.io domain)</span>
                </div>
                <ol className="list-decimal list-inside space-y-2 text-neutral-300 pt-1">
                  <li>Push the project to your GitHub account repository.</li>
                  <li>In your repository, click <strong>Settings</strong> &gt; <strong>Pages</strong>.</li>
                  <li>Under "Build and deployment", choose <strong>GitHub Actions</strong> and select "Static HTML" or "Vite".</li>
                  <li>Within 1 minute, your site goes live for free at <span className="text-cyan-400 font-mono">https://yourusername.github.io/apex-grip-3000</span>.</li>
                </ol>
              </div>
            </div>
          )}

          <div className="mt-6 pt-4 border-t border-neutral-800 flex justify-end">
            <button
              onClick={() => setIsPublishGuideOpen(false)}
              className="rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-semibold px-4 py-2 text-xs transition-colors"
            >
              Close Guide
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

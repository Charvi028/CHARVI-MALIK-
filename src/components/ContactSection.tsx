import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Presentation Inquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', topic: 'Presentation Inquiry', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 border-t border-neutral-900 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <MessageSquare className="h-3.5 w-3.5" />
              <span>Get In Touch</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Presentation Inquiry Hub</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
              Have Questions About Apex-Grip 3000?
            </h2>

            <p className="text-sm text-neutral-400 leading-relaxed">
              We welcome questions from presentation evaluators, professors, campus bookstore distributors, and tech enthusiasts. Reach out for technical CAD files, ergonomic test whitepapers, or prototype inquiries.
            </p>

            <div className="space-y-4 pt-4 border-t border-neutral-800/80 text-sm">
              <div className="flex items-center gap-3 text-neutral-300">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800 text-cyan-400">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400">Project Email</div>
                  <div className="font-medium text-white">chinu280209@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-neutral-300">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800 text-cyan-400">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400">Innovation Lab Location</div>
                  <div className="font-medium text-white">Tech Design Center, Academic Campus, India</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-neutral-300">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800 text-cyan-400">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400">Demo Hotline</div>
                  <div className="font-medium text-white font-mono-numbers">+91 (Demo) 1800-APEX-GRIP</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8 backdrop-blur-sm">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-950 border border-emerald-500/50 text-emerald-400">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-display">
                    Demo Inquiry Transmitted!
                  </h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto">
                    Thank you for evaluating our project demonstration. In a live production rollout, your inquiry would be directed straight to our product team.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center gap-2 rounded-xl bg-neutral-800 px-4 py-2 text-xs font-semibold text-white hover:bg-neutral-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Professor Raman / Reviewer"
                        className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3.5 py-2.5 text-base sm:text-sm text-white placeholder-neutral-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all min-h-[44px]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@college.edu or gmail.com"
                        className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3.5 py-2.5 text-base sm:text-sm text-white placeholder-neutral-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all min-h-[44px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3.5 py-2.5 text-base sm:text-sm text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all min-h-[44px]"
                    >
                      <option value="Presentation Inquiry">College Tech / Business Presentation</option>
                      <option value="Campus Distribution">Campus Bookstore & Bulk Student Order</option>
                      <option value="Product Testing">Ergonomic Prototype Testing</option>
                      <option value="General Feedback">General Feedback & Praise</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your feedback, questions, or presentation notes here..."
                      className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3.5 py-2.5 text-base sm:text-sm text-white placeholder-neutral-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3.5 text-sm font-semibold text-neutral-950 hover:from-cyan-300 hover:to-blue-400 active:scale-95 transition-all shadow-md shadow-cyan-500/20 disabled:opacity-50 min-h-[48px]"
                  >
                    <Send className="h-4 w-4" />
                    <span>{submitting ? 'Transmitting...' : 'Send Demonstration Message'}</span>
                  </button>

                  <p className="text-[11px] text-neutral-400 text-center">
                    Demonstration form: Responses are simulated locally. No spam or unsolicited emails.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

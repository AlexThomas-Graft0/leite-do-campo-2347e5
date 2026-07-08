'use client';

import React, { useState, FormEvent } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUp, Check, ArrowRight, RefreshCw, Leaf, ShieldCheck } from 'lucide-react';

interface FooterLink {
  label: string;
  href: string;
}

const QUICK_LINKS: FooterLink[] = [
  { label: 'Home', href: '#hero-section' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Farm Shop', href: '#product-catalog' },
  { label: 'Our Story', href: '#about-us' },
];

const SUPPORT_LINKS: FooterLink[] = [
  { label: 'Field Notes', href: '#farm-blog' },
  { label: 'Trust Signals', href: '#trust-signals' },
  { label: 'FAQ', href: '#faq-section' },
  { label: 'Contact Us', href: '#contact-section' },
];

const TRUST_BADGES = [
  {
    icon: Leaf,
    title: '100% Grass-Fed',
    description: 'Happy cows grazing freely all year.',
  },
  {
    icon: RefreshCw,
    title: 'Zero Waste Program',
    description: 'Traditional reusable glass bottles.',
  },
  {
    icon: ShieldCheck,
    title: 'Minimally Processed',
    description: 'Slow pasteurized, never homogenized.',
  },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    
    // Simulate API registration to local waiting list
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus('success');
    setEmail('');
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 18,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <footer className="relative overflow-hidden bg-[#5D4432] text-[#F9F7F5] font-sans selection:bg-[#E9E3DD] selection:text-[#3E2B1E]">
      {/* Decorative top border representing organic cream-line wave */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#16A34A] via-[#E9E3DD] to-[#D97706]" />

      {/* Trust Badges Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 border-b border-[#E9E3DD]/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRUST_BADGES.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div 
                key={idx} 
                className="flex items-start gap-4 p-4 rounded-xl bg-[#3E2B1E]/30 border border-[#E9E3DD]/5 hover:border-[#E9E3DD]/20 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-[#E9E3DD]/10 text-[#E9E3DD]">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#F9F7F5] tracking-tight">{badge.title}</h4>
                  <p className="text-sm text-[#E9E3DD]/80 mt-1 leading-relaxed">{badge.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Grid Content */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & Promise */}
          <motion.div className="lg:col-span-4 flex flex-col gap-6" variants={itemVariants}>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold tracking-tight text-[#F9F7F5] font-serif">
                Leite Do Campo
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#16A34A]/20 text-[#16A34A] border border-[#16A34A]/30">
                Est. 2026
              </span>
            </div>
            <p className="text-base text-[#E9E3DD]/90 leading-relaxed max-w-md">
              Real Milk, the Way Nature Intended. Delivered Fresh to Your Doorstep. 
              We bring traditional, pure pasture-raised dairy direct from our family 
              pastures straight to your kitchen table in reusable glass.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a 
                href="#how-it-works" 
                className="group inline-flex items-center gap-2 text-sm font-medium text-[#E9E3DD] hover:text-[#F9F7F5] transition-colors"
                aria-label="Learn about our circular bottle program"
              >
                <span className="underline decoration-[#16A34A] underline-offset-4 decoration-2">Our Circular Promise</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div className="lg:col-span-2 col-span-1" variants={itemVariants}>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[#E9E3DD] mb-6">
              Our Farm
            </h3>
            <ul className="space-y-4">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-base text-[#E9E3DD]/85 hover:text-[#F9F7F5] transition-colors relative block py-0.5 focus:outline-none focus:ring-2 focus:ring-[#E9E3DD] rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Support & Resources */}
          <motion.div className="lg:col-span-2 col-span-1" variants={itemVariants}>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[#E9E3DD] mb-6">
              Resources
            </h3>
            <ul className="space-y-4">
              {SUPPORT_LINKS.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-base text-[#E9E3DD]/85 hover:text-[#F9F7F5] transition-colors relative block py-0.5 focus:outline-none focus:ring-2 focus:ring-[#E9E3DD] rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Newsletter & Community Signup */}
          <motion.div className="lg:col-span-4 col-span-1" variants={itemVariants}>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[#E9E3DD] mb-4">
              Join the Farm Newsletter
            </h3>
            <p className="text-sm text-[#E9E3DD]/80 leading-relaxed mb-6">
              Get routes updates, seasonal cheese releases, and fresh pasture stories directly to your inbox. No spam, ever.
            </p>

            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-xl bg-[#16A34A]/10 border border-[#16A34A]/30 text-[#F9F7F5] flex items-start gap-3"
              >
                <div className="p-1 rounded-full bg-[#16A34A] text-white mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#16A34A]">You are on the list!</h4>
                  <p className="text-xs text-[#E9E3DD]/90 mt-1">We’ll let you know as soon as the milk truck heads your way.</p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <label htmlFor="footer-email" className="sr-only">Email address</label>
                  <input
                    id="footer-email"
                    type="email"
                    required
                    disabled={status === 'loading'}
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#3E2B1E]/60 border border-[#E9E3DD]/20 text-[#F9F7F5] placeholder-[#E9E3DD]/50 focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent transition-all disabled:opacity-50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#E9E3DD] hover:bg-[#F9F7F5] text-[#3E2B1E] font-medium transition-all transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#16A34A]"
                >
                  {status === 'loading' ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-[#3E2B1E] border-t-transparent rounded-full animate-spin" />
                      Saving Spot...
                    </span>
                  ) : (
                    'Join the Waiting List'
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </motion.div>

      {/* Trust Details & Direct Contact Bar */}
      <div className="bg-[#3E2B1E] py-12 border-t border-[#E9E3DD]/10 text-sm text-[#E9E3DD]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* Contact Details */}
            <address className="not-italic flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#16A34A]" />
                <span>Leite Do Campo Farm, Green Valley Road, Section 4</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#16A34A]" />
                <a href="tel:5550192834" className="hover:text-[#F9F7F5] transition-colors">(555) 019-2834 (Mon – Fri, 8:00 AM – 4:00 PM)</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#16A34A]" />
                <a href="mailto:hello@leitedocampo.com" className="hover:text-[#F9F7F5] transition-colors">hello@leitedocampo.com</a>
              </div>
            </address>

            {/* Middle: Brand Note */}
            <div className="text-center md:text-left lg:text-center text-xs text-[#E9E3DD]/60">
              <p className="mb-2">Registered organic dairy producer. Licensed under ecological stewardship protocols.</p>
              <p>Delivery Areas: Zone A (Tuesdays) & Zone B (Thursdays). Plan ahead!</p>
            </div>

            {/* Right: Back to Top */}
            <div className="flex justify-center md:justify-end">
              <a
                href="#hero-section"
                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#5D4432] text-[#F9F7F5] border border-[#E9E3DD]/10 hover:border-[#E9E3DD]/30 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                aria-label="Back to top of the page"
              >
                <span>Back to top</span>
                <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Absolute Bottom Copyright Bar */}
      <div className="bg-[#2D1F15] py-6 text-xs text-[#E9E3DD]/40 border-t border-[#E9E3DD]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 Leite Do Campo. Proudly family-owned and sustainably operated.</p>
          <div className="flex items-center gap-6">
            <a href="#how-it-works" className="hover:text-[#F9F7F5] transition-colors">Delivery Policies</a>
            <a href="#faq-section" className="hover:text-[#F9F7F5] transition-colors">Bottle Returns</a>
            <a href="#contact-section" className="hover:text-[#F9F7F5] transition-colors">Support Portal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { 
  Menu, 
  X, 
  ShoppingBag, 
  MapPin, 
  ChevronDown, 
  Sparkles, 
  ArrowRight,
  RotateCcw,
  CheckCircle2
} from 'lucide-react';

// Navigation links using EXACT anchors provided
const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About Us', href: '#about-us' },
  { label: 'Our Shop', href: '#product-catalog' },
  { label: 'FAQ', href: '#faq-section' },
  { label: 'Field Notes', href: '#farm-blog' },
  { label: 'Contact', href: '#contact-section' }
];

const menuVariants: Variants = {
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 25,
      staggerChildren: 0.07,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  closed: { opacity: 0, x: -10 },
  open: { opacity: 1, x: 0 }
};

const dropdownVariants: Variants = {
  closed: { opacity: 0, y: 10, scale: 0.95, pointerEvents: 'none' },
  open: { opacity: 1, y: 0, scale: 1, pointerEvents: 'auto' }
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showCartPreview, setShowCartPreview] = useState(false);
  const [showZipValidator, setShowZipValidator] = useState(false);
  
  // Zip Validator State
  const [zipInput, setZipInput] = useState('');
  const [validatorStatus, setValidatorStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Track scroll position for styling changes
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for highlighting active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    navLinks.forEach((link) => {
      const id = link.href.replace('#', '');
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // Also observe hero-section
    const hero = document.getElementById('hero-section');
    if (hero) observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (zipInput.trim() === '12345' || zipInput.startsWith('9') || zipInput.startsWith('02')) {
      setValidatorStatus('success');
    } else {
      setValidatorStatus('error');
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 88; // navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-sans">
      {/* Top micro-banner */}
      <div className="bg-[#5D4432] text-[#F9F7F5] py-2 px-4 text-center text-xs md:text-sm font-medium border-b border-[#3E2B1E]/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1">
            <Sparkles className="w-4 h-4 text-[#D97706] animate-pulse" />
            <span>Traditional glass bottles delivered fresh within hours of milking.</span>
          </span>
          <a 
            href="#hero-section" 
            onClick={(e) => handleNavClick(e, '#hero-section')}
            className="underline hover:text-[#E9E3DD] transition-colors inline-flex items-center gap-1 font-semibold"
          >
            Check your delivery zone <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`transition-all duration-500 border-b ${
          isScrolled 
            ? 'bg-[#F9F7F5]/95 backdrop-blur-md py-3 shadow-lg border-[#E9E3DD]' 
            : 'bg-[#F9F7F5]/80 backdrop-blur-sm py-5 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo Brand */}
            <a 
              href="#hero-section" 
              onClick={(e) => handleNavClick(e, '#hero-section')}
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5D4432] rounded-lg p-1"
            >
              <div className="w-10 h-10 rounded-full bg-[#5D4432] flex items-center justify-center text-[#F9F7F5] shadow-md group-hover:scale-105 transition-transform">
                {/* Custom stylized Milk Bottle SVG icon */}
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M15.5 8.16V5.5c0-.83-.67-1.5-1.5-1.5h-1V3h-2v1H10c-.83 0-1.5.67-1.5 1.5v2.66c-1.46.73-2.5 2.24-2.5 4v8.34C6 21.32 6.68 22 7.5 22h9c.82 0 1.5-.68 1.5-1.5V12.16c0-1.76-1.04-3.27-2.5-4zM10 5.5h4v1.17c-.63-.11-1.3-.17-2-.17s-1.37.06-2 .17V5.5zm6.5 14.5h-9v-4h9v4zm0-5.5h-9V12.16c0-2.48 2.02-4.5 4.5-4.5s4.5 2.02 4.5 4.5v2.34z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-[#3E2B1E] uppercase font-display leading-none">
                  Leite Do Campo
                </span>
                <span className="text-[10px] tracking-widest text-[#5D4432]/80 uppercase font-mono mt-0.5">
                  Est. Family Farm
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 bg-[#E9E3DD]/40 p-1.5 rounded-full border border-[#E9E3DD]/60">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all relative ${
                      isActive 
                        ? 'text-[#F9F7F5]' 
                        : 'text-[#3E2B1E] hover:text-[#5D4432] hover:bg-[#E9E3DD]/60'
                    }`}
                  >
                    {isActive && (
                      <motion.span 
                        layoutId="activeNavBackground"
                        className="absolute inset-0 bg-[#5D4432] rounded-full -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* Interactive Quick Actions */}
            <div className="hidden md:flex items-center gap-3">
              
              {/* Zip Area Checker Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setShowZipValidator(!showZipValidator);
                    setShowCartPreview(false);
                  }}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-sm font-medium border transition-all ${
                    showZipValidator 
                      ? 'bg-[#5D4432] text-[#F9F7F5] border-[#5D4432]' 
                      : 'bg-[#F9F7F5] text-[#3E2B1E] border-[#E9E3DD] hover:bg-[#E9E3DD]/40'
                  }`}
                >
                  <MapPin className="w-4 h-4 text-[#16A34A]" />
                  <span>Check Delivery</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showZipValidator ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {showZipValidator && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      className="absolute right-0 mt-2.5 w-80 bg-[#F9F7F5] border border-[#E9E3DD] rounded-2xl shadow-xl p-5 z-50 text-[#3E2B1E]"
                    >
                      <h4 className="font-bold text-base mb-1">Check If We Deliver</h4>
                      <p className="text-xs text-[#5D4432] mb-4">Enter your Zip Code to verify neighborhood routes.</p>
                      
                      <form onSubmit={handleZipCheck} className="space-y-3">
                        <div className="flex gap-2">
                          <input
                            type="text"
                            placeholder="e.g. 12345"
                            value={zipInput}
                            onChange={(e) => {
                              setZipInput(e.target.value);
                              setValidatorStatus('idle');
                            }}
                            className="w-full px-3 py-1.5 rounded-lg border border-[#E9E3DD] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#5D4432]"
                          />
                          <button 
                            type="submit" 
                            className="bg-[#5D4432] text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-[#3E2B1E] transition-colors shrink-0"
                          >
                            Verify
                          </button>
                        </div>
                      </form>

                      {validatorStatus === 'success' && (
                        <div className="mt-4 p-3 bg-[#16A34A]/10 border border-[#16A34A]/20 rounded-xl text-xs text-[#16A34A] flex gap-2">
                          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold block">We deliver to your area!</span>
                            Every Tuesday & Thursday. 
                            <a href="#product-catalog" onClick={(e) => { handleNavClick(e, '#product-catalog'); setShowZipValidator(false); }} className="underline font-bold block mt-1">Build Your Basket →</a>
                          </div>
                        </div>
                      )}

                      {validatorStatus === 'error' && (
                        <div className="mt-4 p-3 bg-[#DC2626]/10 border border-[#DC2626]/20 rounded-xl text-xs text-[#DC2626]">
                          <span className="font-bold block">Not in your neighborhood yet!</span>
                          We are expanding slowly to maintain a zero-waste footprint. We will notify you once we arrive!
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Shopping Basket Mini-Cart Trigger */}
              <div className="relative">
                <button
                  onClick={() => {
                    setShowCartPreview(!showCartPreview);
                    setShowZipValidator(false);
                  }}
                  className="p-2.5 rounded-full bg-[#E9E3DD] hover:bg-[#dcd5cd] text-[#3E2B1E] relative transition-colors"
                  aria-label="Open Cart Summary"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 bg-[#16A34A] text-[#F9F7F5] w-5 h-5 rounded-full text-[11px] font-bold flex items-center justify-center border-2 border-[#F9F7F5]">
                    3
                  </span>
                </button>

                <AnimatePresence>
                  {showCartPreview && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      className="absolute right-0 mt-2.5 w-96 bg-[#F9F7F5] border border-[#E9E3DD] rounded-2xl shadow-xl p-5 z-50 text-[#3E2B1E]"
                    >
                      <div className="flex items-center justify-between border-b border-[#E9E3DD] pb-3 mb-3">
                        <h3 className="font-bold text-lg flex items-center gap-2">
                          <ShoppingBag className="w-5 h-5 text-[#5D4432]" />
                          <span>Your Dairy Basket</span>
                        </h3>
                        <span className="text-xs bg-[#16A34A]/10 text-[#16A34A] px-2 py-0.5 rounded-full font-semibold">
                          Weekly Sub
                        </span>
                      </div>

                      <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                        {/* Item 1 */}
                        <div className="flex justify-between items-start text-sm py-1">
                          <div>
                            <span className="font-semibold block">2x Pasture-Raised Whole Milk</span>
                            <span className="text-xs text-[#5D4432]/80">1 Liter Glass Bottle • Weekly</span>
                          </div>
                          <span className="font-mono font-bold">$9.00</span>
                        </div>
                        {/* Item 2 */}
                        <div className="flex justify-between items-start text-sm py-1">
                          <div>
                            <span className="font-semibold block">1x Fresh Artisanal Cheese</span>
                            <span className="text-xs text-[#5D4432]/80">400g Wheel • One-Time</span>
                          </div>
                          <span className="font-mono font-bold">$8.50</span>
                        </div>
                        {/* Deposits */}
                        <div className="flex justify-between items-start text-xs text-[#5D4432]/80 pt-2 border-t border-[#E9E3DD]/60">
                          <span className="flex items-center gap-1">
                            <RotateCcw className="w-3 h-3" /> One-Time Bottle Deposits
                          </span>
                          <span className="font-mono">$3.00</span>
                        </div>
                        {/* Delivery Fee */}
                        <div className="flex justify-between items-start text-xs text-[#16A34A]">
                          <span>Estimated Delivery Fee</span>
                          <span className="font-semibold uppercase">FREE</span>
                        </div>
                      </div>

                      <div className="border-t border-[#E9E3DD] pt-3 mt-3 space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-base">Total Today:</span>
                          <span className="font-mono font-extrabold text-lg text-[#3E2B1E]">$20.50</span>
                        </div>
                        <a
                          href="#product-catalog"
                          onClick={(e) => {
                            handleNavClick(e, '#product-catalog');
                            setShowCartPreview(false);
                          }}
                          className="w-full bg-[#5D4432] text-[#F9F7F5] py-2.5 px-4 rounded-xl font-semibold text-center block hover:bg-[#3E2B1E] transition-colors text-sm shadow-md"
                        >
                          Secure Checkout & Schedule Delivery
                        </a>
                        <p className="text-[10px] text-center text-[#5D4432]/80 italic">
                          *Bottle deposit is fully refundable upon return
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Primary Header CTA */}
              <a
                href="#product-catalog"
                onClick={(e) => handleNavClick(e, '#product-catalog')}
                className="bg-[#5D4432] text-[#F9F7F5] hover:bg-[#3E2B1E] px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all"
              >
                Start Subscription
              </a>
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <div className="flex items-center gap-3 lg:hidden">
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                  setShowCartPreview(false);
                  setShowZipValidator(false);
                }}
                className="p-2 rounded-xl bg-[#E9E3DD] text-[#3E2B1E] hover:bg-[#dcd5cd] transition-colors"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden absolute top-full left-0 right-0 bg-[#F9F7F5] border-b border-[#E9E3DD] shadow-xl overflow-hidden z-40"
            >
              <div className="px-4 pt-4 pb-6 space-y-4 max-h-[calc(100vh-120px)] overflow-y-auto">
                <div className="grid grid-cols-1 gap-2">
                  {navLinks.map((link) => (
                    <motion.div key={link.href} variants={itemVariants}>
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                          activeSection === link.href.replace('#', '')
                            ? 'bg-[#5D4432] text-[#F9F7F5]'
                            : 'text-[#3E2B1E] hover:bg-[#E9E3DD]/40'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="w-4 h-4 opacity-50" />
                      </a>
                    </motion.div>
                  ))}
                </div>

                <hr className="border-[#E9E3DD]" />

                {/* Mobile Quick Info / CTA */}
                <div className="space-y-4">
                  <div className="bg-[#E9E3DD]/40 p-4 rounded-xl border border-[#E9E3DD]/80">
                    <h4 className="font-bold text-sm text-[#3E2B1E] mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#16A34A]" />
                      <span>Check Delivery Area</span>
                    </h4>
                    <form onSubmit={handleZipCheck} className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Zip Code"
                        value={zipInput}
                        onChange={(e) => {
                          setZipInput(e.target.value);
                          setValidatorStatus('idle');
                        }}
                        className="w-full px-3 py-2 rounded-lg border border-[#E9E3DD] bg-white text-sm focus:outline-none"
                      />
                      <button 
                        type="submit" 
                        className="bg-[#5D4432] text-white px-4 py-2 rounded-lg text-xs font-semibold"
                      >
                        Verify
                      </button>
                    </form>
                    {validatorStatus === 'success' && (
                      <p className="text-xs text-[#16A34A] mt-2 font-semibold">
                        ✓ We deliver to your area! Join today.
                      </p>
                    )}
                    {validatorStatus === 'error' && (
                      <p className="text-xs text-[#DC2626] mt-2 font-semibold">
                        ✗ We aren't in your neighborhood yet.
                      </p>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <a
                      href="#product-catalog"
                      onClick={(e) => handleNavClick(e, '#product-catalog')}
                      className="flex-1 text-center bg-[#5D4432] text-[#F9F7F5] py-3 rounded-xl font-bold text-sm shadow-md"
                    >
                      Subscribe Now
                    </a>
                    <a
                      href="#contact-section"
                      onClick={(e) => handleNavClick(e, '#contact-section')}
                      className="flex-1 text-center bg-[#E9E3DD] text-[#3E2B1E] py-3 rounded-xl font-bold text-sm"
                    >
                      Get Support
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
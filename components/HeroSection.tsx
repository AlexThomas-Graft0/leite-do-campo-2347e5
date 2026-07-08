'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

export function HeroSection() {
  const [zipCode, setZipCode] = useState('');
  const [validatorStatus, setValidatorStatus] = useState<'idle' | 'checking' | 'success' | 'failure'>('idle');
  const [email, setEmail] = useState('');
  const [joinedList, setJoinedList] = useState(false);

  const handleCheckZip = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipCode || zipCode.trim().length < 3) return;

    setValidatorStatus('checking');
    setTimeout(() => {
      // Logic: If it looks like a valid US zip code and contains 2, 5, or starts with 9, mark as success
      const isDeliverable = /^[0-9]{3,5}$/.test(zipCode.trim()) && 
        (zipCode.includes('2') || zipCode.includes('5') || zipCode.startsWith('9'));
      
      setValidatorStatus(isDeliverable ? 'success' : 'failure');
    }, 1000);
  };

  const handleJoinList = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setJoinedList(true);
  };

  const resetValidator = () => {
    setZipCode('');
    setValidatorStatus('idle');
    setEmail('');
    setJoinedList(false);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 14,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 18,
        delay: 0.2,
      },
    },
  };

  return (
    <section 
      id="hero-section" 
      className="relative min-h-screen bg-[#F9F7F5] text-[#3E2B1E] font-sans overflow-hidden flex flex-col justify-between"
    >
      {/* Premium Café-Inspired Top Navigation */}
      <header className="sticky top-0 z-50 w-full bg-[#F9F7F5]/90 backdrop-blur-md border-b border-[#E9E3DD] px-4 py-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#hero-section" className="flex items-center gap-2 group">
            <span className="w-10 h-10 rounded-full bg-[#5D4432] flex items-center justify-center text-white font-serif text-xl font-bold tracking-wider shadow-sm transition-transform duration-300 group-hover:rotate-12">
              L
            </span>
            <div>
              <span className="block font-serif text-lg font-bold tracking-tight text-[#3E2B1E] uppercase">
                Leite Do Campo
              </span>
              <span className="block text-[10px] tracking-widest text-[#5D4432]/70 uppercase font-mono -mt-1">
                Est. 2024 • Family Farm
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <a href="#how-it-works" className="hover:text-[#5D4432] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#5D4432] hover:after:w-full after:transition-all">
              How It Works
            </a>
            <a href="#trust-signals" className="hover:text-[#5D4432] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#5D4432] hover:after:w-full after:transition-all">
              Our Standards
            </a>
            <a href="#about-us" className="hover:text-[#5D4432] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#5D4432] hover:after:w-full after:transition-all">
              Our Story
            </a>
            <a href="#product-catalog" className="hover:text-[#5D4432] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#5D4432] hover:after:w-full after:transition-all">
              The Shop
            </a>
            <a href="#faq-section" className="hover:text-[#5D4432] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#5D4432] hover:after:w-full after:transition-all">
              FAQ
            </a>
            <a href="#farm-blog" className="hover:text-[#5D4432] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#5D4432] hover:after:w-full after:transition-all">
              Field Notes
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="#product-catalog" 
              className="bg-[#5D4432] text-[#F9F7F5] px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm hover:bg-[#4a3627] transition-all duration-200 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#5D4432] focus:ring-offset-2"
            >
              Order Now
            </a>
          </div>
        </div>
      </header>

      {/* Main Hero Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center flex-grow">
        
        {/* Left Side: Value Prop & Validator */}
        <motion.div 
          className="lg:col-span-7 flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tagline */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
            <span className="h-px w-8 bg-[#5D4432]/40"></span>
            <span className="text-xs font-mono tracking-widest text-[#5D4432] uppercase font-semibold">
              100% Circular Glass Bottle System
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-black tracking-tight leading-[1.1] mb-6 text-[#3E2B1E]"
          >
            Real Milk, the Way Nature Intended.{' '}
            <span className="text-[#5D4432] italic font-normal block md:inline">
              Delivered Fresh to Your Doorstep.
            </span>
          </motion.h1>

          {/* Subcopy */}
          <motion.p 
            variants={itemVariants} 
            className="text-base md:text-lg text-[#3E2B1E]/85 leading-relaxed mb-8 max-w-2xl"
          >
            Welcome to Leite Do Campo. We deliver fresh, organic, pasture-raised milk and artisanal dairy from our family farm directly to your porch. Packaged in traditional reusable glass bottles, our dairy is delivered within hours of milking. No middlemen, no industrial processing—just pure, local nutrition.
          </motion.p>

          {/* Zip-Code Validator Widget */}
          <motion.div 
            variants={itemVariants} 
            className="bg-white border border-[#E9E3DD] rounded-2xl p-6 md:p-8 shadow-md relative overflow-hidden max-w-xl"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#5D4432]"></div>
            
            <h3 className="text-lg font-serif font-bold text-[#3E2B1E] mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#5D4432]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Check If the Milkman Delivers to Your Neighborhood
            </h3>

            <AnimatePresence mode="wait">
              {validatorStatus === 'idle' && (
                <motion.form 
                  key="idle-form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleCheckZip}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <div className="relative flex-grow">
                    <input 
                      type="text" 
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      placeholder="Enter your Zip Code (e.g., 12345)" 
                      className="w-full px-4 py-3 bg-[#F9F7F5] border border-[#E9E3DD] rounded-xl text-sm text-[#3E2B1E] placeholder-[#3E2B1E]/50 focus:outline-none focus:ring-2 focus:ring-[#5D4432] focus:border-transparent transition-all"
                      maxLength={5}
                      required
                    />
                  </div>
                  <button 
                    type="submit"
                    className="bg-[#5D4432] hover:bg-[#4a3627] text-[#F9F7F5] px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-150 shadow-sm whitespace-nowrap active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#5D4432]"
                  >
                    Check Delivery Area
                  </button>
                </motion.form>
              )}

              {validatorStatus === 'checking' && (
                <motion.div 
                  key="checking-state"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-6 flex flex-col items-center justify-center gap-3 text-center"
                >
                  <div className="w-8 h-8 border-4 border-[#5D4432]/20 border-t-[#5D4432] rounded-full animate-spin"></div>
                  <p className="text-sm font-mono text-[#5D4432] font-semibold animate-pulse">
                    Consulting route maps...
                  </p>
                </motion.div>
              )}

              {validatorStatus === 'success' && (
                <motion.div 
                  key="success-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-[#16A34A]/5 border border-[#16A34A]/20 rounded-xl p-4 md:p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#16A34A] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-base font-bold text-[#16A34A]">
                        Good news! We deliver to your area every Tuesday and Thursday.
                      </h4>
                      <p className="text-xs text-[#3E2B1E]/80 mt-1">
                        Our electric milk truck is in your zone twice a week. Ready to get started?
                      </p>
                      <div className="mt-4 flex flex-wrap gap-3 items-center">
                        <a 
                          href="#product-catalog"
                          className="bg-[#16A34A] hover:bg-[#15803d] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all inline-block shadow-sm"
                        >
                          Build Your Basket
                        </a>
                        <button 
                          onClick={resetValidator}
                          className="text-xs font-medium text-[#3E2B1E]/60 hover:text-[#3E2B1E] underline decoration-dotted underline-offset-4"
                        >
                          Check another Zip Code
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {validatorStatus === 'failure' && (
                <motion.div 
                  key="failure-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-[#D97706]/5 border border-[#D97706]/20 rounded-xl p-4 md:p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#D97706] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-base font-bold text-[#D97706]">
                        We aren't in your neighborhood just yet!
                      </h4>
                      <p className="text-xs text-[#3E2B1E]/80 mt-1 leading-relaxed">
                        We are expanding our delivery routes carefully to keep our carbon footprint low. Enter your email below to join our waiting list, and we'll notify you as soon as our milk truck heads your way.
                      </p>

                      {!joinedList ? (
                        <form onSubmit={handleJoinList} className="mt-4 flex flex-col sm:flex-row gap-2">
                          <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address" 
                            className="flex-grow px-3 py-2 bg-white border border-[#E9E3DD] rounded-lg text-xs text-[#3E2B1E] focus:outline-none focus:ring-1 focus:ring-[#D97706]"
                            required
                          />
                          <button 
                            type="submit"
                            className="bg-[#5D4432] hover:bg-[#4a3627] text-white px-4 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap"
                          >
                            Join the Waiting List
                          </button>
                        </form>
                      ) : (
                        <motion.div 
                          initial={{ opacity: 0 }} 
                          animate={{ opacity: 1 }} 
                          className="mt-3 text-xs font-semibold text-[#16A34A] bg-[#16A34A]/10 p-2.5 rounded-lg"
                        >
                          ✓ Thank you! We have saved your request for zip code {zipCode}. We'll keep you in the loop.
                        </motion.div>
                      )}

                      <div className="mt-4">
                        <button 
                          onClick={resetValidator}
                          className="text-xs font-medium text-[#3E2B1E]/60 hover:text-[#3E2B1E] underline decoration-dotted underline-offset-4"
                        >
                          Try another Zip Code
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Right Side: Editorial Image Composition */}
        <motion.div 
          className="lg:col-span-5 relative flex items-center justify-center"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Backdrop decorative shape */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#E9E3DD]/50 to-[#E9E3DD]/10 rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>

          {/* Main Rich Image */}
          <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=1000&q=80" 
              alt="Fresh pasture-raised milk in traditional glass bottle on a beautiful wooden morning table"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Absolute Label Overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#F9F7F5]/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-[#E9E3DD]">
              <p className="text-xs font-mono font-bold tracking-widest text-[#5D4432] uppercase mb-1">
                Freshly Bottled
              </p>
              <p className="text-sm font-serif font-bold text-[#3E2B1E]">
                "Opening our front door on Tuesday mornings feels like a trip back in time..."
              </p>
              <p className="text-[11px] text-[#3E2B1E]/70 mt-1 font-semibold">
                — Sarah M., Mother of two
              </p>
            </div>
          </div>

          {/* Overlapping Secondary Image */}
          <div className="absolute -bottom-8 -left-8 w-44 h-44 rounded-2xl overflow-hidden border-4 border-white shadow-lg hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=400&q=80" 
              alt="Happy healthy cow grazing on green grass" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative Milk Bottle Stamp Badge */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#5D4432] rounded-full flex flex-col items-center justify-center text-white text-center p-2 shadow-lg transform rotate-12">
            <span className="text-[9px] font-mono tracking-widest uppercase text-[#E9E3DD]">
              Zero
            </span>
            <span className="text-xs font-bold font-serif uppercase tracking-tight">
              Plastic
            </span>
            <span className="text-[9px] font-mono tracking-widest uppercase text-[#E9E3DD]">
              Waste
            </span>
          </div>
        </motion.div>
      </div>

      {/* Trust Signals & Stats Footer Banner */}
      <div id="trust-signals" className="bg-[#5D4432] text-[#F9F7F5] py-8 border-t border-[#3E2B1E]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-[#F9F7F5]/20 text-center md:text-left">
            
            {/* Stat 1 */}
            <div className="pt-6 md:pt-0 md:px-8 flex flex-col justify-center">
              <span className="block font-mono text-xs tracking-widest text-[#E9E3DD]/70 uppercase mb-1">
                Our Speed Guarantee
              </span>
              <h4 className="text-2xl font-serif font-bold text-white mb-1">
                Under 24 Hours
              </h4>
              <p className="text-sm text-[#E9E3DD]/85">
                From our pasture to your porch.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="pt-6 md:pt-0 md:px-8 flex flex-col justify-center">
              <span className="block font-mono text-xs tracking-widest text-[#E9E3DD]/70 uppercase mb-1">
                Strict Welfare Standards
              </span>
              <h4 className="text-2xl font-serif font-bold text-white mb-1">
                100% Grass-Fed
              </h4>
              <p className="text-sm text-[#E9E3DD]/85">
                Our happy cows graze freely on open pastures all year long.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="pt-6 md:pt-0 md:px-8 flex flex-col justify-center">
              <span className="block font-mono text-xs tracking-widest text-[#E9E3DD]/70 uppercase mb-1">
                Circular Packaging Loop
              </span>
              <h4 className="text-2xl font-serif font-bold text-white mb-1">
                Zero Plastic
              </h4>
              <p className="text-sm text-[#E9E3DD]/85">
                Reusable glass bottles keep our communities clean and green.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
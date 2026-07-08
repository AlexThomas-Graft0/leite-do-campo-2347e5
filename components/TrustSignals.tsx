'use client';

import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';

interface StatCardProps {
  number: string;
  headline: string;
  label: string;
  image: string;
  index: number;
}

export function TrustSignals() {
  const [milkBottlesPerWeek, setMilkBottlesPerWeek] = useState<number>(3);

  // Carbon / Plastic saving calculation variables
  const plasticSavedPerYear = milkBottlesPerWeek * 52;
  // Standard milk jug is ~40g of HDPE plastic. 40g * plasticSavedPerYear
  const weightSavedKg = ((plasticSavedPerYear * 40) / 1000).toFixed(1);

  const stats = [
    {
      number: "24h",
      headline: "Under 24 Hours",
      label: "From our pasture to your porch.",
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=800&q=80",
    },
    {
      number: "100%",
      headline: "100% Grass-Fed",
      label: "Our happy cows graze freely on open pastures all year long.",
      image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80",
    },
    {
      number: "0%",
      headline: "Zero Plastic",
      label: "Reusable glass bottles keep our communities clean and green.",
      image: "https://images.unsplash.com/photo-1527018601619-a508a2be00cd?auto=format&fit=crop&w=800&q=80",
    },
  ];

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

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 15,
      },
    },
  };

  const testimonialVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 15,
        delay: 0.4,
      },
    },
  };

  return (
    <section
      id="trust-signals"
      className="relative bg-[#F9F7F5] py-20 lg:py-32 overflow-hidden px-4 sm:px-6 lg:px-8 text-[#3E2B1E] font-sans selection:bg-[#E9E3DD] selection:text-[#5D4432]"
    >
      {/* Decorative Warm Accent Blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#E9E3DD] rounded-full blur-3xl opacity-30 pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#E9E3DD] rounded-full blur-3xl opacity-20 pointer-events-none translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="font-mono text-xs uppercase tracking-widest text-[#5D4432] bg-[#E9E3DD] px-3 py-1 rounded-full font-semibold">
            Our Core Commitments
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#5D4432] tracking-tight mt-6 mb-4 font-serif">
            Honest Farming, Uncompromised Standards
          </h2>
          <p className="text-lg text-[#3E2B1E]/80 leading-relaxed font-sans">
            We believe you deserve to know exactly how your food is made and the positive impact it has on your family and the planet.
          </p>
        </div>

        {/* 3 Core Trust Statistics Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 lg:mb-28"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.headline}
              variants={cardVariants}
              className="group relative bg-[#F9F7F5] rounded-3xl border border-[#E9E3DD] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Aspect Ratio Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#5D4432]/60 via-transparent to-transparent z-10" />
                <img
                  src={stat.image}
                  alt={stat.headline}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Floating Stat Number */}
                <div className="absolute top-4 left-4 z-20 bg-[#F9F7F5] border border-[#E9E3DD] rounded-2xl px-4 py-2 shadow-sm">
                  <span className="font-mono text-2xl font-bold text-[#5D4432]">
                    {stat.number}
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#5D4432] mb-3 font-serif">
                    {stat.headline}
                  </h3>
                  <p className="text-[#3E2B1E]/90 text-base leading-relaxed">
                    {stat.label}
                  </p>
                </div>

                {/* Subtle Action Link to trigger smooth scroll */}
                <div className="mt-6 pt-6 border-t border-[#E9E3DD]">
                  <a
                    href="#how-it-works"
                    className="inline-flex items-center text-sm font-semibold text-[#5D4432] hover:text-[#3E2B1E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5D4432] focus:ring-offset-2 rounded-md"
                  >
                    <span>Learn how this works</span>
                    <svg
                      className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Live Interactive Eco-Impact Calculator Widget */}
        <div className="bg-[#5D4432] text-[#F9F7F5] rounded-3xl p-8 lg:p-12 mb-20 lg:mb-28 shadow-xl relative overflow-hidden">
          {/* Subtle graphic patterns */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E9E3DD]/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="font-mono text-xs uppercase tracking-widest text-[#E9E3DD]/80 bg-[#E9E3DD]/10 px-3 py-1 rounded-full font-semibold">
                Your Personal Impact
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mt-4 mb-3">
                See the difference you make with glass
              </h3>
              <p className="text-[#E9E3DD]/90 text-base leading-relaxed max-w-xl">
                By switching from supermarket plastic jugs to Leite Do Campo&apos;s circular glass bottles, you actively prevent single-use waste from polluting our oceans and landfills.
              </p>

              {/* Slider Input */}
              <div className="mt-8 max-w-md">
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="milk-slider" className="text-sm font-medium text-[#E9E3DD]">
                    Weekly Dairy Consumption
                  </label>
                  <span className="text-lg font-bold text-white font-mono bg-[#E9E3DD]/10 px-3 py-1 rounded-lg">
                    {milkBottlesPerWeek} {milkBottlesPerWeek === 1 ? 'Bottle' : 'Bottles'} / wk
                  </span>
                </div>
                <input
                  id="milk-slider"
                  type="range"
                  min="1"
                  max="10"
                  value={milkBottlesPerWeek}
                  onChange={(e) => setMilkBottlesPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-[#E9E3DD]/20 rounded-lg appearance-none cursor-pointer accent-[#E9E3DD] focus:outline-none focus:ring-2 focus:ring-[#E9E3DD]"
                />
                <div className="flex justify-between text-xs text-[#E9E3DD]/60 mt-1">
                  <span>1 bottle</span>
                  <span>10 bottles</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#E9E3DD]/10 border border-[#E9E3DD]/20 rounded-2xl p-6 lg:p-8 flex flex-col justify-center space-y-6">
              <div className="flex justify-between items-center border-b border-[#E9E3DD]/10 pb-4">
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#E9E3DD]/70">
                    Plastic Jugs Prevented
                  </p>
                  <p className="text-3xl font-bold font-serif text-white mt-1">
                    {plasticSavedPerYear} <span className="text-sm font-sans font-normal text-[#E9E3DD]">/ year</span>
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#E9E3DD]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#E9E3DD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
              </div>

              <div className="flex justify-between items-center border-b border-[#E9E3DD]/10 pb-4">
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#E9E3DD]/70">
                    HDPE Plastic Trash Saved
                  </p>
                  <p className="text-3xl font-bold font-serif text-white mt-1">
                    {weightSavedKg} <span className="text-sm font-sans font-normal text-[#E9E3DD]">kg</span>
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#E9E3DD]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#E9E3DD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
              </div>

              <div className="pt-2 text-center">
                <a
                  href="#product-catalog"
                  className="inline-block w-full bg-[#E9E3DD] hover:bg-white text-[#5D4432] font-semibold text-center py-3 px-6 rounded-xl transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#5D4432]"
                >
                  Build Your Eco-Friendly Basket
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Testimonial Component */}
        <motion.div
          variants={testimonialVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white border border-[#E9E3DD] rounded-3xl p-8 md:p-12 shadow-sm max-w-4xl mx-auto relative"
        >
          {/* Large Quote Mark Graphics */}
          <span className="absolute top-6 left-6 text-7xl font-serif text-[#E9E3DD] select-none leading-none pointer-events-none">
            &ldquo;
          </span>
          <span className="absolute bottom-6 right-6 text-7xl font-serif text-[#E9E3DD] select-none leading-none pointer-events-none">
            &rdquo;
          </span>

          <div className="relative z-10 text-center space-y-6">
            <p className="text-xl md:text-2xl font-serif italic text-[#3E2B1E] leading-relaxed max-w-3xl mx-auto">
              &ldquo;Opening our front door on Tuesday mornings feels like a trip back in time. The milk has a beautiful cream line at the top, and the kids love pouring it. Knowing it comes from pasture-raised cows just down the road makes it taste even better. Plus, my recycling bin is finally empty of plastic milk jugs!&rdquo;
            </p>
            <div className="pt-4">
              <p className="font-bold text-[#5D4432] text-lg font-sans">
                Sarah M.
              </p>
              <p className="text-sm font-mono text-[#3E2B1E]/60 uppercase tracking-widest mt-1">
                Mother of two, Zone A Delivery
              </p>
            </div>
          </div>
        </motion.div>

        {/* Small Trust Badges Row */}
        <div className="mt-16 pt-8 border-t border-[#E9E3DD] flex flex-wrap justify-center items-center gap-8 md:gap-16 text-xs font-mono uppercase tracking-wider text-[#3E2B1E]/60 text-center">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-[#16A34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Certified Animal Welfare</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-[#16A34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H18.5" />
            </svg>
            <span>Circular Bottle System</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-[#16A34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Milked to Porch Under 24h</span>
          </div>
        </div>

      </div>
    </section>
  );
}
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

export function HeroSection() {
  const [producerZip, setProducerZip] = useState('');
  const [status, setStatus] = useState<'idle' | 'checking' | 'found' | 'none'>('idle');

  const handlePartnerCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('checking');
    setTimeout(() => {
      setStatus(producerZip.length > 3 ? 'found' : 'none');
    }, 1200);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 14 } },
  };

  return (
    <section id="hero-section" className="relative min-h-[90vh] bg-[#F9F7F5] text-[#3E2B1E] font-sans flex flex-col items-center justify-center py-20 px-4">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=2400')] bg-cover bg-center opacity-10" />
      
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl text-center relative z-10">
        <motion.span variants={itemVariants} className="inline-block px-4 py-1.5 rounded-full bg-[#E9E3DD] text-[#5D4432] text-xs font-bold uppercase tracking-widest mb-6">
          For Dairy Farmers & Producers
        </motion.span>
        
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-serif font-bold text-[#5D4432] mb-8 leading-tight">
          Partner With Us to Collect Your Quality Milk.
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-xl text-[#3E2B1E]/80 mb-12 max-w-2xl mx-auto">
          We streamline the collection of high-quality, pasture-raised milk directly from your farm. Join our sustainable logistics network and reach conscious consumers.
        </motion.p>

        <motion.div variants={itemVariants} className="bg-white p-2 rounded-2xl shadow-xl border border-[#E9E3DD] max-w-lg mx-auto">
          {status === 'idle' || status === 'none' ? (
            <form onSubmit={handlePartnerCheck} className="flex gap-2">
              <input 
                type="text" 
                placeholder="Enter your farm zip code" 
                className="flex-grow px-6 py-4 rounded-xl border border-[#E9E3DD] bg-[#F9F7F5] focus:ring-2 focus:ring-[#5D4432] outline-none"
                value={producerZip}
                onChange={(e) => setProducerZip(e.target.value)}
              />
              <button type="submit" className="bg-[#5D4432] text-white px-8 py-4 rounded-xl font-bold">Check Area</button>
            </form>
          ) : status === 'checking' ? (
            <div className="py-6 text-center font-bold text-[#5D4432]">Checking our logistics routes...</div>
          ) : (
            <div className="p-6 text-center">
              <p className="text-[#16A34A] font-bold mb-4">We are currently operating in your area!</p>
              <button onClick={() => setStatus('idle')} className="bg-[#5D4432] text-white px-8 py-3 rounded-xl font-bold">Request Partnership</button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
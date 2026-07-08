'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Heart, Leaf, Sparkles, ArrowRight, ShieldCheck, RefreshCw } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export function AboutUs() {
  return (
    <section
      id="about-us"
      className="relative overflow-hidden bg-[#F9F7F5] py-24 text-[#3E2B1E] selection:bg-[#E9E3DD]"
    >
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E9E3DD] rounded-full filter blur-3xl opacity-30 -translate-y-12 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#5D4432] rounded-full filter blur-3xl opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-20 space-y-6"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-[#E9E3DD] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#5D4432]">
            <Sparkles className="w-3.5 h-3.5 text-[#5D4432]" />
            Our Mission
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-[#5D4432] font-serif"
          >
            Empowering Local Dairy Producers.
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-[#3E2B1E]/80 leading-relaxed font-light"
          >
            We bridge the gap between high-quality pasture-based farms and the modern market, ensuring fair collection practices and sustainable logistics.
          </motion.p>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-[#5D4432]/20 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="space-y-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={containerVariants}
              className="lg:col-span-5 space-y-6 order-2 lg:order-1"
            >
              <div className="inline-flex p-3 bg-emerald-50 text-[#16A34A] rounded-2xl">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-[#5D4432] leading-tight">
                Supporting Healthy Herds & Healthy Soil.
              </h3>
              <p className="text-base text-[#3E2B1E]/90 leading-relaxed">
                Leite Do Campo partners exclusively with farms that prioritize animal welfare and regenerative land management. By choosing sustainable, pesticide-free grazing, our partner producers ensure their herds thrive on natural forage, yielding superior milk quality.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="border-l-2 border-[#5D4432]/30 pl-4">
                  <span className="block text-2xl font-bold text-[#5D4432]">Fair</span>
                  <span className="text-xs text-[#3E2B1E]/70 uppercase tracking-wider">Direct Collection</span>
                </div>
                <div className="border-l-2 border-[#5D4432]/30 pl-4">
                  <span className="block text-2xl font-bold text-[#5D4432]">Zero</span>
                  <span className="text-xs text-[#3E2B1E]/70 uppercase tracking-wider">Pesticide Reliance</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={imageVariants}
              className="lg:col-span-7 order-1 lg:order-2"
            >
              <div className="relative group overflow-hidden rounded-3xl shadow-xl aspect-[4/3] bg-[#E9E3DD]">
                <img
                  src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=1200"
                  alt="Pasture-raised cows grazing"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={imageVariants}
              className="lg:col-span-7"
            >
              <div className="relative group overflow-hidden rounded-3xl shadow-xl aspect-[4/3] bg-[#E9E3DD]">
                <img
                  src="https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=1200"
                  alt="Fresh farm milk"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={containerVariants}
              className="lg:col-span-5 space-y-6"
            >
              <div className="inline-flex p-3 bg-amber-50 text-[#D97706] rounded-2xl">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-[#5D4432] leading-tight">
                Building a Sustainable Dairy Network.
              </h3>
              <p className="text-base text-[#3E2B1E]/90 leading-relaxed">
                We eliminate the middleman and the industrial waste associated with factory-scale supply chains. By running optimized, local collection routes, we ensure our partner farms get more value for their premium product while minimizing the carbon footprint of transport.
              </p>
              <div className="pt-2">
                <div className="bg-[#E9E3DD]/60 border border-[#E9E3DD] p-4 rounded-2xl flex gap-3.5 items-start">
                  <span className="text-xl">💡</span>
                  <p className="text-sm text-[#3E2B1E]/80 leading-relaxed">
                    <strong>Producer Focus:</strong> We provide the logistics infrastructure that allows small-scale dairy farms to scale without sacrificing their artisanal quality.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="mt-32 relative rounded-[32px] overflow-hidden bg-[#5D4432] text-white py-16 px-8 sm:px-16 text-center shadow-2xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#3E2B1E] via-[#5D4432] to-[#5D4432] opacity-90" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <motion.span variants={itemVariants} className="text-xs font-bold uppercase tracking-widest text-[#E9E3DD] bg-white/10 px-4 py-1.5 rounded-full">
              Join Our Network
            </motion.span>
            <motion.h3 variants={itemVariants} className="text-3xl sm:text-4xl font-bold font-serif text-[#F9F7F5]">
              Are You a Dairy Farmer?
            </motion.h3>
            <motion.p variants={itemVariants} className="text-white/80 text-base sm:text-lg font-light leading-relaxed max-w-lg mx-auto">
              Partner with us to streamline your milk collection and join a network dedicated to fair prices and sustainable, high-quality dairy.
            </motion.p>
            <motion.div variants={itemVariants} className="pt-4">
              <a
                href="#contact-section"
                className="inline-flex items-center gap-3 bg-[#F9F7F5] hover:bg-[#E9E3DD] text-[#5D4432] font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#5D4432] focus:ring-white"
              >
                Inquire About Partnership
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
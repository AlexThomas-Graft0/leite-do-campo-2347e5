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
      {/* Decorative Warm Background Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E9E3DD] rounded-full filter blur-3xl opacity-30 -translate-y-12 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#5D4432] rounded-full filter blur-3xl opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-20 space-y-6"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-[#E9E3DD] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#5D4432]">
            <Sparkles className="w-3.5 h-3.5 text-[#5D4432]" />
            Our Heritage
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-[#5D4432] font-serif"
          >
            A Family Tradition of Honest Farming.
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-[#3E2B1E]/80 leading-relaxed font-light"
          >
            We walked away from industrial supermarket supply chains to bring the simple, wholesome dairy of our childhood back to your kitchen table.
          </motion.p>

          <motion.div variants={itemVariants} className="w-24 h-1 bg-[#5D4432]/20 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Editorial Story Layout */}
        <div className="space-y-32">
          
          {/* Section 1: The Herd Comes First */}
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
                Happy, Free-Roaming Cows Make Better Milk.
              </h3>
              <p className="text-base text-[#3E2B1E]/90 leading-relaxed">
                At Leite Do Campo, we believe that high-quality dairy begins with the happiness and health of our cows. Unlike industrial dairies where animals spend their lives confined to concrete barns, our herd roams freely on lush, pesticide-free pastures.
              </p>
              <p className="text-base text-[#3E2B1E]/90 leading-relaxed">
                They feed on natural grasses, clover, and wild herbs, which gives our milk its unique, seasonally changing flavor and its natural golden color. We practice quiet, low-stress stockmanship, ensuring every cow is treated as an individual member of our farm family.
              </p>
              
              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="border-l-2 border-[#5D4432]/30 pl-4">
                  <span className="block text-2xl font-bold text-[#5D4432]">100%</span>
                  <span className="text-xs text-[#3E2B1E]/70 uppercase tracking-wider">Grass-Fed Feed</span>
                </div>
                <div className="border-l-2 border-[#5D4432]/30 pl-4">
                  <span className="block text-2xl font-bold text-[#5D4432]">Zero</span>
                  <span className="text-xs text-[#3E2B1E]/70 uppercase tracking-wider">Pesticides Used</span>
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
                  alt="Happy pasture-raised cows grazing freely on lush green hills"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E2B1E]/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl flex items-center gap-4 max-w-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-pulse" />
                  <p className="text-xs font-semibold text-[#5D4432] tracking-wide">
                    Live Status: Grazing freely in the North Meadow
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Section 2: Minimally Processed, Maximum Nutrition */}
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
                  alt="Glass bottles of fresh farm milk showing the natural cream line on top"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E2B1E]/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl flex items-center gap-4 max-w-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#5D4432]/10 flex items-center justify-center text-[#5D4432]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#5D4432]">Low-Temp Pasteurization</h4>
                    <p className="text-xs text-[#3E2B1E]/70">Preserves natural digestive enzymes</p>
                  </div>
                </div>
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
                Respecting the Natural Chemistry of Milk.
              </h3>
              <p className="text-base text-[#3E2B1E]/90 leading-relaxed">
                Most grocery store milk is ultra-pasteurized and homogenized, a violent high-pressure process that breaks down natural fats and strips away beneficial enzymes and vitamins.
              </p>
              <p className="text-base text-[#3E2B1E]/90 leading-relaxed">
                We do things gently. Our milk is slowly pasteurized at low temperatures to guarantee safety while preserving the healthy fats, proteins, and digestive enzymes that make real dairy so good for you. Because we never homogenize our milk, a beautiful layer of rich cream naturally rises to the top of every bottle. Just give it a gentle shake and enjoy dairy the way it was meant to be.
              </p>
              
              <div className="pt-2">
                <div className="bg-[#E9E3DD]/60 border border-[#E9E3DD] p-4 rounded-2xl flex gap-3.5 items-start">
                  <span className="text-xl">💡</span>
                  <p className="text-sm text-[#3E2B1E]/80 leading-relaxed">
                    <strong>The Cream Top Advantage:</strong> A natural cream line is proof of unhomogenized milk. Give it a gentle shake to blend, or spoon it directly into your coffee!
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Section 3: Protecting Our Shared Home */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={containerVariants}
              className="lg:col-span-5 space-y-6 order-2 lg:order-1"
            >
              <div className="inline-flex p-3 bg-green-50 text-[#16A34A] rounded-2xl">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-[#5D4432] leading-tight">
                Leaving the Land Better Than We Found It.
              </h3>
              <p className="text-base text-[#3E2B1E]/90 leading-relaxed">
                Modern farming shouldn’t cost the earth. By utilizing rotational grazing, our cows naturally fertilize the soil, trapping carbon in the ground and encouraging native plant species to thrive.
              </p>
              <p className="text-base text-[#3E2B1E]/90 leading-relaxed">
                Our commitment to the environment continues all the way to your doorstep. By packaging our dairy in reusable glass bottles and running highly optimized, local delivery routes, we are building a zero-waste loop that keeps thousands of single-use plastic jugs out of our local landfills. Together, we are nourishing our families while protecting our beautiful countryside.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E9E3DD] flex items-center justify-center text-[#5D4432]">
                    <RefreshCw className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-[#3E2B1E]">100% Circular</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E9E3DD] flex items-center justify-center text-[#5D4432]">
                    <Leaf className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-[#3E2B1E]">Zero Waste</span>
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
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200"
                  alt="Beautiful countryside fields representing our sustainable rotational grazing lands"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E2B1E]/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl flex items-center gap-4 max-w-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-pulse" />
                  <p className="text-xs font-semibold text-[#5D4432] tracking-wide">
                    Carbon sequestered active rotational pastures
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* High-Impact CTA Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="mt-32 relative rounded-[32px] overflow-hidden bg-[#5D4432] text-white py-16 px-8 sm:px-16 text-center shadow-2xl"
        >
          {/* Subtle Graphic overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#3E2B1E] via-[#5D4432] to-[#5D4432] opacity-90" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <motion.span
              variants={itemVariants}
              className="text-xs font-bold uppercase tracking-widest text-[#E9E3DD] bg-white/10 px-4 py-1.5 rounded-full"
            >
              Taste the Family Difference
            </motion.span>
            
            <motion.h3
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold font-serif text-[#F9F7F5]"
            >
              Ready to Taste the Difference?
            </motion.h3>
            
            <motion.p
              variants={itemVariants}
              className="text-white/80 text-base sm:text-lg font-light leading-relaxed max-w-lg mx-auto"
            >
              Bring our carefully pasteurized, unhomogenized pasture milk and artisanal staples to your family kitchen table.
            </motion.p>
            
            <motion.div variants={itemVariants} className="pt-4">
              <a
                href="#product-catalog"
                className="inline-flex items-center gap-3 bg-[#F9F7F5] hover:bg-[#E9E3DD] text-[#5D4432] font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#5D4432] focus:ring-white"
              >
                Explore the Farm Shop
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
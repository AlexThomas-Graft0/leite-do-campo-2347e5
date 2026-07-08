'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

// Inline SVG Icons for premium, dependency-free rendering
const ShoppingBasketIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
  </svg>
);

const TruckIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.104a1.125 1.125 0 01-1.002-1.214l.386-4.074a2.25 2.25 0 012.247-2.036H13.5m-3 6h3m-3 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m1.122 0A2.249 2.249 0 0018 15.75V11.25m-1.122 7.5H10.5M18 15.75a2.25 2.25 0 002.25-2.25v-1.5a2.25 2.25 0 00-.83-1.74l-2.07-1.724a2.25 2.25 0 00-1.44-.54H15V11.25M18 11.25H15M18 11.25V8.25m0 3a2.25 2.25 0 012.25 2.25" />
  </svg>
);

const RefreshIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
  </svg>
);

interface Step {
  id: string;
  num: string;
  title: string;
  body: string;
  icon: React.ReactNode;
  image: string;
  tag: string;
}

interface PromiseItem {
  id: string;
  stepNum: string;
  title: string;
  body: string;
  badge: string;
}

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState<'autopilot' | 'circular'>('autopilot');
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: Step[] = [
    {
      id: 'step-1',
      num: '01',
      title: 'Choose Your Staples',
      body: 'Select your family’s weekly essentials—from our rich whole milk to fresh-churned butter and probiotic yogurts. Set your schedule and change it whenever you need.',
      icon: <ShoppingBasketIcon />,
      image: 'https://images.unsplash.com/photo-1528498033053-3c2293a52f25?auto=format&fit=crop&w=1200&q=80',
      tag: 'Customizable Basket',
    },
    {
      id: 'step-2',
      num: '02',
      title: 'We Deliver in Glass',
      body: 'Our driver delivers your dairy in chilled, insulated boxes directly to your porch. We use traditional, heavy-duty glass bottles to keep your milk ice-cold, fresh, and delicious.',
      icon: <TruckIcon />,
      image: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=1200&q=80',
      tag: 'Porch Delivery',
    },
    {
      id: 'step-3',
      num: '03',
      title: 'Return, Sterilize, Refill',
      body: 'Leave your rinsed, empty glass bottles on your porch on your next delivery day. We will pick them up, sanitize them, credit your account, and refill them for the next round. Zero waste, zero plastic.',
      icon: <RefreshIcon />,
      image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
      tag: '100% Circular Loop',
    },
  ];

  const circularPromise: PromiseItem[] = [
    {
      id: 'promise-1',
      stepNum: '1',
      title: 'First Order Deposit',
      body: 'When you buy your first glass bottle or jar, a small, one-time deposit ($1.50 per bottle, $1.00 per jar) is added to your checkout total.',
      badge: 'One-Time Deposit',
    },
    {
      id: 'promise-2',
      stepNum: '2',
      title: 'Rinse and Return',
      body: 'Once you’ve enjoyed your dairy, rinse the empty bottle with warm water and place it back on your porch in your delivery box on your next delivery day.',
      badge: 'Simple Porch Swap',
    },
    {
      id: 'promise-3',
      stepNum: '3',
      title: 'Automatic Account Credit',
      body: 'Our delivery driver collects your empty bottles and replaces them with fresh ones. Once processed at the farm, a credit for the returned bottles is automatically applied to your account balance, lowering the cost of your next delivery.',
      badge: 'Instant Credit',
    },
  ];

  // Animation variants typed as Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 14 },
    },
  };

  const tabContentVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      y: -15,
      transition: { duration: 0.3, ease: 'easeIn' },
    },
  };

  return (
    <section
      id="how-it-works"
      className="relative bg-[#F9F7F5] text-[#3E2B1E] py-20 lg:py-28 overflow-hidden font-sans border-b border-[#E9E3DD]"
    >
      {/* Decorative organic background shapes */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E9E3DD] rounded-full filter blur-3xl opacity-30 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#5D4432] rounded-full filter blur-3xl opacity-5 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#E9E3DD] text-[#5D4432] mb-4">
            <ShieldCheckIcon />
            Sustainable Autopilot Delivery
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#3E2B1E] mb-6 font-display">
            Your Modern Milkman, Simplified.
          </h2>
          <p className="text-lg text-[#3E2B1E]/80 leading-relaxed">
            We make sourcing fresh, sustainable food easy. Learn how we handle delivery days, bottle returns, and schedule adjustments.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="inline-flex p-1.5 bg-[#E9E3DD]/60 backdrop-blur-sm rounded-2xl border border-[#E9E3DD] shadow-sm">
            <button
              onClick={() => setActiveTab('autopilot')}
              className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === 'autopilot'
                  ? 'bg-[#5D4432] text-white shadow-md'
                  : 'text-[#3E2B1E]/70 hover:text-[#3E2B1E] hover:bg-[#E9E3DD]'
              }`}
            >
              The 3-Step Autopilot
            </button>
            <button
              onClick={() => setActiveTab('circular')}
              className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === 'circular'
                  ? 'bg-[#5D4432] text-white shadow-md'
                  : 'text-[#3E2B1E]/70 hover:text-[#3E2B1E] hover:bg-[#E9E3DD]'
              }`}
            >
              The Circular Bottle Program
            </button>
          </div>
        </div>

        {/* Interactive Tab Contents */}
        <AnimatePresence mode="wait">
          {activeTab === 'autopilot' ? (
            <motion.div
              key="autopilot-tab"
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
            >
              {/* Left Side: Steps Navigation */}
              <div className="lg:col-span-5 space-y-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold font-display text-[#3E2B1E]">
                    Fresh Dairy on Autopilot
                  </h3>
                  <p className="text-sm text-[#3E2B1E]/70 mt-1">
                    Click each step to see how we bring the farm directly to your porch.
                  </p>
                </div>

                <div className="space-y-4">
                  {steps.map((step, index) => {
                    const isSelected = activeStep === index;
                    return (
                      <button
                        key={step.id}
                        onClick={() => setActiveStep(index)}
                        className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                          isSelected
                            ? 'bg-white border-[#5D4432] shadow-md ring-1 ring-[#5D4432]/20'
                            : 'bg-white/50 hover:bg-white border-[#E9E3DD] shadow-sm'
                        }`}
                      >
                        <div
                          className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold text-lg transition-colors duration-300 ${
                            isSelected
                              ? 'bg-[#5D4432] text-white'
                              : 'bg-[#E9E3DD] text-[#5D4432]'
                          }`}
                        >
                          {step.num}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="font-bold text-[#3E2B1E] text-lg">
                              {step.title}
                            </h4>
                            <span className="text-xs font-mono text-[#5D4432]/60 hidden sm:inline-block uppercase tracking-wider">
                              {step.tag}
                            </span>
                          </div>
                          <p className="text-sm text-[#3E2B1E]/80 mt-1.5 leading-relaxed">
                            {step.body}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Side: Interactive Image Showcase */}
              <div className="lg:col-span-7">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-[#E9E3DD] p-3 aspect-[4/3] lg:aspect-[16/11]">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#E9E3DD]">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeStep}
                        src={steps[activeStep].image}
                        alt={steps[activeStep].title}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full object-cover"
                      />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3E2B1E]/60 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Floating Accent Badge */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-white/95 backdrop-blur-md py-3 px-5 rounded-xl shadow-lg border border-[#E9E3DD]">
                      <div className="flex items-center gap-3">
                        <span className="text-[#5D4432] p-2 bg-[#E9E3DD] rounded-lg">
                          {steps[activeStep].icon}
                        </span>
                        <div>
                          <p className="text-xs font-mono text-[#5D4432] uppercase tracking-wider font-bold">
                            Step {steps[activeStep].num}
                          </p>
                          <p className="text-sm font-semibold text-[#3E2B1E]">
                            {steps[activeStep].title}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        Active Loop
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="circular-tab"
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-12"
            >
              {/* Circular Promise Description Card */}
              <div className="bg-white border border-[#E9E3DD] rounded-3xl p-8 lg:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <span className="inline-block text-xs font-mono font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
                    Our Circular Promise
                  </span>
                  <h3 className="text-3xl font-bold font-display text-[#3E2B1E]">
                    How the Reusable Glass Bottle Program Works
                  </h3>
                  <p className="text-base text-[#3E2B1E]/80 leading-relaxed">
                    We package our fresh milk and yogurts in thick, durable glass. Glass keeps your dairy colder, preserves its pure taste, and protects our environment. Here is how we do it together:
                  </p>
                  
                  <div className="flex flex-wrap gap-4 pt-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-[#3E2B1E]/90 bg-[#F9F7F5] px-4 py-2 rounded-xl border border-[#E9E3DD]">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      Zero Waste
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-[#3E2B1E]/90 bg-[#F9F7F5] px-4 py-2 rounded-xl border border-[#E9E3DD]">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      Zero Single-Use Plastic
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-[#3E2B1E]/90 bg-[#F9F7F5] px-4 py-2 rounded-xl border border-[#E9E3DD]">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      100% Recyclable Glass
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="aspect-video lg:aspect-square rounded-2xl overflow-hidden bg-[#E9E3DD] border border-[#E9E3DD] shadow-inner">
                    <img
                      src="https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80"
                      alt="Traditional Farmhouse Milk Jar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* The 3-Step Return Process Cards */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {circularPromise.map((item, index) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className="bg-white border border-[#E9E3DD] rounded-2xl p-6 lg:p-8 shadow-md relative overflow-hidden group hover:shadow-lg transition-all duration-300"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#E9E3DD]/30 rounded-bl-full flex items-center justify-end p-4 group-hover:bg-[#5D4432]/10 transition-colors duration-300">
                      <span className="text-3xl font-mono font-extrabold text-[#5D4432]/20">
                        {item.stepNum}
                      </span>
                    </div>
                    
                    <span className="inline-block text-xs font-mono font-bold text-[#5D4432] bg-[#E9E3DD] px-2.5 py-1 rounded-md mb-4 uppercase tracking-wider">
                      {item.badge}
                    </span>
                    
                    <h4 className="text-xl font-bold text-[#3E2B1E] mb-3 font-display">
                      {item.title}
                    </h4>
                    
                    <p className="text-sm text-[#3E2B1E]/80 leading-relaxed">
                      {item.body}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dynamic CTA Banner */}
        <div className="mt-16 lg:mt-24 text-center">
          <div className="inline-block bg-[#5D4432] text-white rounded-3xl p-8 lg:px-16 lg:py-10 shadow-2xl max-w-4xl mx-auto relative overflow-hidden border border-[#3E2B1E]">
            {/* Background texture accent */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-left">
              <div className="space-y-2 max-w-xl text-center md:text-left">
                <span className="text-xs font-mono font-bold tracking-widest text-[#E9E3DD] uppercase">
                  Ready to Join Our Zero-Waste Dairy Loop?
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold font-display text-white">
                  Fresh Dairy on Your Own Schedule
                </h3>
                <p className="text-[#E9E3DD]/80 text-sm lg:text-base">
                  Sign up once and enjoy farm-fresh milk, butter, and yogurt delivered directly to your doorstep in reusable glass. No contracts, cancel anytime.
                </p>
              </div>
              <div className="flex-shrink-0 w-full md:w-auto">
                <a
                  href="#product-catalog"
                  className="inline-flex w-full md:w-auto items-center justify-center px-8 py-4 rounded-xl bg-white text-[#5D4432] font-semibold text-base shadow-lg hover:bg-[#E9E3DD] transition-all duration-300 ring-2 ring-white/10 hover:scale-[1.02]"
                >
                  Start Your Subscription
                  <svg className="w-5 h-5 ml-2 -mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
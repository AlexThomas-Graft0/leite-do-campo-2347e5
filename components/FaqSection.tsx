'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ChevronDown, RefreshCw, Sparkles, ShieldCheck, HelpCircle, ArrowRight } from 'lucide-react';

interface FaqItem {
  category: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    category: "Delivery",
    question: "Do I need to be home to receive my delivery?",
    answer: "No. You do not need to wait around for our delivery driver. Simply leave an insulated cooler bag or box with a few ice packs on your porch on your delivery day. Our driver will safely place your fresh dairy inside to keep it perfectly chilled until you return home."
  },
  {
    category: "Logistics",
    question: "Can I pause or skip a delivery if I go on holiday?",
    answer: "Yes, easily! You can skip any upcoming delivery with a single click from your Customer Dashboard. Just log in and toggle the dates you want to pause. There are no fees, no hassle, and no questions asked. Please make any changes before your zone's order deadline."
  },
  {
    category: "Bottle Cleaning",
    question: "How do I clean my empty glass bottles before returning them?",
    answer: "A quick, simple rinse with warm water and a drop of dish soap is all we ask! Please don't worry about deep scrubbing or sanitizing—once the bottles return to our farm, they undergo a rigorous, commercial-grade washing and high-temperature sterilization process before being refilled."
  },
  {
    category: "Milk Safety",
    question: "Is your milk safe for people with mild dairy sensitivities?",
    answer: "Many of our customers who struggle to digest industrial, store-bought milk find they can enjoy Leite Do Campo without any discomfort. This is because our milk is unhomogenized and pasteurized at low temperatures, preserving the natural enzymes that help your body break down lactose. However, if you have a diagnosed dairy allergy, please consult your doctor first."
  }
];

interface ProgramStep {
  num: string;
  title: string;
  desc: string;
}

const steps: ProgramStep[] = [
  {
    num: "01",
    title: "First Order Deposit",
    desc: "When you buy your first glass bottle or jar, a small, one-time deposit ($1.50 per bottle, $1.00 per jar) is added to your checkout total."
  },
  {
    num: "02",
    title: "Rinse and Return",
    desc: "Once you’ve enjoyed your dairy, rinse the empty bottle with warm water and place it back on your porch in your delivery box on your next delivery day."
  },
  {
    num: "03",
    title: "Automatic Account Credit",
    desc: "Our delivery driver collects your empty bottles and replaces them with fresh ones. Once processed at the farm, a credit for the returned bottles is automatically applied to your account balance, lowering the cost of your next delivery."
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq-section" 
      className="relative py-24 bg-[#F9F7F5] text-[#3E2B1E] overflow-hidden scroll-mt-12"
    >
      {/* Decorative Warm Background Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E9E3DD] rounded-full filter blur-3xl opacity-30 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E9E3DD] rounded-full filter blur-3xl opacity-40 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#E9E3DD] text-[#5D4432] mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Questions &amp; Logistics
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight text-[#3E2B1E] mb-6">
            Your Modern Milkman, Simplified.
          </h2>
          <p className="text-lg text-[#5D4432] leading-relaxed">
            We make sourcing fresh, sustainable food easy. Learn how we handle delivery days, bottle returns, and schedule adjustments.
          </p>
        </div>

        {/* Circular Promise Section (Visual Stepper & Image Banner) */}
        <div className="mb-24">
          <div className="bg-[#E9E3DD]/40 rounded-3xl p-8 lg:p-12 border border-[#E9E3DD] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 text-[#5D4432] font-semibold text-sm tracking-wide uppercase">
                  <RefreshCw className="w-4 h-4 animate-spin-slow" />
                  Our Circular Promise
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#3E2B1E]">
                  How the Reusable Glass Bottle Program Works
                </h3>
                <p className="text-[#5D4432]/90 leading-relaxed">
                  We package our fresh milk and yogurts in thick, durable glass. Glass keeps your dairy colder, preserves its pure taste, and protects our environment. Here is how we do it together:
                </p>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-inner border border-white/20">
                  <img 
                    src="https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=1200" 
                    alt="Fresh milk in reusable traditional glass bottles on a wooden countertop" 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3E2B1E]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-mono tracking-widest text-[#E9E3DD] uppercase">Leite Do Campo</p>
                    <p className="text-sm font-semibold">Traditional, heavy-duty glass packaging</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex gap-4 p-5 rounded-2xl bg-[#F9F7F5] border border-[#E9E3DD]/60 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#5D4432] text-[#F9F7F5] font-mono text-lg font-bold">
                        {step.num}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-[#3E2B1E] text-lg">{step.title}</h4>
                        <p className="text-sm sm:text-base text-[#5D4432] leading-relaxed">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Accordion FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#3E2B1E]">
              Frequently Asked Questions
            </h3>
            <p className="text-[#5D4432] leading-relaxed">
              Got questions about safety, scheduling, or milk properties? We have gathered answers to help make your farm-fresh journey seamless.
            </p>
            <div className="p-5 rounded-2xl bg-[#E9E3DD]/30 border border-[#E9E3DD] space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5D4432]">
                <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
                Guaranteed Safe &amp; Pure
              </div>
              <p className="text-xs text-[#5D4432]/90 leading-relaxed">
                All our glass bottles undergo rigorous high-temperature sterilization at our farm before being refilled. Your family&apos;s safety is our top priority.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="border border-[#E9E3DD] rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-300 hover:border-[#5D4432]/40"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5D4432] transition-colors duration-200"
                      aria-expanded={isOpen}
                    >
                      <div className="pr-4 space-y-1">
                        <span className="inline-block text-[10px] font-mono font-bold tracking-widest uppercase text-[#5D4432]/60 px-2 py-0.5 rounded bg-[#E9E3DD]/40">
                          {faq.category}
                        </span>
                        <h4 className="text-base sm:text-lg font-bold text-[#3E2B1E] group-hover:text-[#5D4432] transition-colors">
                          {faq.question}
                        </h4>
                      </div>
                      <span className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#E9E3DD] text-[#3E2B1E] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#5D4432] text-white' : ''}`}>
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                        >
                          <div className="px-6 pb-6 pt-2 border-t border-[#E9E3DD]/40 text-[#5D4432] text-sm sm:text-base leading-relaxed space-y-2">
                            <p>{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>

        {/* Premium Call to Action Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-[#5D4432] text-white p-8 sm:p-12 lg:p-16 text-center shadow-xl"
        >
          {/* Subtle background image overlay */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center mix-blend-overlay opacity-15 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-white/15 text-[#E9E3DD]">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              Join the Movement
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight">
              Ready to Join Our Zero-Waste Dairy Loop?
            </h3>
            <p className="text-[#E9E3DD] text-base sm:text-lg leading-relaxed">
              Start customizing your weekly basket of pasture-raised milk, farm-churned butter, and artisanal yogurts today. Cancel or pause anytime.
            </p>
            <div className="pt-4">
              <a 
                href="#product-catalog" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#E9E3DD] text-[#3E2B1E] font-bold text-base hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#5D4432] group"
              >
                Start Your Subscription
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
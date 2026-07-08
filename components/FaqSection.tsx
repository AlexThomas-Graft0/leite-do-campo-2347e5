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
    category: "Partnership",
    question: "What are the requirements to partner with Leite Do Campo?",
    answer: "We partner with local dairy farms that demonstrate a commitment to sustainable land practices, animal welfare, and high-quality milk production. We typically look for farms with pasture-based grazing models."
  },
  {
    category: "Logistics",
    question: "How does the milk collection process work?",
    answer: "We operate scheduled, optimized collection routes. Our logistics team will work with your farm to establish a designated pickup window that fits your milking cycle, ensuring minimal disruption to your daily operations."
  },
  {
    category: "Logistics",
    question: "Are there specific quality standards?",
    answer: "Yes. Because we focus on raw or minimally processed, high-quality milk, we maintain strict testing protocols to ensure every batch meets the safety and nutritional standards our customers expect."
  },
  {
    category: "Business",
    question: "How are collection prices determined?",
    answer: "We believe in fair, transparent pricing. We provide competitive, stable collection rates that reflect the quality of the milk and the hard work of the local producers we partner with."
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } }
};

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section id="faq-section" className="relative py-24 bg-[#F9F7F5] text-[#3E2B1E] overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E9E3DD] rounded-full filter blur-3xl opacity-30 -translate-y-1/2 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#E9E3DD] text-[#5D4432] mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Producer Questions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight text-[#3E2B1E] mb-6">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#3E2B1E]">Partnership Details</h3>
            <p className="text-[#5D4432] leading-relaxed">Answers to common questions about partnering with our collection network.</p>
          </div>
          <div className="lg:col-span-8">
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={itemVariants} className="border border-[#E9E3DD] rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button type="button" onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between p-6 text-left">
                    <h4 className="text-base sm:text-lg font-bold text-[#3E2B1E]">{faq.question}</h4>
                    <span className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#E9E3DD] transition-transform ${openIndex === index ? 'rotate-180 bg-[#5D4432] text-white' : ''}`}><ChevronDown className="w-4 h-4" /></span>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                        <div className="px-6 pb-6 pt-2 text-[#5D4432] text-sm sm:text-base leading-relaxed">{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
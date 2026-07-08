'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, CheckCircle2, ChevronDown, Send, Sparkles } from 'lucide-react';

export function ContactSection() {
  const [formState, setFormState] = useState({
    farmName: '',
    email: '',
    inquiryType: 'Partnership Inquiry',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ farmName: '', email: '', inquiryType: 'Partnership Inquiry', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } },
  };

  return (
    <section id="contact-section" className="relative bg-[#F9F7F5] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans text-[#3E2B1E]">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E9E3DD] rounded-full filter blur-3xl opacity-30 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#5D4432] rounded-full filter blur-3xl opacity-5 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E9E3DD] text-[#5D4432] text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Join Our Network
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#3E2B1E] mb-6 font-serif">
            Partner With Our Collection Network.
          </h2>
          <p className="text-lg md:text-xl text-[#5D4432] leading-relaxed">
            We are looking to partner with sustainable dairy farms. Send us your details and let's discuss how we can streamline your milk distribution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div className="lg:col-span-5 space-y-8" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={containerVariants}>
            <motion.div variants={itemVariants} className="relative h-64 rounded-2xl overflow-hidden shadow-lg group">
              <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200" alt="Farm fields" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E2B1E]/90 via-[#3E2B1E]/40 to-transparent" />
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-sm border border-[#E9E3DD]/60 space-y-6">
              <h3 className="text-xl font-bold font-serif text-[#3E2B1E] border-b border-[#E9E3DD] pb-4">Direct Contact</h3>
              <a href="mailto:partnerships@leitedocampo.com" className="flex items-start gap-4 group p-2 -m-2 rounded-xl hover:bg-[#F9F7F5]">
                <div className="p-3 rounded-lg bg-[#E9E3DD]/50 text-[#5D4432]"><Mail className="w-5 h-5" /></div>
                <div><span className="block text-xs font-semibold uppercase tracking-wider text-[#5D4432]/70 mb-0.5">Partnerships Email</span><span className="text-base font-medium text-[#3E2B1E] font-mono">partnerships@leitedocampo.com</span></div>
              </a>
              <div className="flex items-start gap-4 p-2 -m-2 rounded-xl">
                <div className="p-3 rounded-lg bg-[#E9E3DD]/50 text-[#5D4432]"><MapPin className="w-5 h-5" /></div>
                <div><span className="block text-xs font-semibold uppercase tracking-wider text-[#5D4432]/70 mb-0.5">Collection HQ</span><span className="text-base font-medium text-[#3E2B1E]">Leite Do Campo Operations</span></div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="lg:col-span-7" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={containerVariants}>
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 lg:p-10 shadow-md border border-[#E9E3DD]/80">
              <h3 className="text-2xl font-bold font-serif text-[#3E2B1E] mb-2">Partnership Request</h3>
              <p className="text-sm text-[#5D4432] mb-8">Tell us about your farm, your production volume, and your location.</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="farmName" className="block text-sm font-semibold text-[#3E2B1E]">Farm Name</label>
                    <input type="text" id="farmName" required value={formState.farmName} onChange={(e) => setFormState({ ...formState, farmName: e.target.value })} placeholder="Your farm name" className="w-full px-4 py-3 rounded-xl border border-[#E9E3DD] bg-[#F9F7F5] text-[#3E2B1E] focus:ring-2 focus:ring-[#5D4432] transition-all outline-none text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-[#3E2B1E]">Email Address</label>
                    <input type="email" id="email" required value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} placeholder="Email address" className="w-full px-4 py-3 rounded-xl border border-[#E9E3DD] bg-[#F9F7F5] text-[#3E2B1E] focus:ring-2 focus:ring-[#5D4432] transition-all outline-none text-sm" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="inquiryType" className="block text-sm font-semibold text-[#3E2B1E]">Inquiry Type</label>
                  <select id="inquiryType" value={formState.inquiryType} onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-[#E9E3DD] bg-[#F9F7F5] text-[#3E2B1E] focus:ring-2 focus:ring-[#5D4432] transition-all outline-none text-sm appearance-none cursor-pointer pr-10">
                    <option value="Partnership Inquiry">Partnership Inquiry</option>
                    <option value="Logistics Coordination">Logistics Coordination</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-[#3E2B1E]">Message</label>
                  <textarea id="message" required rows={5} value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} placeholder="Tell us about your production..." className="w-full px-4 py-3 rounded-xl border border-[#E9E3DD] bg-[#F9F7F5] text-[#3E2B1E] focus:ring-2 focus:ring-[#5D4432] transition-all outline-none text-sm resize-none" />
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full md:w-auto px-8 py-4 bg-[#5D4432] hover:bg-[#4E3929] active:bg-[#3E2B1E] text-[#F9F7F5] font-semibold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group">
                  {isSubmitting ? <span>Sending...</span> : <><span>Submit Partnership Request</span><Send className="w-4 h-4" /></>}
                </button>
              </form>
              <AnimatePresence>
                {isSubmitted && <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute inset-x-8 bottom-8 bg-[#16A34A] text-white p-4 rounded-xl shadow-lg flex items-center gap-3"><CheckCircle2 className="w-5 h-5" /><div><h4 className="font-bold text-sm">Request Sent!</h4><p className="text-xs text-white/95">We will reach out to discuss your farm.</p></div></motion.div>}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
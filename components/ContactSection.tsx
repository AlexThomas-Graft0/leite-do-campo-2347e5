'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, CheckCircle2, ChevronDown, Send, Sparkles } from 'lucide-react';

export function ContactSection() {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    inquiryType: 'My Delivery or Subscription Account',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1200));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({
      fullName: '',
      email: '',
      inquiryType: 'My Delivery or Subscription Account',
      message: '',
    });

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section 
      id="contact-section" 
      className="relative bg-[#F9F7F5] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans text-[#3E2B1E]"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E9E3DD] rounded-full filter blur-3xl opacity-30 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#5D4432] rounded-full filter blur-3xl opacity-5 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E9E3DD] text-[#5D4432] text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#3E2B1E] mb-6 font-serif">
            We’re Always Happy to Chat.
          </h2>
          <p className="text-lg md:text-xl text-[#5D4432] leading-relaxed">
            Have questions about your delivery, want to stock our cheese in your shop, or just want to say hello? Drop us a line and we’ll get back to you within 24 hours.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Visual Card */}
          <motion.div 
            className="lg:col-span-5 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            {/* Ambient Imagery Card */}
            <motion.div 
              variants={itemVariants}
              className="relative h-64 rounded-2xl overflow-hidden shadow-lg group"
            >
              <img 
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200"
                alt="Leite Do Campo farm pasture with traditional wooden fences" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E2B1E]/90 via-[#3E2B1E]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-mono tracking-widest text-[#E9E3DD] uppercase block mb-1">Our Heritage</span>
                <p className="text-lg font-serif font-medium">Family-run values, fresh pasture-raised dairy direct to your door.</p>
              </div>
            </motion.div>

            {/* Direct Contact Details */}
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[#E9E3DD]/60 space-y-6"
            >
              <h3 className="text-xl font-bold font-serif text-[#3E2B1E] border-b border-[#E9E3DD] pb-4">
                Direct Contact Information
              </h3>

              <div className="space-y-6">
                {/* Email Address */}
                <a 
                  href="mailto:hello@leitedocampo.com"
                  className="flex items-start gap-4 group p-2 -m-2 rounded-xl hover:bg-[#F9F7F5] transition-colors"
                >
                  <div className="p-3 rounded-lg bg-[#E9E3DD]/50 text-[#5D4432] group-hover:bg-[#5D4432] group-hover:text-white transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-[#5D4432]/70 mb-0.5">Email Us</span>
                    <span className="text-base font-medium text-[#3E2B1E] group-hover:text-[#5D4432] transition-colors font-mono">
                      hello@leitedocampo.com
                    </span>
                  </div>
                </a>

                {/* Phone Number */}
                <a 
                  href="tel:5550192834"
                  className="flex items-start gap-4 group p-2 -m-2 rounded-xl hover:bg-[#F9F7F5] transition-colors"
                >
                  <div className="p-3 rounded-lg bg-[#E9E3DD]/50 text-[#5D4432] group-hover:bg-[#5D4432] group-hover:text-white transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-[#5D4432]/70 mb-0.5">Call Our Team</span>
                    <span className="text-base font-medium text-[#3E2B1E] group-hover:text-[#5D4432] transition-colors font-mono">
                      (555) 019-2834
                    </span>
                    <span className="block text-xs text-[#5D4432]/80 mt-1 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> Monday – Friday, 8:00 AM – 4:00 PM
                    </span>
                  </div>
                </a>

                {/* Farm Address */}
                <div className="flex items-start gap-4 p-2 -m-2 rounded-xl">
                  <div className="p-3 rounded-lg bg-[#E9E3DD]/50 text-[#5D4432]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-[#5D4432]/70 mb-0.5">Visit the Farm</span>
                    <span className="text-base font-medium text-[#3E2B1E]">
                      Leite Do Campo Farm
                    </span>
                    <span className="block text-sm text-[#5D4432]">
                      Green Valley Road, Section 4
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick trust note */}
            <motion.p 
              variants={itemVariants}
              className="text-xs text-center text-[#5D4432]/70 px-4 font-mono"
            >
              Looking to adjust your deliveries? You can also jump right back to your custom scheduled box on the dashboard.
            </motion.p>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            className="lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 lg:p-10 shadow-md border border-[#E9E3DD]/80 relative"
            >
              <h3 className="text-2xl font-bold font-serif text-[#3E2B1E] mb-2">
                Send Us a Message
              </h3>
              <p className="text-sm text-[#5D4432] mb-8">
                Fill out the form below and our friendly farm support team will reach out shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label 
                      htmlFor="fullName" 
                      className="block text-sm font-semibold text-[#3E2B1E]"
                    >
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      required
                      value={formState.fullName}
                      onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                      placeholder="Enter your first and last name"
                      className="w-full px-4 py-3 rounded-xl border border-[#E9E3DD] bg-[#F9F7F5] text-[#3E2B1E] placeholder-[#5D4432]/50 focus:bg-white focus:ring-2 focus:ring-[#5D4432] focus:border-transparent transition-all outline-none text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-semibold text-[#3E2B1E]"
                    >
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 rounded-xl border border-[#E9E3DD] bg-[#F9F7F5] text-[#3E2B1E] placeholder-[#5D4432]/50 focus:bg-white focus:ring-2 focus:ring-[#5D4432] focus:border-transparent transition-all outline-none text-sm"
                    />
                  </div>
                </div>

                {/* Dropdown: Topic */}
                <div className="space-y-2 relative">
                  <label 
                    htmlFor="inquiryType" 
                    className="block text-sm font-semibold text-[#3E2B1E]"
                  >
                    What Can We Help You With?
                  </label>
                  <div className="relative">
                    <select
                      id="inquiryType"
                      value={formState.inquiryType}
                      onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E9E3DD] bg-[#F9F7F5] text-[#3E2B1E] focus:bg-white focus:ring-2 focus:ring-[#5D4432] focus:border-transparent transition-all outline-none text-sm appearance-none cursor-pointer pr-10"
                    >
                      <option value="My Delivery or Subscription Account">My Delivery or Subscription Account</option>
                      <option value="Wholesale & Retail Inquiries">Wholesale & Retail Inquiries</option>
                      <option value="Farm Visits & Educational Tours">Farm Visits & Educational Tours</option>
                      <option value="Just Saying Hello!">Just Saying Hello!</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#5D4432] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Textarea: Message */}
                <div className="space-y-2">
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-semibold text-[#3E2B1E]"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Type your message here..."
                    className="w-full px-4 py-3 rounded-xl border border-[#E9E3DD] bg-[#F9F7F5] text-[#3E2B1E] placeholder-[#5D4432]/50 focus:bg-white focus:ring-2 focus:ring-[#5D4432] focus:border-transparent transition-all outline-none text-sm resize-none"
                  />
                </div>

                {/* Submit Action Block */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-4 bg-[#5D4432] hover:bg-[#4E3929] active:bg-[#3E2B1E] text-[#F9F7F5] font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed group focus:ring-2 focus:ring-[#5D4432] focus:ring-offset-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Success Notification */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="absolute inset-x-8 bottom-8 md:bottom-10 bg-[#16A34A] text-white p-4 rounded-xl shadow-lg flex items-center gap-3"
                  >
                    <div className="p-1 rounded-full bg-white/25">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Message Sent Successfully!</h4>
                      <p className="text-xs text-white/95">Thank you for reaching out. We will get back to you within 24 hours.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
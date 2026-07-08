'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function HowItWorks() {
  const steps = [
    { title: 'Partnership Inquiry', body: 'Contact us to discuss your farm production and collection logistics requirements.' },
    { title: 'Logistics Planning', body: 'We schedule efficient collection windows to maintain milk freshness and farm productivity.' },
    { title: 'Collection Loop', body: 'Our refrigerated vehicles collect your milk regularly, ensuring a seamless supply chain.' },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#F9F7F5]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#5D4432] mb-16">The Milk Collection Loop</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div key={i} className="p-8 bg-white border border-[#E9E3DD] rounded-3xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="w-12 h-12 bg-[#5D4432] text-white rounded-xl flex items-center justify-center font-bold mb-6">0{i + 1}</div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-[#3E2B1E]/80">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
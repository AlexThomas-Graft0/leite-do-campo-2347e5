'use client';

import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-[#5D4432] text-[#F9F7F5] font-sans">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#16A34A] via-[#E9E3DD] to-[#D97706]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold font-serif mb-6">Leite Do Campo</h3>
            <p className="text-[#E9E3DD]/90 leading-relaxed max-w-sm">Partnering with local dairy farms to collect and distribute premium, pasture-raised milk through a sustainable, circular logistics network.</p>
          </div>
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Resources</h3>
            <ul className="space-y-4 text-[#E9E3DD]/85">
              <li><a href="#about-us">Our Mission</a></li>
              <li><a href="#how-it-works">Logistics</a></li>
              <li><a href="#contact-section">Partner With Us</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Contact</h3>
            <address className="not-italic space-y-4 text-[#E9E3DD]/85">
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#16A34A]" /> <span>Dairy Collection HQ</span></div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#16A34A]" /> <span>(555) 019-2834</span></div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#16A34A]" /> <span>partnerships@leitedocampo.com</span></div>
            </address>
          </div>
        </div>
      </div>
      <div className="bg-[#2D1F15] py-6 text-xs text-[#E9E3DD]/40 border-t border-[#E9E3DD]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2026 Leite Do Campo. Sustainable Dairy Collection Network.</p>
        </div>
      </div>
    </footer>
  );
}
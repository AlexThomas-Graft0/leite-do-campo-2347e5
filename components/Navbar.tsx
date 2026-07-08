'use client';

import React from 'react';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#F9F7F5]/90 backdrop-blur-sm border-b border-[#E9E3DD] px-8 py-4 flex justify-between items-center">
      <div className="font-serif text-2xl font-bold text-[#5D4432]">Leite Do Campo</div>
      <div className="flex gap-6 text-sm font-bold text-[#3E2B1E]">
        <a href="#how-it-works">How It Works</a>
        <a href="#about-us">Our Mission</a>
        <a href="#contact-section" className="bg-[#5D4432] text-white px-6 py-2 rounded-full">Partner With Us</a>
      </div>
    </nav>
  );
}
'use client';

import React from 'react';

export function ProductCatalog() {
  return (
    <section id="product-catalog" className="py-24 bg-[#F9F7F5]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#5D4432] mb-8">Our Collection Standards</h2>
        <p className="text-lg text-[#3E2B1E]/80 max-w-2xl mx-auto mb-12">We focus on collecting high-quality raw, pasture-based milk. We maintain strict quality and safety standards to ensure the best output for our partners and consumers.</p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 bg-white border border-[#E9E3DD] rounded-2xl">
            <h3 className="text-xl font-bold mb-4">Pasture-Raised Standards</h3>
            <p className="text-[#3E2B1E]/80">We partner with farms that prioritize natural grazing for superior milk fat and protein profiles.</p>
          </div>
          <div className="p-8 bg-white border border-[#E9E3DD] rounded-2xl">
            <h3 className="text-xl font-bold mb-4">Logistics Excellence</h3>
            <p className="text-[#3E2B1E]/80">Our collection network is designed for speed and temperature control, keeping milk pure from farm to facility.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
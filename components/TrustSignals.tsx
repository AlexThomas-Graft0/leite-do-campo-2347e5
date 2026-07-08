'use client';

import React from 'react';

export function TrustSignals() {
  return (
    <section id="trust-signals" className="py-24 bg-[#F9F7F5]">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
        {[
          { stat: "100%", label: "Grass-Fed Partnerships" },
          { stat: "24h", label: "Max Collection Window" },
          { stat: "Sustainable", label: "Supply Chain Infrastructure" }
        ].map((item, i) => (
          <div key={i} className="p-8">
            <div className="text-4xl font-bold text-[#5D4432] mb-2">{item.stat}</div>
            <div className="text-[#3E2B1E]/70 font-semibold">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
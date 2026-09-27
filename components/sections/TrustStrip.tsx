"use client";

import { Container } from "@/components/ui/container";

export function TrustStrip() {
  const stats = [
    { label: "Delivery Operations", value: "Reliable", sub: "99.9%* Success Rate" },
    { label: "Service Network", value: "Wide", sub: "500+* Locations" },
    { label: "Shipment Visibility", value: "24/7", sub: "Real-time tracking" },
    { label: "Logistics Solutions", value: "Flexible", sub: "Enterprise ready" },
  ];

  return (
    <section className="bg-primary py-10 border-t border-white/10">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center px-4">
              <span className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</span>
              <span className="text-sm text-primary-foreground/90 font-medium mb-1">{stat.label}</span>
              <span className="text-xs text-primary-foreground/50">{stat.sub}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <p className="text-[10px] text-white/30 uppercase tracking-widest">*Illustrative figures used for technical demonstration.</p>
        </div>
      </Container>
    </section>
  );
}

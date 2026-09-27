"use client";

import { Container } from "@/components/ui/container";

export function TrustStrip() {
  const stats = [
    { label: "Delivery Reliability", value: "99.9%" },
    { label: "Service Locations", value: "500+" },
    { label: "Shipment Tracking", value: "24/7" },
    { label: "Shipments Delivered", value: "100K+" },
  ];

  return (
    <section className="bg-primary py-10 border-t border-white/10">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center px-4">
              <span className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</span>
              <span className="text-sm text-primary-foreground/70 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

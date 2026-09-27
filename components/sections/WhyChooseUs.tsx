"use client";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CheckCircle2, ShieldCheck, Zap, Headphones, Truck, Map } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    { title: "Reliable Delivery", description: "Professional delivery operations ensuring your packages arrive intact and on time.", icon: CheckCircle2 },
    { title: "Real-Time Tracking", description: "End-to-end visibility throughout the shipment journey via our tracking platform.", icon: Map },
    { title: "Wide Network", description: "Strong domestic and international connectivity reaching the most remote areas.", icon: Truck },
    { title: "Fast Service", description: "Express options for urgent shipments requiring next-day delivery.", icon: Zap },
    { title: "Secure Handling", description: "Careful package management and strict security protocols for fragile items.", icon: ShieldCheck },
    { title: "Customer Support", description: "Dedicated 24/7 assistance throughout the entire delivery process.", icon: Headphones }
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <SectionHeading 
              title="Why Choose Chowra Logistics?" 
              subtitle="We combine industry-leading technology with extensive physical networks to deliver unparalleled service."
            />
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-2">{reason.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

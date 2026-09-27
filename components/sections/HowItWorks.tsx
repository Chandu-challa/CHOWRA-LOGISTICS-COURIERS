"use client";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Laptop, Truck, Search, Home } from "lucide-react";

export function HowItWorks() {
  const steps = [
    { icon: Laptop, title: "Book Shipment", desc: "Enter your details and get an instant quote." },
    { icon: Truck, title: "Pickup & Process", desc: "We collect your package directly from your door." },
    { icon: Search, title: "Real-Time Tracking", desc: "Monitor your shipment every step of the way." },
    { icon: Home, title: "Safe Delivery", desc: "Guaranteed secure arrival at the destination." }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <Container>
        <SectionHeading 
          title="How It Works" 
          subtitle="Four simple steps to seamless logistics."
          alignment="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative mt-16">
          {/* Connector Line (Desktop only) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-border -z-10"></div>
          
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="flex flex-col items-center text-center relative">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-muted flex items-center justify-center mb-6 shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                    <Icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm absolute top-0 right-1/2 translate-x-12 -translate-y-2 border-4 border-muted">
                  0{i + 1}
                </div>
                <h4 className="text-xl font-bold text-primary mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

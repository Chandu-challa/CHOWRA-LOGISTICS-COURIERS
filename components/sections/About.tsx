"use client";

import { Container } from "@/components/ui/container";
import { Package2, Target, Users, Zap } from "lucide-react";

export function About() {
  const pillars = [
    { num: "01", title: "Reliable Operations", icon: Target },
    { num: "02", title: "Shipment Visibility", icon: Zap },
    { num: "03", title: "Flexible Solutions", icon: Package2 },
    { num: "04", title: "Customer Focused", icon: Users },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2 block">About Chowra</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6">
              Moving Your World, <br className="hidden md:block" />
              One Delivery at a Time
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Chowra Logistics & Couriers is a modern logistics concept focused on domestic, international, express, e-commerce, and enterprise delivery solutions. We bridge the gap between businesses and their customers through robust infrastructure and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-muted/50 border border-border/50 hover:bg-muted transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-bold text-accent mb-2">— {pillar.num}</span>
                  <h3 className="text-lg font-bold text-primary">{pillar.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

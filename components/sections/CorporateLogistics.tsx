"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Briefcase, BarChart, Layers, Clock } from "lucide-react";

export function CorporateLogistics() {
  const features = [
    { icon: Layers, title: "Bulk Shipments", desc: "Manage high-volume shipping with specialized handling." },
    { icon: Clock, title: "Scheduled Pickups", desc: "Automated daily or weekly pickup routines." },
    { icon: Briefcase, title: "Dedicated Support", desc: "Priority account management for enterprise clients." },
    { icon: BarChart, title: "Business Reporting", desc: "Advanced analytics and API integrations." }
  ];

  return (
    <section id="solutions" className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-primary to-primary"></div>
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent font-semibold text-sm mb-6 border border-accent/20">
              Enterprise Solutions
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">
              Corporate Logistics <br /> Engineered for Scale
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl">
              Customized logistics solutions for businesses requiring recurring shipping, bulk freight, and advanced supply chain management.
            </p>
            
            <a href="#contact">
              <Button variant="secondary" size="lg">Talk to Our Logistics Team</Button>
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">{feature.title}</h4>
                  <p className="text-sm text-primary-foreground/60">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

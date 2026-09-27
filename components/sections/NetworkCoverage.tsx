"use client";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Map, Globe2, Building2, MapPin } from "lucide-react";

export function NetworkCoverage() {
  const metrics = [
    { icon: MapPin, label: "Cities Covered", value: "3,000+" },
    { icon: Building2, label: "Service Zones", value: "15,000+" },
    { icon: Globe2, label: "International Destinations", value: "220+" },
  ];

  return (
    <section id="network" className="py-20 bg-primary text-white overflow-hidden relative">
      {/* Abstract Network Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 L20 40 L40 60 L60 20 L80 80 L100 0" stroke="white" strokeWidth="0.5" fill="none" />
          <path d="M0 50 L30 80 L50 30 L70 90 L100 40" stroke="white" strokeWidth="0.5" fill="none" />
          <circle cx="20" cy="40" r="1" fill="white" />
          <circle cx="40" cy="60" r="1" fill="white" />
          <circle cx="60" cy="20" r="1" fill="white" />
          <circle cx="80" cy="80" r="1" fill="white" />
          <circle cx="30" cy="80" r="1" fill="white" />
          <circle cx="50" cy="30" r="1" fill="white" />
          <circle cx="70" cy="90" r="1" fill="white" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading 
              title="Global Reach, Local Expertise" 
              subtitle="Our extensive network ensures your shipments reach their destination safely, no matter where in the world."
              className="text-white [&>h2]:text-white [&>p]:text-primary-foreground/70"
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              {metrics.map((metric, i) => {
                const Icon = metric.icon;
                return (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-2">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-3xl font-bold">{metric.value}</span>
                    <span className="text-sm font-medium text-primary-foreground/70">{metric.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="relative aspect-square md:aspect-video lg:aspect-square bg-primary-light/50 border border-white/10 rounded-2xl p-6 overflow-hidden flex items-center justify-center">
            {/* Visual placeholder for a map */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary-light to-primary"></div>
            <Map className="w-32 h-32 text-accent/30 absolute" />
            <div className="z-10 text-center space-y-4">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm font-medium">
                Extensive Domestic Network
              </div>
              <div className="flex flex-wrap justify-center gap-2 max-w-sm">
                {["Chennai", "Hyderabad", "Bengaluru", "Mumbai", "Delhi", "Pune", "Kolkata"].map(city => (
                  <span key={city} className="px-3 py-1 bg-primary border border-white/10 rounded-md text-xs text-white/80">
                    {city}
                  </span>
                ))}
                <span className="px-3 py-1 bg-accent/20 border border-accent/50 rounded-md text-xs text-accent-light">
                  + 3000 More
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

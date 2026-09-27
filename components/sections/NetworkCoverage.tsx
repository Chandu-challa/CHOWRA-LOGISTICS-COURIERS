"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { MapPin, Building2, Globe2 } from "lucide-react";

export function NetworkCoverage() {
  const metrics = [
    { icon: MapPin, label: "Cities Covered", value: "3,000+" },
    { icon: Building2, label: "Service Zones", value: "15,000+" },
    { icon: Globe2, label: "International Destinations", value: "220+" },
  ];

  return (
    <section id="network" className="py-20 bg-primary text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

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
            <div className="mt-8">
               <p className="text-[10px] text-white/30 uppercase tracking-widest">*Illustrative network metrics for technical demonstration.</p>
            </div>
          </div>
          
          <div className="relative aspect-square md:aspect-video lg:aspect-square bg-primary-light/30 border border-white/10 rounded-2xl p-6 overflow-hidden flex items-center justify-center shadow-inner">
            {/* India-focused Network SVG */}
            <svg viewBox="0 0 400 400" className="w-full h-full opacity-90 max-w-[300px]">
              {/* Lines / Routes */}
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                d="M 180 120 L 120 220 L 180 320"
                stroke="var(--color-accent)" strokeWidth="1.5" fill="none" strokeDasharray="4 4" 
              />
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, ease: "linear", delay: 1, repeat: Infinity }}
                d="M 180 120 L 280 200 L 180 320"
                stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" 
              />
              <path d="M 120 220 L 280 200" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />

              {/* Nodes and Labels */}
              <g className="translate-y-[-10px]">
                <circle cx="180" cy="120" r="6" fill="var(--color-accent)" />
                <circle cx="180" cy="120" r="12" fill="none" stroke="var(--color-accent)" className="animate-ping" style={{ transformOrigin: "180px 120px" }} />
                <text x="170" y="115" fill="white" fontSize="12" fontWeight="bold" textAnchor="end">DELHI</text>
              </g>

              <g>
                <circle cx="120" cy="220" r="5" fill="white" />
                <text x="110" y="215" fill="white" fontSize="12" fontWeight="bold" textAnchor="end">MUMBAI</text>
              </g>

              <g>
                <circle cx="280" cy="200" r="5" fill="white" />
                <text x="290" y="195" fill="white" fontSize="12" fontWeight="bold" textAnchor="start">KOLKATA</text>
              </g>
              
              <g className="translate-y-[10px]">
                <circle cx="200" cy="260" r="4" fill="rgba(255,255,255,0.7)" />
                <text x="190" y="255" fill="rgba(255,255,255,0.7)" fontSize="10" textAnchor="end">HYDERABAD</text>
              </g>

              <g className="translate-y-[20px]">
                <circle cx="160" cy="290" r="4" fill="rgba(255,255,255,0.7)" />
                <text x="150" y="285" fill="rgba(255,255,255,0.7)" fontSize="10" textAnchor="end">BENGALURU</text>
              </g>

              <g className="translate-y-[30px]">
                <circle cx="180" cy="320" r="5" fill="white" />
                <text x="190" y="325" fill="white" fontSize="12" fontWeight="bold" textAnchor="start">CHENNAI</text>
              </g>
            </svg>
            
            <div className="absolute bottom-6 right-6 text-right">
              <p className="text-white font-bold text-sm">Domestic Network</p>
              <p className="text-primary-foreground/60 text-xs">Sample Core Routes</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

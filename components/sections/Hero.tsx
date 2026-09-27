"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MapPin, Package, Clock } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-muted py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start gap-6"
          >
            <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
              SMART LOGISTICS. SEAMLESS DELIVERY.
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl leading-[1.1]">
              Moving Your World, <br /> One Delivery at a Time.
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground sm:text-xl">
              Chowra Logistics and Couriers provides domestic, international, express, and enterprise logistics solutions you can trust.
            </p>
            <div className="flex flex-col w-full sm:flex-row gap-4 mt-4">
              <a href="#track" className="w-full sm:w-auto">
                <Button size="lg" className="w-full">Track Shipment</Button>
              </a>
              <a href="#quote" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full bg-white">Get a Quick Quote</Button>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none aspect-[4/3] rounded-2xl overflow-hidden bg-primary shadow-2xl flex items-center justify-center p-8"
          >
            <div className="absolute inset-0 bg-primary-hover/50"></div>
            
            {/* Sophisticated SVG Network Route */}
            <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 400 300">
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
                d="M 80 150 C 150 50, 250 50, 320 180" 
                fill="none" 
                stroke="var(--color-accent)" 
                strokeWidth="2" 
                strokeDasharray="4 4"
              />
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
                d="M 120 220 L 200 120 L 280 240" 
                fill="none" 
                stroke="rgba(255,255,255,0.3)" 
                strokeWidth="2" 
              />
              
              {/* Nodes */}
              <circle cx="80" cy="150" r="5" fill="white" />
              <text x="75" y="140" fill="white" fontSize="10" fontWeight="bold" textAnchor="end">MUMBAI</text>
              
              <circle cx="200" cy="120" r="5" fill="white" />
              <text x="200" y="105" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">DELHI</text>
              
              <circle cx="320" cy="180" r="5" fill="var(--color-accent)" />
              <circle cx="320" cy="180" r="10" fill="none" stroke="var(--color-accent)" className="animate-ping" style={{ transformOrigin: "320px 180px" }} />
              <text x="325" y="170" fill="white" fontSize="10" fontWeight="bold" textAnchor="start">CHENNAI</text>
              
              <circle cx="280" cy="240" r="4" fill="rgba(255,255,255,0.5)" />
              <text x="280" y="255" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="middle">BENGALURU</text>
              
              <circle cx="120" cy="220" r="4" fill="rgba(255,255,255,0.5)" />
              <text x="120" y="235" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="middle">PUNE</text>
            </svg>

            {/* Floating Tracking Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative z-10 bg-white/95 backdrop-blur shadow-2xl rounded-xl p-5 border border-white/20 w-64 translate-x-12 -translate-y-8"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <Package className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Tracking ID</p>
                    <p className="text-sm font-bold text-primary font-mono">CHW123456789</p>
                  </div>
                </div>
                <div className="px-2 py-1 bg-success/10 text-success rounded text-[10px] font-bold uppercase">
                  In Transit
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-muted-foreground uppercase">Destination</span>
                    <span className="text-sm font-semibold">Chennai Hub</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-muted-foreground uppercase">ETA</span>
                    <span className="text-sm font-semibold">Tomorrow, 10:00 AM</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

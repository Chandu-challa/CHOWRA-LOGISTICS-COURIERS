"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl relative">
              <div className="absolute inset-0 bg-primary/10"></div>
              {/* Using a placeholder styled div as a logistics visual since no image asset is provided */}
              <div className="w-full h-full bg-primary flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-accent/40 shadow-[0_0_15px_rgba(249,115,22,0.5)]"></div>
                <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full border border-white/10"></div>
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full border border-white/5"></div>
                <motion.div 
                  animate={{ x: [0, 20, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="z-10 bg-white p-6 rounded-xl shadow-xl border border-border/10 flex flex-col items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <div className="w-6 h-6 border-4 border-accent rounded-full border-t-transparent animate-spin"></div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold text-primary">Global Network</p>
                    <p className="text-xs text-muted-foreground">Always moving</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

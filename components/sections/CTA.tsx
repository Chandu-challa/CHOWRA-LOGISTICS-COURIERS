"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 bg-white relative">
      <Container>
        <div className="bg-muted rounded-3xl p-10 md:p-16 text-center border border-border shadow-sm max-w-5xl mx-auto relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-primary mb-6">
              Ready to Move Your Business Forward?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              From local deliveries to global logistics, build a smoother shipping experience with Chowra. Start tracking or get an estimate today.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#quote" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto min-w-[200px]">Get a Quick Quote</Button>
              </a>
              <a href="#track" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto min-w-[200px] bg-white">Track Shipment</Button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

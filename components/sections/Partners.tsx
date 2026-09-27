"use client";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/lib/data";
import { Star, Building, ShoppingBag, Briefcase, Factory } from "lucide-react";

export function Partners() {
  const dummyPartners = [
    { icon: Building, name: "Acme Corp (Demo)" },
    { icon: ShoppingBag, name: "RetailX (Demo)" },
    { icon: Briefcase, name: "Global Exports (Demo)" },
    { icon: Factory, name: "ManufacturePro (Demo)" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <Container>
        <SectionHeading 
          title="Sample Customer Experiences" 
          subtitle="Demonstration testimonials created for the technical assignment. No actual partnerships implied."
          alignment="center"
        />

        {/* Abstract/Fictional Partner Logos */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16 opacity-60 grayscale">
          {dummyPartners.map((partner, i) => {
            const Icon = partner.icon;
            return (
              <div key={i} className="flex items-center gap-3">
                <Icon className="w-8 h-8" />
                <span className="text-xl font-bold font-mono tracking-tighter">{partner.name}</span>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-8 bg-white border-none shadow-sm flex flex-col relative">
              <div className="absolute top-8 left-8 text-6xl text-accent/10 font-serif leading-none" aria-hidden="true">"</div>
              <div className="flex gap-1 mb-6 relative z-10" aria-label="5 out of 5 stars">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 flex-1 relative z-10 italic">
                "{testimonial.quote}"
              </p>
              <div className="mt-auto border-t border-border/50 pt-4 relative z-10">
                <p className="font-bold text-primary">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

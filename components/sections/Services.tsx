"use client";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/data";
import * as Icons from "lucide-react";

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <Container>
        <SectionHeading 
          title="Our Services" 
          subtitle="Comprehensive logistics solutions tailored for your domestic and international needs."
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = Icons[service.icon as keyof typeof Icons] as React.ElementType;
            return (
              <Card 
                key={service.id} 
                className="group p-6 hover:shadow-md hover:border-accent/30 transition-all duration-300 flex flex-col h-full bg-white relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    {Icon && <Icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />}
                  </div>
                  {service.tag && (
                    <Badge variant={service.tag === 'Express' || service.tag === 'Fastest' ? 'accent' : 'default'}>
                      {service.tag}
                    </Badge>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground flex-1 mb-6">{service.description}</p>
                
                <a 
                  href={service.link} 
                  className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors group/link"
                >
                  Learn More
                  <Icons.ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                </a>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

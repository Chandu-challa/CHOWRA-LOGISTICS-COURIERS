"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { services, ServiceData } from "@/lib/data";
import * as Icons from "lucide-react";

export function Services() {
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);

  const handleLearnMore = (service: ServiceData) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

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
            
            // Dynamic styling based on service type
            let cardStyle = "hover:border-border";
            if (service.tag === "Fastest") cardStyle = "border-accent/20 hover:border-accent";
            if (service.tag === "Enterprise") cardStyle = "border-primary/20 hover:border-primary";
            
            return (
              <Card 
                key={service.id} 
                className={`group p-6 hover:shadow-md transition-all duration-300 flex flex-col h-full bg-white relative overflow-hidden ${cardStyle}`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    {Icon && <Icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />}
                  </div>
                  {service.tag && (
                    <Badge variant={service.tag === 'Fastest' ? 'accent' : service.tag === 'Enterprise' ? 'default' : 'default'}>
                      {service.tag}
                    </Badge>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground flex-1 mb-6 text-sm leading-relaxed">{service.description}</p>
                
                <button 
                  onClick={() => handleLearnMore(service)}
                  className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors group/link mt-auto w-fit focus:outline-none focus:ring-2 focus:ring-accent rounded-sm"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <Icons.ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                </button>
              </Card>
            );
          })}
        </div>
      </Container>

      <Modal 
        isOpen={!!selectedService} 
        onClose={closeModal} 
        title={selectedService?.title || "Service Details"}
      >
        {selectedService && (
          <div className="space-y-6">
            <p className="text-muted-foreground">
              {selectedService.description}
            </p>
            
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                <Icons.Clock className="w-4 h-4" />
                Typical Delivery Time
              </h4>
              <p className="text-sm">{selectedService.deliveryTime}</p>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-3">Service Features</h4>
              <ul className="space-y-2">
                {selectedService.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Icons.CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-border flex justify-end gap-3">
              <Button variant="ghost" onClick={closeModal}>Close</Button>
              <a href="#quote" onClick={closeModal} tabIndex={-1}>
                <Button>Get a Quote</Button>
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}

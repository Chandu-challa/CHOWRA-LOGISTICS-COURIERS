"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, CheckCircle2, Clock } from "lucide-react";
import { trackingDemoData } from "@/lib/data";

export function ShipmentTracker() {
  const [trackingId, setTrackingId] = useState("");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);

    if (!trackingId.trim()) {
      setError("Please enter a valid tracking number.");
      return;
    }

    setIsLoading(true);
    
    // Simulate network delay
    setTimeout(() => {
      setIsLoading(false);
      const data = (trackingDemoData as any)[trackingId.trim().toUpperCase()];
      if (data) {
        setResult(data);
      } else {
        setError("No shipment found with this tracking number. (Try: CHW123456789)");
      }
    }, 800);
  };

  return (
    <section id="track" className="py-20 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <SectionHeading 
            title="Track Your Shipment" 
            subtitle="Enter your tracking number to get real-time updates on your delivery."
            alignment="center"
          />

          <Card className="p-6 md:p-8 shadow-md">
            <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4 mb-2">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-5 h-5 text-muted-foreground" />
                </div>
                <Input
                  type="text"
                  placeholder="Enter tracking number (e.g. CHW123456789)"
                  className="pl-10 h-12 text-lg"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                />
              </div>
              <Button type="submit" size="lg" disabled={isLoading} className="sm:w-40">
                {isLoading ? "Tracking..." : "Track Shipment"}
              </Button>
            </form>

            {error && (
              <p className="text-error text-sm mt-2">{error}</p>
            )}

            {result && (
              <div className="mt-8 border-t border-border pt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                      Tracking ID: {trackingId.toUpperCase()}
                      <Badge variant="accent">{result.status}</Badge>
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Expected Delivery: <span className="font-semibold text-foreground">{result.expectedDelivery}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex flex-col">
                      <span className="text-muted-foreground">Origin</span>
                      <span className="font-semibold">{result.origin}</span>
                    </div>
                    <div className="w-12 border-t-2 border-dashed border-border"></div>
                    <div className="flex flex-col text-right">
                      <span className="text-muted-foreground">Destination</span>
                      <span className="font-semibold">{result.destination}</span>
                    </div>
                  </div>
                </div>

                <div className="relative pl-6 border-l-2 border-border/50 ml-4 space-y-8">
                  {result.timeline.map((event: any, idx: number) => (
                    <div key={idx} className="relative">
                      <div className={`absolute -left-[35px] bg-white rounded-full p-1 ${event.completed ? "text-success" : "text-border"}`}>
                        {event.completed ? <CheckCircle2 className="w-6 h-6" /> : <Clock className="w-6 h-6" />}
                      </div>
                      <div className={event.completed ? "opacity-100" : "opacity-50"}>
                        <h4 className="text-base font-semibold text-primary">{event.status}</h4>
                        {event.time && (
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-muted-foreground mt-1">
                            <span>{event.time}</span>
                            {event.location && (
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3.5 h-3.5" />
                                {event.location}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Card>
        </div>
      </Container>
    </section>
  );
}

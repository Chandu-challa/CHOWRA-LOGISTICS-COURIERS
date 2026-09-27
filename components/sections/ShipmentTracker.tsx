"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, CheckCircle2, Clock, Package, RotateCcw } from "lucide-react";
import { trackingDemoData, TrackingResult } from "@/lib/data";

export function ShipmentTracker() {
  const [trackingId, setTrackingId] = useState("");
  const [result, setResult] = useState<TrackingResult | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const DEMO_ID = "CHW123456789";

  const handleTrack = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError("");
    setResult(null);

    const idToTrack = trackingId.trim().toUpperCase();

    if (!idToTrack) {
      setError("Please enter a valid tracking number.");
      return;
    }

    setIsLoading(true);
    
    // Simulate network delay
    setTimeout(() => {
      setIsLoading(false);
      const data = trackingDemoData[idToTrack];
      if (data) {
        setResult(data);
      } else {
        setError(`No shipment found. `);
      }
    }, 600);
  };

  const handleDemoFill = () => {
    setTrackingId(DEMO_ID);
    setError("");
  };

  const resetTracker = () => {
    setResult(null);
    setTrackingId("");
    setError("");
  };

  const completedCount = result ? result.timeline.filter(e => e.completed).length : 0;
  const progressPercentage = result ? Math.round((completedCount / result.timeline.length) * 100) : 0;

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
            {!result ? (
              <>
                <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4 mb-2">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Search className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <Input
                      type="text"
                      placeholder="Enter tracking number"
                      className="pl-10 h-12 text-lg uppercase"
                      value={trackingId}
                      onChange={(e) => setTrackingId(e.target.value)}
                    />
                  </div>
                  <Button type="submit" size="lg" disabled={isLoading} className="sm:w-40">
                    {isLoading ? "Tracking..." : "Track Shipment"}
                  </Button>
                </form>

                {error ? (
                  <p className="text-error text-sm mt-2 flex items-center gap-1">
                    {error}
                    <button type="button" onClick={handleDemoFill} className="underline hover:text-error/80 font-semibold focus:outline-none focus:ring-1 focus:ring-error rounded px-1">
                      Try demo tracking ID: {DEMO_ID}
                    </button>
                  </p>
                ) : (
                  <p className="text-sm text-muted-foreground mt-2">
                    <button type="button" onClick={handleDemoFill} className="hover:text-primary transition-colors focus:outline-none focus:underline rounded">
                      Demo tracking ID: <span className="font-mono bg-muted px-1.5 py-0.5 rounded text-xs">{DEMO_ID}</span>
                    </button>
                  </p>
                )}
              </>
            ) : (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-6 border-b border-border">
                  <div>
                    <h3 className="text-2xl font-bold text-primary flex items-center gap-3 font-mono">
                      {trackingId.toUpperCase()}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="accent">{result.status}</Badge>
                      <span className="text-sm text-muted-foreground">Updated {result.timeline.filter(t => t.completed).pop()?.time || "Recently"}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" onClick={resetTracker} className="mt-4 md:mt-0">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Track Another
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-muted/50 p-4 rounded-lg">
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Origin</span>
                    <span className="font-semibold text-sm">{result.origin}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Destination</span>
                    <span className="font-semibold text-sm">{result.destination}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Package Info</span>
                    <span className="font-semibold text-sm flex items-center gap-1">
                      <Package className="w-3.5 h-3.5" /> Parcel • 2.5 kg
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider mb-1">ETA</span>
                    <span className="font-semibold text-sm text-accent">{result.expectedDelivery}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex justify-between text-xs font-semibold mb-2">
                    <span className="text-primary">Shipment Progress</span>
                    <span className="text-accent">{progressPercentage}%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-accent transition-all duration-1000 ease-out"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                </div>

                <div className="relative pl-6 border-l-2 border-border/50 ml-4 space-y-8">
                  {result.timeline.map((event, idx) => (
                    <div key={idx} className="relative">
                      <div className={`absolute -left-[35px] bg-white rounded-full p-1 ${event.completed ? "text-success" : "text-border"}`}>
                        {event.completed ? <CheckCircle2 className="w-6 h-6" /> : <Clock className="w-6 h-6" />}
                      </div>
                      <div className={event.completed ? "opacity-100" : "opacity-40"}>
                        <h4 className={`text-base font-semibold ${event.completed ? "text-primary" : "text-muted-foreground"}`}>
                          {event.status}
                        </h4>
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
                
                <div className="mt-8 pt-4 text-center">
                   <p className="text-xs text-muted-foreground italic">Sample tracking timeline used for demonstration purposes.</p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </Container>
    </section>
  );
}

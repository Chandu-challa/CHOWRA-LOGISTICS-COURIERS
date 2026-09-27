"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { calculateQuote, QuoteResult } from "@/lib/calculator";
import { packageTypes, serviceTypes, cities } from "@/lib/data";

export function QuoteCalculator() {
  const [formData, setFormData] = useState({
    pickup: "",
    destination: "",
    packageType: "Parcel",
    weight: "2",
    service: "Standard"
  });

  const [result, setResult] = useState<QuoteResult | null>(null);
  
  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const weightNum = parseFloat(formData.weight);
    
    if (isNaN(weightNum)) {
      setResult({ price: 0, deliveryDays: "", error: "Please enter a valid weight." });
      return;
    }
    
    const res = calculateQuote({
      ...formData,
      weight: weightNum
    });
    
    setResult(res);
  };

  return (
    <section id="quote" className="py-20 bg-muted/50">
      <Container>
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            title="Get a Quick Quote" 
            subtitle="Estimate your shipping costs instantly. (Demo Calculator)"
            alignment="center"
          />

          <Card className="p-6 md:p-8 shadow-lg bg-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-0"></div>
            
            <form onSubmit={handleCalculate} className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary">From (Pickup)</label>
                <select 
                  required
                  className="flex h-11 w-full rounded-md border border-border bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  value={formData.pickup}
                  onChange={(e) => setFormData({...formData, pickup: e.target.value})}
                >
                  <option value="" disabled>Select Origin City</option>
                  {cities.map(city => <option key={`from-${city}`} value={city}>{city}</option>)}
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary">To (Destination)</label>
                <select 
                  required
                  className="flex h-11 w-full rounded-md border border-border bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  value={formData.destination}
                  onChange={(e) => setFormData({...formData, destination: e.target.value})}
                >
                  <option value="" disabled>Select Destination City</option>
                  {cities.map(city => <option key={`to-${city}`} value={city}>{city}</option>)}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary">Package Type</label>
                <select 
                  className="flex h-11 w-full rounded-md border border-border bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  value={formData.packageType}
                  onChange={(e) => setFormData({...formData, packageType: e.target.value})}
                >
                  {packageTypes.map(pt => <option key={pt} value={pt}>{pt}</option>)}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary">Weight (kg)</label>
                <Input 
                  type="number" 
                  min="0.1" 
                  step="0.1" 
                  required
                  placeholder="e.g. 2.5"
                  value={formData.weight}
                  onChange={(e) => setFormData({...formData, weight: e.target.value})}
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold text-primary">Service Level</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {serviceTypes.map(st => (
                    <label 
                      key={st} 
                      className={`flex items-center justify-center p-3 border rounded-md cursor-pointer transition-colors ${formData.service === st ? 'border-accent bg-accent/5 text-accent font-semibold' : 'border-border bg-white hover:bg-muted text-muted-foreground'}`}
                    >
                      <input 
                        type="radio" 
                        name="service" 
                        value={st} 
                        className="sr-only"
                        checked={formData.service === st}
                        onChange={() => setFormData({...formData, service: st})}
                      />
                      {st}
                    </label>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2 pt-4 flex items-center justify-between border-t border-border flex-col sm:flex-row gap-6">
                <Button type="submit" size="lg" className="w-full sm:w-auto">Calculate Quote</Button>
                
                {result && (
                  <div className="flex-1 text-center sm:text-right w-full sm:w-auto p-4 sm:p-0 bg-muted sm:bg-transparent rounded-lg">
                    {result.error ? (
                      <p className="text-error font-medium">{result.error}</p>
                    ) : (
                      <div className="flex flex-col sm:flex-row items-center sm:justify-end gap-2 sm:gap-6">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Estimated Cost</p>
                          <p className="text-2xl font-bold text-primary">₹{result.price.toLocaleString()}</p>
                        </div>
                        <div className="hidden sm:block w-px h-10 bg-border"></div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Estimated Delivery</p>
                          <p className="text-lg font-semibold text-primary">{result.deliveryDays}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  );
}

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
  const [validationError, setValidationError] = useState("");
  
  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError("");
    
    if (formData.pickup === formData.destination) {
      setValidationError("Pickup and destination cannot be the same city.");
      return;
    }

    const weightNum = parseFloat(formData.weight);
    
    if (isNaN(weightNum) || weightNum <= 0) {
      setValidationError("Please enter a valid weight greater than 0.");
      return;
    }
    
    if (weightNum > 1000) {
      setValidationError("For shipments over 1000kg, please contact corporate sales.");
      return;
    }
    
    const res = calculateQuote({
      ...formData,
      weight: weightNum
    });
    
    setResult(res);
  };

  const resetForm = () => {
    setResult(null);
    setValidationError("");
    setFormData({
      pickup: "",
      destination: "",
      packageType: "Parcel",
      weight: "2",
      service: "Standard"
    });
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
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-0 pointer-events-none"></div>
            
            {!result ? (
              <form onSubmit={handleCalculate} className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in zoom-in-95 duration-300">
                <div className="space-y-2">
                  <label htmlFor="pickup-city" className="text-sm font-semibold text-primary">From (Pickup) <span className="text-error">*</span></label>
                  <select 
                    id="pickup-city"
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
                  <label htmlFor="dest-city" className="text-sm font-semibold text-primary">To (Destination) <span className="text-error">*</span></label>
                  <select 
                    id="dest-city"
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
                  <label htmlFor="pkg-type" className="text-sm font-semibold text-primary">Package Type <span className="text-error">*</span></label>
                  <select 
                    id="pkg-type"
                    required
                    className="flex h-11 w-full rounded-md border border-border bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    value={formData.packageType}
                    onChange={(e) => setFormData({...formData, packageType: e.target.value})}
                  >
                    {packageTypes.map(pt => <option key={pt} value={pt}>{pt}</option>)}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="pkg-weight" className="text-sm font-semibold text-primary">Weight (kg) <span className="text-error">*</span></label>
                  <Input 
                    id="pkg-weight"
                    type="number" 
                    min="0.1"
                    max="1000"
                    step="0.1" 
                    required
                    placeholder="e.g. 2.5"
                    value={formData.weight}
                    onChange={(e) => setFormData({...formData, weight: e.target.value})}
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-primary">Service Level <span className="text-error">*</span></label>
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

                {validationError && (
                  <div className="md:col-span-2 text-error text-sm font-medium">
                    {validationError}
                  </div>
                )}

                <div className="md:col-span-2 pt-4 flex flex-col sm:flex-row items-center justify-end gap-4 border-t border-border mt-2">
                  <Button type="button" variant="ghost" onClick={resetForm} className="w-full sm:w-auto">Clear</Button>
                  <Button type="submit" size="lg" className="w-full sm:w-auto min-w-[200px]">Calculate Quote</Button>
                </div>
              </form>
            ) : (
              <div className="relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-300">
                {result.error ? (
                  <div className="text-center py-8">
                    <p className="text-error font-medium mb-6">{result.error}</p>
                    <Button onClick={() => setResult(null)}>Go Back</Button>
                  </div>
                ) : (
                  <div className="bg-primary text-white rounded-xl overflow-hidden shadow-2xl border border-primary-light">
                    <div className="p-4 bg-primary-light border-b border-white/10 text-center font-bold tracking-widest text-sm text-primary-foreground/80">
                      QUOTE SUMMARY
                    </div>
                    
                    <div className="p-8">
                      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
                        <div className="flex-1 text-center sm:text-left">
                          <p className="text-primary-foreground/60 text-xs uppercase mb-1">Origin</p>
                          <p className="text-xl font-bold">{formData.pickup}</p>
                        </div>
                        <div className="hidden sm:block w-12 border-t-2 border-dashed border-white/20"></div>
                        <div className="flex-1 text-center sm:text-right">
                          <p className="text-primary-foreground/60 text-xs uppercase mb-1">Destination</p>
                          <p className="text-xl font-bold">{formData.destination}</p>
                        </div>
                      </div>
                      
                      <div className="bg-white/5 rounded-lg p-4 mb-8 flex flex-wrap justify-between gap-4 text-sm">
                        <div>
                          <p className="text-primary-foreground/60 text-xs">Type</p>
                          <p className="font-semibold">{formData.packageType}</p>
                        </div>
                        <div>
                          <p className="text-primary-foreground/60 text-xs">Weight</p>
                          <p className="font-semibold">{formData.weight} kg</p>
                        </div>
                        <div>
                          <p className="text-primary-foreground/60 text-xs">Service</p>
                          <p className="font-semibold text-accent">{formData.service}</p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-end justify-between border-t border-white/10 pt-6 gap-6">
                        <div>
                          <p className="text-primary-foreground/60 text-sm mb-1">Estimated Delivery</p>
                          <p className="text-lg font-semibold">{result.deliveryDays}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-primary-foreground/60 text-sm mb-1">Estimated Cost</p>
                          <p className="text-4xl font-extrabold text-accent">₹{result.price.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-primary-light p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <span className="text-xs text-primary-foreground/50 italic">*Demo estimate</span>
                      <Button variant="secondary" onClick={resetForm} className="w-full sm:w-auto">Calculate Another Quote</Button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </Card>
        </div>
      </Container>
    </section>
  );
}

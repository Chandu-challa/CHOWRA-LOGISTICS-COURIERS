export type QuoteInput = {
  pickup: string;
  destination: string;
  packageType: string;
  weight: number;
  service: string;
};

export type QuoteResult = {
  price: number;
  deliveryDays: string;
  error?: string;
};

export function calculateQuote(input: QuoteInput): QuoteResult {
  if (!input.pickup || !input.destination || !input.packageType || !input.service) {
    return { price: 0, deliveryDays: "", error: "Please fill all required fields." };
  }

  if (input.weight <= 0) {
    return { price: 0, deliveryDays: "", error: "Weight must be greater than zero." };
  }
  
  if (input.weight > 1000) {
     return { price: 0, deliveryDays: "", error: "For shipments over 1000kg, please contact corporate sales." };
  }

  let basePrice = 100;
  
  // Package type multiplier
  const packageMultipliers: Record<string, number> = {
    "Document": 1,
    "Parcel": 1.5,
    "Fragile": 2.5,
    "Commercial": 2.0
  };
  
  // Service multiplier
  const serviceMultipliers: Record<string, number> = {
    "Standard": 1,
    "Express": 2,
    "International": 5
  };
  
  // Weight factor (tier based)
  let weightCost = 0;
  if (input.weight <= 1) weightCost = 50;
  else if (input.weight <= 5) weightCost = 150;
  else if (input.weight <= 20) weightCost = 400;
  else weightCost = 400 + ((input.weight - 20) * 15);

  const pMult = packageMultipliers[input.packageType] || 1;
  const sMult = serviceMultipliers[input.service] || 1;
  
  const totalPrice = Math.round((basePrice + weightCost) * pMult * sMult);
  
  let deliveryDays = "3-5 Business Days";
  if (input.service === "Express") deliveryDays = "1-2 Business Days";
  if (input.service === "International") deliveryDays = "7-14 Business Days";
  
  // Random small variability based on city string lengths (deterministic demo)
  const cityFactor = (input.pickup.length + input.destination.length) * 5;
  
  return {
    price: totalPrice + cityFactor,
    deliveryDays
  };
}

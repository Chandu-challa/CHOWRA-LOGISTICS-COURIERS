export interface TrackingEvent {
  status: string;
  completed: boolean;
  time?: string;
  location?: string;
}

export interface TrackingResult {
  status: string;
  origin: string;
  destination: string;
  expectedDelivery: string;
  timeline: TrackingEvent[];
}

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: string;
  tag?: string;
  details: string[];
  deliveryTime: string;
}

export const services: ServiceData[] = [
  {
    id: "domestic",
    title: "Domestic Courier",
    description: "Reliable delivery across all major cities and remote locations within India.",
    icon: "Truck",
    details: [
      "Document delivery",
      "Parcel delivery",
      "Door-to-door service",
      "Shipment tracking included"
    ],
    deliveryTime: "1–5 business days"
  },
  {
    id: "international",
    title: "International Courier",
    description: "Seamless international shipping and global delivery support across 200+ countries.",
    icon: "Globe",
    details: [
      "Customs clearance support",
      "Air and ocean freight options",
      "Global tracking",
      "Secure handling"
    ],
    deliveryTime: "3–14 business days"
  },
  {
    id: "express",
    title: "Express Delivery",
    description: "Time-sensitive and priority shipments delivered on the next business day.",
    icon: "Zap",
    tag: "Fastest",
    details: [
      "Priority processing",
      "Next-day delivery guarantee",
      "Dedicated delivery personnel",
      "Real-time SMS updates"
    ],
    deliveryTime: "Next business day"
  },
  {
    id: "ecommerce",
    title: "E-commerce Logistics",
    description: "End-to-end fulfillment, automated pickup, last-mile delivery, and returns management.",
    icon: "ShoppingCart",
    details: [
      "API integration for Shopify/WooCommerce",
      "Reverse logistics (returns)",
      "Cash on Delivery (COD) handling",
      "Automated label generation"
    ],
    deliveryTime: "1–3 business days"
  },
  {
    id: "freight",
    title: "Freight & Cargo",
    description: "Heavy and large commercial cargo movement via air, sea, and road freight.",
    icon: "Ship",
    details: [
      "LTL and FTL options",
      "Oversized cargo handling",
      "Warehouse storage",
      "Dedicated fleet"
    ],
    deliveryTime: "Varies by route"
  },
  {
    id: "door-to-door",
    title: "Pickup & Door-to-Door",
    description: "Convenient scheduled pickups directly from your location to the destination doorstep.",
    icon: "MapPin",
    details: [
      "Scheduled pickup slots",
      "No drop-off required",
      "Packaging assistance available",
      "Direct to receiver"
    ],
    deliveryTime: "2–4 business days"
  },
  {
    id: "corporate",
    title: "Corporate Logistics",
    description: "Custom business shipping, dedicated account support, and enterprise API integrations.",
    icon: "Briefcase",
    tag: "Enterprise",
    details: [
      "Dedicated account manager",
      "Volume discounts",
      "Custom reporting dashboards",
      "Recurring pickup schedules"
    ],
    deliveryTime: "Custom SLA"
  }
];

export const cities = [
  "Chennai", "Hyderabad", "Bengaluru", "Mumbai", "Delhi", "Pune", "Kolkata", "Ahmedabad", "Jaipur", "Surat"
];

export const packageTypes = [
  "Document", "Parcel", "Fragile", "Commercial"
];

export const serviceTypes = [
  "Standard", "Express", "International"
];

export const testimonials = [
  {
    id: 1,
    quote: "Chowra has transformed our supply chain. Their on-time delivery rate is unmatched.",
    author: "Sample Customer",
    role: "E-commerce Operations"
  },
  {
    id: 2,
    quote: "The API integration for tracking was seamless, and their customer support is highly responsive.",
    author: "Sample Customer",
    role: "Enterprise Logistics"
  },
  {
    id: 3,
    quote: "We rely on Chowra for all our fragile international shipments. Completely trustworthy.",
    author: "Sample Customer",
    role: "Retail Business"
  }
];

export const trackingDemoData: Record<string, TrackingResult> = {
  "CHW123456789": {
    status: "In Transit",
    origin: "Chennai",
    destination: "Hyderabad",
    expectedDelivery: "Tomorrow",
    timeline: [
      { status: "Shipment Picked Up", completed: true, time: "Yesterday, 09:00 AM", location: "Chennai Hub" },
      { status: "Arrived at Origin Facility", completed: true, time: "Yesterday, 06:30 PM", location: "Chennai Sort Center" },
      { status: "In Transit", completed: true, time: "Today, 02:15 AM", location: "On Route to Hyderabad" },
      { status: "Out for Delivery", completed: false, time: "", location: "" },
      { status: "Delivered", completed: false, time: "", location: "" }
    ]
  }
};

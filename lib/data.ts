export const services = [
  {
    id: "domestic",
    title: "Domestic Courier",
    description: "Reliable delivery across all major cities and remote locations within India.",
    icon: "Truck",
    tag: "Popular",
    link: "#services"
  },
  {
    id: "international",
    title: "International Courier",
    description: "Seamless international shipping and global delivery support across 200+ countries.",
    icon: "Globe",
    link: "#services"
  },
  {
    id: "express",
    title: "Express Delivery",
    description: "Time-sensitive and priority shipments delivered on the next business day.",
    icon: "Zap",
    tag: "Fastest",
    link: "#services"
  },
  {
    id: "ecommerce",
    title: "E-commerce Logistics",
    description: "End-to-end fulfillment, automated pickup, last-mile delivery, and returns management.",
    icon: "ShoppingCart",
    link: "#services"
  },
  {
    id: "freight",
    title: "Freight & Cargo",
    description: "Heavy and large commercial cargo movement via air, sea, and road freight.",
    icon: "Ship",
    link: "#services"
  },
  {
    id: "door-to-door",
    title: "Pickup & Door-to-Door",
    description: "Convenient scheduled pickups directly from your location to the destination doorstep.",
    icon: "MapPin",
    link: "#services"
  },
  {
    id: "corporate",
    title: "Corporate Logistics Solutions",
    description: "Custom business shipping, dedicated account support, and enterprise API integrations.",
    icon: "Briefcase",
    tag: "Enterprise",
    link: "#solutions"
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
    author: "Ravi K.",
    role: "Operations Manager, RetailX"
  },
  {
    id: 2,
    quote: "The API integration for tracking was seamless, and their customer support is highly responsive.",
    author: "Sneha M.",
    role: "CTO, E-com Ventures"
  },
  {
    id: 3,
    quote: "We rely on Chowra for all our fragile international shipments. Completely trustworthy.",
    author: "Amit P.",
    role: "Director, Global Exports"
  }
];

export const trackingDemoData = {
  "CHW123456789": {
    status: "In Transit",
    origin: "Chennai",
    destination: "Hyderabad",
    expectedDelivery: "30 Sep 2026",
    timeline: [
      { status: "Shipment Picked Up", completed: true, time: "28 Sep, 09:00 AM", location: "Chennai Hub" },
      { status: "Arrived at Origin Facility", completed: true, time: "28 Sep, 06:30 PM", location: "Chennai Sort Center" },
      { status: "In Transit", completed: true, time: "29 Sep, 02:15 AM", location: "On Route to Hyderabad" },
      { status: "Out for Delivery", completed: false, time: "", location: "" },
      { status: "Delivered", completed: false, time: "", location: "" }
    ]
  }
};

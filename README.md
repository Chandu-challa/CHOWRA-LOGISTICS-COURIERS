# Chowra Logistics & Couriers

## Live Demo
*(Your Netlify or Vercel deployment URL goes here)*

## Overview
A professional, highly responsive, and production-ready homepage built for Chowra Logistics and Couriers Limited. This project serves as a technical-round recruitment assignment demonstrating strong frontend engineering, exceptional UI/UX, and scalable component architecture.

## Features
- Responsive logistics homepage with smooth scrolling
- Shipment tracking demo (Interactive timeline with progress)
- Quote calculator (Validating deterministic multi-field form)
- Service showcase with detailed informational modals
- India-focused SVG Network coverage
- Corporate logistics solutions breakdown
- Accessible responsive navigation (Keyboard nav, Aria tags)
- Dummy Legal Pages (Privacy & Terms)

## Tech Stack
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Project Structure
- `app/` - Next.js routing, Layouts, and standard views
- `components/ui/` - Granular, reusable UI components (Button, Input, Modal, etc.)
- `components/sections/` - Larger page blocks (Hero, Services, QuoteCalculator)
- `lib/` - Mock data, TypeScript types, and calculator logic

## Getting Started
Navigate to the directory and install dependencies:
```bash
npm install
```
Start the development server:
```bash
npm run dev
```

## Production Build
To create and start an optimized production build:
```bash
npm run build
npm start
```

## Demo Features
**Tracking:**
Use tracking ID `CHW123456789` to view a dynamic timeline response. Validation is in place for empty/invalid entries.

**Quoting:**
The calculator generates realistic deterministic pricing based on origin, destination string length, package weight tier, and service multipliers.

## Responsive Support
The layout is thoroughly tested across:
- Mobile: 320x568 up to 430x932
- Tablet: 768x1024, 820x1180, 1024x1366
- Desktop: 1280x720 up to 1920x1080

## Notes
- This project was created as a **technical-round assignment**.
- Demo statistics, testimonials, tracking updates, and contact information are strictly illustrative.
- Legal pages (Privacy/Terms) are placeholders and do not represent genuine corporate policy.
- Uses strict accessibility standards including `prefers-reduced-motion` fallbacks.

import * as React from "react";
import { Container } from "@/components/ui/container";
import { Package2, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8" id="contact">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Package2 className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold tracking-tight">CHOWRA</span>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Moving your world, one delivery at a time. Professional logistics and courier services.
            </p>
            <div className="inline-block px-2 py-1 bg-white/10 text-[10px] uppercase font-bold tracking-widest rounded border border-white/20 mt-4 text-white/50">
              Technical Assignment Demo
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#about" className="hover:text-accent transition-colors focus-visible:text-accent outline-none">About Us</a></li>
              <li><a href="#how-it-works" className="hover:text-accent transition-colors focus-visible:text-accent outline-none">How It Works</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors focus-visible:text-accent outline-none">Services</a></li>
              <li><a href="#network" className="hover:text-accent transition-colors focus-visible:text-accent outline-none">Our Network</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors focus-visible:text-accent outline-none">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#services" className="hover:text-accent transition-colors focus-visible:text-accent outline-none">Domestic Courier</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors focus-visible:text-accent outline-none">International Courier</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors focus-visible:text-accent outline-none">Express Delivery</a></li>
              <li><a href="#solutions" className="hover:text-accent transition-colors focus-visible:text-accent outline-none">Corporate Solutions</a></li>
            </ul>
          </div>

          {/* Contact (Demo Data) */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold flex items-center gap-2">Contact <span className="text-[10px] font-normal uppercase bg-white/10 px-1.5 py-0.5 rounded text-white/60">Demo</span></h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span>123 Logistics Park, Guindy,<br />Chennai, TN 600032</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a href="tel:+919876543210" className="group-hover:text-white transition-colors focus-visible:text-white outline-none">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:support@chowrademo.com" className="group-hover:text-white transition-colors focus-visible:text-white outline-none">support@chowrademo.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
          <p>© 2026 Chowra Logistics and Couriers Limited. Demo Project.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors focus-visible:text-white outline-none">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors focus-visible:text-white outline-none">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

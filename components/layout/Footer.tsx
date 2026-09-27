import * as React from "react";
import { Container } from "@/components/ui/container";
import { Package2, Mail, Phone, MapPin } from "lucide-react";

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
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#top" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#network" className="hover:text-accent transition-colors">Our Network</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#services" className="hover:text-accent transition-colors">Domestic Courier</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">International Courier</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Express Delivery</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Freight & Cargo</a></li>
            </ul>
          </div>

          {/* Contact (Demo Data) */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact (Demo)</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span>123 Logistics Park, Guindy,<br />Chennai, TN 600032</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>support@chowrademo.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
          <p>© 2026 Chowra Logistics and Couriers Limited. Demo Project.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

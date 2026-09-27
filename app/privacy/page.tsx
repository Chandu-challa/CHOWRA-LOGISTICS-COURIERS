import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="py-20 bg-white min-h-[60vh] flex flex-col justify-center">
      <Container>
        <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-accent mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        <div className="max-w-3xl">
          <SectionHeading 
            title="Privacy Policy" 
            subtitle="Last updated: September 2026"
          />
          
          <div className="bg-muted border-l-4 border-accent p-6 rounded-r-lg mb-8">
            <p className="font-medium text-foreground">
              <strong>Technical Assignment Disclaimer:</strong> This page is provided purely as part of a technical assignment demonstration for Chowra Logistics & Couriers Limited. It does not represent actual legal policies, and no real data collection is taking place.
            </p>
          </div>
          
          <div className="prose prose-slate">
            <h3>1. Information Collection</h3>
            <p>This is a demonstration project. No actual user data is collected, stored, or processed.</p>
            
            <h3>2. Use of Information</h3>
            <p>Any data entered into forms (such as the tracking simulator or quote calculator) is processed locally on your device for demonstration purposes only.</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

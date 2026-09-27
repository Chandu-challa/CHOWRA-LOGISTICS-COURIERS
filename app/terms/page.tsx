import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="py-20 bg-white min-h-[60vh] flex flex-col justify-center">
      <Container>
        <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-accent mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        <div className="max-w-3xl">
          <SectionHeading 
            title="Terms of Service" 
            subtitle="Last updated: September 2026"
          />
          
          <div className="bg-muted border-l-4 border-accent p-6 rounded-r-lg mb-8">
            <p className="font-medium text-foreground">
              <strong>Technical Assignment Disclaimer:</strong> This page is provided purely as part of a technical assignment demonstration for Chowra Logistics & Couriers Limited. It does not represent actual legal agreements or terms of use for any real entity.
            </p>
          </div>
          
          <div className="prose prose-slate">
            <h3>1. Acceptance of Terms</h3>
            <p>By accessing this demonstration website, you acknowledge that it is a technical evaluation project.</p>
            
            <h3>2. Service Limitations</h3>
            <p>The shipping estimates, tracking timelines, and network statistics presented are illustrative and generated dynamically for UX demonstration. They are not legally binding offers.</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

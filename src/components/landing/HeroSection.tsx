import { Button } from "@/components/ui/button";
import { Phone, Clock, LayoutDashboard } from "lucide-react";

const HeroSection = () => (
  <section className="hero-gradient section-padding min-h-[90vh] flex items-center">
    <div className="max-w-6xl mx-auto w-full text-center">
      <span className="inline-block px-4 py-1.5 rounded-full bg-teal/15 text-teal text-sm font-medium mb-6 tracking-wide">
        AI Front Desk for Clinics
      </span>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-hero-foreground leading-tight mb-6">
        Your phones ring.{" "}
        <span className="text-gradient">Your AI front desk answers.</span>
      </h1>
      <p className="text-lg md:text-xl text-hero-muted max-w-3xl mx-auto mb-10 leading-relaxed">
        We install an AI front desk for clinics that answers missed calls, books appointments, handles reschedules, and sends reminders.
      </p>

      <div className="flex items-center justify-center gap-3 text-sm text-hero-muted mb-10">
        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-teal" /> 24/7 call handling</span>
        <span className="hidden sm:inline text-hero-muted/40">•</span>
        <span className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-teal" /> Patient self-service portal</span>
        <span className="hidden sm:inline text-hero-muted/40">•</span>
        <span className="flex items-center gap-1.5"><LayoutDashboard className="w-4 h-4 text-teal" /> Live clinic dashboard</span>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
        <a href="https://calendar.app.google/bUrF5vgq4YGQyD1A7" target="_blank" rel="noopener noreferrer">
          <Button variant="hero" size="lg" className="text-base px-8 py-6">
            Book a Demo
          </Button>
        </a>
        <a href="https://frontdesk.creativehauz.space/dashboard" target="_blank" rel="noopener noreferrer">
          <Button variant="hero-outline" size="lg" className="text-base px-8 py-6">
            See Demo Clinic
          </Button>
        </a>
      </div>
      <p className="text-sm text-hero-muted/60">
        Fast setup. No extra front-desk headcount. Built for modern clinics.
      </p>
    </div>
  </section>
);

export default HeroSection;
